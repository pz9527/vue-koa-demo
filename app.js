import Koa from 'koa';
import json from 'koa-json';
import logger from 'koa-logger';
import auth from './server/routes/auth.js';
import api from './server/routes/api.js';
import jwt from 'koa-jwt';
import path from 'path';
import serve from 'koa-static';
import historyApiFallback from 'koa2-history-api-fallback';
import koa_router from "koa-router";
import koa_bodyparser from "koa-bodyparser";

const app = new Koa();
const router = koa_router();

app.use(koa_bodyparser());
app.use(json());
app.use(logger());

app.use(async function(ctx, next){
  let start = new Date;
  await next();
  let ms = new Date - start;
  console.log('%s %s - %s', ctx.method, ctx.url, ms);
});

app.use(async function(ctx, next){  //  如果JWT验证失败，返回验证失败信息
  try {
    await next();
  } catch (err) {
    if (401 === err.status) {
      ctx.status = 401;
      ctx.body = {
        success: false,
        token: null,
        info: 'Protected resource, use Authorization header to get access'
      };
    } else {
      throw err;
    }
  }
});

app.on('error', function(err, ctx){
  console.log('server error', err);
});


router.use('/auth', auth.routes()); // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。
router.use("/api",api.routes()) // 所有走/api/打头的请求都需要经过jwt验证。
// jwt({secret: 'vue-koa-demo'}),
app.use(router.routes()); // 将路由规则挂载到Koa上。
app.use(historyApiFallback());
app.use(serve(path.resolve('dist'))); // 将webpack打包好的项目目录作为Koa静态文件服务的目录

app.listen(8889,() => {
  console.log('Koa is listening in 8889');
});

export default app;

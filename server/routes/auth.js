import auth from '../controllers/user.js'
import jwt from 'koa-jwt'
import koa_router from 'koa-router'
const router = koa_router()

router.get('/user/:id',jwt({secret: 'vue-koa-demo'}), auth.getUserInfo) // 定义url的参数是id
router.post('/user', auth.postUserAuth)

export default router

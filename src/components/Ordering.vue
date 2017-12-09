<template>
  <div class="register">
    <el-form :rules="rules" ref="form" :model="form" label-width="80px" id="form">
      <el-form-item label="使用部门">
        <el-input v-model="form.department"></el-input>
      </el-form-item>
      <el-form-item label="使用人">
        <el-select
          v-model="form.name"
          multiple
          filterable
          placeholder="输入或下拉选择用餐人">
          <el-option
            v-for="item in form.names"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="就餐形式">
        <el-select v-model="form.diningform" placeholder="就餐形式">
          <el-option label="餐桌" value="餐桌"></el-option>
          <el-option label="托盘" value="托盘"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="就餐日期">
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="form.date"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="就餐人数">
        <el-input-number v-model="form.number"  :min="1" :max="10"></el-input-number>
      </el-form-item>

      <el-form-item label="留言">
        <el-input type="textarea"  v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(form)">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
      <el-form-item label="步骤">
        <el-steps :active="form.active" finish-status="success">
          <el-step title="申请"></el-step>
          <el-step title="审核"></el-step>
          <el-step title="通知"></el-step>
        </el-steps>
      </el-form-item>
    </el-form>


  </div>

</template>

<script type="text/ecmascript-6">
import jwt from 'jsonwebtoken'
  export default {

    data() {
      return {
        form: {
          department: '',
          name: '',
          diningform: '',
          date: '',
          number: 1,
          content: '',
          active:0,
          user_id:'',
          names:[{
            value: 'HTML',
            label: 'HTML'
          }, {
            value: 'CSS',
            label: 'CSS'
          }, {
            value: 'JavaScript',
            label: 'JavaScript'
          }],
        },
        //
        rules: {
          name: [
            {required: true, message: '请输入您的姓名', trigger: 'blur'},
            {min: 1, max: 10, message: '长度在 1 到 5 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    created(){
      let decode=this.getUserInfo()
        this.form.user_id=decode.id
    },
    methods:
      {
        getUserInfo(){
          const token = sessionStorage.getItem('demo-token');
          if(token != null && token != 'null'){
            let decode = jwt.verify(token,'vue-koa-demo');
            return decode
          }else {
            return null
          }
        },
        onSubmit(form) {

          this.$http.post('/api/todolist', this.form)
            .then((res) => {
              if (res.status == 200) {
                this.$message({
                  type: 'success',
                  message: '创建成功！'
                })
                Object.assign(this.$data, this.$options.data())
                this.form.reset()
              } else {
                this.$message.error('创建失败！')
              }
            }, (err) => {
              this.$message.error('创建失败！')
              console.log(err)
            })
        }

      }


  }
</script>
<style lang="scss">
  .register {
    width: 30%;
    min-width: 400px;
  }
</style>

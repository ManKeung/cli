<style lang="scss">
@import '../../scss/var.scss';

.login-container {
  background-color: $baseColor;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &-form {
    padding: 20px;
    background-color: white;
    border-radius: 4px;
  }

  &-code {
    display: flex;
    justify-content: space-between;

    > span {
      margin: 0 10px;
      flex: 1;
      width: 10px;
      height: 32px;

      > svg {
        width: 100%;
        // height: 100%;
      }
    }
  }

  &-last-item.el-form-item--small.el-form-item {
    margin-bottom: 0;
  }
}
</style>

<template>
  <div class="login-container">
    <el-form class="login-container-form" ref="form" :model="form" :rules="rules">
      <el-form-item prop="user">
        <el-input
          v-model="form.user"
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
          prefix-icon="el-icon-unlock"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item prop="code">
        <el-col :span="10">
          <el-input
            v-model="form.code"
            placeholder="验证码"
            prefix-icon="el-icon-key"
            autocomplete="off"
          />
        </el-col>
        <el-col class="login-container-code" :span="14">
          <span v-html="codeImg"></span>
          <el-button type="text" @click="getCode">换一组</el-button>
        </el-col>
      </el-form-item>
      <el-form-item class="login-container-last-item">
        <el-button :loading="loading" type="primary" style="width: 100%;" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getCode } from '../../api/login'
import config from '../../config'

const CODE = config.CODE

export default {
  name: 'login',
  data () {
    return {
      form: {
        user: '',
        password: '',
        code: ''
      },
      rules: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 4, max: 4, message: '验证码长度不对', trigger: 'blur' }
        ]
      },
      codeImg: '',
      loading: false
    }
  },
  created () {
    this.getCode()
  },
  methods: {
    async getCode () {
      let res = null
      try {
        res = await getCode()
        this.codeImg = res.data
      } catch (error) {
        console.log(error)
      }
    },
    submitForm (formName) {
      this.loading = true
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login()
        } else {
          this.loading = false
          return false
        }
      })
    },
    async login () {
      let data = null

      try {
        data = await this.$store.dispatch('Login', this.form)
        this.loading = false
        if (data.code === CODE.ok) {
          this.$router.push({ path: '/' }).catch(() => {}) // 捕获异常 https://github.com/vuejs/vue-router/issues/2932
        } else {
          this.$message.error(data.msg)
        }
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    }
  }
}
</script>

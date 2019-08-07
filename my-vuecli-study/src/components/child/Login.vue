<template>
  <div id="login">
    <div>
      <label>Name:</label>
      <input type="text" v-model="user.name"/>
    </div>
    <div>
      <label>Password:</label>
      <input type="text" v-model="user.password"/>
    </div>
    <div>
      <button v-on:click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {name: '', password: ''}
    }
  },
  methods: {
    login: function () {
      if (this.user.name.indexOf('xman') >= 0 && this.user.password === 'xman') {
        this.$store.commit('setLoginUser', this.user.name)
        this.$router.push('/home/my')
      }
    }
  }
}
</script>

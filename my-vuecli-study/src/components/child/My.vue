<template>
  <div id="my">
    <h1>{{loginUser}}, Welcome to your page!</h1>
    <h2>{{message}}</h2>
    <button v-on:click="testAjax">TestAJAX</button>
  </div>
</template>

<script>
export default {
  name: 'My',
  data () {
    return {
      message: ''
    }
  },
  computed: {
    loginUser () {
      return this.$store.state.loginUser
    }
  },
  methods: {
    testAjax: function () {
      this.$ajax({
        method: 'get',
        url: '/static/test.html'
      }).then(function (res) {
        console.log(res)
        this.message = res.data
      }.bind(this))
    }
  }
}
</script>

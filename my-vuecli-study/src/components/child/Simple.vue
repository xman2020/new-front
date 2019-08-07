<template>
  <div id="simple">
    <p v-bind:id="id">{{message}}</p>
    <p v-if="message.indexOf('xman') >= 0">xman is a good man</p>
    <p v-else>you are not xman</p>
    <p v-show="message.indexOf('xman') >= 0">xman is a good man</p>
    <input type="text" v-model="message"/>
  </div>
</template>

<script>
export default {
  name: 'Simple',
  data () {
    return {
      id: 'message',
      message: 'Hello World!'
    }
  }
}
</script>

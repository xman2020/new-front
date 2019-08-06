<template>
  <div id="message" v-if="messages.length > 0">
    <h2 class="messages">Messages</h2>
    <button class="clear" v-on:click="clear">clear</button>
    <div v-for="(message,index) in messages" v-bind:key="index">{{message}}</div>
  </div>
</template>

<script>
import MessageService from '../service/MessageService'

export default {
  name: 'Message',
  data () {
    return {
      messages: []
    }
  },
  mounted () {
    this.messages = MessageService.getMessages()
  },
  methods: {
    clear () {
      MessageService.clear()
    }
  }
}

// export default {
//   name: 'Message',
//   computed: {
//     messages () {
//       return this.$store.state.messages
//     }
//   },
//   methods: {
//     clear () {
//       this.$store.commit('clear')
//     }
//   }
// }
</script>

<style>
h2.messages {
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
button.clear {
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
  color: #888;
  margin-bottom: 12px;
}
</style>

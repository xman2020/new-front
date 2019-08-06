export default {
  messages: [],
  getMessages () {
    return this.messages
  },
  add (message) {
    this.messages.push(message)
  },
  clear () {
    this.messages.splice(0, this.messages.length)
  }
}

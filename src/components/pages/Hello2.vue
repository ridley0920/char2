<template>
	<div>
		<div>
		  <p> This is test #2 of the thing, inserting values into Database charSheet, Collection testing.</p>
		  <div>Name: <input v-model="newVal.name"></input></div>
		  <div>Age: <input v-model="newVal.age"></input></div>
		  <div v-for="x in xs">Posted! {{ x.name }}</div>
		  <button v-on:click="sendTest()">Send Value</button>
		</div>
	</div>
</template>
<script>
  export default {
    data () {
      return {
        xs: {},
        place: 0,
        newVal: {
          name: '',
          age: 0
        }
      }
    },
    methods: {
      sendTest (callback) {
        console.log(this.newVal)
        this.$http({
          url: '/send',
          body: this.newVal,
          method: 'POST'
        })
        .then(function (response) {
          console.log('data sent')
          // this.xs.push(response.data)
          this.$socket.emit('dataSent', response.data)
          // this.$socket.broadcast.emit('valueChanged', response.data)
          console.log('emit')
          console.log(this.$socket)
        }, function (response) {
          console.error('Error sending data')
        })
      }
    },
    sockets: {
      dataSent: function (val) {
        this.$socket.broadcast.emit('valueChanged', val)
        console.log('emit')
        // console.log(this.)
      }
    }
  }
</script>

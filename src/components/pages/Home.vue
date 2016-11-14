<template>
	<div>
		<p>test #1, retrieving values from database</p>
		<div v-for="person in x">{{ person.name }} is {{ person.age }} years old.</div>
		<button v-on:click="getTest()">Get Value</button>
		<div></div>
	</div>
</template>
<script>
/*
var socket = io.connect('http://localhost')
socket.on('valueChanged', function (data) {
  getTest()
})
*/
</script>
<script>
export default {
  data () {
    return {
      x: '',
      place: 0
    }
  },
  events: {
    change () {
      this.getTest()
    }
  },
  methods: {
    getTest (callback) {
      this.$http({ url: '/get', data: 'test', method: 'GET' })
      .then(function (response) {
        console.log('data got')
        console.log(response.data)
        this.x = response.data
        // this.$socket.emit('valueChanged', this.x)
      }, function (response) {
        console.error('Error retrieving data')
      })
    }
  },
  sockets: {
    valueChanged: function (val) {
      // this.$dispatch('valueChanged')
      console.log('test')
      this.getTest()
    }
  }
}
</script>
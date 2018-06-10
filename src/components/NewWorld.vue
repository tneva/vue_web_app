<template>
    <div>
      <p> {{newMsg}} </p>
      <button v-on:click="changeData">Change Message</button>
      <button v-on:click="changeView">Go to HellowWorld</button>
      <button v-on:click="retrieveStuff">Get Stuff</button>
      <input v-model="number" placeholder="Give me a number">
    </div>
</template>
<script>
 const axios = require('axios');
 export default {
     name: 'NewWorld',
     data() {
         return {
             newMsg: 'This is my new message',
             number: 0
         }
     },
     methods: {
         changeData() {
             this.newMsg = 'I have changed the message'
         },
         // uses router.index.js to push to the HellowWorld route
         changeView() {
             this.$router.push({name: 'HelloWorld'});
         },
         retrieveStuff() {
             let url = 'http://0.0.0.0:8080/api/stuff?number=' + this.number;
             axios.get(url).then((response) => {
                 console.log(response.data.message);
                 this.newMsg = response.data.message;
             }).catch((error) => {
                 console.log(error);
             });
         }
    }
 }
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
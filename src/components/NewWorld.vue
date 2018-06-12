<template>
    <div>
      <p> {{newMsg}} </p>
      <button v-on:click="changeData">Change Message</button>
      <button v-on:click="changeView">Go to HellowWorld</button>
      <button v-on:click="addName">Add Name</button>
      <input v-model="name" placeholder="What name would you like to add?">
    </div>
</template>
<script>
 const axios = require('axios');
 export default {
     name: 'NewWorld',
     data() {
         return {
             newMsg: 'This is my new message',
             name
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
         addName() {
             let url = 'http://0.0.0.0:8080/api/visitors';
             let body = {name: this.name}
             axios.post(url, body).then((response) => {
                 console.log(response.data);
                 this.newMsg = this.name + " has been added to the DB!"
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
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <div>
    <form @submit.prevent>
      <h4>Posts:</h4>
      <input v-bind:value="title" @input="title = $event.target.value" class="input" type="text" placeholder="Name">
      <input v-bind:value="body" @input="body = $event.target.value" class="input" type="text" placeholder="Discription">
      <button class="button" @click="createPost" >Add</button>
    </form>
  </div>
  <div class="post" v-for="post in posts">
    <div>Name: {{ post.title}}</div>
    <div>Discription: {{ post.body }}</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {id:1, title: 'post1', body: 'discriptions'},
      ],
      title: '',
      body: '',
    }
  },

  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    },
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #502c2c;
  padding: 20px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

.input {
  width: 100%;
  border: 2px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

form {
  display: flex;
  flex-direction: column;
}

.button {
  margin-top: 15px;
  align-self: flex-end;
  align-self: flex-end;
  padding: 10px 15px;
  background: teal;
  border: 2px solid teal;
  color: aliceblue;
}
</style>

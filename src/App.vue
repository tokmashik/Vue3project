<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <FirsctScreen />
  <div>
    
    <PostForm @create="createPost"/>
    <PostList v-bind:posts="posts"
    @remove="removePost"/> 
  </div>
  <my-button>
    k
  </my-button>
</template>

<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
import FirsctScreen from "@/components/FirsctScreen.vue"
export default {
  components: {
    PostForm,
    PostList,
    FirsctScreen
  },

  data() {
    return {
      posts: [
        {id:1, title: 'post1', body: 'discriptions'}, 
      ],
    }
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #141414;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #502c2c;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #8FFF05;
}

form {
  display: flex;
  flex-direction: column;
}

</style>

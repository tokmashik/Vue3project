<template>
    <div>
    <form @submit.prevent>
      <h4>Posts:</h4>
      <input 
      v-model="post.title"
      class="input" 
      type="text" 
      placeholder="Name"
      >
      <input
      v-model="post.body"
      class="input" type="text" 
      placeholder="Discription"
      >
      <button class="button" style=" margin-top: 15px; align-self: flex-end;"
      @click="createPost"
      >Add</button>
    </form>
  </div>
</template>

<script>

export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
        this.post.id = Date.now();
        this.$emit('create', this.post)
        this.post = {
            title: '',
            body: '' 
            }        
        },
    }
}
</script>


<style>
form {
    padding: 40px;
}
</style>



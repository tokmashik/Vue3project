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
      <my-button style=" margin-top: 15px; align-self: flex-end;"
      @click="createPost"
      >Add</my-button>
    </form>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue"
import MyInput from "@/components/UI/MyInput.vue"
export default {
    components: {
    MyButton,
    MyInput
  },
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



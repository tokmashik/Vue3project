<template>
    <div class="post">
        <div>
            <div>Name: {{ post.title }}</div>
            <div>Discription: {{ post.body }}</div>
        </div>
        
            <my-button
            @click="$emit('remove', post)">
                Delete
            </my-button>
        
   </div>


  </template>
  
  <script>
  import MyButton from "@/components/UI/MyButton.vue"
  export default {
    components: {
      MyButton
    },
    props: {
        post: {
            type: Object,
            required: true
        }
    }
  }
  </script>
  
<style> 
  .post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  </style>
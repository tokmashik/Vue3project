<template>
    <div class="post">
        <div>
            <div>Name: {{ post.title }}</div>
            <div>Discription: {{ post.body }}</div>
        </div>
        
            <button class="button"
            @click="$emit('remove', post)">
                Delete
            </button>
        
   </div>


  </template>
  
  <script>
  export default {
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
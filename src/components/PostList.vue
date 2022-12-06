<template>
    <div v-if="posts.length > 0">
        <h4>Список пользователей:</h4>
        <post-item 
        v-for="post in posts" 
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
        />
    </div>
    <h2 v-else>
        no
    </h2>
  </template>
  
  <script>
import PostItem from './PostItem.vue';

export default {
  components: { PostItem },
    props: {
        posts: {
            type: Array,
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
  }
  </style>

  <!--
  .button {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: teal;
  border: 2px solid teal;
  color: aliceblue;
-->
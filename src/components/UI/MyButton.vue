<template>
  <button class="button">
      <slot></slot>
  </button>
</template>

<script>
export default {
name: 'my-button'
}
</script>


<style>
.button { 
  display: inline-block;cursor: 
  pointer; font-size:17px;
  text-decoration:none;
  padding:15px 30px; 
  color:#ffffff;
  background:#8fff05;
  border-radius:60px;
  border:0px solid #354251;
}
.button:hover {
  background:#5eac00;
  color:#ffffff;
  transition: all 0.4s ease;
  }
</style>



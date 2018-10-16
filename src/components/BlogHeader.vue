<template>
  <div class="BlogHeader">
      <router-link tag="span" to="/">博客</router-link>
      <router-link tag="span" to="/add">写博客</router-link>
  </div>
</template>

<script>
  export default {
    name: 'BlogHeader',
    data() {
      return {}
    }
  }
</script>

<style lang="less">
  .BlogHeader{
    width: 100%;
    background: rgb(102, 153, 255);
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
    span{
      color: #fff;
      margin: 10px;
      cursor: pointer;
      &:hover{
        color: red;
      }
    }
  }
</style>

<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1 style="color: #fff">博客总览</h1>
    <el-input type="text" v-model="search" placeholder="搜索" style="margin-bottom: 20px;"/>

    <div class="item" v-for="blog in filteredBlogs" @click="$router.push({path: '/detail',query: blog})">
      <h2 v-raninbow>{{blog.title | to-uppercase}}</h2>
      <p>{{blog.body | snippet}}</p>
    </div>
    <template v-if="filteredBlogs.length == 0">
      <img src="../assets/noData.png" style="width: 30px; margin-top: 20px;">
      <p style="color: #fff; font-size: 14px;"> 暂无对应内容 </p>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'show-blogs',
    data() {
      return{
        search: '',
        blogs: []
      }
    },
    created(){
      this.$http.get('http://jsonplaceholder.typicode.com/posts').then((result) => {
        this.blogs = result.body.slice(0, 10);
      })

      this.$http.get('../../static/posts.json').then((result) => {
        this.blogs = result.body.slice(0, 10);
      })
    },
    computed:{
      filteredBlogs:function () {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search);
        })
      }
    }
  }
</script>

<style lang="less">
  #show-blogs{
    width: 600px;
    margin: 0px auto;
    .item{
      text-align: left;
      background: #f2f2f2;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px dashed #999;
      cursor: pointer;
    }
  }
</style>

<template>
  <div class="blog-detail">
    <el-form label-width="100px" style="margin: 0px auto;">
      <el-form-item label="博客标题:">
        {{blog.title}}
      </el-form-item>
      <el-form-item label="博客内容:">
        {{blog.body}}
      </el-form-item>
      <el-form-item label="分类:">
        <template v-for="item in blog.categorys">
          {{item}}&nbsp;&nbsp;
        </template>
      </el-form-item>
      <el-form-item label="作者:">
        {{blog.userId}}
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    // http://jsonplaceholder.typicode.com/
    name: "blog-detail",
    data() {
      return{
        preview: false,
        success: false,
        blog: {
          title: null,
          body: null,
          userId: null
        }
      }
    },
    methods: {

    },
    created() {
      this.blog = Object.assign({}, this.$route.query);
    }
  }
</script>

<style lang="less">
  .blog-detail{
    width: 600px;
    background: #f2f2f2;
    padding: 20px;
    margin: 0px auto;
    border: 1px dashed #999;
    .el-form-item__content{
      text-align: left;
    }
  }
</style>

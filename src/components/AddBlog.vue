<template>
    <div id="add-blog">
      <div id="add" v-if="!preview && !success">
        <h2>添加博客</h2>
        <el-form ref="blog" :model="blog" label-width="100px" style="width: 600px;margin: 0px auto;">
          <el-form-item label="博客标题:" prop="title" :rules="[{required: true, message: '博客标题不能为空!'}]">
            <el-input v-model="blog.title" />
          </el-form-item>
          <el-form-item label="博客内容:" prop="content" :rules="[{required: true, message: '博客内容不能为空!'}]">
            <el-input type="textarea" v-model="blog.content"></el-input>
          </el-form-item>
          <el-form-item label="分类:" prop="categorys" :rules="[{ type: 'array', required: true, message: '请至少选择一个分类'}]">
            <el-checkbox-group v-model="blog.categorys">
              <el-checkbox label="Vue.js" name="categorys"></el-checkbox>
              <el-checkbox label="Node.js" name="categorys"></el-checkbox>
              <el-checkbox label="React.js" name="categorys"></el-checkbox>
              <el-checkbox label="Angulars1" name="categorys"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="作者:" prop="author" :rules="[{required: true, message: '作者不能为空!'}]">
            <el-select v-model="blog.author" placeholder="请选择作者">
              <el-option label="meng" value="meng"></el-option>
              <el-option label="zhang" value="zhang"></el-option>
              <el-option label="li" value="li"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label=":">
            <el-button type="primary" @click="save('blog')">保存</el-button>
            <el-button type="primary" @click="preview = !preview">预览</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div v-if="success">
        <h3>您的博客已发布成功！</h3>
      </div>

      <div id="preview" v-if="preview">
        <h2>博客总览</h2>
        <el-form label-width="100px" style="width: 600px;margin: 0px auto;">
          <el-form-item label="博客标题:">
            {{blog.title}}
          </el-form-item>
          <el-form-item label="博客内容:">
            {{blog.content}}
          </el-form-item>
          <el-form-item label="分类:">
            <template v-for="item in blog.categorys">
              {{item}}&nbsp;&nbsp;
            </template>
          </el-form-item>
          <el-form-item label="作者:">
            {{blog.author}}
          </el-form-item>
          <el-form-item label=":">
            <el-button type="primary" @click="preview = !preview">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
  export default {
    // http://jsonplaceholder.typicode.com/
    name: "add-blog",
    data() {
      return{
        preview: false,
        success: false,
        blog: {
          title: null,
          content: null,
          categorys: [],
          author: null
        }
      }
    },
    methods: {
      save(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = {
              title: this.blog.title,
              body: this.blog.content,
              userId: 1
            }
            this.$http.post('http://jsonplaceholder.typicode.com/posts', params).then(function (data) {
              this.success = true;
              console.log(data);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      }
    }
  }
</script>

<style lang="less">
  .add-blog{
    .el-form-item__content{
      text-align: left;
    }
  }
</style>

<template>
  <div class="editor">
    <el-container>
      <el-header class="editor-header">
        <editor-header @relaseArticles=relaseArticles />
      </el-header>
      <el-main class="editor-main">
        <div class="content m-t-50">
          <el-input v-model="title"
                    class="m-b-15 editor-title"
                    size="medium"
                    placeholder="请输入标题（最多50个字）" />
          <rich-text-editor ref="textEditor"
                            :content='content'
                            :placeHolder="placeHolder"
                            @updateContent=updateContent />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import EditorHeader from '@/components/Editor/EditorHeader.vue';
import RichTextEditor from '@/components/Editor/RichTextEditor.vue';
import { post } from '../axios/apis';
import { getCookies } from '../lib/utils.js';
export default {
  components: {
    EditorHeader,
    RichTextEditor,
  },
  data () {
    return {
      title: '',
      content: '',
      contentText: '',
      placeHolder: '请输入正文',
    };
  },
  methods: {
    updateContent (content, contentText) {
      this.content = content;
      this.contentText = contentText;
    },
    relaseArticles () {
      //发布文章方法
      if (parseFloat(this.$route.params.articleId) !== 0) {
        //修改文章方法
      } else {
        this.createArticle(); //调用新建文章方法
      }
    },
    async createArticle () {
      await post('/api/articles', {
        content: this.content,
        //文章内容长于100字符则取前100字符，否则取全部内容作为简介
        excerpt: this.contentText.length > 100 ? this.contentText.slice(0, 100) : this.contentText,
        title: this.title,
        userId: getCookies('id'),
      }).then((res) => {
        if (res.data.status === 201) {
          this.$Message.success('文章新建成功');
        } else {
          this.$Message.error(res.error);
        }
      });
    },
  },
};
</script>

<style scoped>
.editor-header {
  padding: 0;
}
.editor-main {
  background-color: rgb(248, 248, 248);
  height: 100vh;
}
.content {
  width: 80%;
  margin: 0 auto;
}
.editor-title {
  margin-bottom: 30px;
}
</style>
<template>
  <div>
    <quill-editor class="rich-text-editor"
                  v-model="value"
                  ref="myQuillEditor"
                  :options="options"
                  @change="updateRichText($event)">
    </quill-editor>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor';
export default {
  props: ['content', 'placeHolder'],
  components: {
    quillEditor,
  },
  data () {
    return {
      value: '',
      options: {
        modules: {
          toolbar: [
            ['bold', 'italic'],
            [{ header: 2 }, 'blockquote', 'code-block', { list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
          ],
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false,
          },
        },
      },
    };
  },
  mounted () {
    //更新placeholder内容
    this.$refs.myQuillEditor.quill.root.dataset.placeholder = this.placeHolder;
  },
  methods: {
    updateConetent (content) {
      //父组件调用此方法来修改content内容
      this.$refs.myQuillEditor.quill.root.innerHTML = content;
    },
    updateRichText (content) {
      //调用父组件的updateContent方法，更新父组件内容
      this.$emit('updateContent', content.html, content.text);
    },
  },
};
</script>
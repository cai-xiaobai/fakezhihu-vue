<template>
  <div>
    <div class="input-part">
      <input v-model="words"
             type="text" />

      <button v-on:click="insertItem">插入</button>
    </div>
    <ul>
      <li v-for="(item,index) in list"
          :key="index">
        <TodoListItem :item="item"
                      :index='index'
                      @deleteItem="deleteItem"
                      @modifyItem="modifyItem" />
        <!-- <p>{{item}}</p> -->
      </li>
    </ul>
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem'
export default {
  name: "TodoList",
  data () {
    return {
      words: '',
      list: [],
    };
  },
  components: {
    TodoListItem,
  },
  methods: {
    insertItem () {
      this.list.push(this.words);
    },
    deleteItem (index) {
      this.list.splice(index, 1);
    },
    modifyItem (newContent, index) {
      this.list.splice(index, 1, newContent);
    },
  },
}

</script>

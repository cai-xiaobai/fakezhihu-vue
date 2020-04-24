<template>
  <div class="item">
    <p>
      <span v-show="!isActive"
            @click="activeItem">{{item}}</span>
      <span v-show="isActive">
        <input v-model="content"
               @blur="inactiveItem"
               type="text" />
      </span>
      <span @click="$emit('deleteItem',index)">X</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: ['item', 'index'],
  data () {
    return {
      content: '',
      isActive: false,
    };
  },
  methods: {
    activeItem () {
      this.isActive = true;
      this.content = this.item;
    },
    inactiveItem () {
      this.$emit('modifyItem', this.content, this.index);
      this.isActive = false;
    }
  }
}
</script>

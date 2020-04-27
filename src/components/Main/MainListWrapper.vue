<template>
  <el-main>
    <main-list-nav :type="type" />
    <el-card class="box-card">
      <div class="card-content">
        <router-view v-for="(item,index) in fakeInfo"
                     :key="index"
                     :item="item"
                     :index="index"
                     :type="item.type"
                     :showPart="['title']" />
      </div>
    </el-card>
  </el-main>
</template>

<script>
import MainListNav from '@/components/Main/MainListNav.vue';
export default {
  components: {
    MainListNav,
  },
  data () {
    return {
      type: 'main',
      fakeInfo: {
        one: {
          author: {
            avatar_url: "logo.jpg",
            headLine: "abc",
            name: "lalala",
          },
          relationship: {
            is_nothelp: false,
            is_thanked: false,
            voting: 0,
          },
          question: {
            author: {
              avatar_url: "",
              headLine: "123",
              name: "lol",
            },
            answer_count: 18,
            comment_count: 1,
            experpt: "你是谁",
            title: "nishishui whowhowhowho",
            type: "question",
            url: ""
          },
          comment_count: 41,
          content: "<p>lalallaall</p><p>lalallaall</p><p>lalallaall</p><p>lalallaall</p>",
          excerpt: "<b>lalallaall</b>:asdmksmnadnwasdkkanwaaaaaaaaaaaaaaaaaadsdasdaaaaaaaaawdsadasd",
          thanks_count: 69,
          thumbnail: "Mainlogo.jpg",
          type: "answer",
          voteup_count: 771,
        }
      }
    }
  }
}
</script>

<style>
.box-card {
  width: 800px;
}
</style>
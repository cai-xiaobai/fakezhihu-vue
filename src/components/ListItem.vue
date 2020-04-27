<template>
  <div class="answer-main">
    <div class="title"
         v-if="showPart.indexOf('title') >= 0 ">
      <h2>{{transtedInfo.title}}</h2>
    </div>
    <div class="creater-info"
         v-if="showPart.indexOf('creator') >= 0 ">
      <div class="avatar">
        <img :src="item.author.avatarUrl"
             alt="">
      </div>
      <div class="userinfo">
        <p class="username">
          {{item.author.name}}
        </p>
        <p class="headline">
          {{item.author.headline}}
        </p>
      </div>
    </div>

    <div class="vote"
         v-if="showPart.indexOf('votes') >=0 ">
      <span>
        {{JSON.parse(item.status.voteUp).length}}人赞同了该回答
      </span>
    </div>

    <div class="content-wrapper clearfix">
      <div class="shortCut"
           v-if="showType === 'experct'">
        <el-row>
          <el-col :span="6">
            <div class="cover"
                 v-if="transtedInfo.cover">
              <img :src="transtedInfo.cover"
                   alt="" />
            </div>
          </el-col>
          <el-col :span="18">
            <div class="experct">
              <span>
                <span v-html="item.excerpt"></span>
                <el-button class="btn-no-padding"
                           type="text"
                           icon="el-icon-arrow-down"
                           @click="showType = 'all' ">
                  阅读全文
                </el-button>
              </span>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="content"
           v-if="showType === 'all' ">
        <span v-html="item.content"></span>
        <el-button class="btn-no-padding"
                   type="text"
                   icon="el-icon-arrow-up"
                   @click="showType = 'experct' ">
          收起
        </el-button>
      </div>
    </div>
    <list-item-actions :thanks_count="item.comment_count"
                       :comment_count="item.comment_count"
                       :voteup_count="item.voteup_count"
                       :showActionItems="['vote','thanks','comment','share','favorite','more']" />
  </div>
</template>

<script>
import ListItemActions from "@/components/ListItemActions.vue";
export default {
  //item为当前元素主要内容，showPart为展示内容
  //type为当前内容类型，文章还是回答
  props: ['item', 'showPart', 'type'],
  data () {
    return {
      // img: require(this.item.thumbnail),
      showType: 'experct',  //默认展示内容介绍
    };
  },
  components: {
    ListItemActions,
  },
  computed: {
    //文章和回答的封面字段不同，需要用此方法判断
    transtedInfo () {
      if (this.type === 'article') {
        return {
          title: this.item.title,
          cover: require("../assets/imgs/" + this.item.image_url) || "",
        };
      } else if (this.type === 'answer') {
        return {
          title: this.item.question.title,
          cover: require("../assets/imgs/" + this.item.thumbnail) || "",
        }
      } else {
        return {};
      }
    },

  },
};

</script>

<style>
.title {
  text-align: left;
}
.cover {
  float: left;
}
.experct {
  text-align: left;
  word-break: break-all;
}
</style>
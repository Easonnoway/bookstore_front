<template>
  <div class="comment-container">
    <div v-clickoutside="hideReplyBtn" @click="inputFocus" class="my-reply">
      <el-avatar class="header-img" :size="40" :src="myHeader"></el-avatar>
      <div class="reply-info">
        <div
          tabindex="0"
          contenteditable="true"
          id="replyInput"
          spellcheck="false"
          placeholder="输入评论..."
          class="reply-input"
          @focus="showReplyBtn"
          @input="onDivInput"
        ></div>
      </div>
      <div class="reply-btn-box" v-show="btnShow">
        <el-button class="reply-btn" size="medium" @click="sendComment" type="primary">
          发表评论
        </el-button>
      </div>
    </div>
    <div v-for="(item, i) in comments" :key="i" class="author-title reply-father">
      <el-avatar class="header-img" :size="40" :src="item.headImg"></el-avatar>
      <div class="author-info">
        <span class="author-name">{{ item.name }}</span>
        <span class="author-time">{{ item.time }}</span>
      </div>
      <div class="icon-btn">
        <span @click="showReplyInput(i, item.name, item.id)">
          <i class="iconfont el-icon-s-comment"></i>{{ item.commentNum }}
        </span>
        <i class="iconfont el-icon-caret-top"></i>{{ item.like }}
      </div>
      <div class="talk-box">
        <p>
          <span class="reply">{{ item.comment }}</span>
        </p>
      </div>
      <div class="reply-box">
        <div v-for="(reply, j) in item.reply" :key="j" class="author-title">
          <el-avatar class="header-img" :size="40" :src="reply.fromHeadImg"></el-avatar>
          <div class="author-info">
            <span class="author-name">{{ reply.from }}</span>
            <span class="author-time">{{ reply.time }}</span>
          </div>
          <div class="icon-btn">
            <span @click="showReplyInput(i, reply.from, reply.id)">
              <i class="iconfont el-icon-s-comment"></i>{{ reply.commentNum }}
            </span>
            <i class="iconfont el-icon-caret-top"></i>{{ reply.like }}
          </div>
          <div class="talk-box">
            <p>
              <span>回复 {{ reply.to }}:</span>
              <span class="reply">{{ reply.comment }}</span>
            </p>
          </div>
          <div class="reply-box"></div>
        </div>
      </div>
      <div v-show="_inputShow(i)" class="my-reply my-comment-reply">
        <el-avatar class="header-img" :size="40" :src="myHeader"></el-avatar>
        <div class="reply-info">
          <div
            tabindex="0"
            contenteditable="true"
            spellcheck="false"
            placeholder="输入评论..."
            @input="onDivInput"
            class="reply-input reply-comment-input"
          ></div>
        </div>
        <div class="reply-btn-box">
          <el-button class="reply-btn" size="medium" @click="sendCommentReply(i, j)" type="primary">
            发表评论
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import useTimeProcess from '@/hooks/useTimeProcess'
const { dateStr }: { dateStr: (timestamp: number) => string } = useTimeProcess()
const myHeader = ref('path/to/my/header.jpg')
const btnShow = ref(false)
const index = ref(0)
const replyComment = ref('')
const myName = ref('张三')
const myId = ref(1001)
const to = ref('')
const toId = ref(-1)

const comments = reactive([
  {
    name: 'Lis',
    id: 1002,
    comment: '这本书的情节非常吸引人，期待作者的下一部作品。',
    time: '2024年4月20日 10:30',
    commentNum: 3,
    like: 20,
    inputShow: false,
    reply: [
      {
        from: '梦之泪伤',
        fromId: 1003,
        to: 'Lis',
        toId: 1002,
        comment: '确实如此，作者的文笔非常细腻。',
        time: '2024年4月20日 11:00',
        commentNum: 1,
        like: 5,
        inputShow: false
      },
      {
        from: '赵QAQ',
        fromId: 1004,
        to: 'Lis',
        toId: 1002,
        comment: '我也觉得这本书很棒，推荐给大家。',
        time: '2024年4月20日 12:15',
        commentNum: 0,
        like: 3,
        inputShow: false
      }
    ]
  },
  {
    name: '王五',
    id: 1003,
    time: '2024年4月21日 09:45',
    comment: '人生必看。',
    commentNum: 2,
    like: 10,
    inputShow: false,
    reply: [
      {
        from: 'UESTC大天才',
        fromId: 1001,
        to: '王五',
        toId: 1003,
        comment: '感谢推荐，我会去看看的。',
        time: '2024年4月21日 10:00',
        commentNum: 0,
        like: 2,
        inputShow: false
      }
    ]
  },
  {
    name: '不当人',
    id: 1004,
    comment: '这本书的主题非常深刻，引人深思。',
    time: '2024年4月22日 14:20',
    commentNum: 1,
    like: 8,
    inputShow: false,
    reply: []
  }
])

const inputFocus = () => {
  const replyInput = document.getElementById('replyInput')
  if (replyInput) {
    replyInput.style.padding = '8px 8px'
    replyInput.style.border = '2px solid blue'
    replyInput.focus()
  }
}

const showReplyBtn = () => {
  btnShow.value = true
}

const hideReplyBtn = () => {
  btnShow.value = false
  const replyInput = document.getElementById('replyInput')
  if (replyInput) {
    replyInput.style.padding = '10px'
    replyInput.style.border = 'none'
  }
}

const showReplyInput = (i: number, name: string, id: number) => {
  comments[index.value].inputShow = false
  index.value = i
  comments[i].inputShow = true
  to.value = name
  toId.value = id
}

const _inputShow = (i: number) => {
  return comments[i].inputShow
}

const sendComment = () => {
  if (!replyComment.value.trim()) {
    ElMessage({
      showClose: true,
      type: 'warning',
      message: '评论不能为空'
    })
  } else {
    const a: any = {}
    const input = document.getElementById('replyInput')
    const timeNow = new Date().getTime()
    const time = dateStr(timeNow)
    a.name = myName.value
    a.comment = replyComment.value
    a.headImg = myHeader.value
    a.time = time
    a.commentNum = 0
    a.like = 0
    comments.push(a)
    replyComment.value = ''
    if (input) {
      input.innerHTML = ''
    }
  }
}

const sendCommentReply = (i: number, j: number) => {
  if (!replyComment.value.trim()) {
    ElMessage({
      showClose: true,
      type: 'warning',
      message: '评论不能为空'
    })
  } else {
    const a: any = {}
    const timeNow = new Date().getTime()
    const time = dateStr(timeNow)
    a.from = myName.value
    a.to = to.value
    a.fromHeadImg = myHeader.value
    a.comment = replyComment.value
    a.time = time
    a.commentNum = 0
    a.like = 0
    comments[i].reply.push(a)
    replyComment.value = ''
    const replyInputs = document.getElementsByClassName('reply-comment-input')
    if (replyInputs[i]) {
      replyInputs[i].innerHTML = ''
    }
  }
}

const onDivInput = (e: Event) => {
  const target = e.target as HTMLElement
  replyComment.value = target.innerHTML
}
</script>

<style scoped>
.comment-container {
  width: 80%;
}
.my-reply {
  padding: 10px;
}
.header-img {
  display: inline-block;
  vertical-align: top;
}
.reply-info {
  display: inline-block;
  margin-left: 5px;
  width: 90%;
}
@media screen and (max-width: 1200px) {
  .reply-info {
    width: 80%;
  }
}
.reply-input {
  min-height: 20px;
  line-height: 22px;
  padding: 10px 10px;
  color: #ccc;
  border-radius: 5px;
}
.reply-input:empty:before {
  content: attr(placeholder);
}
.reply-input:focus:before {
  content: none;
}
.reply-input:focus {
  padding: 8px 8px;
  border: 2px solid blue;
  box-shadow: none;
  outline: none;
}
.reply-btn-box {
  height: 25px;
  margin: 10px 0;
}
.reply-btn {
  position: relative;
  float: right;
  margin-right: 15px;
}
.my-comment-reply {
  margin-left: 50px;
}
.reply-input {
  width: flex;
}
.author-title:not(:last-child) {
  border-bottom: 1px solid rgba(178, 186, 194, 0.3);
}
.author-title {
  padding: 10px;
}
.header-img {
  display: inline-block;
  vertical-align: top;
}
.author-info {
  display: inline-block;
  margin-left: 5px;
  width: 60%;
  height: 40px;
  line-height: 20px;
}
.author-info > span {
  display: block;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.author-name {
  color: #000;
  font-size: 18px;
  font-weight: bold;
}
.author-time {
  font-size: 14px;
}
.icon-btn {
  width: 30%;
  padding: 0 !important;
  float: right;
}
@media screen and (max-width: 1200px) {
  .icon-btn {
    width: 20%;
    padding: 7px;
  }
}
.icon-btn > span {
  cursor: pointer;
}
.iconfont {
  margin: 0 5px;
}
.talk-box {
  margin: 0 50px;
}
.talk-box > p {
  margin: 0;
}
.reply {
  font-size: 16px;
  color: #000;
}
.reply-box {
  margin: 10px 0 0 50px;
}
</style>
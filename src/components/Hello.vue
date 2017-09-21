<template>
  <div class="container">
    <x-input :label="'学号'" :placeholder="'6-20为数字字母'"></x-input>
    <x-input :label="'爱好'" :placeholder="'10汉字'"></x-input>
    <x-input :label="'智商'" :placeholder="'输入2-3位整数'"></x-input>
    <x-guide></x-guide>

    <x-canvas></x-canvas>

    <p v-for="e in 6">{{e}}</p>
    <drawing-board v-if='this.player == 1'></drawing-board>
    <showing-board v-if='this.player == 2'></showing-board>
    <button v-if='this.player == 0' @click='draw'>我来画</button>
    <button v-if='this.player == 0' @click='guess'>我来猜</button>
    <button v-if='this.player == 2' @click='replay'>重新开始</button>
  </div>
</template>

<script>
import XInput from './input.vue'
import ScheduleGuide from './ScheduleGuide'
import DrawingBoard from './drawing-board.vue'
import ShowingBoard from './showing-board.vue'
import XCanvas from './canvas'

export default {
  data () {
    return {
      player: 0
    }
  },
  components: {
    'x-input': XInput,
    'x-guide': ScheduleGuide,
    DrawingBoard,
    ShowingBoard,
    XCanvas
  },
  methods: {
    draw () {
      this.player = 1
    },
    guess () {
      this.player = 2
    },
    replay () {
      this.player = 0
      location.reload()
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: #fff;
}
</style>

<template>
  <div class="container">
    <x-canvas></x-canvas>

    <drawing-board v-if='this.player == 1'></drawing-board>
    <showing-board v-if='this.player == 2'></showing-board>
    <button v-if='this.player == 0' @click='draw'>我来画</button>
    <button v-if='this.player == 0' @click='guess'>我来猜</button>
    <button v-if='this.player == 2' @click='replay'>重新开始</button>
  </div>
</template>

<script>
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

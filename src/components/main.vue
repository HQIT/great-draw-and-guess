<template>
  <div class="container">
    <Button class="setting-button" type="text" shape="circle" size="large" @click="modal_setting=true">
      <Icon type="android-settings"></Icon>
    </Button>
    <Modal
      title="设置玩家姓名"
      v-model="modal_setting"
      @on-ok="on_setting_ok"
      :mask-closable="false">
      <Input placeholder="此处填写玩家姓名" v-model="context.player_name"></Input>
    </Modal>

    <Row>
      <iCol span="4">
        <p>玩家列表</p>
        <p v-for="(e, i) in players">{{e['player-name']}}</p>
      </iCol>
      <iCol span="20">
          <x-canvas></x-canvas>
          <drawing-board v-if='this.player == 1'></drawing-board>
          <showing-board v-if='this.player == 2'></showing-board>
          <button v-if='this.player == 0' @click='draw'>我来画</button>
          <button v-if='this.player == 0' @click='guess'>我来猜</button>
          <button v-if='this.player == 2' @click='replay'>重新开始</button>
      </iCol>
    </Row>

  </div>
</template>

<script>
  import DrawingBoard from './drawing-board.vue'
  import ShowingBoard from './showing-board.vue'
  import XCanvas from './canvas'

  export default {
    mounted () {
      let vm = this
      let data = this.$storage.load()
      if (!data) {
        this.modal_setting = true
      } else {
        this.context = data
      }

      // 注册到游戏中
      this.ws = new WebSocket('ws://localhost:8090/?room=100')
      this.ws.onopen = () => {
        let data = { 'player-name': vm.context.player_name }
        console.log('user log in', JSON.stringify(data))
        this.ws.send('event:login:' + JSON.stringify(data))
      }
      this.ws.onmessage = (msg) => {
        let message = msg.data
        let i = message.indexOf('event:login:')
        if (i === 0) {
          let player = JSON.parse(message.substr(i + 12))
          if (!vm.players[player['player-name']]) {
            vm.players.push(player)
            vm.players[player['player-name']] = player
          }
        }
      }
    },
    data () {
      return {
        player: 0,
        context: {},
        modal_setting: false,
        ws: undefined,
        players: []
      }
    },
    components: {
      DrawingBoard,
      ShowingBoard,
      XCanvas
    },
    methods: {
      on_setting_ok () {
        console.log('context', this.context)
        this.$storage.store(this.context)
      },
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

  .setting-button {
    position: absolute;
    right: 10px;
    top: 10px;
  }
</style>

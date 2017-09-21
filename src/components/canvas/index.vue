<template>
  <div class="canvas-wrapper">
    <canvas ref="refCanvas" :style="canvasStyle"></canvas>
    <div class="controls">
      <!--
      <button onclick="sketch.erase=false;">画笔</button><button onclick="sketch.erase=true;">橡皮</button>
      <button onclick="sketch.lineWidth=2;">细</button><button onclick="sketch.lineWidth=5;">中</button><button onclick="sketch.lineWidth=10;">粗</button>
      <button onclick="sketch.color='red';">红</button><button onclick="sketch.color='black';">黑</button><button onclick="sketch.color='blue';">蓝</button>
      <button onclick="sketch.cancel();">上一步</button>
      -->
    </div>
  </div>
</template>

<script>
  import SketchJS from './sketch'

  export default {
    name: 'x-canvas',
    mounted () {
      this.sketch = new SketchJS(this.$refs.refCanvas, {
        // width: this.$refs.refCanvas.clientWidth,
        // height: this.$refs.refCanvas.clientHeight,
        width: 300,
        height: 300,
        color: 'red',
        bgcolor: '#eee'
      })
    },
    data () {
      return {
        sketch: {}
      }
    },
    computed: {
      canvasStyle () {
        return {
          width: '300px',
          height: '300px',
          backgroundColor: '#CCC'
        }
      }
    }
  }
</script>

<style scoped="x-canvas">
  .canvas-wrapper {
    /*width: 500px;*/
    position: relative;
  }
</style>

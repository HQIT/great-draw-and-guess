<template>
  <div class="guide-step">
    <span class="badge">{{index}}</span>
    <slot>
      <a>立即导入</a>
    </slot>
    <p v-if="title !== ''" class="title">{{title}}</p>
  </div>
</template>

<script>
  export default {
    props: ['index', 'title']
  }
</script>

<style scoped>
  .guide-step {
    width: 200px; height: 200px;
    border-radius: 5px;
    border: solid 1px #999;
    position: relative;
    display: inline-block;
    line-height: 200px;
    text-align: center;
    margin: 20px 5px 5px 20px;
  }
  .guide-step.empty {
    background-color: #666;
    color: #DDD;
  }
  .guide-step.empty:hover {
    background-color: #555;
    color: #EEE;
  }
  .guide-step > span.badge {
    display: inline-block;
    width: 30px; height: 30px; border-radius: 15px;
    background-color: #900;
    position: absolute;
    top: -15px; left: -15px;
    line-height: 30px;
    text-align: center;
    color: #DDD;
  }

  .guide-step > p.title {
    position: absolute;
    line-height: 30px;
    width: calc(100% - 2 * 5px);
    margin: 5px;
    text-align: center;
    color: #000;
  }
</style>

<template>
  <div class="x-input">
    <label>{{label}}</label>
    <input :placeholder="placeholder" :title="label" />
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: ['label', 'placeholder']
  }
</script>

<style scoped>
  .x-input {
    display: inline-block;
    position: relative;
    margin: 6px;
  }
  .x-input > label {
    position: absolute;
    left: 5px;
    top: -7px;
    height: 12px;
    background-color: #FFF;
    padding: 0 5px;
    font-size: 12px;
  }
  .x-input > input {
    border: solid 1px #999;
    width: 200px;
    height: 28px;
    padding: 5px 5px 0 5px;
    border-radius: 3px;
  }
  .x-input input:hover {
    border-color: #333;
  }
</style>

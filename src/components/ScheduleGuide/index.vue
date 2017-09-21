<template>
  <div>
    <x-step :index="1" :title="'基础数据'"><div>1234</div></x-step>
    <x-step :index="2" class="empty" :title="'22222'">12222</x-step>
  </div>
</template>

<script>
  import ScheduleGuideStep from './step.vue'
  export default {
    components: {
      'x-step': ScheduleGuideStep
    }
  }
</script>

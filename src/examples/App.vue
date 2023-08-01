<script setup>
import { ref } from 'vue'
// import VSelect from '../packages/custom-select/index.vue'

const optionsList=ref([
  {
    label:'12',
    value:'1'
  },
  {
    label:'12',
    value:'12'
  },
  {
    label:'12',
    value:'13'
  }
])
const selectValue=ref('1')
</script>

<template>
  <VSelect v-model:selectValue="selectValue" :optionsList="optionsList" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

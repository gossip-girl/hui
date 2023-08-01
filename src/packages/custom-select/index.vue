<script>
import { computed, defineComponent } from "vue"
export default defineComponent({
  name:'VSelect'
})
</script>
<script setup>
  const props=defineProps({
    name:'VSelect',
    selectValue:{
      type:String,
      default:null
    },
    optionsList:{
      type:Array,
      default:()=>[]
    },
    fieldNames:{
      type:Object,
      default:()=>{
        return {
          label:'label',
          value:'value'
        }
      }
    }
  })

  const emit=defineEmits(['update:selectValue'])
  const thisModalVal=computed({
    get:()=>props.selectValue,
    set:val=>emit('update:selectValue',val)
  })
</script>
<template>
  <div>
    <select v-model="thisModalVal">
      <option v-for="(item) in optionsList" :key="item[fieldNames.label]">{{ item[fieldNames.value] }}</option>
    </select>
  </div>
</template>
<style scoped>
  select{
    min-width: 200px;
    line-height: 32px;
    height: 32px;
    border-radius: 4px;
    border-color: #ccc;
    outline: none;
  }
</style>
<template>
  <div class="flex flex-col items-center gap-3 mx-auto my-10 w-full">
    <div class="w-full" @click="() => onOptionClick(true)">
      <QuoteOptionButton :isActive="selected === 0 || isSingleSelected!" variation="single" />
    </div>

    <div class="w-full" @click="() => onOptionClick(false)">
      <QuoteOptionButton :isActive="selected === 1" variation="couple" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type PropType, ref } from 'vue'
import QuoteOptionButton from './QuoteOptionButton.vue'

const selected = ref<null | number>(null)

const onOptionClick = (isSingle: boolean) => {
  props.onSelect(isSingle ? true : false)
  selected.value = isSingle ? 0 : 1
  console.log(selected.value)
}

const props = defineProps({
  onSelect: {
    type: Function as PropType<(isForSingle: boolean) => void>,
    required: true
  },
  isSingleSelected: {
    type: [Boolean, null] as PropType<boolean | null>,
    required: true
  }
})
</script>

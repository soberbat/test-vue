<template>
  <button
    type="button"
    :disabled="disabled"
    @click="onClick"
    :class="[
      { 'bg-orange-1 text-white  border-none': hasNavigatedBack && variation !== `previous` },
      { 'flex-row-reverse': variation === 'previous' },
      { 'text-brand-grey-3 border-brand-grey-3': disabled },
      { ' hover:bg-orange-2 group hover:border-none hover:text-white': !disabled },
      'flex justify-center border-black items-center gap-4 ml-auto px-4 py-[0.4rem] border rounded text-black text-2xl'
    ]"
  >
    <h3>{{ buttonText }}</h3>
    <IconArrow
      :class="[
        { 'text-brand-grey-3': disabled },
        { ' text-white': hasNavigatedBack && variation !== `previous` },
        { 'rotate-180': variation === 'previous' },
        ' text-black group-hover:text-white fill-current'
      ]"
    />
  </button>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import IconArrow from './icons/IconArrow.vue'

defineProps({
  currentStep: { type: Number, required: true },
  disabled: { type: Boolean, required: true },
  hasNavigatedBack: { type: Boolean, required: false },
  buttonText: { type: String, required: true },
  variation: { type: String, required: true },
  onClick: {
    type: Function as PropType<(event: MouseEvent) => void>,
    required: true
  }
})
</script>

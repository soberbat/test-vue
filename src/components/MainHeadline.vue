<script setup lang="ts">
import { computed, defineProps } from 'vue'

const { progress } = defineProps<{
  progress: number
}>()

const headline = computed(() => {
  switch (progress) {
    case 0:
      return 'I’d like quotes for:'
    case 1:
      return 'How much cover would you like?'
  }
})
</script>

<template>
  <div class="max-w-80">
    <h1 class="font-bold text-[2rem] text-black text-center">{{ headline }}</h1>
  </div>
</template>

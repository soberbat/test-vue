<script setup lang="ts">
import { ref } from 'vue'
import SectionWithBrands from './SectionWithBrands.vue'
import MainHeadline from './MainHeadline.vue'
import Form from './Form.vue'
import ExtraDetailsHeading from './ExtraDetailsHeading.vue'

const progress = ref(0)
const parentProgressSetter = (newProgress: number) => {
  progress.value = newProgress
}
</script>

<template>
  <main class="flex flex-col items-center">
    <ExtraDetailsHeading v-if="progress === 2" />
    <SectionWithBrands v-if="progress < 2" />
    <MainHeadline v-if="progress < 2" :progress="progress" />
    <Form :parent-progress-setter="parentProgressSetter" />
  </main>
</template>

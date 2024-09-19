<template>
  <section class="flex-col justify-center items-center py-3">
    <h2 class="font-bold text-2xl text-black text-center">
      Compare
      <span class="font-bold text-blue-1">Test</span>
      Quotes
    </h2>

    <div class="flex justify-center items-center gap-12 mt-4 pb-4">
      <template v-for="(_, index) in Array(5)" :key="index">
        <img :src="getPath(index)" :alt="`Logo ${index + 1}`" class="logo" />
      </template>
    </div>
  </section>
  <hr class="mb-6 w-full" />
</template>

<script setup lang="ts">
const getPath = (index: number) => {
  return `/brand-logos/brand-${index + 1}.svg`
}
</script>

<style scoped>
@media (max-width: 499px) {
  .logo:nth-child(n + 5) {
    display: none;
  }
}
</style>

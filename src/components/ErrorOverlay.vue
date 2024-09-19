<template>
  <div class="fixed inset-0 flex justify-center items-start bg-black bg-opacity-50 pt-40">
    <div class="relative flex flex-col items-center gap-4 bg-white shadow-lg p-12 text-center">
      <div class="flex justify-center items-center">
        <img src="/icons/smiley.svg" alt="" />
      </div>
      <h2 class="mb-6 font-semibold text-xl">Sorry, but we can’t help you</h2>
      <button @click="onClose" class="bg-brand-red px-6 py-2 text-white">OK</button>
      <img
        @click="onClose"
        class="-top-10 right-0 absolute w-8 h-8"
        src="/icons/close.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  onClose: Function as any
})
</script>

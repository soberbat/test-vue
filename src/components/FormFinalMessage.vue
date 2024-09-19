<template>
  <div class="mt-14 max-w-[21rem] text-[20px] text-center">
    <span class="font-bold text-brand-green-1">Thank you {{ user }} </span>
    <p>We’ve received your enquiry and will get back to you soon to discuss your quote.</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  user: { type: String, required: true }
})
</script>

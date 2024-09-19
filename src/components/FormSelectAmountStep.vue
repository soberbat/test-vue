<template>
  <div class="space-y-4 mt-4">
    <div class="form-group">
      <div class="relative">
        <select
          v-model="formData.select"
          id="title"
          class="block border-2 shadow-blue-shadow mt-1 p-6 pr-14 border-blue-1 rounded w-full font-normal text-2xl focus:outline-none appearance-none"
          :class="{
            'border-red-500': errors.select,
            'bg-blue-3': formData.select
          }"
        >
          <option class="text-md" value="" disabled selected>£150,000</option>
          <option class="text-md" value="150,000">£150,000</option>
          <option class="text-md" value="200,000">£200,000</option>
        </select>
        <span class="right-0 absolute inset-y-0 flex items-center pr-5 pointer-events-none">
          <SelectCaret />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType, defineProps } from 'vue'
import SelectCaret from './icons/SelectCaret.vue'

defineProps({
  formData: {
    type: Object as PropType<{ select: string }>,
    required: true
  },
  errors: {
    type: Object as PropType<{ select: null | string }>,
    required: true
  }
})
</script>

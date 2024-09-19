<template>
  <div class="space-y-8">
    <h1 class="my-12 w-full font-bold text-[32px] text-center">Your Contact Details</h1>

    <div class="form-group">
      <label for="phoneNumber" class="block font-bold text-blue-2 text-xl">Phone Number*</label>
      <input
        type="number"
        id="phoneNumber"
        v-model="formData.phoneNumber"
        class="block shadow-sm mt-1 py-4 p-2 border border-black rounded w-full focus:outline-blue-1"
        :class="{ 'border-red-500': errors.phoneNumber && touched.phoneNumber }"
        @blur="touched.phoneNumber = true"
      />
      <p v-if="errors.phoneNumber && touched.phoneNumber" class="mt-1 text-red-500 text-sm">
        {{ errors.phoneNumber }}
      </p>
    </div>

    <div class="form-group">
      <label for="email" class="block font-bold text-blue-2 text-xl">Email Address*</label>
      <input
        type="email"
        id="email"
        v-model="formData.email"
        class="block shadow-sm mt-1 py-4 p-2 border border-black rounded w-full focus:outline-blue-1"
        :class="{ 'border-red-500': errors.email && touched.email }"
        @blur="touched.email = true"
      />
      <p v-if="errors.email && touched.email" class="mt-1 text-red-500 text-sm">
        {{ errors.email }}
      </p>
    </div>

    <div class="w-full">
      <CheckBox />
    </div>

    <button
      type="submit"
      @click="handleSubmit"
      class="bg-orange-1 px-4 py-6 rounded-md w-full font-bold text-[24px] text-white"
    >
      Get My Qutes Now
    </button>

    <p class="text-[18px] text-brand-grey-1 text-center">
      By submitting this form and based on your requirements you agree on our terms & contitions.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType, defineProps } from 'vue'
import CheckBox from './CheckBox.vue'

const touched = ref({
  phoneNumber: false,
  email: false
})

defineProps({
  formData: {
    type: Object as PropType<{ phoneNumber: string; email: string }>,
    required: true
  },
  handleSubmit: {
    type: Function as any,
    required: true
  },
  errors: {
    type: Object as PropType<{ phoneNumber: string | null; email: string | null }>,
    required: true
  }
})
</script>

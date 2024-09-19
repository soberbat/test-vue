<template>
  <div class="space-y-8">
    <div class="form-group">
      <label for="title" class="block font-bold text-blue-2 text-xl">Title*</label>
      <div class="relative w-max">
        <select
          v-model="formData.title"
          id="title"
          class="block shadow-sm mt-1 py-3 p-2 pr-16 border border-black rounded appearance-none focus:outline-none w-max"
          :class="[
            { 'border-red-500': errors.title && touched.title },
            { 'bg-blue-3': formData.title }
          ]"
          @blur="touched.title = true"
        >
          <option value="" disabled>Select</option>
          <option value="Mr">Mr</option>
          <option value="Ms">Ms</option>
          <option value="Mrs">Mrs</option>
          <option value="Dr">Dr</option>
        </select>
        <span class="right-0 absolute inset-y-0 flex items-center pr-2 pointer-events-none">
          <SelectCaret />
        </span>
      </div>
      <p v-if="errors.title && touched.title" class="mt-1 text-red-500 text-sm">
        {{ errors.title }}
      </p>
    </div>

    <div class="form-group">
      <label for="firstName" class="block font-bold text-blue-2 text-xl">First Name*</label>
      <input
        type="text"
        id="firstName"
        placeholder="First Name"
        v-model="formData.firstName"
        class="block shadow-sm mt-1 py-4 p-2 border border-black rounded w-full focus:outline-blue-1"
        :class="{ 'border-red-500': errors.firstName && touched.firstName }"
        @blur="touched.firstName = true"
      />
      <p v-if="errors.firstName && touched.firstName" class="mt-1 text-red-500 text-sm">
        {{ errors.firstName }}
      </p>
    </div>

    <div class="form-group">
      <label for="lastName" class="block font-bold text-blue-2 text-xl">Last Name*</label>
      <input
        type="text"
        id="lastName"
        placeholder="Last Name"
        v-model="formData.lastName"
        class="block shadow-sm mt-1 py-4 p-2 border border-black rounded w-full focus:outline-blue-1"
        :class="{ 'border-red-500': errors.lastName && touched.lastName }"
        @blur="touched.lastName = true"
      />
      <p v-if="errors.lastName && touched.lastName" class="mt-1 text-red-500 text-sm">
        {{ errors.lastName }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType, defineProps } from 'vue'
import SelectCaret from './icons/SelectCaret.vue'

const touched = ref({
  title: false,
  firstName: false,
  lastName: false
})

defineProps({
  formData: {
    type: Object as PropType<{ title: string; firstName: string; lastName: string }>,
    required: true
  },
  errors: {
    type: Object as PropType<{
      title: string | null
      firstName: string | null
      lastName: string | null
    }>,
    required: true
  }
})
</script>

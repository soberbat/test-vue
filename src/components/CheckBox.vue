<template>
  <div class="relative box-border flex items-start">
    <input type="checkbox" id="custom-checkbox" v-model="isChecked" class="hidden" />
    <label
      for="custom-checkbox"
      class="relative flex items-center mr-2 pt-1 w-6 h-7 cursor-pointer"
    >
      <div
        :class="[
          'flex justify-center items-center border-blue-1 border-2 rounded-md w-full h-full transition-colors duration-200',
          isChecked ? 'bg-blue-1 ' : 'bg-blue-3 '
        ]"
      >
        <svg
          v-if="isChecked"
          width="50"
          height="42"
          viewBox="0 0 50 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="text-white"
        >
          <path
            d="M0 23.7507L7.57576 15.7326L17.3631 25.888L42.3631 0L50 7.92954L17.0943 42C16.9966 41.785 16.9233 41.3677 16.6789 41.1147C11.4003 35.626 6.10948 30.1373 0.806451 24.6739C0.562072 24.421 0.268817 24.1933 0 23.953V23.7507Z"
            fill="white"
          />
        </svg>
      </div>
    </label>
    <span class="block w-[80%] font-normal text-[18px] text-brand-grey-1">
      Keep me up to date with great offers
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isChecked = ref(false)
</script>

<template>
  <div class="flex justify-between mt-14">
    <div>
      <NavigationButton
        :current-step="currentStep"
        variation="previous"
        :disabled="backButtonDisabled"
        button-text="Back"
        :on-click="previousStep"
        v-if="currentStep >= 1"
      />
    </div>

    <NavigationButton
      variation="next"
      :current-step="currentStep"
      :disabled="nextButtonDisabled"
      :hasNavigatedBack="hasNavigatedBack"
      button-text="Next"
      :on-click="nextStep"
      v-if="currentStep < 3"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import NavigationButton from './NavigationButton.vue'

defineProps({
  currentStep: {
    type: Number,
    required: true
  },
  previousStep: {
    type: Function as any,
    required: true
  },
  nextStep: {
    type: Function as any,
    required: true
  },
  nextButtonDisabled: { type: Boolean, required: true },
  hasNavigatedBack: { type: Boolean, required: true },
  backButtonDisabled: { type: Boolean, required: true }
})
</script>

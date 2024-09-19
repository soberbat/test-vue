<template>
  <div class="flex flex-col items-center mx-auto w-full">
    <form class="w-full max-w-[22rem]">
      <QuoteOptions
        :isSingleSelected="formData.forSingle"
        :onSelect="onOptionSelect"
        v-if="currentStep === 0"
      />

      <FormSelectAmountStep :form-data="formData" :errors="errors" v-if="currentStep === 1" />

      <FormUserTitleStep v-if="currentStep === 2" :formData="formData" :errors="errors" />

      <FormContactStep
        :handleSubmit="handleSubmit"
        v-if="currentStep === 3"
        :formData="formData"
        :errors="errors"
      />

      <FormFinalMessage v-if="currentStep === 4" :user="formData.firstName" />

      <Navigation
        :next-step="() => setProgress(true)"
        :current-step="currentStep"
        :previous-step="() => setProgress(false)"
        :nextButtonDisabled="nextButtonDisabled"
        :hasNavigatedBack="hasNavigatedBack"
        :backButtonDisabled="backButtonDisabled"
        v-if="currentStep < 4"
      />
    </form>

    <ErrorOverlay v-if="errorOverlayVisible" :on-close="onCloseOverlay" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed, ref, watch } from 'vue'
import FormContactStep from './FormContactStep.vue'
import FormUserTitleStep from './FormUserTitleStep.vue'
import QuoteOptions from './QuoteOptions.vue'
import Navigation from './Navigation.vue'
import FormSelectAmountStep from './FormSelectAmountStep.vue'
import FormFinalMessage from './FormFinalMessage.vue'
import ErrorOverlay from './ErrorOverlay.vue'

interface FormData {
  title: string
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  forSingle: boolean | null
  select: string
}

interface Errors {
  title: string | null
  firstName: string | null
  lastName: string | null
  phoneNumber: string | null
  email: string | null
  forSingle: boolean | null
  select: string | null
}

const props = defineProps<{
  parentProgressSetter: (progress: number) => void
}>()

const currentStep = ref(0)
const nextButtonDisabled = ref(true)
const backButtonDisabled = ref(true)
const hasNavigatedBack = ref(false)
const maxReachedStep = ref(0)
const errorOverlayVisible = ref(false)

const formData = reactive<FormData>({
  title: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  forSingle: null,
  select: ''
})

const errors = reactive<Errors>({
  title: null,
  firstName: null,
  lastName: null,
  phoneNumber: null,
  email: null,
  forSingle: null,
  select: null
})

watch([currentStep, formData], ([currentStep, formData]) => {
  validateSteps(currentStep, formData)
  if (currentStep > maxReachedStep.value) {
    maxReachedStep.value = currentStep - 1
  }
})

const isEmpty = (str: string) => str.length === 0

const validateSteps = (progess: number, formData: FormData) => {
  const { lastName, firstName, select, phoneNumber, email, forSingle, title } = formData
  switch (progess) {
    case 0:
      nextButtonDisabled.value = !forSingle
      break
    case 1:
      nextButtonDisabled.value = isEmpty(select)
      backButtonDisabled.value = false
      break
    case 2:
      validateTitleStep()
      nextButtonDisabled.value = isEmpty(firstName) || isEmpty(lastName) || isEmpty(title)
      break
    case 3:
      validateContactStep()
      nextButtonDisabled.value = isEmpty(phoneNumber) || isEmpty(email)
      break
  }
}

const setProgress = (isNext: boolean) => {
  if (isNext) {
    currentStep.value++
    if (currentStep.value > maxReachedStep.value) {
      hasNavigatedBack.value = false
    }
  } else {
    currentStep.value--
    hasNavigatedBack.value = true
  }
  props.parentProgressSetter(currentStep.value)
}

const onOptionSelect = (isForSingle: boolean) => {
  errorOverlayVisible.value = !isForSingle
  formData.forSingle = isForSingle
  validateSteps(currentStep.value, formData)
}

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault()
  validateSteps(currentStep.value, formData)
  if (!nextButtonDisabled.value) {
    currentStep.value++
    console.log(formData)
  }
}

const validateTitleStep = (): boolean => {
  errors.title = formData.title ? null : 'Title is required'
  errors.firstName = formData.firstName ? null : 'First name is required'
  errors.lastName = formData.lastName ? null : 'Last name is required'
  return !errors.title && !errors.firstName && !errors.lastName
}

const validateContactStep = (): boolean => {
  errors.phoneNumber = formData.phoneNumber ? null : 'Phone number is required'
  errors.email = formData.email ? null : 'Email is required'
  return !errors.phoneNumber && !errors.email
}

const onCloseOverlay = () => {
  errorOverlayVisible.value = false
}
</script>

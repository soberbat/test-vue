<template>
  <button
    type="button"
    :class="[
      {
        'bg-gradient-to-r from-[#0A76BD] via-[#0A76BD] to-[#4AACEE]':
          isActive && variation === `single`
      },
      'box-border flex items-center border-2 bg-brand-yellow hover:bg-gradient-to-r from-[#0A76BD] via-[#0A76BD] to-[#4AACEE] px-8 py-5 border-black rounded-md w-full text-black transition-all duration-1000 ease-in group'
    ]"
  >
    <component
      :class="[
        { 'text-white': isActive && variation === `single` },
        'group-hover:text-white text-black fill-current'
      ]"
      :is="currentComponent"
    />
    <span class="inline-block flex-1">{{ text }}</span>
  </button>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import Iconsingle from './icons/IconSingle.vue'
import IconCouple from './icons/IconCouple.vue'

const props = defineProps<{
  variation: 'couple' | 'single'
  isActive: boolean
}>()

const { variation } = props
const currentComponent = computed(() => (variation === 'single' ? Iconsingle : IconCouple))
const text = computed(() => (variation === 'single' ? 'Just Me' : 'Me & My Partner'))
</script>

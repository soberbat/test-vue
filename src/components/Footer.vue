<template>
  <div class="mt-auto pt-8">
    <div class="flex flex-col items-center gap-4 mb-6 text-center text-sm">
      <span class="flex justify-center items-center gap-2">
        <img src="/icons/lock.svg" alt="" sizes="" srcset="" />
        Safe & Secure
      </span>

      <p>Your privacy is extremely important to us.</p>
    </div>
    <div class="flex flex-col items-center bg-black py-12 w-full">
      <div class="flex justify-center items-center gap-6 mt-4 pb-4">
        <template v-for="(_, index) in Array(3)" :key="index">
          <img :src="`/icons/social-` + index + `.svg`" :alt="`Logo ${index + 1}`" />
        </template>
      </div>
      <p class="mt-2 text-[12px] text-white">&copy; Copyright 2020 Test. All Rights Reserved.</p>
    </div>
  </div>
</template>

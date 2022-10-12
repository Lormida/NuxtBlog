<script setup lang="ts"></script>

<template>
  <footer flex justify-between>
    <div class="w-fit max-w-1/5 flex flex-col gap-y-10 items-start">
      <slot name="social-media"></slot>
    </div>

    <div class="w-fit max-w-1/5 flex flex-col items-start">
      <slot name="content"></slot>
    </div>

    <div class="w-fit max-w-1/5 flex flex-col items-start">
      <slot name="community"></slot>
    </div>

    <div class="w-fit max-w-1/5 flex flex-col gap-y-10 items-start">
      <slot name="join-email"></slot>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>

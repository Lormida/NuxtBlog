<script setup lang="ts"></script>

<template>
  <section class="flex h-[710px] w-full">
    <div class="basis-3/5 flex flex-col items-center justify-center">
      <slot name="content"></slot>
    </div>
    <div class="basis-2/5">
      <slot name="image"></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  box-shadow: rgba(var(--reflectShadow), 0.2) -5px 5px,
    rgba(var(--reflectShadow), 0.15) -10px 10px,
    rgba(var(--reflectShadow), 0.1) -15px 15px,
    rgba(var(--reflectShadow), 0.05) -20px 20px,
    rgba(var(--reflectShadow), 0.025) -25px 25px;
}
</style>

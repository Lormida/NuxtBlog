<script setup lang="ts"></script>

<template>
  <div flex="~ col" items-center gap-y-2>
    <p font-extrabold text-anti-main-accent text-5xl>
      <slot name="main"></slot>
    </p>

    <p font-semibold text-neutral text-xl>
      <slot name="additional"></slot>
    </p>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div h-fit class="w-200 bg-light-500/10" flex="~ col" items-center rounded-xl>
    <h1 class="text-emerald-300 py-2 text-3xl font-medium">{{ title }}</h1>
    <slot name="default"></slot>
    <slot name="content"> Some content</slot>
  </div>
</template>

<style lang="scss" scoped></style>

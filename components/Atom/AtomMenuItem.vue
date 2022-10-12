<script setup lang="ts">
const props = defineProps<{
  name: string;
  link: string;
}>();
</script>

<template>
  <a
    :href="link"
    class="capitalize duration-200 text-neutral text-xl hover:(text-anti-main-accent border-anti-main-accent border-b-1)"
    >{{ name }}</a
  >
</template>

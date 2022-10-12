<script setup lang="ts">
interface Props {
  round?: boolean;
  size?: string;
  color?: string;
  bgColor?: string;
}
const props = withDefaults(defineProps<Props>(), {
  round: false,
  color: "#fff",
  bgColor: "#222",
});
const getround = computed(() => props.round);
</script>

<template>
  <div class="icon-wrapper" :class="{ 'rounded-full': getround }">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.icon-wrapper {
  padding: 0.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: v-bind(color);
  background-color: v-bind(bgColor);
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
  &:hover {
    color: v-bind(bgColor);
    background-color: v-bind(color);
    border-color: v-bind(bgColor);
    cursor: pointer;
  }
}
</style>

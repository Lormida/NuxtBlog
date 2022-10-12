<script setup lang="ts">
interface Props {
  round?: boolean;
  border?: boolean;
  color?: string;
  bgColor?: string;
}
const props = withDefaults(defineProps<Props>(), {
  round: false,
  border: false,
  color: "#fff",
  bgColor: "#222",
});

const getBorderColor = computed(() => {
  if (props.border) return props.color;
  else return "transparent";
});
</script>

<template>
  <div :class="{ roundClass: round }">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
div {
  padding: 0.2em 0.5em;
  display: flex;
  width: fit-content;
  align-items: center;
  color: v-bind(color);
  background-color: v-bind(bgColor);
  transition: all 0.3s ease-in-out;
  border-width: 2px;
  border-style: solid;
  border-color: v-bind(getBorderColor);
  opacity: 0.9;
  &:hover {
    opacity: 1;
    transform: scale(1.05, 0.96);
  }
}
.roundClass {
  border-radius: 0.5em;
}
</style>

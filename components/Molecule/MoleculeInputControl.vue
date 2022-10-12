<script setup lang="ts">
const props = defineProps<{
  label: string;
  colorTitle: string;
  type?: "text" | "password";
  placeholder: string;
  modelValue: string | null;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string);
}>();
</script>

<template>
  <div class="input-control" flex="~ col" gap-y-3 items-start>
    <label font-semibold class="text-2xl text-white/80" for="email">{{
      props.label
    }}</label>
    <input
      id="email"
      :value="modelValue"
      text-2xl
      w-full
      p="x-5 y-4"
      font-medium
      font-mono
      class="bg-light/20"
      border="1 dark-300"
      rounded-xl
      :type="props.type ? props.type : 'text'"
      name="email"
      @input="
        emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)
      "
    />
  </div>
</template>

<style lang="scss" scoped>
.input-control {
  color: v-bind(colorTitle);
}
</style>

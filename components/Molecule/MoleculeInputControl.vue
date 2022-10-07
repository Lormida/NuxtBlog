<script setup lang="ts">
    const props = defineProps<{
        label: string
        colorTitle: string
        placeholder: string
    }>()
</script>

<template>
    <div class="input-control" flex="~ col" gap-y-3 items-start>
        <label font-semibold class="text-2xl text-white/80" for="email">{{ props.label }}</label>
        <input
            id="email"
            text-2xl
            w-full
            p="x-5 y-4"
            font-medium
            font-mono
            class="bg-light/20"
            border="1 dark-300"
            rounded-xl
            type="text"
            name="email"
        />
    </div>
</template>

<style lang="scss" scoped>
    .input-control {
        color: v-bind(colorTitle);
    }
</style>

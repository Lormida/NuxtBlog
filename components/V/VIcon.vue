<script setup lang="ts">
    interface Props {
        rounded?: boolean
        size?: string
        color?: string
        bgColor?: string
    }
    const props = withDefaults(defineProps<Props>(), {
        rounded: false,
        color: '#fff',
        bgColor: '#222',
        size: '2rem',
    })
    const getRounded = computed(() => {
        if (props.rounded) return '100%'
        return '5%'
    })
</script>

<template>
    <div class="icon-wrapper">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .icon-wrapper {
        border-radius: v-bind(getRounded);
        width: v-bind(size);
        height: v-bind(size);
        padding: 0.5em;
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

<script setup lang="ts">
    interface Props {
        rounded?: boolean
        border?: boolean
        color?: string
        bgColor?: string
        fontSize?: string
    }
    const props = withDefaults(defineProps<Props>(), {
        rounded: false,
        border: false,
        color: '#fff',
        bgColor: '#222',
        fontSize: '20px',
    })

    const getBorderColor = computed(() => {
        if (props.border) return props.color
        else return 'transparent'
    })
</script>

<template>
    <div :class="{ roundedClass: rounded }">
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
        font-size: v-bind(fontSize);
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
    .roundedClass {
        border-radius: 0.5em;
    }
</style>

<script setup lang="ts">
    interface Props {
        buttonType?: 'reset' | 'button' | 'submit'
        round?: boolean
        color?: string
        bgColor?: string
        positionIcon?: 'left' | 'right'
    }
    const props = withDefaults(defineProps<Props>(), {
        buttonType: 'button',
        round: false,
        color: '#fff',
        bgColor: '#222',
        positionIcon: 'right',
    })

    const getPositionIcon = computed(() => {
        if (props.positionIcon === 'right') return 'row'
        else if (props.positionIcon === 'left') return 'row-reverse'
    })
</script>

<template>
    <button :type="props.buttonType" :class="{ roundClass: round }">
        <slot></slot>
        <slot name="icon"></slot>
    </button>
</template>

<style lang="scss" scoped>
    button {
        padding: 0.5em 1em;
        display: flex;
        width: fit-content;
        align-items: center;
        gap: 1rem;
        flex-direction: v-bind(getPositionIcon);
        color: v-bind(color);
        background-color: v-bind(bgColor);
        transition: all 0.3s ease-in-out;
        border: 2px solid transparent;
        &:hover {
            color: v-bind(bgColor);
            background-color: v-bind(color);
            border-color: v-bind(bgColor);
        }
    }
    .roundClass {
        border-radius: 0.75em;
    }
</style>

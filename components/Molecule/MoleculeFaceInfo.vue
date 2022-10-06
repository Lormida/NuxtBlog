<script setup lang="ts"></script>

<template>
    <div flex items-center gap-x-3>
        <slot name="image"></slot>

        <div flex="~ col" items-start>
            <slot name="title"></slot>
            <slot name="additional"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

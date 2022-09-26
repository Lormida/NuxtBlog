<script setup lang="ts"></script>

<template>
    <header class="flex w-full justify-between">
        <div class="grid-structure gap-[1em] grid-rows-2 grid py-3 justify-items-center">
            <slot name="logo"></slot>
        </div>
        <div class="flex gap-3 items-center">
            <slot name="menu"></slot>
        </div>
        <div class="flex gap-5 items-center">
            <slot name="logic-bar"></slot>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .grid-structure {
        grid-template: repeat(2, max-content) / repeat(2, max-content);
    }
</style>

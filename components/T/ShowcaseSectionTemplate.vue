<script setup lang="ts"></script>

<template>
    <section class="flex h-[710px]">
        <div class="basis-3/5 flex flex-col items-center">
            <slot name="content"></slot>
        </div>
        <div class="basis-2/5">
            <slot name="image"></slot>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>

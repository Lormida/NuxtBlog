<script setup lang="ts"></script>

<template>
    <section class="flex h-[710px] w-full">
        <div class="basis-3/5 flex flex-col items-center justify-center">
            <slot name="content"></slot>
        </div>
        <div class="basis-2/5">
            <slot name="image"></slot>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>

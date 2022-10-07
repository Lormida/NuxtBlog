<script setup lang="ts"></script>

<template>
    <div flex justify-between>
        <div class="max-w-2/5">
            <slot name="image"> </slot>
        </div>

        <div class="max-w-2/5">
            <slot name="content"> </slot>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

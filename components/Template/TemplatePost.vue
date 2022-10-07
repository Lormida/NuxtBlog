<script setup lang="ts"></script>

<template>
    <section flex="~ col" w-full justify-around gap-y-10>
        <div flex="~ wrap" w-full justify-between items-center>
            <slot name="title"> </slot>
        </div>

        <div w-full flex items-center justify-between>
            <slot name="filters"></slot>
            <slot name="controls"></slot>
        </div>

        <div w-full flex="~ wrap" gap="x-10 y-16" justify-between>
            <slot name="cards"></slot>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>

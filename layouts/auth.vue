<script lang="ts" setup></script>

<template>
    <div class="container-auth-outer">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
    .container-auth-outer {
        @apply min-w-screen h-full min-h-screen flex justify-center items-center;
        background-image: url('~/assets/imgs/auth-bg2.avif');
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>

<script lang="ts" setup></script>

<template>
    <div class="container-auth-outer">
        <div class="container-auth-inner">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .container-auth-outer {
        @apply min-w-screen h-full min-h-screen flex justify-center items-center;
        background-image: url('~/assets/imgs/auth-bg2.avif');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .container-auth-inner {
        @apply w-3/4 h-3/4 rounded-3xl flex;
        background-image: linear-gradient(
            to right top,
            rgba(12, 15, 20, 0.8),
            rgba(20, 21, 26, 0.8),
            rgba(27, 27, 31, 0.8),
            rgba(34, 32, 37, 0.8),
            rgba(41, 37, 42, 0.8)
        );
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
</style>

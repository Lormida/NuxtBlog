<script lang="ts" setup>
    const { toggleTheme } = useToggleTheme()
    /*  definePageMeta({
     colorMode: 'light',
 }) */
</script>

<template>
    <div class="container">
        <OrganismGlobalHeader />
        <slot />
    </div>
</template>
<style lang="scss" scoped>
    .container {
        box-shadow: rgba(var(--reflectShadow), 0.2) -5px 5px, rgba(var(--reflectShadow), 0.15) -10px 10px,
            rgba(var(--reflectShadow), 0.1) -15px 15px, rgba(var(--reflectShadow), 0.05) -20px 20px,
            rgba(var(--reflectShadow), 0.025) -25px 25px;

        @apply max-w-[1440px] h-full w-4/5 bg-main-accent my-5 rounded-b-lg;
    }
</style>

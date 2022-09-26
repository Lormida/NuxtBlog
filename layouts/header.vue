<script lang="ts" setup>
    const { toggleTheme } = useToggleTheme()
    /*  definePageMeta({
     colorMode: 'light',
 }) */
</script>

<template>
    <div class="container">
        <OGlobalHeaderOrganism />
        <slot />
    </div>
</template>
<style lang="scss" scoped>
    .container {
        @apply max-w-[1440px] h-full bg-main w-4/5 bg-main-accent;
    }
</style>

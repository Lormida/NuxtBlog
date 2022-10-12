<script lang="ts" setup>
/*  definePageMeta({
            colorMode: 'light',
    }) */
</script>

<template>
  <div class="container-global">
    <OrganismGlobalHeader />
    <slot />
    <OrganismGlobalFooter />
  </div>
</template>
<style lang="scss" scoped>
.container-global {
  @apply max-w-[1440px]  w-4/5 mt-5 pb-20 rounded-b-lg;
}
</style>

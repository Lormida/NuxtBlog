<script setup lang="ts">
    definePageMeta({
        layout: 'header',
    })
</script>

<template>
    <main flex="~ flex-col" h-full gap-3>
        <OShowcaseSection />
        <OCollectionArtwork />
        <OBestSeller></OBestSeller>
        <OExplore></OExplore>
    </main>
</template>

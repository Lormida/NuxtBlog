<script setup lang="ts">
    definePageMeta({
        layout: 'header',
    })
</script>

<template>
    <main flex="~ col" h-full gap-y-32>
        <OrganismShowcaseSection />
        <OrganismPost />
    </main>
</template>

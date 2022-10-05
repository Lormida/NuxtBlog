<script setup lang="ts">
    const sourceImage = 'https://api.lorem.space/image/face?w=270&h=330&hash=cse47ifv'
</script>

<template>
    <TemplatePost>
        <template #title>
            <h1 text-5xl font-bold text-anti-main-accent>Popular Posts</h1>
        </template>
        <template #filters> </template>
        <template #cards>
            <MoleculeCardPost v-for="card in 10" :key="card" class="" round :src="sourceImage"></MoleculeCardPost>
        </template>
    </TemplatePost>
</template>

<style lang="scss" scoped></style>

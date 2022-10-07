<script setup lang="ts"></script>

<template>
    <TemplatePagePost my-20>
        <template #image>
            <img rounded-xl src="https://api.lorem.space/image/book?w=600&h=770&hash=xf5me3i2" alt="cover" />
        </template>

        <template #content>
            <OrganismPagePostContent></OrganismPagePostContent>
        </template>
    </TemplatePagePost>
</template>

<style lang="scss" scoped></style>

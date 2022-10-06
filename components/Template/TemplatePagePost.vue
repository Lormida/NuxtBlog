<script setup lang="ts"></script>

<template>
    <div flex justify-between>
        <div class="max-w-2/5">
            <slot name="image">
                <img rounded-xl src="https://api.lorem.space/image/book?w=600&h=770&hash=xf5me3i2" alt="cover" />
            </slot>
        </div>

        <div class="max-w-2/5">
            <slot name="content">
                <OrganismPagePostContent></OrganismPagePostContent>
            </slot>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

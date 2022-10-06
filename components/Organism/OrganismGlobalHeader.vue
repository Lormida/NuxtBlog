<script setup lang="ts">
    const menuItems = [
        { name: 'discover', link: '/discover' },
        { name: 'artwork', link: '/artwork' },
        { name: 'best seller', link: '/best-seller' },
        { name: 'how it work', link: '/how-it-work' },
    ]
</script>

<template>
    <TemplateGlobalHeader class="bg-main-weak-anti border-b px-5 border-neutral rounded-t-lg">
        <template #logo>
            <span class="i-carbon-3d-print-mesh text-anti-main text-4xl"></span>
            <p class="text-4xl text-anti-main font-bold">Cyber Blog</p>
            <MoleculeTogglerTheme col-span-2 />
        </template>

        <template #menu>
            <AtomMenuItem
                v-for="menuItem in menuItems"
                :key="menuItem.name"
                :name="menuItem.name"
                :link="menuItem.link"
            />
        </template>

        <template #logic-bar>
            <input
                class="icon-search text-anti-main w-70 py-2 px-3 text-2xl rounded-lg border-2 border-neutral"
                placeholder="Search..."
            />
            <VButton
                border-2
                bg-color="rgba(var(--btnMain))"
                color="rgba(var(--main)"
                text-2xl
                font-semibold
                round
                position-icon="left"
            >
                <span i-carbon-exit></span>
                Login
            </VButton>
        </template>
    </TemplateGlobalHeader>
</template>

<style lang="scss" scoped>
    .icon-search {
        background: url('https://api.iconify.design/carbon:search.svg?color=%23888888') no-repeat;
        background-position: right 10px top 50%;
        padding-right: 30px;
    }
</style>

<script setup lang="ts">
const menuItems = [
  { name: "discover", link: "/discover" },
  { name: "artwork", link: "/artwork" },
  { name: "best seller", link: "/best-seller" },
  { name: "how it work", link: "/how-it-work" },
];
</script>

<template>
  <TemplateGlobalHeader
    class="bg-main-weak-anti border-b px-5 border-neutral rounded-t-lg"
  >
    <template #logo>
      <span class="i-carbon-3d-print-mesh text-anti-main text-4xl"></span>
      <NuxtLink to="/" class="text-4xl text-anti-main font-bold"
        >Cyber Blog</NuxtLink
      >
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
        p="y-2 x-3"
        class="icon-search text-anti-main w-70 text-2xl rounded-lg border-2 border-neutral"
        placeholder="Search..."
      />
      <NuxtLink :to="'/auth/login'">
        <VButton
          border-2
          p="x-6 y-3"
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
      </NuxtLink>
    </template>
  </TemplateGlobalHeader>
</template>

<style lang="scss" scoped>
.icon-search {
  background: url("https://api.iconify.design/carbon:search.svg?color=%23888888")
    no-repeat;
  background-position: right 10px top 50%;
  padding-right: 30px;
}
</style>

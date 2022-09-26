<script setup>
useHead({
  title: 'Vitesse Nuxt 3',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  min-height: 100vh;
  height: 1px;
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: rgba(var(--main));
}

html.dark {
  background: #222;
  color: white;
}
</style>

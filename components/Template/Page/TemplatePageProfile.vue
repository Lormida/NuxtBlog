<script setup lang="ts"></script>

<template>
  <main flex="~ col">
    <slot name="header-image"></slot>

    <section
      flex="~ col"
      items-center
      gap-y-5
      my-10
      class="translate-y-[-35%] mb-[-50px]"
    >
      <slot name="profile-face"></slot>
    </section>

    <div w-full flex="~ wrap" gap-x-10 gap-y-16 justify-between>
      <slot name="cards"></slot>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>

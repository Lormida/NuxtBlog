<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div class="container-auth-inner">
    <div class="w-1/2 bg-side rounded-l-3xl"></div>

    <div class="w-1/2" flex="~ col" justify-center items-center py-8 gap-y-6>
      <OrganismFormLogin></OrganismFormLogin>

      <div
        flex
        items-center
        justify-end
        gap-x-5
        text="xl light-500/70 right"
        font="medium"
      >
        Yet don't have an account?
        <NuxtLink
          :to="'signup'"
          class="duration-300 text-emerald-500 font-semibold"
          hover="text-light-500 decoration-emerald-500 cursor-pointer scale-115"
          underline="~ offset-8"
          decoration="2 light-500"
        >
          Sign up
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-auth-inner {
  @apply min-w-3/4 min-h-3/4 rounded-3xl flex align-items;
  background-image: linear-gradient(
    to right top,
    rgba(12, 15, 20, 0.8),
    rgba(20, 21, 26, 0.8),
    rgba(27, 27, 31, 0.8),
    rgba(34, 32, 37, 0.8),
    rgba(41, 37, 42, 0.8)
  );
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
.fetch-button {
  background-image: linear-gradient(
    to right,
    rgba(47, 144, 255, 0.6),
    rgba(117, 20, 166, 0.6),
    rgba(247, 167, 213, 0.6),
    rgba(139, 231, 80, 0.6)
  );
  &:hover {
    transform: scale(1.05, 0.98);
  }
}
.bg-side {
  background-image: url("~/assets/imgs/login.avif");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
}
</style>

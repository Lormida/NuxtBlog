<script setup lang="ts">
const sourceImage =
  "https://api.lorem.space/image/face?w=270&h=330&hash=cse47ifv";

const source = ref("DdzFFzCqrhshMSxb9oW3");

const { text, copy, copied } = useClipboard({ source, copiedDuring: 3000 });
const currentSource = computed(() => (copied.value ? "Copied!" : source.value));
</script>

<template>
  <TemplatePageProfile my-10>
    <template #header-image>
      <img
        rounded-2xl
        src="https://api.lorem.space/image/fashion?w=1170&h=200&hash=ki2qjswn"
        alt="cover"
      />
    </template>

    <template #profile-face>
      <img
        rounded-full
        border-2
        border-main
        src="https://api.lorem.space/image/face?w=160&h=160&hash=dul93o7s"
        alt="face-profile"
      />

      <p text="3xl anti-main-accent" font-semibold>James Zeller</p>

      <div
        flex
        items-center
        gap-x-3
        w-max
        p="x-3 y-2"
        text="neutral 2xl"
        border="2 neutral"
        rounded-md
      >
        {{ currentSource }}
        <VIcon
          rounded-xl
          color="rgba(var(--antiMain))"
          bg-color="rgba(var(--main))"
        >
          <span i-carbon-copy text-2xl @click="copy()"></span>
        </VIcon>
      </div>

      <div flex items-center gap-x-5>
        <VIcon rounded-xl>
          <div i-carbon-logo-facebook text-4xl></div>
        </VIcon>

        <VIcon rounded-xl>
          <div i-carbon-logo-twitter text-4xl></div>
        </VIcon>

        <VIcon rounded-xl>
          <div i-carbon-logo-instagram text-4xl></div>
        </VIcon>

        <VIcon rounded-xl>
          <div i-carbon-logo-linkedin text-4xl></div>
        </VIcon>
      </div>
    </template>

    <template #cards>
      <MoleculeCardPost
        v-for="card in 4"
        :key="card"
        :name="card"
        round
        :src="sourceImage"
      />
    </template>
  </TemplatePageProfile>
</template>

<style lang="scss" scoped></style>

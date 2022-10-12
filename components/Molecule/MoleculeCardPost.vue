<script setup lang="ts">
const props = defineProps<{
  src: string;
  round?: boolean;
  name: string | number;
}>();

const tags = ["Music", "Celebrities", "Game"];
</script>
<template>
  <div flex="~ col" gap-y-5>
    <NuxtLink :to="`/post/${props.name}`">
      <img :src="src" :class="{ 'rounded-2xl': round }" alt="picture" />
    </NuxtLink>

    <div w-full flex items-center justify-between>
      <p text="2xl anti-main-accent" font-medium capitalize>
        the paradox forge
      </p>
      <div
        rounded-md
        flex
        justify-items
        items-center
        p="x-3 y-2"
        border-2
        border-badge-main
        text-badge-main
      >
        2.75 ETH
      </div>
    </div>

    <TemplateLikePost>
      <template #circles>
        <img
          v-for="item in 3"
          :key="item"
          src="https://api.lorem.space/image/face?w=40&h=40&hash=vvsfzjcg"
          relative
          rounded-full
          alt="random face"
          :style="{ left: `-${(item - 1) * 10}px` }"
        />
      </template>
      <template #text>
        <p text="xl neutral" font-thin>10+ People like it</p>
      </template>
    </TemplateLikePost>

    <div flex gap-x-4 items-center>
      <AtomTag v-for="tag in tags" :key="tag">{{ tag }}</AtomTag>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

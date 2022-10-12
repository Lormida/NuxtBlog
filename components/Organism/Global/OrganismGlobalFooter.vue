<script setup lang="ts"></script>

<template>
  <TemplateGlobalFooter mt-60>
    <template #social-media>
      <p text="2xl left anti-main" capitalize font-medium>social media</p>
      <p text="neutral xl left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        repellendus, ipsam a blanditiis aliquam officiis eum!
      </p>
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

    <template #content>
      <p text="2xl left anti-main" mb-10 capitalize font-medium>content</p>
      <p text="neutral xl left" capitalize>discover</p>
      <p text="neutral xl left" capitalize>artwork</p>
      <p text="neutral xl left" capitalize>explore</p>
      <p text="neutral xl left">How it work</p>
    </template>

    <template #community>
      <p text="2xl left anti-main" mb-10 capitalize font-medium>community</p>
      <p text="neutral xl left" uppercase>faq</p>
      <p text="neutral xl left" capitalize>help center</p>
      <p text="neutral xl left" capitalize>create item</p>
      <p text="neutral xl left">Give as a feedback</p>
    </template>

    <template #join-email>
      <p text="2xl left anti-main" capitalize font-medium>join us</p>
      <p text="neutral xl left">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
        repellendus fuga atque aperiam hic quibusdam numquam!
      </p>
      <div relative w-full h-15>
        <input
          h-full
          absolute
          left-0
          top-0
          bg-main
          text="anti-main 2xl"
          p="y-2 l-3 r-20"
          border="2 neutral"
          w-full
          rounded-lg
          placeholder="Enter your email"
        />
        <VButton
          color="rgba(var(--main))"
          bg-color="rgba(var(--antiMain))"
          absolute
          rounded-xl
          right-2
          border-2
          p="x-6 y-3"
          class="h-4/5 top-1/2 transform translate-y-[-50%]"
          z-1
        >
          <span i-carbon-arrow-right text-2xl></span
        ></VButton>
      </div>
    </template>
  </TemplateGlobalFooter>
</template>

<style lang="scss" scoped></style>

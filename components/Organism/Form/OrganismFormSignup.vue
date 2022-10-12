<script setup lang="ts">
const router = useRouter();

const signupData = reactive({
  email: null,
  password: null,
  confirmPassword: null,
});
</script>

<template>
  <form class="w-3/4" flex="~ col" gap-y-3>
    <p text="5xl white/80 center" font-mono font-semibold tracking-2 mb-10>
      Signup
    </p>
    <div flex items-center justify-between>
      <VButton
        color="rgba(var(--neutral))"
        bg-color="rgba(var(--black))"
        position-icon="left"
        text-xl
        font-medium
        border="2 neutral"
        rounded-xl
        p="x-5 y-4"
      >
        <template #icon>
          <span i-carbon-logo-google></span>
        </template>
        Sign up with Google
      </VButton>
      <VButton
        color="rgba(var(--neutral))"
        bg-color="rgba(var(--black))"
        position-icon="left"
        text-xl
        font-medium
        border="2 neutral"
        rounded-xl
        p="x-5 y-4"
      >
        <template #icon>
          <span i-carbon-logo-facebook></span>
        </template>
        Sign up with Facebook
      </VButton>
    </div>

    <div flex items-center gap-x-5>
      <div w-full bg-neutral class="h-[2px]"></div>
      <span text="2xl neutral" font-semibold uppercase>or</span>
      <div w-full bg-neutral class="h-[2px]"></div>
    </div>

    <MoleculeInputControl
      v-model="signupData.email"
      label="Email"
      color-title="rgba(255,255,255,0.8)"
      placeholder="Your email"
    />
    <MoleculeInputControl
      v-model="signupData.password"
      label="Password"
      type="password"
      color-title="rgba(255,255,255,0.8)"
      placeholder="Min of 6 characters"
    />
    <MoleculeInputControl
      v-model="signupData.confirmPassword"
      type="password"
      label="Confirm Password"
      color-title="rgba(255,255,255,0.8)"
      placeholder="Min of 6 characters"
    />

    <button
      type="submit"
      p="x-3 y-5"
      my-5
      font="medium mono"
      duration-300
      opacity-40
      rounded-xl
      hover:opacity-90
      text="white 3xl"
      class="fetch-button"
    >
      Signup
    </button>
  </form>
</template>

<style lang="scss" scoped>
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
</style>

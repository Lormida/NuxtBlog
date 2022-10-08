<script setup lang="ts">
    definePageMeta({
        layout: 'auth',
    })
</script>

<template>
    <div class="container-auth-inner">
        <div class="w-1/2 bg-side rounded-l-3xl"></div>

        <div class="w-1/2" flex justify-center items-center py-8>
            <div class="w-3/4" flex="~ col" gap-y-3>
                <p text="5xl white/80 center" font-mono font-semibold tracking-2 mb-10>Signup</p>

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

                <MoleculeInputControl label="Name" color-title="rgba(255,255,255,0.8)" placeholder="Andrew" />
                <MoleculeInputControl
                    label="Email"
                    color-title="rgba(255,255,255,0.8)"
                    placeholder="mail@example.com"
                />
                <MoleculeInputControl
                    label="Password"
                    color-title="rgba(255,255,255,0.8)"
                    placeholder="Min of 6 characters"
                />
                <MoleculeInputControl
                    label="Confirm Password"
                    color-title="rgba(255,255,255,0.8)"
                    placeholder="Min of 6 characters"
                />

                <button
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

                <div flex items-center justify-end gap-x-5 text="xl light-500/70 right" font="medium">
                    Already have an account?
                    <NuxtLink
                        :to="'login'"
                        class="duration-300 text-emerald-500 font-semibold"
                        hover="text-light-500 decoration-emerald-500 cursor-pointer scale-115"
                        underline="~ offset-8"
                        decoration="2 light-500"
                    >
                        Log in
                    </NuxtLink>
                </div>
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
        background-image: url('~/assets/imgs/signup.avif');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        opacity: 0.5;
    }
</style>

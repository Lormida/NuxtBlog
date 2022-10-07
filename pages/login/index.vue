<script setup lang="ts">
    definePageMeta({
        layout: 'auth',
    })
</script>

<template>
    <div class="w-1/2">
        <img w-full h-full rounded-l-3xl src="~/assets/imgs/login.avif" alt="login" />
    </div>

    <div class="w-1/2" flex justify-center items-center>
        <div class="w-3/4" flex="~ col" gap-y-6>
            <p text="5xl white/80 center" font-mono font-semibold tracking-2 mb-10>Login</p>

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
                    Sign in with Google
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
                    Sign in with Facebook
                </VButton>
            </div>

            <div flex items-center gap-x-5>
                <div w-full bg-neutral class="h-[2px]"></div>
                <span text="2xl neutral" font-semibold uppercase>or</span>
                <div w-full bg-neutral class="h-[2px]"></div>
            </div>

            <MoleculeInputControl label="Email" color-title="rgba(255,255,255,0.8)" placeholder="mail@example.com" />
            <MoleculeInputControl
                label="Password"
                color-title="rgba(255,255,255,0.8)"
                placeholder="Min of 6 characters"
            />

            <div flex justify-between my-8>
                <VCheckbox class="text-white/80 font-medium" label="Remember me" :checked="true"></VCheckbox>

                <button text="2xl neutral" duration-300 hover:text-light-500 font-medium>Forgot password?</button>
            </div>

            <button
                p="x-3 y-5"
                font="medium mono"
                duration-300
                opacity-40
                rounded-xl
                hover:opacity-90
                text="white 3xl"
                class="fetch-button"
            >
                Login
            </button>
        </div>
    </div>
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

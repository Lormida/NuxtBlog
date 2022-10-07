<script setup lang="ts"></script>

<template>
    <TemplateShowcaseSection pt-10>
        <template #content>
            <div flex="~ col" gap-30>
                <div flex="~ col" gap-y-10>
                    <p uppercase font-bold text-neutral>create, explore, collect digital art nfts</p>
                    <p class="max-w-[580px] font-bold text-(anti-main-accent 6xl)">
                        Discover Your Digital Art & Collect NFTs
                    </p>
                    <NuxtLink :to="`/profile/andrew-ananenko`">
                        <VButton
                            border-2
                            p="x-14 y-5"
                            class="font-semibold text-2xl"
                            color="rgba(var(--main))"
                            bg-color="rgba(var(--btnMain))"
                            position-icon="right"
                            round
                        >
                            <template #icon>
                                <span i-carbon-direction-straight-right></span>
                            </template>
                            Post
                        </VButton>
                    </NuxtLink>
                </div>
                <div class="flex justify-between max-w-[450px] w-full">
                    <AtomRateStats v-for="el in 3" :key="el">
                        <template #main>19k+</template>
                        <template #additional>Artwork</template>
                    </AtomRateStats>
                </div>
            </div>
        </template>
        <template #image>
            <img src="https://api.lorem.space/image/game?w=500&h=670&hash=vr5vae7p" rounded-3xl alt="" class="src" />
        </template>
    </TemplateShowcaseSection>
</template>

<style lang="scss" scoped></style>

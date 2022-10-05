<script setup lang="ts">
    const filters = ['Art item', 'Art', 'Celebrities', 'Game', 'Music', 'Video', 'Crypto']
    const controlButtons = [
        {
            text: 'Filter',
            color: 'rgba(253,253,253,0.8)',
            bgColor: 'rgba(15,15,15,.9)',
            icon: 'i-carbon-filter',
        },
        {
            text: 'Newest',
            color: 'rgba(253,253,253,0.8)',
            bgColor: 'rgba(15,15,15,.9)',
            icon: 'i-carbon-network-overlay',
        },
    ]
</script>

<template>
    <section flex="~ col" w-full justify-around gap-y-10>
        <div flex="~ wrap" w-full justify-between items-center>
            <slot name="title"> </slot>
        </div>

        <div w-full flex items-center justify-between>
            <slot name="filters">
                <div flex items-center gap-x-3>
                    <VButton
                        v-for="filter in filters"
                        :key="filter"
                        round
                        font-medium
                        color="rgba(var(--neutral))"
                        bg-color="rgba(var(--main))"
                        border="1 neutral"
                        text-2xl
                    >
                        {{ filter }}
                    </VButton>
                </div>
            </slot>
            <slot name="controls">
                <div flex items-center gap-x-10>
                    <VButton
                        v-for="controlButton in controlButtons"
                        :key="controlButton.text"
                        :color="controlButton.color"
                        :bg-color="controlButton.bgColor"
                        border-on
                        round
                        position-icon="left"
                        border-2
                        font-semibold
                        text-2xl
                    >
                        <template #icon>
                            <span :class="controlButton.icon"></span>
                        </template>
                        {{ controlButton.text }}
                    </VButton>
                </div>
            </slot>
        </div>

        <div w-full flex="~ wrap" gap-x-10 gap-y-16 justify-between>
            <slot name="cards"></slot>
        </div>
    </section>
</template>

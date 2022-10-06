<script setup lang="ts">
    import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'

    const filters = ['Art item', 'Art', 'Celebrities', 'Game', 'Music', 'Video', 'Crypto']
    const controlButtons = [
        {
            text: 'Newest',
            color: 'white',
            bgColor: 'rgba(15,15,15,.9)',
            icon: 'i-carbon-network-overlay',
        },
    ]

    const people = [
        { id: 1, name: 'Popularity', unavailable: false },
        { id: 2, name: 'Duration', unavailable: false },
        { id: 3, name: 'Date', unavailable: false },
    ]
    const selectedPerson = ref(people[2])
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
                        p="x-6 y-2"
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
                    <div relative rounded-xl>
                        <Listbox v-model="selectedPerson">
                            <ListboxButton
                                flex
                                justify-center
                                gap-x-6
                                items-center
                                class="min-w-[200px]"
                                text="main 2xl"
                                p="x-6 y-3"
                                duration-300
                                hover="bg-main text-anti-main"
                                bg-anti-main
                                border-2
                                border-anti-main
                                rounded-xl
                                font-medium
                            >
                                <div i-carbon-filter text-2xl></div>
                                {{ selectedPerson.name }}</ListboxButton
                            >
                            <Transition name="list">
                                <ListboxOptions
                                    absolute
                                    w-full
                                    class="min-w-[200px]"
                                    border-2
                                    border-neutral
                                    top-20
                                    left-0
                                >
                                    <ListboxOption
                                        v-for="person in people"
                                        :key="person.id"
                                        v-slot="{ active, selected }"
                                        px-4
                                        py-3
                                        text-xl
                                        text-left
                                        pl-10
                                        font-medium
                                        class="min-w-[200px]"
                                        duration-300
                                        hover:cursor-pointer
                                        :value="person"
                                        as="template"
                                    >
                                        <li
                                            :class="{
                                                'text-main bg-anti-main': active,
                                                'text-anti-main bg-main': !active,
                                                'selected-item': selected,
                                            }"
                                        >
                                            {{ person.name }}
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </Transition>
                        </Listbox>
                    </div>
                    <VButton
                        v-for="controlButton in controlButtons"
                        :key="controlButton.text"
                        :color="controlButton.color"
                        :bg-color="controlButton.bgColor"
                        round
                        p="x-12 y-3"
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

<style lang="scss" scoped>
    .list-enter-active {
        animation: list-in 0.4s;
    }
    .list-leave-active {
        animation: list-in 0.4s reverse;
    }
    @keyframes list-in {
        0% {
            opacity: 0;
            transform: scale(0);
        }
        50% {
            opacity: 0.5;
            transform: scale(1.25);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    .selected-item {
        transform: scaleX(1.1);
        color: rgba(var(--emerald-900)) !important;
        background-color: rgba(var(--emerald-200)) !important;
    }
</style>

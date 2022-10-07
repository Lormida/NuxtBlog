<script setup lang="ts">
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

    const dataFaces = [
        {
            id: 1,
            title: 'Bid accepted',
            price: '0.005 ETH',
            name: 'Susan Franklin',
            date: '6/15/2021, 3:20 AM',
        },
        {
            id: 2,
            title: 'Bid pended',
            price: '0.005 ETH',
            name: 'Susan Franklin',
            date: '6/15/2021, 3:20 AM',
        },
        {
            id: 3,
            title: 'Bid rejected',
            price: '0.005 ETH',
            name: 'Susan Franklin',
            date: '6/15/2021, 3:20 AM',
        },
    ]
</script>

<template>
    <section flex="~ col" gap-y-5>
        <h1 font-semibold text="4xl anti-main-accent" capitalize>the paradox forge</h1>

        <div flex gap-x-5 items-center>
            <VBadge round border font-semibold bg-color="transparent" color="rgba(var(--btnMain))">2.75 ETH</VBadge>
            <p text-neutral font-medium>10+ People place bit</p>
        </div>

        <p text="3xl anti-main-accent" font-semibold>$3,950.87</p>

        <p text="xl neutral left" my-5 font-medium>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nihil error eaque a, est, velit amet id itaque
            accusantium dolorum, fuga excepturi adipisci tempore non!
        </p>

        <p text="xl anti-main-accent" font-semibold>Owner</p>

        <div flex items-center gap-x-3>
            <img rounded-full src="https://api.lorem.space/image/face?w=60&h=60&hash=ot3s3pck" alt="owner" />
            <p font-semibold text="xl anti-main-accent">James Zeller</p>
        </div>

        <TabGroup>
            <TabList my-5 border-2 flex justify-around p="y-3" rounded-xl>
                <Tab v-slot="{ selected }" as="template">
                    <button
                        :class="{
                            'bg-blue-500 rounded-xl font-medium outline-none py-2 px-8 text-main text-xl': selected,
                            'bg-main py-2 px-8 text-xl text-neutral': !selected,
                        }"
                    >
                        Info
                    </button>
                </Tab>
                <Tab v-slot="{ selected }" as="template">
                    <button
                        :class="{
                            'bg-blue-500 rounded-xl font-medium outline-none py-2 px-8 text-main text-xl': selected,
                            'bg-main py-2 px-8 text-xl text-neutral': !selected,
                        }"
                    >
                        Content
                    </button>
                </Tab>
                <Tab v-slot="{ selected }" as="template">
                    <button
                        :class="{
                            'bg-blue-500 rounded-xl  font-medium outline-none py-2 px-8 text-main text-xl': selected,
                            'bg-main py-2 px-8 text-xl text-neutral': !selected,
                        }"
                    >
                        Sources
                    </button>
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel flex="~ col" gap-y-5>
                    <MoleculeFaceInfo v-for="dataFace in dataFaces" :key="dataFace.id">
                        <template #image>
                            <img
                                rounded-full
                                src="https://api.lorem.space/image/face?w=60&h=60&hash=stxlaf16"
                                alt="image"
                            />
                        </template>
                        <template #title>
                            <p text-neutral font-semibold>
                                {{ dataFace.title }} <span text="anti-main">{{ dataFace.price }}</span>
                            </p>
                        </template>
                        <template #additional>
                            <p text-neutral font-semibold>
                                by <span text="anti-main">{{ dataFace.name }}</span> at {{ dataFace.date }}
                            </p>
                        </template>
                    </MoleculeFaceInfo>
                </TabPanel>
                <TabPanel>Content 2</TabPanel>
                <TabPanel>Content 3</TabPanel>
            </TabPanels>
        </TabGroup>

        <div flex gap-x-5>
            <VButton
                text-xl
                font-medium
                p="x-20 y-4"
                round
                color="rgba(var(--mainAccent))"
                bg-color="rgba(var(--btnMain))"
                border-2
                >Purchase Now</VButton
            >
            <VButton
                text-xl
                font-medium
                p="x-20 y-4"
                round
                color="rgba(var(--antiMainAccent))"
                bg-color="rgba(var(--main))"
                border-2
                >Place a bid</VButton
            >
        </div>
    </section>
</template>

<style lang="scss" scoped></style>

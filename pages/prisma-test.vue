<script setup lang="ts">
    const supabase = useSupabaseClient()

    async function login() {}
    async function logout() {}

    async function createPost() {}
    async function updateUser() {}
    async function getPost() {}

    async function getSessionData() {}
</script>

<template>
    <div
        rounded-2xl
        flex="~ col"
        gap-y-10
        items-center
        class="w-1/2 h-1/2"
        m="l-1/4 t-1/8"
        border="2 neutral"
        bg-dark-700
        p="x-10 y-10"
    >
        <h1 text="5xl white">Test page</h1>
        <button bg-light-100 rounded-xl font-bold text-black p-5 @click="createPost">Create first post</button>
        <button bg-light-100 rounded-xl font-bold text-black p-5 @click="login">Login</button>
        <button bg-light-100 rounded-xl font-bold text-black p-5 @click="logout">Logout</button>
        <button bg-light-100 rounded-xl font-bold text-black p-5 @click="getSessionData">Get session data</button>
        <button bg-light-100 rounded-xl font-bold text-black p-5 @click="getPost">Get post</button>
        <button bg-light-100 rounded-xl font-bold text-black p-5 @click="updateUser">Update user</button>
    </div>
</template>

<style lang="scss" scoped></style>

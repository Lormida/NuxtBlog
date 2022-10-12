<script setup lang="ts">
const supabase = useSupabaseClient();

async function login() {
  const loginData = await supabase.auth.signIn({
    email: "pocketbook.love24@gmail.com",
    password: "midapa24",
  });
  console.log("loginData", loginData);
}
async function logout() {
  const logoutData = await supabase.auth.signOut();
  console.log("logoutData", logoutData);
}

async function createPost() {
  const user_id = "141a97cf-5ab3-4aad-a24a-a5f6f71468db";
  const content_data_id = "b7785568-2e81-4aaa-aab2-b5944da37aad";
  const like_data_id = "50db954e-3e65-4e61-b09a-30749891c172";

  const newPost = await supabase.from("Posts").insert({
    name: "Post 2",
    user_id,
    content_data_id,
    likes: like_data_id,
  });
  console.log(Object.keys(newPost));
  console.log(newPost);
}
async function updateUser() {
  const allPosts = await getPost();
  const myPostId1 = allPosts[0].id;
  const myPostId2 = allPosts[1].id;
  console.log("myPostId1", myPostId1);
  console.log("myPostId2", myPostId2);

  const myUser = (
    await supabase.from("Users").select().eq("name", "Andrew").single()
  ).data;
  console.log("myUser", myUser);

  const updatedUser = await supabase
    .from("Users")
    .update({
      posts: [myPostId1, myPostId2],
    })
    .match({ name: "Andrew" });

  console.log("updatedUser", updatedUser);
}
async function getPost() {
  const response = await supabase
    .from("Posts")
    .select("name, Users(user_id,last_name)");
  console.log("Post:", response.data);
  return response.data;
}

async function getSessionData() {
  const session = await supabase.auth.session();
  console.log("session", session);
}

supabase.auth.onAuthStateChange((_, session) => {
  console.log("Session", session);
});
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
    <button
      bg-light-100
      rounded-xl
      font-bold
      text-black
      p-5
      @click="createPost"
    >
      Create first post
    </button>
    <button bg-light-100 rounded-xl font-bold text-black p-5 @click="login">
      Login
    </button>
    <button bg-light-100 rounded-xl font-bold text-black p-5 @click="logout">
      Logout
    </button>
    <button
      bg-light-100
      rounded-xl
      font-bold
      text-black
      p-5
      @click="getSessionData"
    >
      Get session data
    </button>
    <button bg-light-100 rounded-xl font-bold text-black p-5 @click="getPost">
      Get post
    </button>
    <button
      bg-light-100
      rounded-xl
      font-bold
      text-black
      p-5
      @click="updateUser"
    >
      Update user
    </button>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup>
import { Switch } from "@headlessui/vue";

const { toggleTheme } = useToggleTheme();

const enabled = ref(false);

watch(enabled, () => toggleTheme());
</script>

<template>
  <Switch v-slot="{ checked }" v-model="enabled" as="template">
    <button class="bg-neutral flex h-10 w-25 items-center rounded-full">
      <span
        :class="
          checked
            ? 'translate-x-15 i-carbon-sun'
            : 'translate-x-1 i-carbon-moon'
        "
        class="inline-block text-2xl transform rounded-full bg-main transition"
      />
    </button>
  </Switch>
</template>

<script setup lang="ts">
import { useUserStore } from './stores/user';

const user = useUserStore()

async function setup() {
  await user.init()
}

setup()

</script>

<template>
  <Toast />
  <router-view />
</template>

<style scoped></style>

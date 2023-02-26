<template>
  <button
    @click="logout()"
    v-if="isLogin"
    type="button"
    class="py-2 px-4 text-base text-red-500 font-bold rounded-md transition  hover:bg-red-500 hover:text-white"
  >
  Salir
  </button>
</template>

<script setup lang="ts">
import { useLogin } from "../composables/useLogin";

const { isLogin, logout } = useLogin();

</script>

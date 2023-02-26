<template>
        <button v-if="isLogin" @click="savePlayer()" type="button" class="py-2 px-4 text-base text-white font-bold rounded-md bg-gradient-to-r from-blue-500 to-purple-500">Guardar Partida</button>
</template>

<script setup lang="ts">
  import { useLogin } from '../composables/useLogin';
  

  const {isLogin, savePlayer} = useLogin();

</script>
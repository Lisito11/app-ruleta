

<template>
<nav class=" bg-white w-full flex justify-between items-center  h-20 font-sans">
    
  <div class="inline-flex ml-6">
        <img src="/ruleta.png" class="h-12">
        <div class="py-1 px-3">
           <h2 class="text-4xl text-black">La Ruleta</h2>
        </div>
    </div>
    
    <div v-if="isLogin" class="text-2xl flex ">
      <h2 class="px-1">{{player.name}}</h2>
      <h2 class="px-1 text-green-700">- RD${{player.amount}}</h2>
    </div>

    <div v-else class="text-4xl">
      <h2 class="px-1">Bienvenido</h2>
    </div>
    
    <LoginPlayer/>
    

</nav>

</template>

<script setup lang="ts">
  import LoginPlayer from "./LoginPlayer.vue";
  import { useLogin } from '../composables/useLogin';
  

  const {isLogin, player} = useLogin();
</script>
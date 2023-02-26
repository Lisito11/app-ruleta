<template>
        <div class="flex-initial">
      <div class="flex justify-end items-center relative">
       
        <div  class="flex mr-4 items-center ">
          <input 
          v-if="!isLogin"
          v-model="player.name" 
          class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base" 
          placeholder="Escribe tu nombre"/>
          

          <div v-if="!isLogin" class="px-3" @click="login()" >
            <button type="button" class="py-2 px-4 text-base text-white font-bold rounded-md transition duration-200 bg-gradient-to-r from-red-500 to-pink-500">
                  Ingresar
            </button>
          </div>
          <div class="pr-3">
            <SaveGame/>
          </div>
          <div>
            <CloseGame/>
          </div>
        </div>

      </div>
    </div>
</template>

<script setup lang="ts">
  import { useLogin } from '../composables/useLogin';
  import CloseGame from './CloseGame.vue';
  import SaveGame from "./SaveGame.vue";

  const {player, login, isLogin} = useLogin();


</script>
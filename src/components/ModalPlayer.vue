<template>
  <div v-if="modal" class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50">
    <div class="flex flex-col justify-center items-center">
      <div
        class="w-1/4 overflow-hidden shadow-xl rounded-lg bg-white my-3"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="flex justify-between border-b border-gray-100 px-5 py-4">
          <div>
            <i class="fa fa-exclamation-triangle text-orange-500"></i>
            <span class=" text-2xl">Jugador nuevo</span>
          </div>
          <div>
            <button>
              <i
                class="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"
              ></i>
            </button>
          </div>
        </div>

        <div class="px-5 py-5 text-gray-600">
          <label>Saldo inicial</label>
          <input
            v-model="player.amount"
            class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
            placeholder="Escribe tu saldo inicial"
            type="number"
          />
        </div>

        <div class="px-5 py-4 flex justify-end">
          <button
            @click="setAmount()"
            class="bg-blue-500 mr-1 rounded text-lg py-2 px-3 text-white hover:bg-blue-600 transition duration-150 w-full"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useLogin } from '../composables/useLogin';
  
  const {modal, player, setAmount} = useLogin();

</script>

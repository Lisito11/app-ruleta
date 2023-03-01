<template>
  <div class="flex flex-col justify-center items-center w-max">
    <div>
      <img src="/ruleta.gif" class="rounded h-32" />
    </div>
    <h5 class="my-3 text-xl font-black">Tipo de apuesta</h5>
    <div>
      <div class="mb-12">
        <BetOptions />
      </div>
    </div>
    <div class="flex flex-col mt-32 my-6 w-full">
      <label>Cantidad a apostar</label>
      <input
        v-model="bet.amount"
        class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md mb-3 py-2 px-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
        placeholder="Monto de la apuesta"
        type="number"
      />

      <div class="flex flex-row justify-between my-3">
        <!-- Tipo de apuesta -->
        <p v-if="bet.betType == BetType.Color" class="text-xl">
          Tipo: <span class="text-lg">Color</span>
        </p>
        <p
          v-if="
            bet.betType == BetType.ColorEven || bet.betType == BetType.ColorOdd
          "
          class="text-xl"
        >
          Tipo:<span class="text-lg"> Números </span>
        </p>
        <p v-if="bet.betType == BetType.NumberColor" class="text-xl">
          Tipo: <span class="text-lg">Número y Color</span>
        </p>

        <!-- Apuesta -->
        <p v-if="bet.betType == BetType.Color" class="text-xl">
          Apuesta:
          <span
            :class="`${
              bet.color == 'Rojo' ? 'text-red-500' : 'text-black'
            } text-lg`"
            >{{ `${bet.color}` }}</span
          >
        </p>

        <p
          v-if="
            bet.betType == BetType.ColorEven || bet.betType == BetType.ColorOdd
          "
          class="text-xl"
        >
          Apuesta:
          <span
            :class="`${
              bet.color == 'Rojo' ? 'text-red-500' : 'text-black'
            } text-lg`"
            >{{
              bet.numberType == NumberType.even
                ? `${bet.color} Pares`
                : `${bet.color} Impares`
            }}</span
          >
        </p>

        <p v-if="bet.betType == BetType.NumberColor" class="text-xl">
          Apuesta:
          <span
            :class="`${
              bet.color == 'Rojo' ? 'text-red-500' : 'text-black'
            } text-lg`"
            >{{ `${bet.num} ${bet.color}  ` }}</span
          >
        </p>

        <p class="text-xl">
          Monto: <span class="text-lg text-green-700">RD${{ bet.amount }}</span>
        </p>
      </div>
      <button
        @click="girar()"
        class="w-full bg-blue-500 rounded hover:bg-blue-600 text-white font-semibold py-2"
      >
        Girar
      </button>
    </div>

    <div v-if="ruleta.color" class="flex flex-row mt-3 my-6 w-full mb-10">
      <div class="flex flex-col w-full justify-center">
        <h3 class="text-xl">Resultado - Ruleta</h3>
        <div class="flex flex-row w-full">
          <p class="pt-1">
            <span
              :class="`${
                ruleta.color == 'Rojo'
                  ? 'text-white bg-red-500'
                  : 'text-white bg-black'
              } border rounded p-1`"
              >{{ ruleta.color }}</span
            >
          </p>
          <p class="pt-1 px-1">
            <span
              :class="`${
                ruleta.color == 'Rojo'
                  ? 'text-white bg-red-500'
                  : 'text-white bg-black'
              } border rounded p-1`"
              >{{
                ruleta.numberType == NumberType.even ? "Par" : "Impar"
              }}</span
            >
          </p>
          <p class="pt-1">
            <span
              :class="`${
                ruleta.color == 'Rojo'
                  ? 'text-white bg-red-500'
                  : 'text-white bg-black'
              } border rounded p-1`"
              >{{ ruleta.randomNumber }}</span
            >
          </p>
        </div>
      </div>

      <div class="flex flex-col w-full">
        <img class="h-32 w-32" src="/win.gif" />
        <p class="my-3 text-xl">Ganaste: RD$200</p>
        <!-- <p class="my-3 text-xl">Perdiste: RD$200</p>   -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BetOptions from "./bet-options/BetOptions.vue";
import { useRuleta } from "../composables/useRuleta";
import { NumberType } from "../helpers/numberType";
import { BetType } from "../helpers/betType";

const { girar, ruleta, bet } = useRuleta();

//TODO: Validar todos los campos antres de girar la rueda
//TODO: Validar que el monto apostado sea menor o igual al monto del jugador no puede ser menor que 1 
//TODO: Validar que la apuesta fue igual a la ruleta 
//TODO: Add metodos para validar la apuesta
//TODO: Sumar el valor ganado al monto del player
//TODO: Restar el valor perdido al monto del player
//TODO: Colocar gif dependiendo del resultado
</script>

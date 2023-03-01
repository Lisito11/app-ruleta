

<template>
    <ul class="mx-auto grid max-w-full w-full grid-cols-3 gap-x-5 px-8">
      <li class="">
        <input
          class="peer sr-only"
          type="radio"
          value="yes"
          name="answer"
          id="yes"
          checked
        />
        <label
          class="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out"
          for="yes"
          >Color</label
        >

        <div
          class="
          absolute 
          bg-white 
          shadow-lg 
          p-6 border 
          mt-2 
          border-indigo-300 
          rounded-lg 
          w-max
          mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1"
        >
          <ColorOption/>
        </div>
      </li>

      <li class="">
        <input
          class="peer sr-only"
          type="radio"
          value="no"
          name="answer"
          id="no"
        />
        <label
          class="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out"
          for="no"
          >Pares / Impares</label
        >

        <div
          class="
          absolute 
          bg-white 
          shadow-lg 
          p-6 border 
          mt-2 
          border-indigo-300 
          rounded-lg 
          w-max
          mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1"
        >
          <NumberTypeOption/>
        </div>
      </li>

      <li class="">
        <input
          class="peer sr-only"
          type="radio"
          value="yesno"
          name="answer"
          id="yesno"
        />
        <label
          class="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out"
          for="yesno"
          >Número y Color</label
        >

        <div
          class="
          absolute 
          bg-white 
          shadow-lg 
          p-6 border 
          mt-2 
          border-indigo-300 
          rounded-lg 
          w-max
          mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1"
        >
          <NumberColor/>
        </div>
      </li>
    </ul>
</template>

<script setup lang="ts">
import ColorOption from './ColorOption.vue';
import NumberTypeOption from './NumberTypeOption.vue';
import NumberColor from './NumberColor.vue';

</script>
<template>

        <div class="flex flex-row gap-1" >
          <div class="inline-block radioColor">
            
            <button @click="getColor('red')" :class="`${statusColor.colorRed} px-2 py-1 rounded-lg flex text-3xl font-bold border hover:bg-red-500 hover:text-white`">
                Rojo
            </button>
          </div>
          <div class="inline-block radioColor">
            <button @click="getColor('black')" :class="`${statusColor.colorBlack} px-2 py-1 rounded-lg flex text-3xl font-bold border hover:bg-black hover:text-white`">
                Negro
            </button>
          </div>
        
        </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useRuleta } from '../../composables/useRuleta';
  import { BetType } from '../../helpers/betType';
  
  const statusColor = ref({
    colorRed: 'bg-white text-red-500',
    colorBlack: 'bg-white text-black',
  });

  const getColor = (color:string) => {

    bet.value.betType = BetType.Color;

    if (color === 'red') {
       bet.value.color = 'Rojo';

       statusColor.value.colorRed = 'bg-red-500 text-white';
       statusColor.value.colorBlack = 'bg-white text-black';
    }

    if (color === 'black') {
       bet.value.color = 'Negro';
       
       statusColor.value.colorBlack = 'bg-black text-white';
       statusColor.value.colorRed = 'bg-white text-red-500';
    }
  }

  const {bet} = useRuleta();
  
  
</script>
<template>
<div class="flex flex-col gap-2">
    <div class="flex flex-row gap-1">
      <div class="inline-block radioColor">
        <button @click="getNumberType(NumberType.even,'red')" :class="`${statusColor.colorRedEven} px-2 py-1 rounded-lg flex text-3xl font-bold border hover:bg-red-500 hover:text-white`">
            Pares
        </button>
      </div>
      <div class="inline-block radioColor">
        <button @click="getNumberType(NumberType.odd,'black')" :class="`${statusColor.colorBlackOdd} px-2 py-1 rounded-lg flex text-3xl font-bold border hover:bg-black hover:text-white`">
            Impares
        </button>
      </div>
    
    </div>

    <div class="flex flex-row gap-1">
      <div class="inline-block radioColor">
        <button @click="getNumberType(NumberType.odd,'red')" :class="`${statusColor.colorRedOdd} px-2 py-1 rounded-lg flex text-3xl font-bold border hover:bg-red-500 hover:text-white`">
            Impares
        </button>
      </div>
      <div class="inline-block radioColor">
        <button @click="getNumberType(NumberType.even,'black')" :class="`${statusColor.colorBlackEven} px-2 py-1 rounded-lg flex text-3xl font-bold border hover:bg-black hover:text-white`">
            Pares
        </button>
      </div>
    
    </div>
</div>
   
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { NumberType } from '../../helpers/numberType';
  import { useRuleta } from '../../composables/useRuleta';
  import { BetType } from '../../helpers/betType';
  

  const statusColor = ref({
    colorRedEven: 'bg-white text-red-500',
    colorBlackEven: 'bg-white text-black',
    colorRedOdd: 'bg-white text-red-500',
    colorBlackOdd: 'bg-white text-black'
  });


  const getNumberType = (option:NumberType, color: string) => {

    if (option == NumberType.even) {
      bet.value.betType = BetType.ColorEven;
      bet.value.numberType = NumberType.even;

      if (color === 'red'){
          bet.value.color = 'Rojo';
          statusColor.value.colorRedEven = 'bg-red-500 text-white';

          statusColor.value.colorBlackEven = 'bg-white text-black';
          statusColor.value.colorBlackOdd = 'bg-white text-black';
          statusColor.value.colorRedOdd = 'bg-white text-red-500';
      }

      if (color === 'black') {
          bet.value.color = 'Negro';
          statusColor.value.colorBlackEven = 'bg-black text-white';

          statusColor.value.colorBlackOdd = 'bg-white text-black';
          statusColor.value.colorRedEven = 'bg-white text-red-500';
          statusColor.value.colorRedOdd = 'bg-white text-red-500';
      }

    }

    if (option == NumberType.odd) {
      bet.value.betType = BetType.ColorOdd;
      bet.value.numberType = NumberType.odd;

      if (color === 'red'){
          bet.value.color = 'Rojo';
          statusColor.value.colorRedOdd = 'bg-red-500 text-white';

          statusColor.value.colorBlackEven = 'bg-white text-black';
          statusColor.value.colorRedEven = 'bg-white text-red-500';
          statusColor.value.colorBlackOdd = 'bg-white text-black';
      }

      if (color === 'black') {
          bet.value.color = 'Negro';
          statusColor.value.colorBlackOdd = 'bg-black text-white';

          statusColor.value.colorBlackEven = 'bg-white text-black';
          statusColor.value.colorRedEven = 'bg-white text-red-500';
          statusColor.value.colorRedOdd = 'bg-white text-red-500';
      }

    }

}

  const {bet} = useRuleta();


  
</script>
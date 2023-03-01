<template>
<div class="max-w-lg mx-auto">
    <div v-if="status == AlertType.ERROR" class="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700" role="alert">
        <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <div>
            <span class="font-medium">Error!</span> Ha ocurrido un error al guardar el usuario.
        </div>
    </div>


    <div v-if="status == AlertType.SUCCESS" class="flex justify-between $alert bg-green-100 rounded-lg p-4 mb-4 text-base text-green-700" role="alert">
        <div>
        <svg class="w-5 h-5 inline mr-3 mb-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="font-medium">Completado! </span> Usuario guardado correctamente.
        </div>
        <svg @click="status = AlertType.NONE" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-3 w-5 h-5 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </div>
</div>
</template>

<script setup lang="ts">
  import { useLogin } from '../composables/useLogin';
  import { AlertType } from '../helpers/alertType';

  const {status} = useLogin();

</script>
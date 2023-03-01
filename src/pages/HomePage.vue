<template>
    <Navbar/>
    
    <ModalPlayer/>
    <Alert/>
    <div class="flex justify-center items-center">
        <Ruleta/>
    </div>
</template>
  
  
<script setup lang="ts">
    import Navbar from '../components/Navbar.vue'
    import ModalPlayer from '../components/ModalPlayer.vue'
    import Alert from '../components/Alert.vue';
    import Ruleta from '../components/Ruleta.vue';
</script>
  
  
  
  
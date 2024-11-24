<template>
    <div class="p-4">
      <h1 class="mb-4 text-2xl font-bold">Eliminar Ofertas Expiradas</h1>
      <button @click="expirar" class="btn">Eliminar Ofertas Expiradas</button>
      <p v-if="message" class="mt-4">{{ message }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { expirarOfertas } from '../services/api';
  
  export default {
    setup() {
      const message = ref('');
  
      const expirar = async () => {
        const response = await expirarOfertas();
        message.value = response.data.message;
      };
  
      return { expirar, message };
    },
  };
  </script>
  
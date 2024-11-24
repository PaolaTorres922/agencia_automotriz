<template>
    <div class="p-4">
      <h1 class="mb-4 text-2xl font-bold">Verificar Clientes</h1>
      <button @click="verificar" class="btn">Verificar Clientes</button>
      <p v-if="message" class="mt-4">{{ message }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { verificarClientes } from '../services/api';
  
  export default {
    setup() {
      const message = ref('');
  
      const verificar = async () => {
        const response = await verificarClientes();
        message.value = response.data.message;
      };
  
      return { verificar, message };
    },
  };
  </script>
  
<template>
    <div class="p-4">
      <h1 class="mb-4 text-2xl font-bold">Clientes</h1>
      <ul>
        <li
          v-for="cliente in clientes"
          :key="cliente.id"
          class="p-2 mb-2 bg-gray-100 rounded shadow"
        >
          {{ cliente.nombre }} {{ cliente.apellido }} - {{ cliente.email }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { getClientes } from '../services/api';
  
  export default {
    setup() {
      const clientes = ref([]);
  
      onMounted(async () => {
        const { data } = await getClientes();
        clientes.value = data;
      });
  
      return { clientes };
    },
  };
  </script>
  
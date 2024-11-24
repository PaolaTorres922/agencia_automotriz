<template>
    <div class="p-4">
      <h1 class="mb-4 text-2xl font-bold">Ofertas</h1>
      <ul>
        <li
          v-for="oferta in ofertas"
          :key="oferta.id"
          class="p-2 mb-2 bg-gray-100 rounded shadow"
        >
          {{ oferta.tipo_oferta }} - {{ oferta.costo }} (Validez: {{ oferta.validez }})
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { getOfertas } from '../services/api';
  
  export default {
    setup() {
      const ofertas = ref([]);
  
      onMounted(async () => {
        const { data } = await getOfertas();
        ofertas.value = data;
      });
  
      return { ofertas };
    },
  };
  </script>
  
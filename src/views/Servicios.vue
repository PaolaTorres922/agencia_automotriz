<template>
    <div class="p-4">
      <h1 class="mb-4 text-2xl font-bold">Servicios</h1>
      <ul>
        <li
          v-for="servicio in servicios"
          :key="servicio.id"
          class="p-2 mb-2 bg-gray-100 rounded shadow"
        >
          {{ servicio.tipo_servicio }} - {{ servicio.fecha }} {{ servicio.hora }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { getServicios } from '../services/api';
  
  export default {
    setup() {
      const servicios = ref([]);
  
      onMounted(async () => {
        const { data } = await getServicios();
        servicios.value = data;
      });
  
      return { servicios };
    },
  };
  </script>
  
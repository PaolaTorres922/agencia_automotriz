<template>
    <div class="p-4">
      <h1 class="mb-4 text-2xl font-bold">Vehículos</h1>
      <ul>
        <li
          v-for="vehiculo in vehiculos"
          :key="vehiculo.id"
          class="p-2 mb-2 bg-gray-100 rounded shadow"
        >
          {{ vehiculo.marca }} {{ vehiculo.modelo }} - {{ vehiculo.placa }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { getVehiculos } from '../services/api';
  
  export default {
    setup() {
      const vehiculos = ref([]);
  
      onMounted(async () => {
        const { data } = await getVehiculos();
        vehiculos.value = data;
      });
  
      return { vehiculos };
    },
  };
  </script>
  
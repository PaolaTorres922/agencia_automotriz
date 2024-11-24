<template>
    <div class="p-4">
      <h1 class="mb-4 text-2xl font-bold">Crear Vehículo</h1>
      <form @submit.prevent="submitForm" class="space-y-4">
        <input v-model="vehiculo.marca" placeholder="Marca" class="input" />
        <input v-model="vehiculo.modelo" placeholder="Modelo" class="input" />
        <input v-model="vehiculo.anio" placeholder="Año" class="input" />
        <input v-model="vehiculo.color" placeholder="Color" class="input" />
        <input v-model="vehiculo.placa" placeholder="Placa" class="input" />
        <button type="submit" class="btn">Crear Vehículo</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { createVehiculo } from '../services/api';
  
  export default {
    setup() {
      const vehiculo = ref({
        marca: '',
        modelo: '',
        anio: '',
        color: '',
        placa: '',
      });
  
      const submitForm = async () => {
        await createVehiculo(vehiculo.value);
        alert('Vehículo creado con éxito');
        vehiculo.value = { marca: '', modelo: '', anio: '', color: '', placa: '' };
      };
  
      return { vehiculo, submitForm };
    },
  };
  </script>
  
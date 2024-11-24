<template>
    <div class="p-4">
      <h1 class="mb-4 text-2xl font-bold">Actualizar Vehículo</h1>
      <form @submit.prevent="submitForm" class="space-y-4">
        <input v-model="vehiculo.marca" placeholder="Marca" class="input" />
        <input v-model="vehiculo.modelo" placeholder="Modelo" class="input" />
        <input v-model="vehiculo.anio" placeholder="Año" class="input" />
        <input v-model="vehiculo.color" placeholder="Color" class="input" />
        <input v-model="vehiculo.placa" placeholder="Placa" class="input" />
        <button type="submit" class="btn">Actualizar Vehículo</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { updateVehiculo } from '../services/api';
  
  export default {
    props: ['id'],
    setup(props) {
      const vehiculo = ref({
        marca: '',
        modelo: '',
        anio: '',
        color: '',
        placa: '',
      });
  
      const submitForm = async () => {
        await updateVehiculo(props.id, vehiculo.value);
        alert('Vehículo actualizado con éxito');
      };
  
      return { vehiculo, submitForm };
    },
  };
  </script>
  
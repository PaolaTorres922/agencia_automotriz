<template>
    <div class="p-4">
      <h1 class="mb-4 text-2xl font-bold">Crear Servicio</h1>
      <form @submit.prevent="submitForm" class="space-y-4">
        <input v-model="servicio.tipo_servicio" placeholder="Tipo de Servicio" class="input" />
        <input v-model="servicio.fecha" type="date" class="input" />
        <input v-model="servicio.hora" type="time" class="input" />
        <input v-model="servicio.costo" placeholder="Costo" class="input" />
        <button type="submit" class="btn">Crear Servicio</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { createServicio } from '../services/api';
  
  export default {
    setup() {
      const servicio = ref({
        tipo_servicio: '',
        fecha: '',
        hora: '',
        costo: '',
      });
  
      const submitForm = async () => {
        await createServicio(servicio.value);
        alert('Servicio creado con éxito');
        servicio.value = { tipo_servicio: '', fecha: '', hora: '', costo: '' };
      };
  
      return { servicio, submitForm };
    },
  };
  </script>
  
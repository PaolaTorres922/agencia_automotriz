<template>
    <div class="p-4">
      <h1 class="mb-4 text-2xl font-bold">Actualizar Servicio</h1>
      <form @submit.prevent="submitForm" class="space-y-4">
        <input v-model="servicio.tipo_servicio" placeholder="Tipo de Servicio" class="input" />
        <input v-model="servicio.fecha" type="date" class="input" />
        <input v-model="servicio.hora" type="time" class="input" />
        <input v-model="servicio.costo" placeholder="Costo" class="input" />
        <button type="submit" class="btn">Actualizar Servicio</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { updateServicio } from '../services/api';
  
  export default {
    props: ['id'],
    setup(props) {
      const servicio = ref({
        tipo_servicio: '',
        fecha: '',
        hora: '',
        costo: '',
      });
  
      const submitForm = async () => {
        await updateServicio(props.id, servicio.value);
        alert('Servicio actualizado con éxito');
      };
  
      return { servicio, submitForm };
    },
  };
  </script>
  
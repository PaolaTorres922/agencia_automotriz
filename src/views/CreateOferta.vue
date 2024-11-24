<template>
    <div class="p-4">
      <h1 class="mb-4 text-2xl font-bold">Crear Oferta</h1>
      <form @submit.prevent="submitForm" class="space-y-4">
        <input v-model="oferta.tipo_oferta" placeholder="Tipo de Oferta" class="input" />
        <input v-model="oferta.fecha" type="date" class="input" />
        <input v-model="oferta.hora" type="time" class="input" />
        <input v-model="oferta.costo" placeholder="Costo" class="input" />
        <button type="submit" class="btn">Crear Oferta</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { createOferta } from '../services/api';
  
  export default {
    setup() {
      const oferta = ref({
        tipo_oferta: '',
        fecha: '',
        hora: '',
        costo: '',
      });
  
      const submitForm = async () => {
        await createOferta(oferta.value);
        alert('Oferta creada con éxito');
        oferta.value = { tipo_oferta: '', fecha: '', hora: '', costo: '' };
      };
  
      return { oferta, submitForm };
    },
  };
  </script>
  
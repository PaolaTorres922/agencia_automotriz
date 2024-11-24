<template>
    <div class="p-4">
      <h1 class="mb-4 text-2xl font-bold">Actualizar Oferta</h1>
      <form @submit.prevent="submitForm" class="space-y-4">
        <input v-model="oferta.tipo_oferta" placeholder="Tipo de Oferta" class="input" />
        <input v-model="oferta.fecha" type="date" class="input" />
        <input v-model="oferta.hora" type="time" class="input" />
        <input v-model="oferta.costo" placeholder="Costo" class="input" />
        <button type="submit" class="btn">Actualizar Oferta</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { updateOferta } from '../services/api';
  
  export default {
    props: ['id'],
    setup(props) {
      const oferta = ref({
        tipo_oferta: '',
        fecha: '',
        hora: '',
        costo: '',
      });
  
      const submitForm = async () => {
        await updateOferta(props.id, oferta.value);
        alert('Oferta actualizada con éxito');
      };
  
      return { oferta, submitForm };
    },
  };
  </script>
  
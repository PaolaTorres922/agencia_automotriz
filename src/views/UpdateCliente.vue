<template>
    <div class="p-4">
      <h1 class="mb-4 text-2xl font-bold">Actualizar Cliente</h1>
      <form @submit.prevent="submitForm" class="space-y-4">
        <input v-model="cliente.nombre" placeholder="Nombre" class="input" />
        <input v-model="cliente.apellido" placeholder="Apellido" class="input" />
        <input v-model="cliente.direccion" placeholder="Dirección" class="input" />
        <input v-model="cliente.telefono" placeholder="Teléfono" class="input" />
        <input v-model="cliente.email" placeholder="Email" class="input" />
        <button type="submit" class="btn">Actualizar Cliente</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { updateCliente } from '../services/api';
  
  export default {
    props: ['id'],
    setup(props) {
      const cliente = ref({
        nombre: '',
        apellido: '',
        direccion: '',
        telefono: '',
        email: '',
      });
  
      const submitForm = async () => {
        await updateCliente(props.id, cliente.value);
        alert('Cliente actualizado con éxito');
      };
  
      return { cliente, submitForm };
    },
  };
  </script>
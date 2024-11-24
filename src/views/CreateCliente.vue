<template>
    <div class="p-4">
      <h1 class="mb-4 text-2xl font-bold">Crear Cliente</h1>
      <form @submit.prevent="submitForm" class="space-y-4">
        <input v-model="cliente.nombre" placeholder="Nombre" class="input" />
        <input v-model="cliente.apellido" placeholder="Apellido" class="input" />
        <input v-model="cliente.direccion" placeholder="Dirección" class="input" />
        <input v-model="cliente.telefono" placeholder="Teléfono" class="input" />
        <input v-model="cliente.email" placeholder="Email" class="input" />
        <button type="submit" class="btn">Crear Cliente</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { createCliente } from '../services/api';
  
  export default {
    setup() {
      const cliente = ref({
        nombre: '',
        apellido: '',
        direccion: '',
        telefono: '',
        email: '',
      });
  
      const submitForm = async () => {
        await createCliente(cliente.value);
        alert('Cliente creado con éxito');
        cliente.value = { nombre: '', apellido: '', direccion: '', telefono: '', email: '' };
      };
  
      return { cliente, submitForm };
    },
  };
  </script>
  
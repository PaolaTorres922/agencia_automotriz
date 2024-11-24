import { defineStore } from 'pinia';
import axios from 'axios';

export const useClientesStore = defineStore('clientes', {
  state: () => ({
    clientes: [],
  }),
  actions: {
    async fetchClientes() {
      try {
        const response = await axios.get('http://localhost:3000/clientes');
        this.clientes = response.data;
      } catch (error) {
        console.error('Error al obtener los clientes:', error);
      }
    },
    async addCliente(cliente) {
      try {
        await axios.post('http://localhost:3000/clientes', cliente);
        this.fetchClientes();
      } catch (error) {
        console.error('Error al agregar el cliente:', error);
      }
    },
  },
});

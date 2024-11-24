import { defineStore } from 'pinia';
import axios from 'axios';

export const useOfertasStore = defineStore('ofertas', {
  state: () => ({
    ofertas: [],
  }),
  actions: {
    async fetchOfertas() {
      try {
        const response = await axios.get('http://localhost:3000/ofertas');
        this.ofertas = response.data;
      } catch (error) {
        console.error('Error al obtener las ofertas:', error);
      }
    },
    async addOferta(oferta) {
      try {
        await axios.post('http://localhost:3000/ofertas', oferta);
        this.fetchOfertas();
      } catch (error) {
        console.error('Error al agregar la oferta:', error);
      }
    },
  },
});

import { defineStore } from 'pinia';
import axios from 'axios';

export const useServiciosStore = defineStore('servicios', {
  state: () => ({
    servicios: [],
  }),
  actions: {
    async fetchServicios() {
      try {
        const response = await axios.get('http://localhost:3000/servicios');
        this.servicios = response.data;
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
    },
    async addServicio(servicio) {
      try {
        await axios.post('http://localhost:3000/servicios', servicio);
        this.fetchServicios();
      } catch (error) {
        console.error('Error al agregar el servicio:', error);
      }
    },
  },
});

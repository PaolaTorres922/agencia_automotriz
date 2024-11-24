import { defineStore } from 'pinia';
import axios from 'axios';

export const useVehiculosStore = defineStore('vehiculos', {
  state: () => ({
    vehiculos: [],
  }),
  actions: {
    async fetchVehiculos() {
      try {
        const response = await axios.get('http://localhost:3000/vehiculos');
        this.vehiculos = response.data;
      } catch (error) {
        console.error('Error al obtener los vehículos:', error);
      }
    },
    async addVehiculo(vehiculo) {
      try {
        await axios.post('http://localhost:3000/vehiculos', vehiculo);
        this.fetchVehiculos();
      } catch (error) {
        console.error('Error al agregar el vehículo:', error);
      }
    },
  },
});

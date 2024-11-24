import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getClientes = () => api.get('/clientes');
export const getVehiculos = () => api.get('/vehiculos');
export const getServicios = () => api.get('/servicios');
export const getOfertas = () => api.get('/ofertas');
export const createCliente = (cliente) => api.post('/clientes', cliente);
export const createVehiculo = (vehiculo) => api.post('/vehiculos', vehiculo);
export const createServicio = (servicio) => api.post('/servicios', servicio);
export const createOferta = (oferta) => api.post('/ofertas', oferta);
export const updateCliente = (id, cliente) => api.put(`/clientes/${id}`, cliente);
export const updateVehiculo = (id, vehiculo) => api.put(`/vehiculos/${id}`, vehiculo);
export const updateServicio = (id, servicio) => api.put(`/servicios/${id}`, servicio);
export const updateOferta = (id, oferta) => api.put(`/ofertas/${id}`, oferta);
export const verificarClientes = () => api.get('/clientes/verificar');
export const eliminarOfertas = () => api.delete('/ofertas/eliminar');

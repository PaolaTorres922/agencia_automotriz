import { createRouter, createWebHistory } from 'vue-router';
import Clientes from '../views/Clientes.vue';
import Vehiculos from '../views/Vehiculos.vue';
import Servicios from '../views/Servicios.vue';
import Ofertas from '../views/Ofertas.vue';
import CreateCliente from '../views/CreateCliente.vue';
import CreateVehiculo from '../views/CreateVehiculo.vue';
import CreateServicio from '../views/CreateServicio.vue';
import CreateOferta from '../views/CreateOferta.vue';
import UpdateCliente from '../views/UpdateCliente.vue';
import UpdateVehiculo from '../views/UpdateVehiculo.vue';
import UpdateServicio from '../views/UpdateServicio.vue';
import UpdateOferta from '../views/UpdateOferta.vue';
import VerificarClientes from '../views/VerificarClientes.vue';
import EliminarOfertas from '../views/EliminarOfertas.vue';


const routes = [
  { path: '/clientes', component: Clientes },
  { path: '/vehiculos', component: Vehiculos },
  { path: '/servicios', component: Servicios },
  { path: '/ofertas', component: Ofertas },
  { path: '/create-cliente', component: CreateCliente },
  { path: '/create-vehiculo', component: CreateVehiculo },
  { path: '/create-servicio', component: CreateServicio },
  { path: '/create-oferta', component: CreateOferta },
  { path: '/update-cliente/:id', component: UpdateCliente, props: true },
  { path: '/update-vehiculo/:id', component: UpdateVehiculo, props: true },
  { path: '/update-servicio/:id', component: UpdateServicio, props: true },
  { path: '/update-oferta/:id', component: UpdateOferta, props: true },
  { path: '/verificar-clientes', component: VerificarClientes },
  { path: '/eliminar-ofertas', component: EliminarOfertas },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

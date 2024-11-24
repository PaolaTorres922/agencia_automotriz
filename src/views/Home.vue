<template>
    <div class="mt-20 text-center">
      <h1 class="text-4xl font-bold">Bienvenido a la Agencia Automotriz</h1>
      <div class="mt-8">
        <router-link to="/clientes" class="text-blue-500"> Clientes</router-link>
      </div>
      <div>
        <router-link to="/vehiculos" class="text-blue-500"> Vehículos</router-link>
      </div>
      <div>
        <router-link to="/servicios" class="text-blue-500"> Servicios</router-link>
      </div>
      <div>
        <router-link to="/ofertas" class="text-blue-500"> Ofertas</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  }
  </script>
  
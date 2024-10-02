<script setup lang="ts">
import { ref } from 'vue';

// Campos de inicio de sesión
const username = ref("");
const password = ref("");
const isAuthenticated = ref(localStorage.getItem("isAuthenticated") === "true");


// Función para iniciar sesión
function loginRequest() {
  if (username.value === "hazaelfg" && password.value === "palodecarnazadelpolito") {
    isAuthenticated.value = true;
    localStorage.setItem("isAuthenticated", "true");
    alert("¡Inicio de sesión exitoso!");
  } else {
    alert("Credenciales incorrectas. Inténtalo de nuevo.");
  }
}

// Función para cerrar sesión
function logout() {
  isAuthenticated.value = false;
  localStorage.removeItem("isAuthenticated");
  alert("Has cerrado sesión.");
}
</script>

<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold mb-6 text-center">Login</h2>

    <form v-if="!isAuthenticated" @submit.prevent="loginRequest">
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
        <input
          type="text"
          v-model="username"
          name="username"
          id="username"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          placeholder="Enter your username"
        />
      </div>

      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          v-model="password"
          name="password"
          id="password"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        class="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Login
      </button>
    </form>

    <div v-else>
      <p class="mb-4">¡Has iniciado sesión exitosamente!</p>
      <button
        @click="logout"
        class="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToMovie(movieId: number) {
  router.push(`/movie/${movieId}`);
}

function redirectToSerie(movieId: number) {
  router.push(`/serie/${movieId}`);
}


// Definimos las interfaces para los tipos de películas y series
interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

interface Series {
  id: number;
  name: string;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
}

// Declaramos los arrays con los tipos correctos
const movies = ref<Movie[]>([]);
const trendingMovies = ref<Movie[]>([]);
const freeMovies = ref<Movie[]>([]);
const allSeries = ref<Series[]>([]);
const currentIndex = ref(0);
const searchQuery = ref('');

// Función para obtener las películas populares
const fetchPeliculasPopulares = async () => {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=4e72051e3bc2c615ed21d74e9a55ac50&language=en-US&page=1'
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    movies.value = data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
  }
};

// Función para obtener las películas en tendencia
const fetchPelicuasTendencia = async () => {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=4e72051e3bc2c615ed21d74e9a55ac50'
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    trendingMovies.value = data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
  }
};

// Función para obtener todas las series
const fetchSeries = async () => {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/tv/popular?api_key=4e72051e3bc2c615ed21d74e9a55ac50&language=en-US&page=1'
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    allSeries.value = data.results;
  } catch (error) {
    console.error('Error fetching series:', error);
  }
};

// Función para obtener las películas gratuitas (No las encontre)
const fetchPeliculasGratis = async () => {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=4e72051e3bc2c615ed21d74e9a55ac50&with_watch_providers=free'
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    freeMovies.value = data.results;
  } catch (error) {
    console.error('Error fetching free movies:', error);
  }
};

// Llamamos a las funciones fetch cuando el componente se monta
onMounted(() => {
  fetchPeliculasPopulares();
  fetchPelicuasTendencia();
  fetchSeries();
  fetchPeliculasGratis();
});

// Función para avanzar a la siguiente imagen
const nextImage = () => {
  if (movies.value.length === 0) return; 
  currentIndex.value = (currentIndex.value + 1) % movies.value.length;
};

// Función para retroceder a la imagen anterior
const prevImage = () => {
  if (movies.value.length === 0) return;
  currentIndex.value = (currentIndex.value - 1 + movies.value.length) % movies.value.length;
};

// Función para manejar la búsqueda
const handleSearch = () => {
  console.log('Search:', searchQuery.value);
};

</script>

<template>
  <!-- Carrusel de imágenes populares -->
  <div class="relative w-full h-96 overflow-hidden">
    <div
      class="absolute inset-0 flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }"
    >
      <div v-for="(movie) in movies" :key="movie.id" class="w-1/3 h-full flex-shrink-0">
        <img
          v-if="movie.backdrop_path"
          :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
          :alt="movie.title"
          class="object-cover w-full h-full"
        />
      </div>
    </div>

    <div class="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white px-4">
      <h1 class="text-4xl font-bold mb-4">Bienvenido a Cuevano Movies</h1>
      <p class="mb-6">Encuentra tus películas favoritas con facilidad</p>
      <div class="w-full max-w-lg">
        <input
          v-model="searchQuery"
          @keyup.enter="handleSearch"
          type="text"
          placeholder="Buscar película..."
          class="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>
    </div>

    <button @click="prevImage" class="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2">⟨</button>
    <button @click="nextImage" class="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2">⟩</button>
  </div>

 <!-- Sección de Tendencias -->
<section class="my-8">
  <h2 class="text-2xl font-bold mb-4">Tendencia</h2>
  <div class="flex overflow-x-auto space-x-4">
    <div
      v-for="(movie) in trendingMovies"
      :key="movie.id"
      class="flex-none w-48 bg-white rounded-lg shadow-lg p-2 cursor-pointer"
      @click="redirectToMovie(movie.id)"
    >
      <img
        v-if="movie.poster_path"
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        :alt="movie.title"
        class="w-full rounded-md"
      />
      <div class="mt-2">
        <span class="bg-green-500 text-white px-2 py-1 rounded-md text-sm">
          {{ Math.round(movie.vote_average * 10) / 10 }}★
        </span>
        <h3 class="font-semibold mt-1">{{ movie.title }}</h3>
        <p class="text-sm text-gray-500">{{ new Date(movie.release_date).toLocaleDateString() }}</p>
      </div>
    </div>
  </div>
</section>

  <!-- Sección de Películas Populares -->
  <section class="my-8">
    <h2 class="text-2xl font-bold mb-4">Más Populares</h2>

    <div class="flex overflow-x-auto space-x-4">
      <div
        v-for="(movie) in movies"
        :key="movie.id"
        class="flex-none w-48 bg-white rounded-lg shadow-lg p-2 cursor-pointer"
        @click="redirectToMovie(movie.id)"
      >
        <img
          v-if="movie.poster_path"
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          :alt="movie.title"
          class="w-full rounded-md"
        />
        <div class="mt-2">
          <span class="bg-green-500 text-white px-2 py-1 rounded-md text-sm">
            {{ Math.round(movie.vote_average * 10) / 10 }}★
          </span>
          <h3 class="font-semibold mt-1">{{ movie.title }}</h3>
          <p class="text-sm text-gray-500">{{ new Date(movie.release_date).toLocaleDateString() }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección de Series -->
  <section class="my-8">
    <h2 class="text-2xl font-bold mb-4">Ver Series</h2>
    <div class="flex overflow-x-auto space-x-4">
      <div
        v-for="(serie) in allSeries"
        :key="serie.id"
        class="flex-none w-48 bg-white rounded-lg shadow-lg p-2 cursor-pointer"
        @click="redirectToSerie(serie.id)"
      >
        <img
          v-if="serie.poster_path"
          :src="`https://image.tmdb.org/t/p/w500${serie.poster_path}`"
          :alt="serie.name"
          class="w-full rounded-md"
        />
        <div class="mt-2">
          <span class="bg-blue-500 text-white px-2 py-1 rounded-md text-sm">
            {{ Math.round(serie.vote_average * 10) / 10 }}★
          </span>
          <h3 class="font-semibold mt-1">{{ serie.name }}</h3>
          <p class="text-sm text-gray-500">{{ new Date(serie.first_air_date).toLocaleDateString() }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección de Películas Gratuitas -->
  <section class="my-8">
    <h2 class="text-2xl font-bold mb-4">Ver Gratis</h2>

    <div class="flex overflow-x-auto space-x-4">
      <div
        v-for="(movie) in freeMovies"
        :key="movie.id"
        class="flex-none w-48 bg-white rounded-lg shadow-lg p-2 cursor-pointer"
        @click="redirectToMovie(movie.id)"
      >
        <img
          v-if="movie.poster_path"
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          :alt="movie.title"
          class="w-full rounded-md"
        />
        <div class="mt-2">
          <span class="bg-green-500 text-white px-2 py-1 rounded-md text-sm">
            {{ Math.round(movie.vote_average * 10) / 10 }}★
          </span>
          <h3 class="font-semibold mt-1">{{ movie.title }}</h3>
          <p class="text-sm text-gray-500">{{ new Date(movie.release_date).toLocaleDateString() }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.flex::-webkit-scrollbar {
  width: 6px;
}

.flex::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}
</style>

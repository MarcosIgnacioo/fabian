<template>
    <div v-if="serie">
      <div class="flex space-x-2">
        <div class="relative w-full bg-fixed bg-center bg-cover bg-no-repeat p-6 text-white"
             :style="`background-image: url(${imgBasePath + serie.backdrop_path});`">
          <div class="absolute inset-0 bg-black bg-opacity-90"></div>
          <div class="relative flex space-x-6 max-w-7xl mx-auto">
            <img :src="imgBasePath + serie.poster_path"
                 :alt="serie.name"
                 class="w-96 h-auto shadow-lg rounded-lg">
            <div>
              <h1 class="text-5xl font-bold">{{ serie.name }} ({{ getReleaseYear(serie.first_air_date) }})</h1>
              <p class="mt-2">Fecha de estreno: {{ serie.first_air_date }} ({{ serie.original_language }})</p>
              <p>Número de temporadas: {{ serie.number_of_seasons }}</p>
              <p>Rating: {{ serie.vote_average }}</p>



            <button :class="isFavorite ? 'bg-red-500' : 'bg-blue-500'" class="text-white px-4 py-2 mt-4 rounded-lg" 
              @click="toggleFavorite">
              {{ isFavorite ? 'Eliminar de favoritos' : 'Agregar a favoritos' }}
            </button>

              <p class="mt-8">{{ serie.overview }}</p>
  
              <div class="mt-8">
                <h2 class="text-2xl font-semibold">Géneros:</h2>
                <ul>
                  <li v-for="genre in serie.genres" :key="genre.id">
                    <span
                      @click="redirectToGenre(genre.id)"
                      class="cursor-pointer hover:underline">
                      {{ genre.name }}
                    </span>
                  </li>
                </ul>
              </div>
  
              <div class="mt-8">
                <h2 class="text-2xl font-semibold">Creador(es):</h2>
                <p>{{ getCreators() }}</p>
              </div>
  
              <div class="mt-8">
                <h2 class="text-2xl font-semibold">Palabras clave:</h2>
                <ul>
                  <li v-for="keyword in keywords" :key="keyword.id" class="list-disc ml-4">
                    {{ keyword.name }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="mt-8 ml-8 mr-8 border">
        <h2 class="text-2xl ml-4 mt-4 font-semibold">Actores principales:</h2>
        <div class="flex overflow-x-auto space-x-4 py-4">
          <div v-for="actor in getActors()" :key="actor.name" class="ml-4 mr-4 border p-2 rounded-lg text-center flex-shrink-0 w-48 cursor-pointer"
          @click="redirectToPerson(actor.id)">
            <img :src="imgBasePath + actor.profile_path" :alt="actor.name" class="w-full h-auto rounded-lg mb-1">
            <p class="font-bold">{{ actor.name }}</p>
            <p class="text-sm">{{ actor.character }}</p>
          </div>
        </div>
      </div>
  
    <div class="mt-8 ml-8 mr-8 border">
    <h2 class="text-2xl ml-4 mt-4 font-semibold">Temporadas:</h2>
    <div v-if="serie.seasons && serie.seasons.length > 0" class="flex overflow-x-auto space-x-4 py-4">
        <div v-for="season in serie.seasons" :key="season.id" class="ml-4 mr-4 border p-2 rounded-lg text-center flex-shrink-0 w-48">
        <img v-if="season.poster_path" :src="imgBasePath + season.poster_path" :alt="season.name" class="w-full h-auto rounded-lg mb-1">
        <p class="font-bold">{{ season.name }}</p>
        <p class="text-sm">Temporada {{ season.season_number }}</p>
        <p class="text-sm">Fecha de estreno: {{ season.air_date }}</p>
        <!-- Botón para redirigir a la temporada específica -->
        <button @click="redirectToSeason(serie.id, season.season_number)" class="mt-2 bg-blue-500 text-white px-4 py-1 rounded-lg">
            Ver Temporada
        </button>
        </div>
    </div>
    <div v-else>
        <p class="ml-4 mt-4">No hay temporadas disponibles.</p>
    </div>
    </div>

      <div class="mt-8 ml-8 mr-8 border">
        <h2 class="text-2xl ml-4 mt-4 font-semibold">Información adicional:</h2>
        <p class="ml-4 mt-4">Título Original: {{ serie.original_name }}</p>
        <p class="ml-4">Estado: {{ serie.status }}</p>
        <p class="ml-4">Idioma Original: {{ serie.original_language }}</p>
      </div>
  
      <div class="mt-8 ml-8 mr-8 border">
        <h2 class="text-2xl ml-4 mt-4 font-semibold">Trailer:</h2>
        <div v-if="trailer" class="mt-4 mb-4 ml-4">
          <iframe
            :src="`https://www.youtube.com/embed/${trailer.key}`"
            width="560"
            height="315"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div v-else>
          <p class="ml-4 mt-4">No hay tráiler disponible.</p>
        </div>
      </div>
  
      <div class="mt-8 ml-8 mr-8 border">
        <h2 class="text-2xl ml-4 mt-4 font-semibold">Recomendaciones:</h2>
        <div v-if="recommendations && recommendations.results && recommendations.results.length > 0" class="flex overflow-x-auto space-x-4 py-4">
          <div v-for="recommendation in recommendations.results" :key="recommendation.id" class="ml-4 mr-4 border p-2 rounded-lg text-center cursor-pointer flex-shrink-0 w-48" @click="redirectToSerie(recommendation.id)">
            <img :src="imgBasePath + recommendation.poster_path" :alt="recommendation.name" class="w-full h-auto rounded-lg mb-1">
            <p class="font-bold">{{ recommendation.name }}</p>
            <p class="text-sm">{{ (recommendation.vote_average * 10).toFixed(0) }}% recomendado</p>
          </div>
        </div>
        <div v-else>
          <p class="ml-4 mt-4">No hay recomendaciones disponibles.</p>
        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import headers from '../globals';
import { ref, watch } from 'vue';
  
interface Serie {
    backdrop_path: string;
    genres: { id: number; name: string }[];
    id: number;
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    first_air_date: string;
    name: string;
    vote_average: number;
    number_of_seasons: number;
    status: string;
    created_by: { id: number; name: string }[];
    seasons: { id: number; name: string; season_number: number; air_date: string; poster_path: string }[]; // Nueva propiedad para las temporadas
}
  
interface Credits {
    crew: { job: string; name: string }[];
    cast: { id:number; name: string; character: string; profile_path: string }[];
}
  
interface Recommendations {
    results: { id: number; name: string; poster_path: string; vote_average: number }[];
}

interface Video {
    id: string;
    key: string;
    name: string;
    site: string;
    type: string;
}
  
interface Keyword {
      id: number;
      name: string;
}
  
const router = useRouter();
  
function redirectToGenre(genreId: number) {
      router.push(`/series/category/${genreId}`);
}
  
function redirectToSerie(movieId: number) {
      router.push(`/serie/${movieId}`);
}

function redirectToSeason(seriesId: number, seasonNumber: number) {
  router.push(`/season-details/${seriesId}/${seasonNumber}`);
}

function redirectToPerson(personId: number) {
  router.push(`/person/${personId}`);
}


  
  const route = useRoute();
  const serieId: string = route.params.id as string;
  const imgBasePath: string = "https://image.tmdb.org/t/p/w500";
  
  let serie = ref<Serie | null>(null);
  const credits = ref<Credits | null>(null);
  const recommendations = ref<Recommendations | null>(null);
  const trailer = ref<any | null>(null);
  const keywords = ref<Keyword[]>([]);
  let seasons = ref<any[]>([]); // Nueva referencia para almacenar temporadas
  
  watch(() => route.params.id, (newId) => {
      if (typeof newId === 'string') {
          getSerieDetails(newId);
          window.scrollTo(0, 0);
      }
  });
  
  getSerieDetails(serieId);

  const isFavorite = ref(false);

  function toggleFavorite() {

if (!serie.value) return;

const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
const movieIndex = favoritos.findIndex((fav: Serie) => fav.id === serie.value!.id);

if (movieIndex === -1) {
  favoritos.push(serie.value);
  isFavorite.value = true;
} else {
  favoritos.splice(movieIndex, 1);
  isFavorite.value = false;
}
localStorage.setItem('favoritos', JSON.stringify(favoritos));
}
  
  async function getSerieDetails(serieId: string) {
      const requestOptions: RequestInit = {
          method: "GET",
          headers: headers,
          redirect: "follow"
      };
  
      // Obtener el tráiler
      const videosResponse = await fetch(`https://api.themoviedb.org/3/tv/${serieId}/videos`, requestOptions);
      const videosJson = await videosResponse.json();
      trailer.value = videosJson.results.find((video: Video) => video.type === 'Trailer' && video.site === 'YouTube');
  
      // Obtener los detalles de la serie
      const response = await fetch(`https://api.themoviedb.org/3/tv/${serieId}`, requestOptions);
      const json = await response.json();
      serie.value = json;
  
      // Obtener el elenco
      const creditsResponse = await fetch(`https://api.themoviedb.org/3/tv/${serieId}/credits`, requestOptions);
      const creditsJson = await creditsResponse.json();
      credits.value = creditsJson;
  
      // Obtener recomendaciones
      const recommendationsResponse = await fetch(`https://api.themoviedb.org/3/tv/${serieId}/recommendations`, requestOptions);
      const recommendationsJson = await recommendationsResponse.json();
      recommendations.value = recommendationsJson;
  
      // Obtener palabras clave
      const keywordsResponse = await fetch(`https://api.themoviedb.org/3/tv/${serieId}/keywords`, requestOptions);
      const keywordsJson = await keywordsResponse.json();
      keywords.value = keywordsJson.keywords;
  
    // Obtener temporadas
    const seasonsResponse = await fetch(`https://api.themoviedb.org/3/tv/${serieId}/seasons`, requestOptions);
    const seasonsJson = await seasonsResponse.json();
    seasons.value = seasonsJson.seasons; // Asignar las temporadas a la referencia
}
  
  function getCreators() {
      if (!serie.value) return 'Desconocido';
      return serie.value.created_by ? serie.value.created_by.map((creator: any) => creator.name).join(', ') : 'Desconocido';
  }
  
function getActors() {
  if (!credits.value) return [];
  return credits.value.cast.slice(0, 9).map(actor => ({
    id: actor.id,
    name: actor.name,
    character: actor.character,
    profile_path: actor.profile_path
  }));
}
  
  function getReleaseYear(date: string) {
      return new Date(date).getFullYear();
  }
  </script>
  
  <style scoped>
  /* Agrega tus estilos aquí si es necesario */
  </style>
  
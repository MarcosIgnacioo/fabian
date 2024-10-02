<template>

    <div v-if="movie">
      <div class="flex space-x-2">

        <div class="relative w-full bg-fixed bg-center bg-cover bg-no-repeat p-6 text-white" 
          :style="`background-image: url(${imgBasePath + movie.backdrop_path});`">
        
        <div class="absolute inset-0 bg-black bg-opacity-90"></div>
        
        <div class="relative flex space-x-6 max-w-7xl mx-auto">
          <img :src="imgBasePath + movie.poster_path" 
              :alt="movie.title" 
              class="w-96 h-auto shadow-lg rounded-lg">
          
          <div>
            <h1 class="text-5xl font-bold">{{ movie.title }} ({{ getReleaseYear(movie.release_date) }})</h1>
            <p class="mt-2">Fecha de lanzamiento: {{ movie.release_date }} ({{ movie.original_language }})</p>
            <p>Duración: {{ movie.runtime }} minutos</p>
            <p>Rating: {{ movie.vote_average }}</p>
            
            <button :class="isFavorite ? 'bg-red-500' : 'bg-blue-500'" class="text-white px-4 py-2 mt-4 rounded-lg" 
              @click="toggleFavorite">
              {{ isFavorite ? 'Eliminar de favoritos' : 'Agregar a favoritos' }}
            </button>

            <p class="mt-8">{{ movie.overview }}</p>

            <div class="mt-8">
              <h2 class="text-2xl font-semibold">Géneros:</h2>
              <ul>
                <li v-for="genre in movie.genres" :key="genre.id">
                  <span
                    @click="redirectToGenre(genre.id)"
                    class="cursor-pointer hover:underline"
                  >
                    {{ genre.name }}
                  </span>
                </li>
              </ul>
            </div>

            <div class="mt-8">
              <h2 class="text-2xl font-semibold">Director:</h2>
              <p>{{ getDirector() }}</p>
            </div>

            <div class="mt-4">
              <h2 class="text-2xl font-semibold">Guionistas:</h2>
              
              <p>{{ getScreenplay() }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="mt-8 ml-8 mr-8 border">
      <h2 class="text-2xl ml-4 mt-4 font-semibold">Actores principales:</h2>
      <div class="flex overflow-x-auto space-x-4 py-4">
        <div v-for="actor in getActors()":key="actor.name" class="ml-4 mr-4 border p-2 rounded-lg text-center flex-shrink-0 w-48 cursor-pointer"
        @click="redirectToPerson(actor.id)">
        <img :src="imgBasePath + actor.profile_path" :alt="actor.name" class="w-full h-auto rounded-lg mb-1">
        <p class="font-bold">{{ actor.name }}</p>
        <p class="text-sm">{{ actor.character }}</p>
        </div>
      </div>
    </div>

    <div class="mt-8 ml-8 mr-8 border">
      <h2 class="text-2xl ml-4 mt-4 font-semibold">Información adicional: </h2>
        <p class="ml-4 mt-4">Titulo Original: {{ movie.original_title }}</p>
        <p class="ml-4">Estado: {{ movie.status }}</p>
        <p class="ml-4">Idioma Original: {{ movie.original_language }}</p>
        <p class="ml-4">Presupuesto: ${{ movie.budget.toLocaleString() }}</p>
        <p class="ml-4">Ingresos: ${{ movie.revenue.toLocaleString() }}</p>

        <div class="mt-4 ml-4">
        <h2 class="text-lg font-semibold">Palabras clave:</h2>
        <ul class="flex flex-wrap space-x-2 mt-2">
          <li v-for="keyword in keywords?.keywords" :key="keyword.id" class="mb-2">
            <span
          @click="redirectToKeyword(keyword.id)"
          class="bg-blue-500 text-white rounded-full px-3 py-1 text-sm cursor-pointer hover:bg-blue-700 transition">
              {{ keyword.name }}
            </span>
          </li>
        </ul>
      </div>

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
    <div 
      v-for="recommendation in recommendations.results" 
      :key="recommendation.id" 
      class="ml-4 mr-4 border p-2 rounded-lg text-center flex-shrink-0 w-48 cursor-pointer" 
      @click="redirectToMovie(recommendation.id)"
    >
      <img 
        :src="imgBasePath + recommendation.poster_path" 
        :alt="recommendation.title" 
        class="w-full h-auto rounded-lg mb-1"
      >
      <p class="font-bold">{{ recommendation.title }}</p>
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

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genres: { id: number; name: string }[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: number;
  budget: number; 
  revenue: number;
  status: string;
}

interface Credits {
  crew: { job: string; name: string }[];
  cast: { id:number; name: string; character: string; profile_path: string; }[];
}

interface Recommendations {
  results: { id: number; title: string; poster_path: string; vote_average: number }[];
}

interface Keywords {
  keywords: { id: number; name: string }[];
}

interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

//redireccionar
const router = useRouter()

function redirectToKeyword(keywordId: number) {
  router.push(`/movies/keyword/${keywordId}`);
}

function redirectToGenre(genreId: number) {
  router.push(`/movies/category/${genreId}`);
}

function redirectToMovie(movieId: number) {
  router.push(`/movie/${movieId}`);
}

function redirectToPerson(personId: number) {
  router.push(`/person/${personId}`);
}

const route = useRoute();
const movieId: string = route.params.id as string;
const imgBasePath: string = "https://image.tmdb.org/t/p/w500";

let movie = ref<Movie | null>(null);
const credits = ref<Credits | null>(null);
const keywords = ref<Keywords | null>(null);
const recommendations = ref<Recommendations | null>(null);
const trailer = ref<any | null>(null);


watch(() => route.params.id, (newId) => {
  if (typeof newId === 'string') {
    getMovieDetails(newId);
    window.scrollTo(0, 0);
  }
});



const isFavorite = ref(false);

function toggleFavorite() {

  if (!movie.value) return;

  const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
  const movieIndex = favoritos.findIndex((fav: Movie) => fav.id === movie.value!.id);

  if (movieIndex === -1) {
    favoritos.push(movie.value);
    isFavorite.value = true;
  } else {
    favoritos.splice(movieIndex, 1);
    isFavorite.value = false;
  }
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
}



async function getMovieDetails(movieId: string) {
  const requestOptions: RequestInit = {
    method: "GET",
    headers: headers,
    redirect: "follow"
  };
  //trailer
  const videosResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, requestOptions);
  const videosJson = await videosResponse.json();
  trailer.value = videosJson.results.find((video: Video) => video.type === 'Trailer' && video.site === 'YouTube');

  //las cosas de la pelicula
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, requestOptions);
  const json = await response.json();
  movie.value = json;

  //creditos
  const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits`, requestOptions);
  const creditsJson = await creditsResponse.json();
  credits.value = creditsJson;

  //keyword goofy as markos
  const keywordsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/keywords`, requestOptions);
  const keywordsJson = await keywordsResponse.json();
  keywords.value = keywordsJson;

  //la reco
  const recommendationsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations`, requestOptions);
  const recommendationsJson = await recommendationsResponse.json();
  recommendations.value = recommendationsJson;
}

//director
function getDirector() {
  if (!credits.value) return 'Desconocido';
  const director = credits.value.crew.find(person => person.job === 'Director');
  return director ? director.name : 'Desconocido';
}

//guionista
function getScreenplay() {
  if (!credits.value) return 'Desconocido';
  const writers = credits.value.crew.filter(person => person.job === 'Screenplay');
  return writers.length ? writers.map(writer => writer.name).join(', ') : 'Desconocido';
}

//actores maaaaaas prinsipales
function getActors() {
  if (!credits.value) return [];
  return credits.value.cast.slice(0, 9).map(actor => ({
    id: actor.id,
    name: actor.name,
    character: actor.character,
    profile_path: actor.profile_path
  }));
}

function getReleaseYear(releaseDate: string) {
  return releaseDate.substring(0, 4); 
}

getMovieDetails(movieId);

</script>
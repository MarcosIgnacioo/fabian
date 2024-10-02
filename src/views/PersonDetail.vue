<template>
  <div v-if="person" class="max-w-7xl mx-auto p-6">
    
    <div class="flex space-x-6 mb-8 border rounded-lg p-4">
      <img
        :src="imgBasePath + person.profile_path"
        :alt="person.name"
        class="w-48 h-64 object-cover shadow-lg rounded-lg"/>
      <div>
        <h1 class="text-5xl font-bold">{{ person.name }}</h1>
        <p class="mt-2">{{ person.biography }}</p>
      </div>
    </div>

    <div class="mb-8 border rounded-lg p-4">
      <h2 class="text-2xl font-semibold">Información Personal:</h2>
      <p><strong>Conocido por:</strong> {{ person.known_for_department }}</p>
      <p><strong>Créditos conocidos:</strong> {{ person.known_for?.length }} películas/series</p>
      <p><strong>Sexo:</strong> {{ person.gender === 1 ? 'Femenino' : 'Masculino' }}</p>
      <p><strong>Cumpleaños:</strong> {{ person.birthday }}</p>
      <p><strong>Lugar de Nacimiento:</strong> {{ person.place_of_birth }}</p>
      <p><strong>También conocido como:</strong> {{ person.also_known_as.join(', ') }}</p>
    </div>

    <div class="mb-8 border rounded-lg p-4">
      <h2 class="text-2xl font-semibold">Conocido por:</h2>
      
      <div class="flex overflow-x-auto space-x-4 py-4">
        <div
          v-for="work in knownForLimited"
          :key="work.id"
          @click="redirectToWork(work)" 
          class="border p-2 rounded-lg text-center flex-shrink-0 w-48 cursor-pointer">
          <img
            v-if="work.poster_path"
            :src="imgBasePath + work.poster_path"
            :alt="work.title || work.name"
            class="w-full h-auto rounded-lg mb-1"
          />
          <p class="font-bold">{{ work.title || work.name }}</p>
        </div>
      </div>
    </div>

    <div class="border rounded-lg p-4">
      <h2 class="text-2xl font-semibold mb-2">Filmografía:</h2>
      <ul>
        <li
          v-for="work in sortedFilmography"
          :key="work.id"
          @click="redirectToWork(work)"
          class="cursor-pointer hover:underline"
        >
          <span>{{ getReleaseYear(work.release_date) }}: {{ work.title || work.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'; 
import headers from '../globals';  
import { ref, computed } from 'vue';

const route = useRoute();
const router = useRouter(); 
const personId = route.params.id;
const imgBasePath = "https://image.tmdb.org/t/p/w500";
let person = ref(null);

getPersonDetails(personId);

async function getPersonDetails(personId) {
  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow"
  };

  const response = await fetch(`https://api.themoviedb.org/3/person/${personId}?append_to_response=movie_credits,tv_credits`, requestOptions);
  const json = await response.json();
  person.value = json;
}

const knownForLimited = computed(() => {
  const movies = person.value?.movie_credits.cast.slice(0, 4) || [];
  const tvShows = person.value?.tv_credits.cast.slice(0, 4) || [];
  return [...movies, ...tvShows].slice(0, 8); //combina y limita a 8
});

function getReleaseYear(releaseDate) {
  return releaseDate ? releaseDate.substring(0, 4) : 'Desconocido'; 
}

const sortedFilmography = computed(() => {
  const movies = person.value?.movie_credits.cast.map(work => ({
    id: work.id,
    title: work.title,
    release_date: work.release_date,
    media_type: 'movie'
  })) || [];

  const tvShows = person.value?.tv_credits.cast.map(work => ({
    id: work.id,
    name: work.name,
    release_date: work.first_air_date,
    media_type: 'tv'
  })) || [];

  const combined = [...movies, ...tvShows];

  return combined.filter(work => work.release_date).sort((a, b) => {
    const aDate = new Date(a.release_date || '');
    const bDate = new Date(b.release_date || '');
    return aDate.getTime() - bDate.getTime();
  });
});

function redirectToWork(work) {
  let mediaType = work.media_type;

  if (!mediaType) {
    if (work.title) {
      mediaType = 'movie'; 
    } else if (work.name) {
      mediaType = 'tv'; 
    } else {
      console.error('No se pudo determinar el tipo de medio para el trabajo:', work);
      return;
    }
  }

  const path = mediaType === 'movie' ? `/movie/${work.id}` : `/serie/${work.id}`;
  router.push(path);
}
</script>

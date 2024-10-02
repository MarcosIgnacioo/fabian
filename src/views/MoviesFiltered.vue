<script setup lang="ts">
import { useRoute } from 'vue-router';
import headers, { CATEGORIES } from '../globals';
import { ref } from 'vue';

interface Movie {
  adult: false
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: false
  vote_average: number
  vote_count: number
}

const route = useRoute();
const keyword: string = route.query.keyword_id as string || ""
const category: string = route.query.category_id as string || ""
const imgBasePath: string = "https://image.tmdb.org/t/p/w500";
let movies = ref<Movie[]>()
let keywordText = ref("")
getMoviesByKeywordOrCategory(keyword, category)
// goofy ass vue
const categoryText = ref(CATEGORIES[category])
getKeywordText(keyword)

async function getMoviesByKeywordOrCategory(keyword: string, category: string) {
  const requestOptions: RequestInit = {
    method: "GET",
    headers: headers,
    redirect: "follow"
  };
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_keywords=${keyword}&with_genres=${category}`, requestOptions)
  const json = await response.json()
  console.log(`https://api.themoviedb.org/3/discover/movie?with_keywords=${keyword}&with_genres=${category}`, requestOptions)
  movies.value = json.results
}

async function getKeywordText(keyword: string) {
  const requestOptions: RequestInit = {
    method: "GET",
    headers: headers,
    redirect: "follow"
  };
  const response = await fetch(`https://api.themoviedb.org/3/keyword/${keyword}`, requestOptions)
  const json = await response.json()
  keywordText.value = json.name
}
</script>

<template>
  <div class="m-4">
    <h1>
      {{ keywordText }}
    </h1>
    <h1>{{ categoryText }}</h1>
  </div>
  <div v-for="movie in movies" class="flex  space-x-2 m-4 ">
    <RouterLink class="" :to="'/movies/id/' + movie.id">
      <img class="w-[94px] h-[141px]" loading="lazy" :src="imgBasePath + movie.poster_path" alt="${0}">
    </RouterLink>
    <div class="flex flex-col flex-1">
      <div>
        <h1 class="block"> {{ movie.title }}</h1>
        <span>{{ movie.release_date }}</span>
      </div>
      <p class="text-[0.8rem]">{{ movie.overview }}</p>
    </div>
  </div>
</template>

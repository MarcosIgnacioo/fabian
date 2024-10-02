<script setup lang="ts">
import { ref } from 'vue';
import headers, { API_KEY, formatDate, imgBasePath, Season } from '../globals';
import { useRoute } from 'vue-router';
import Episode from '../components/Episode.vue';
const route = useRoute();
const seriesId: string = route.params.series_id as string
const seasonNumber: string = route.params.season_number as string
let seasonData = ref<Season>();
getSeasonDetails(seriesId, seasonNumber)



async function getSeasonDetails(seriesId: string, seasonNumber: string) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${API_KEY}`);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  const response = await fetch(`https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}`, requestOptions)
  seasonData.value = await response.json();
}

</script>
<template>

  <div v-if="seasonData?.name == undefined">
    <h1>loading</h1>
  </div>

  <div v-else>
    <div class="sm:flex bg-coal-900 sm:items-center sm:p-3">
      <img class="sm:rounded w-full sm:size-[100px] sm:h-auto" :src="imgBasePath + seasonData?.poster_path">
      <h1 class="text-3xl text-coffee-50 px-3 py-2 ">{{ seasonData?.name }}</h1>
      <span class="opacity-75 text-coffee-50">{{ formatDate(seasonData?.air_date) }}</span>
    </div>
    <div class="py-4 mx-auto max-w-[720px] group select-none space-y-3">
      <span class="text-2xl font-bold">Episodes {{ seasonData?.episodes.length }}</span>
      <details class="border-b p-4 text-coal-950 bg-coffee-50 group select-none">
        <summary class="flex items-center font-bold ">Show overview
          <button class="ml-auto">
            <svg class="fill-current opacity-75 w-4 h-4 -mr-1 rotate-90 group-open:-rotate-90"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
            </svg>
          </button>
        </summary>
        <div class="mt-4 leading-normal text-md ">{{ seasonData?.overview }}</div>
      </details>
      <div v-for="episode in seasonData?.episodes" class="space-y-3">
        <Episode :episode="episode" />
      </div>
    </div>
  </div>


</template>

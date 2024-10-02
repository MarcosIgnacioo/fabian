<script setup lang="ts">
defineProps<{ keywordText: string, sourceFilter: (e: Event) => void, popularityFilter: (e: Event) => void }>()
</script>

<template>
  <h1 class="font-bold text-coal-700 text-4xl rounded">
    search for '<span class="text-kirby-800">{{ keywordText }}</span>'
  </h1>
  <span class="text-coffee-950 font-bold">Filter by</span>
  <div class="flex mr-auto space-x-2">
    <select v-on:change="sourceFilter" class="bg-coal-100 text-coffee-950 w-full rounded py-2 px-4 font-bold shadow-md">
      <option value="">Movies and TV</option>
      <option value="movies">Movies</option>
      <option value="tv">TV Series</option>
    </select>

    <select v-on:change="popularityFilter"
      class="bg-coal-100 text-coffee-950 w-full rounded py-2 px-4 font-bold shadow-md">
      <option value="most">Most popular</option>
      <option value="least">Least popular</option>
    </select>
  </div>
</template>

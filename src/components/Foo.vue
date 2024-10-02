<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  User {{ $route.params.id }}
  pipi
</template>

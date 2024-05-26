<template>{{ currentRoute.join(" ").toUpperCase() }}</template>
<script setup lang="ts">
const route = useRouter();
const currentRoute = route.currentRoute.value.params.app;
</script>

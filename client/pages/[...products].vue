<template>
    {{
        isArray(currentRoute)
            ? currentRoute.join(" ").toUpperCase()
            : currentRoute
    }}
</template>
<script setup lang="ts">
const route = useRouter();
const currentRoute = route.currentRoute.value.params.products;
</script>

<template>
    <nav>
        <button @click="logout">Logout</button>
    </nav>
</template>

<script setup lang="ts">
const router = useRouter();
const logout = () => {
    alert("Logging Out");
    router.push("/");
};
</script>

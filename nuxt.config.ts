// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: "client/",
    devtools: { enabled: false },
    tailwindcss: { cssPath: "~/assets/css/main.css" },
    modules: [
        "@nuxtjs/tailwindcss",
        "@vueuse/nuxt",
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",
        "@nuxtjs/apollo",
        "nuxt-icon",
    ],
    apollo: {
        clients: {
            default: {
                httpEndpoint: "http://localhost:8000/graphql",
            },
        },
    },
    plugins: ["~/plugins/apollo-client.ts"],
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: "client/",
    devtools: { enabled: true },
    tailwindcss: { cssPath: "~/assets/css/main.scss" },
    modules: [
        "@nuxtjs/tailwindcss",
        "@vueuse/nuxt",
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",
        "@nuxtjs/apollo",
    ],
    apollo: {
        clients: {
            default: {
                httpEndpoint: "https://spacex-production.up.railway.app",
            },
        },
    },
});
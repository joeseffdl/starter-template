import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";

export default defineNuxtPlugin((nuxtApp) => {
    const apolloClient = new ApolloClient({
        uri: "http://localhost:8000/graphql",
        cache: new InMemoryCache(),
    });

    provideApolloClient(apolloClient);
});

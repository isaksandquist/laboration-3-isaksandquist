import 'cross-fetch/polyfill';
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clp8a1v6z4r5e01t799f9dgwc/master",
    cache: new InMemoryCache(),
});

export default client;
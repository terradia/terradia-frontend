import React from 'react'
import {ApolloProvider} from '@apollo/react-hooks'
import fetch from 'isomorphic-fetch';
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory'
import Home from './Home'
import ApolloClient from 'apollo-client'

const httpLink = createHttpLink({
    uri: "http://localhost:8000/graphql",
    fetch: fetch
});

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true
});

const Index = () => (
    <ApolloProvider client={client}>
        <Home type={"producer"}/>
    </ApolloProvider>
);

export default Index

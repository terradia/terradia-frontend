import React from 'react'
import {ApolloProvider} from '@apollo/react-hooks'
import fetch from 'isomorphic-fetch';
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory'
import Home from './Home'
import ApolloClient from 'apollo-client'

const httpLink = createHttpLink({
    // uri: "http://localhost:7071/api",
    uri: "http://localhost:8000/graphql",
    fetch: fetch
});

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? token : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true
});

//TODO faire la query getUser ici pour checker le type de client

const Index = () => (
    <ApolloProvider client={client}>
        <Home/>
    </ApolloProvider>
);

export default Index

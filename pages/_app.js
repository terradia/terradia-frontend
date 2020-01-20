import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '../lib/withApollo';
import {createHttpLink} from "apollo-link-http";
import fetch from "isomorphic-fetch";
import {setContext} from "apollo-link-context";
import ApolloClient from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";


class MyApp extends App {
    render() {
        const { Component, pageProps, apollo } = this.props;

        const httpLink = createHttpLink({
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

        return (
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        );
    }
}

export default withApollo(MyApp);
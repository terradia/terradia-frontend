import React from "react";
import {ApolloConsumer, Query} from "@apollo/react-components";
import getUserQuery from "../../../apollo/query/getUser";
import {ApolloError} from "apollo-boost";

// declare interface ProfilProps {
//     OnLoggedIn?: (loginStatus: boolean) => void
// }

declare interface GetUserData {
    getUser: {
        firstName: string;
        lastName: string;
    }
}



const ProducerHome = () => {
    const onErrorHandler = (error: ApolloError) => {
        if (error.graphQLErrors &&
            error.graphQLErrors[0] &&
            error.graphQLErrors[0].extensions &&
            error.graphQLErrors[0].extensions.code === "UNAUTHENTICATED")
            return <div>your session yas expired</div>;
        return <div>error</div>
    };

    return (
        <ApolloConsumer>
            {client => (
                <Query<GetUserData> query={getUserQuery} onError={onErrorHandler}>
                    {({loading, data}) => {
                        console.log('loading', loading);
                        console.log('data', data);
                        console.log('client', client);
                        return         <a>Salut les ptit pote</a>
                    }}
                </Query>
            )}
        </ApolloConsumer>

    );
};

export default ProducerHome
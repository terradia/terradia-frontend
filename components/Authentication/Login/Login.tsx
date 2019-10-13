import React from "react";
import {ApolloError, gql} from "apollo-boost"
import {ApolloConsumer, Query} from "@apollo/react-components";
import LoginButton from "./LoginButton";
import {Icon} from "antd";

const GET_USER = gql`
    {
        getUser {
            id
            firstName
            lastName
            email
            phone
            password
            validated
        }
    }
`;

declare interface LoginProps {
}

declare interface LoginState {
    modalLogin: boolean;
    confirmLoading: boolean;
}

declare interface GetUserData {
    getUser: {
        firstName: string;
        lastName: string;
    }
}

export default class Login extends React.Component<LoginProps, LoginState> {
    state = {
        modalLogin: false,
        confirmLoading: false
    };

    onErrorHandler = (error: ApolloError) => {
        if (error.graphQLErrors &&
            error.graphQLErrors[0] &&
            error.graphQLErrors[0].extensions &&
            error.graphQLErrors[0].extensions.code === "UNAUTHENTICATED")
            return <div>your session yas expired</div>;
        return <div>error</div>
    };

    render() {
        return (
            <ApolloConsumer>
                {client => (
                    <Query<GetUserData> query={GET_USER} onError={this.onErrorHandler}>
                        {({loading, data}) => {
                            if (loading)
                                return <Icon type={"loading"}/>;
                            return <LoginButton client={client} data={data}/>;
                        }}
                    </Query>
                )}
            </ApolloConsumer>
        );
    }
}

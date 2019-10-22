import React from 'react'
import {Mutation} from "@apollo/react-components";
import LoginModal from "./LoginModal";
import ApolloClient, {gql} from "apollo-boost";

const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            userId
        }
    }
`;

declare interface LoginData {
    login: {
        token: string;
        userId: string;
    }
}

declare interface GetUserData {
    getUser: {
        firstName: string;
        lastName: string;
    }
}

declare interface LoginButtonProps {
    data: GetUserData | undefined;
    client: ApolloClient<object>;
}

declare interface LoginButtonState {
    confirmLoading: boolean,
    modalLogin: boolean,
}

export default class LoginButton extends React.Component<LoginButtonProps, LoginButtonState> {
    OnCompletedHandler = (client: ApolloClient<object>, data: LoginData) => {
        localStorage.setItem('token', data.login.token);
        client.resetStore();
    };

    OnErrorHandler = (data: { message: any; }) => {
        console.log(data.message);
    };

    render() {
        const {data, client} = this.props;

        if (data && data.getUser) {
            return null
        } else {
            return (
                <div>
                    <Mutation<LoginData> mutation={LOGIN} onCompleted={(data) => {
                        this.OnCompletedHandler(client, data)
                    }} onError={this.OnErrorHandler}>
                        {(login) => (<LoginModal login={login}/>)}
                    </Mutation>
                </div>
            )
        }
    }
};
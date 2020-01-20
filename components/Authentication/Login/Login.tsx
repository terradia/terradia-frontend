import React from "react";
import {ApolloError} from "apollo-boost"
import {ApolloConsumer, Query} from "@apollo/react-components";
import LoginButton from "./LoginButton";
import {Icon} from "antd";
import getUserQuery from '../../../apollo/query/getUser';


declare interface LoginProps {
    onLoggedIn: (loginStatus: boolean) => void
}

declare interface LoginState {
    modalLogin: boolean;
    confirmLoading: boolean;
}

declare interface GetUserData {
    getUser: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        phone: string;
        validated: boolean;
        company: any;
        customer: any;
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
                    <Query<GetUserData> query={getUserQuery} onError={this.onErrorHandler}>
                        {({loading, data}) => {
                            if (loading)
                                return <Icon type={"loading"}/>;
                            this.props.onLoggedIn(!!(data && data.getUser));
                            return <LoginButton client={client} data={data}/>;
                        }}
                    </Query>
                )}
            </ApolloConsumer>
        );
    }
}

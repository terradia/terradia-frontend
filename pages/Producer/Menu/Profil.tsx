import React from "react";
import {ApolloConsumer, Query} from "@apollo/react-components";
import getUserQuery from "../../../apollo/query/getUser";
import {ApolloError} from "apollo-boost";
import {Descriptions} from "antd";
import 'antd/dist/antd.css'

// declare interface ProfilProps {
//     OnLoggedIn?: (loginStatus: boolean) => void
// }

declare interface GetUserData {
    getUser: {
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        company: {
        name: string;
        }
    }
}


const Profil = () => {
    const onErrorHandler = (error: ApolloError) => {
        if (error.graphQLErrors &&
            error.graphQLErrors[0] &&
            error.graphQLErrors[0].extensions &&
            error.graphQLErrors[0].extensions.code === "UNAUTHENTICATED")
            return <div>your session yas expired</div>;
        return <div>error</div>
    };

    return (
        <div>
            <h1 id="General">Général</h1>
            <ApolloConsumer>
                {client => (
                    <Query<GetUserData> query={getUserQuery} onError={onErrorHandler}>
                        {({loading, data}) => {
                            console.log('loading', loading);
                            console.log('data', data);
                            console.log('client', client);
                            if (data) {
                                return (
                                    <Descriptions title="User Info" layout={"vertical"}>
                                        <Descriptions.Item label="UserName">{data.getUser.firstName} {data.getUser.lastName}</Descriptions.Item>
                                        <Descriptions.Item label="Telephone">{data.getUser.phone}</Descriptions.Item>
                                        <Descriptions.Item label="Email">{data.getUser.email}</Descriptions.Item>
                                    </Descriptions>
                                )
                            }
                            return (<p>Bad Query</p>)
                        }}

                    </Query>
                )}
            </ApolloConsumer>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h1 id="Notifications">Notifications</h1>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </div>
    );
};

export default Profil
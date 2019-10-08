import React from "react";
import {Icon} from 'antd'
import Button from "../components/Button";
import Modal from "../components/Modal";
import Input from "../components/Input";
import {gql} from "apollo-boost"
import {ApolloConsumer, Mutation, Query} from "@apollo/react-components";
import ApolloClient from "apollo-client";


const inputStyle = {
    width: "400px",
    paddingBottom: '30px'
};

const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            userId
        }
    }
`;

const REGISTER = gql`
    mutation reg ($firstname: String!, $lastname: String!, $password: String!, $email: String!, $phone: String!) {
        register (
            firstName: $firstname
            lastName: $lastname
            password: $password
            email: $email
            phone: $phone
        )
        {
            token
            userId
            message
        }
    }
`;

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

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalLogin: false,
            isLog: this.props.isLog,
            confirmLoading: false
        };

    }

    openModal = () => {
        console.log("opening modal");
        this.setState({
            modalLogin: true
        });
    };

    OnCompletedHandler = (client, data) => {
        console.log(client);
        console.log(data);
        this.setState({
            confirmLoading: false,
            modalLogin: false,
            isLog: true
        });
        localStorage.setItem('token', data.login.token);
        client.resetStore();
    };

    OnErrorHandler = (data) => {
        console.log(data.message);
        this.setState({
            confirmLoading: false
        });
    };

    render() {
        let email = "";
        let password = "";
        return (
            <ApolloConsumer>
                {client => (
                    <div style={{position: 'absolute', left: '95%'}}>
                        <Query query={GET_USER}>
                            {({loading, error, data}) => {
                                console.log(data);
                                if (data && data.getUser) {
                                    let username = data.getUser.firstName + " " + data.getUser.lastName;
                                    return (
                                        <div>
                                            <Button color={"primary"} onClick={() => client.resetStore()} style={{marginLeft: '10px'}}>{username} Logout</Button>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div>
                                            <Button color={"primary"} onClick={this.openModal}>Login</Button>
                                            <Mutation mutation={LOGIN} onCompleted={(data) => {
                                                this.OnCompletedHandler(client, data)
                                            }} onError={this.OnErrorHandler}>
                                                {(login) => (
                                                    <Modal
                                                        title={"Login"}
                                                        centered
                                                        visible={this.state.modalLogin}
                                                        confirmLoading={this.state.confirmLoading}
                                                        onCancel={() => {
                                                            this.setState({
                                                                modalLogin: false
                                                            })
                                                        }}
                                                        onOk={() => {
                                                            this.setState({
                                                                confirmLoading: true
                                                            });
                                                            //register({variables: {firstname: "test", lastname: "Test", password: "test", email: "test@test.test", phone: "test"}});
                                                            login({variables: {email: email, password: password}});
                                                        }}
                                                    >
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            textAlign: 'center',
                                                            padding: '9%'
                                                        }}
                                                        >
                                                            <Input
                                                                type={"default"}
                                                                style={inputStyle}
                                                                placeholder={'Login'}
                                                                id={'id_login'}
                                                                addonBefore={"Login"}
                                                                onChange={(e) => {
                                                                    email = e.target.value;
                                                                }}
                                                            />
                                                            <Input
                                                                type={"password"}
                                                                style={inputStyle}
                                                                placeholder={'Password'}
                                                                id={'id_password'}
                                                                addonBefore={"Password"}
                                                                onChange={(e) => {
                                                                    console.log(e.target.value);
                                                                    password = e.target.value
                                                                }}
                                                            />
                                                        </div>
                                                    </Modal>
                                                )}
                                            </Mutation>
                                        </div>
                                    )
                                }
                            }}
                        </Query>
                    </div>
                )}
            </ApolloConsumer>
        );
    }
}

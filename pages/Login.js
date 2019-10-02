import React from "react";
import {Icon} from 'antd'
import Button from "../components/Button";
import Modal from "../components/Modal";
import Input from "../components/Input";
import {gql} from "apollo-boost"
import {Mutation} from "@apollo/react-components";


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

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalLogin: false,
            email: '',
            password: '',
            confirmLoading: false
        };
    }

    openModal = () => {
        console.log("opening modal");
        this.setState({
            modalLogin: true
        });
    };

    OnCompletedHandler = (data) => {
        console.log(data);
        this.setState({
            confirmLoading: false
        });
    };

    OnErrorHandler = (data) => {
        console.log(data.message);
        this.setState({
            confirmLoading: false
        });
    };

    render() {
        return (
            <div>
                <div style={{position: 'absolute', left: '95%'}}>
                    <Button color={"primary"} onClick={this.openModal}>Login</Button>
                </div>
                <Mutation mutation={LOGIN} onCompleted={this.OnCompletedHandler} onError={this.OnErrorHandler}>
                    {(login) => (
                        <Modal
                            title={"Login"}
                            centered
                            visible={this.state.modalLogin}
                            confirmLoading={this.state.confirmLoading}
                            onCancel={() => {
                                console.log('User: ', this.state.email);
                                console.log('Password: ', this.state.password);
                                this.setState({
                                    modalLogin: false
                                })
                            }}
                            onOk={() => {
                                console.log('User: ', this.state.email);
                                console.log('Password: ', this.state.password);
                                this.setState({
                                    confirmLoading: true
                                });
                                //register({variables: {firstname: "test", lastname: "Test", password: "test", email: "test@test.test", phone: "test"}});
                                login({variables: {email: this.state.email, password: this.state.password}});
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
                                        this.setState({
                                            email: e.target.value
                                        })
                                    }}
                                />
                                <Input
                                    type={"password"}
                                    style={inputStyle}
                                    placeholder={'Password'}
                                    id={'id_password'}
                                    addonBefore={"Password"}
                                    value={this.state.password}
                                    onChange={(e) => {
                                        this.setState({
                                            password: e.target.value
                                        })
                                    }}
                                />
                            </div>
                        </Modal>
                    )}
                </Mutation>
            </div>
        );
    }
}

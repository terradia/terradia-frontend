import React from "react";
import {gql} from "apollo-boost";
import {Mutation} from "@apollo/react-components";
import Button from "../Button";

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

declare interface RegisterData {
    register: {
        firstname: string;
        lastname: string;
        password: string;
        email: string;
        phone: string;
    }
}

declare interface RegisterProps {

}

declare interface RegisterState {

}

class Register extends React.Component<RegisterProps, RegisterState> {
    OnCompletedHandler = (data: RegisterData) => {
        console.log(data);
    };

    OnErrorHandler = (data: { message: any; }) => {
        console.log(data.message);
        this.setState({
            confirmLoading: false
        });
    };

    render() {
        return (
            <Mutation<RegisterData> mutation={REGISTER} onCompleted={(data) => {
                this.OnCompletedHandler(data)}} onError={this.OnErrorHandler}>
                {(register) => {
                    return (
                        <Button color={"primary"} onClick={() => {
                            register({variables: {firstname: "test", lastname: "Test", password: "test", email: "test@test.test", phone: "test"}});
                        }}>
                            Register
                        </Button>
                    )
                }}
            </Mutation>
        );
    }
}

export default Register
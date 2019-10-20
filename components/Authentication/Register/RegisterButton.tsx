import React from 'react'
import {Mutation} from "@apollo/react-components";
import RegisterModal from "./RegisterModal";
import {gql} from "apollo-boost";


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

declare interface RegisterButtonProps {
}

declare interface RegisterButtonState {
    confirmLoading: boolean,
    modalLogin: boolean,
}

declare interface RegisterData {
    register: {
        firstname: string;
        lastname: string;
        password: string;
        email: string;
        phone: string;
    }
}

export default class RegisterButton extends React.Component<RegisterButtonProps, RegisterButtonState> {
    OnCompletedHandler = (data: RegisterData) => {
        console.log(data);
    };

    OnErrorHandler = (data: { message: any; }) => {
        console.log(data.message);
    };

    render() {

            return (
                <div>
                    <Mutation<RegisterData> mutation={REGISTER} onCompleted={(data) => {
                        this.OnCompletedHandler(data)
                    }} onError={this.OnErrorHandler}>
                        {(register) => (<RegisterModal register={register}/>)
                        }
                    </Mutation>
                </div>
            )
    }
};
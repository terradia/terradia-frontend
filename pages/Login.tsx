import React from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Input from "../components/Input";
// import {Icon, Checkbox} from 'antd';
import {gql} from "apollo-boost"
// import {Mutation} from "@apollo/react-components";
// import {Formik, FormikActions, FormikProps, Form, Field, FieldProps, withFormik } from 'formik';
import {Formik} from 'formik';
import * as Yup from 'yup';


const inputStyle = {
    width: "400px",
};

const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            userId
        }
    }
`;
//
// const REGISTER = gql`
//     mutation reg ($firstname: String!, $lastname: String!, $password: String!, $email: String!, $phone: String!) {
//         register (
//             firstName: $firstname
//             lastName: $lastname
//             password: $password
//             email: $email
//             phone: $phone
//         )
//         {
//             token
//             userId
//             message
//         }
//     }
// `;


interface MyProps {
}

interface MyState {
    modalLogin: boolean;
    email: string;
    password: string;
    confirmLoading: boolean;
    submitMyForm: any;
    bindSubmitForm: any;
}

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Your email is invalid')
        .required('Your email is required')
        .min(2, 'Your email must be longer than 2 character'),
    password: Yup.string()
        .required('Your password is required')
        .min(2, 'Your password must be longer than 2 character')
        .max(20, 'It is long password')
});

export default class Login extends React.Component <MyProps, MyState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            modalLogin: false,
            email: '',
            password: '',
            confirmLoading: false,
            submitMyForm: undefined,
            bindSubmitForm: undefined
        };
    }

    openModal = () => {
        console.log("opening modal");
        this.setState({
            modalLogin: true
        });
    };

    closeModal = () => {
        console.log("closing modal");
        this.setState({
            modalLogin: false
        });
    };

    OnCompletedHandler = (data: any) => {
        console.log(data);
        this.setState({
            confirmLoading: false
        });
    };

    OnErrorHandler = (data: { message: any; }) => {
        console.log(data.message);
        this.setState({
            confirmLoading: false
        });
    };

    submitForm = (values: { email: any; password: any; }) => {

        this.setState({
            confirmLoading: true
        });
        console.log('Received values of form: ', values);
        LOGIN({variables: {email: values.email, password: values.password}});
        this.closeModal();

        // register({
        //     variables: {
        //         firstname: "test",
        //         lastname: "Test",
        //         password: "test",
        //         email: "test@test.test",
        //         phone: "test"
        //     }
        // });

    };

    render() {

        return (
            <div>
                <div style={{position: 'absolute', left: '95%'}}>
                    <Button color={"primary"} onClick={this.openModal} text={'Login'}/>
                </div>
                <Modal
                    title={"Login"}
                    centered={true}
                    visible={this.state.modalLogin}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.closeModal}
                    onOk={() => {
                        console.log('Ok de la modal')
                    }}
                >
                    <Formik
                        initialValues={{email: '', password: ''}}
                        validationSchema={SignupSchema}
                        onSubmit={(values, actions) => {
                            console.log('values', values);
                            console.log('actions', actions);
                            this.submitForm(values)
                        }}
                    >
                        {(props) => {
                            return (
                                <form onSubmit={props.handleSubmit}>
                                    <Input
                                        name={'email'}
                                        type={"default"}
                                        style={inputStyle}
                                        placeholder={'Login'}
                                        id={'id_login'}
                                        autoComplete={'email'}
                                        onChange={props.handleChange}
                                    />
                                    {props.errors.email && <div id="feedback">{props.errors.email}</div>}
                                    <Input
                                        name={'password'}
                                        type={"password"}
                                        style={inputStyle}
                                        placeholder={'Password'}
                                        id={'id_password'}
                                        autoComplete={'current-password'}
                                        onChange={props.handleChange}
                                    />
                                    {props.errors.password && <div id="feedback">{props.errors.password}</div>}
                                    <Button htmlType={"submit"} text={'Submit'}/>
                                </form>
                            )
                        }}
                    </Formik>
                </Modal>
            </div>
        );
    }
}


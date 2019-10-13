import React from 'react'
import {Checkbox, Input, Modal} from "antd";
import Button from "../../Button";
import {Formik} from "formik";
import * as Yup from 'yup';


const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .email('Your email is invalid')
        .required('Your email is required')
        .min(2, 'Your email must be longer than 2 character')
    ,
    password: Yup.string()
        .required('Your password is required')
        .min(2, 'Your password must be longer than 2 character')
        .max(20, 'It is long password')
});

declare interface LoginModalProps {
    login: any
}

declare interface LoginModalState {
    modalLogin: boolean;
    confirmLoading: boolean;
    loginStyle: {
        color: string | undefined,
        borderColor: string | undefined,
        width: string
    };
    passwordStyle: {
        color: string | undefined,
        borderColor: string | undefined,
        width: string
    }
}

class LoginModal extends React.Component<LoginModalProps, LoginModalState> {
    state = {
        modalLogin: false,
        confirmLoading: false,
        loginStyle: {
            color: undefined,
            borderColor: undefined,
            width: "400px",
        },
        passwordStyle: {
            color: undefined,
            borderColor: undefined,
            width: "400px"
        }
    };

    openModal = () => {
        console.log("opening modal");
        this.setState({
            modalLogin: true
        });
    };

    closeModal = () => {
        console.log("closing modal");
        this.setState({
            confirmLoading: false,
            modalLogin: false
        });
    };

    loginError = (error: { email: string | undefined, password: string | undefined }) => {
        this.setState({
            loginStyle: {
                color: error.email ? 'red' : undefined,
                width: "400px",
                borderColor: 'red'
            },
            passwordStyle: {
                color: error.password ? 'red' : undefined,
                width: "400px",
                borderColor: 'red'
            }

        })
    };

    submitForm = (values: { email: any; password: any; }) => {
        this.setState({
            confirmLoading: true
        });
        this.props.login({variables: {email: values.email, password: values.password}}).then((data: any) => {
            console.log(data);
            this.setState({
                confirmLoading: false,
                modalLogin: false
            })
        });
    };

    render() {
        return (
            <div>
                <Button color={"primary"} onClick={this.openModal}>Login</Button>
                <Modal
                    title={"Login"}
                    centered
                    visible={this.state.modalLogin}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.closeModal}
                    onOk={() => {
                        console.log('Ok de la modal')
                    }}
                >
                    <Formik
                        initialValues={{email: '', password: '', rememberMe: false}}
                        validationSchema={SignInSchema}
                        validateOnChange={false}
                        validateOnBlur={true}
                        onSubmit={(values, actions) => {
                            console.log('values', values);
                            console.log('actions', actions);
                            this.submitForm(values)
                        }}

                    >
                        {(props: any) => {
                            return (
                                <form onSubmit={props.handleSubmit}>
                                    <Input
                                        name={'email'}
                                        type={"default"}
                                        style={this.state.loginStyle}
                                        placeholder={'Login'}
                                        id={'id_login'}
                                        autoComplete={'email'}
                                        onChange={props.handleChange}
                                    />
                                    {props.errors.email &&
                                    <div id="feedback" style={{color: "red"}}>{props.errors.email}</div>}
                                    <Input
                                        name={'password'}
                                        type={"password"}
                                        style={this.state.passwordStyle}
                                        placeholder={'Password'}
                                        id={'id_password'}
                                        autoComplete={'current-password'}
                                        onChange={props.handleChange}
                                    />
                                    {props.errors.password &&
                                    <div id="feedback" style={{color: "red"}}>{props.errors.password}</div>}

                                    <Checkbox name={'rememberMe'}
                                              onChange={props.handleChange}
                                    >
                                        Remember Me
                                    </Checkbox>
                                    <Button onClick={() => props.validateForm().then((errors: any) => {
                                        console.log(errors);
                                        if (errors) {
                                            this.loginError(errors);
                                        }
                                        props.submitForm();
                                    })} text={'Submit'}/>
                                </form>
                            )
                        }}
                    </Formik>
                    {/*<div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', padding: '9%'}}>*/}
                    {/*    <Input type={"default"} style={inputStyle} placeholder={'Login'} id={'id_login'}*/}
                    {/*        addonBefore={"Login"} onChange={(e) => {email = e.target.value;}}*/}
                    {/*    />*/}
                    {/*    <Input type={"password"} style={inputStyle} placeholder={'Password'} id={'id_password'}*/}
                    {/*           addonBefore={"Password"} onChange={(e) => {password = e.target.value;}}*/}
                    {/*    />*/}
                    {/*</div>*/}
                </Modal>
            </div>
        )
    }
}

export default LoginModal
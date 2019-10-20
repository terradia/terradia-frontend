import React from 'react'
import {Alert, Checkbox} from "antd";
import Modal from '../../Modal'
import MyInput from '../../Input'
import {notification as _notification} from 'antd'
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
    errorLogin: undefined | string
}

const inputStyle = {
    width: "400px",
    margin: "5px"
};

class LoginModal extends React.Component<LoginModalProps, LoginModalState> {
    state = {
        modalLogin: false,
        confirmLoading: false,
        errorLogin: 'None',
    };

    openModal = () => {
        this.setState({
            modalLogin: true
        });
    };

    closeModal = () => {
        this.setState({
            confirmLoading: false,
            modalLogin: false
        });
    };

    submitForm = (values: { email: any; password: any; }) => {
        this.setState({
            confirmLoading: true,
            errorLogin: 'None'
        });
        this.props.login({variables: {email: values.email, password: values.password}}).then((data: any) => {
            if (data) {
                this.closeModal();
                this.successLoginNotification();
            } else {
                this.setState({
                    errorLogin: undefined
                })
            }
            this.setState({confirmLoading: false});
        });
    };

    successLoginNotification = () => {
        _notification['success']({
            message: 'Login Sucess',
            description:
                'You\'re now log in your account.',
        });
    };

    render() {
        return (
            <div>
                <Button color={"primary"} onClick={this.openModal}>Login</Button>
                <Formik
                    initialValues={{email: '', password: '', rememberMe: false}}
                    validationSchema={SignInSchema}
                    validateOnChange={false}
                    validateOnBlur={true}
                    onSubmit={(values) => {
                        this.submitForm(values)
                    }}
                >
                    {(props: any) => {
                        return (

                            <Modal
                                title={"Login"}
                                centered
                                visible={this.state.modalLogin}
                                confirmLoading={this.state.confirmLoading}
                                onCancel={this.closeModal}
                                destroyOnClose={true}
                                okText={"Login"}
                                onOk={() => props.validateForm().then(() => {
                                        props.submitForm();
                                    })
                                }
                            >
                                <Alert message="We cannot find an account with that email/password" type="error"
                                       style={{display: this.state.errorLogin}}/>

                                <form onSubmit={props.handleSubmit}>
                                    <MyInput
                                        name={'email'}
                                        type={'default'}
                                        style={{
                                            ...{
                                                color: props.errors.email ? 'red' : undefined,
                                                borderColor: props.errors.email ? 'red' : undefined
                                            }, ...inputStyle
                                        }}
                                        placeholder={'Login'}
                                        id={'id_login'}
                                        autoComplete={'email'}
                                        onChange={props.handleChange}
                                    />
                                    {props.errors.email &&
                                    <div id="feedback" style={{color: "red"}}>{props.errors.email}</div>}
                                    <MyInput
                                        name={'password'}
                                        type={"password"}
                                        style={{
                                            ...{
                                                color: props.errors.password ? 'red' : undefined,
                                                borderColor: props.errors.password ? 'red' : undefined
                                            }, ...inputStyle
                                        }}
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
                                </form>
                            </Modal>
                        )
                    }}
                </Formik>
            </div>
        )
    }
}

export default LoginModal
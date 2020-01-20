import React from 'react'
import Modal from '../../Modal'
import Input from '../../Input'
import Button from "../../Button";
import {Formik} from "formik";
import * as Yup from 'yup';
import {Alert, Card, notification as _notification} from "antd";

const RegisterSchema = Yup.object().shape({
    email: Yup.string()
        .email('Your email is invalid')
        .required('Your email is required')
        .min(2, 'Your email must be longer than 2 character')
    ,
    password: Yup.string()
        .required('Your password is required')
        .min(2, 'Your password must be longer than 2 character')
        .max(20, 'It is long password')
    ,
    lastname: Yup.string()
        .required('Your Lastname is required')
    ,
    firstname: Yup.string()
        .required('Your Lastname is required')

});

declare interface LoginModalProps {
    register: any
}

declare interface LoginModalState {
    modalLogin: boolean;
    confirmLoading: boolean;
    errorRegister: string | undefined,
}

const inputStyle = {
    width: "400px",
    margin: "5px"
};

class LoginModal extends React.Component<LoginModalProps, LoginModalState> {
    state = {
        modalLogin: false,
        confirmLoading: false,
        errorRegister: 'None',
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

    submitForm = (values: { firstname: string, lastname: string, email: string, password: string, phone: string }) => {
        this.setState({
            confirmLoading: true,
            errorRegister: 'None'
        });
        this.props.register({
            variables: {
                firstname: values.firstname,
                lastname: values.lastname,
                email: values.email,
                password: values.password,
                phone: values.phone
            }
        }).then((data: any) => {
            if (data) {
                this.closeModal();
                this.successRegisterNotification();
            } else {
                this.setState({
                    errorRegister: undefined
                })
            }
            this.setState({confirmLoading: false});
        });
    };

    successRegisterNotification = () => {
        _notification['success']({
            message: 'Register Sucess',
            description:
                'Please check your email and follow the instructions.',
        });
    };

    render() {
        return (
            <div>
                <Button text={'S\'enregistrer'} size={'large'} style={{
                    width: '100%',
                    marginBottom: '7%',
                    borderColor: '#5CC04A',
                    color: '#5CC04A'
                }}
                        onClick={this.openModal}
                />
                <Formik
                    initialValues={{firstname: '', lastname: '', email: '', password: '', phone: ''}}
                    validationSchema={RegisterSchema}
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
                                onOk={() => props.validateForm().then(() => {
                                    props.submitForm();
                                })}
                            >
                                <Alert message="There is an error. Please try again later" type="error"
                                       style={{display: this.state.errorRegister}}/>

                                <form onSubmit={props.handleSubmit}>
                                    <Input
                                        name={'firstname'}
                                        type={"default"}
                                        style={{
                                            ...{
                                                color: props.errors.firstname ? 'red' : undefined,
                                                borderColor: props.errors.firstname ? 'red' : undefined
                                            }, ...inputStyle
                                        }}
                                        placeholder={'Prénom'}
                                        id={'id_firstname'}
                                        autoComplete={'given-name'}
                                        onChange={props.handleChange}
                                    />
                                    {props.errors.firstname &&
                                    <div id="feedback" style={{color: "red"}}>{props.errors.firstname}</div>}

                                    <Input
                                        name={'lastname'}
                                        type={"default"}
                                        style={{
                                            ...{
                                                color: props.errors.lastname ? 'red' : undefined,
                                                borderColor: props.errors.lastname ? 'red' : undefined
                                            }, ...inputStyle
                                        }}
                                        placeholder={'Nom de famille'}
                                        id={'id_lastname'}
                                        autoComplete={'family-name'}
                                        onChange={props.handleChange}
                                    />
                                    {props.errors.lastname &&
                                    <div id="feedback" style={{color: "red"}}>{props.errors.lastname}</div>}

                                    <Input
                                        name={'email'}
                                        type={"default"}
                                        style={{
                                            ...{
                                                color: props.errors.email ? 'red' : undefined,
                                                borderColor: props.errors.email ? 'red' : undefined
                                            }, ...inputStyle
                                        }}
                                        placeholder={'Adresse mail'}
                                        id={'id_login'}
                                        autoComplete={'email'}
                                        onChange={props.handleChange}
                                    />
                                    {props.errors.email &&
                                    <div id="feedback" style={{color: "red"}}>{props.errors.email}</div>}

                                    <Input
                                        name={'phone'}
                                        type={"default"}
                                        style={{
                                            ...{
                                                color: props.errors.phone ? 'red' : undefined,
                                                borderColor: props.errors.phone ? 'red' : undefined
                                            }, ...inputStyle
                                        }}
                                        placeholder={'Téléphone'}
                                        id={'id_phone'}
                                        autoComplete={'phone'}
                                        onChange={props.handleChange}
                                    />
                                    {props.errors.phone &&
                                    <div id="feedback" style={{color: "red"}}>{props.errors.phone}</div>}

                                    <Input
                                        name={'password'}
                                        type={"password"}
                                        style={{
                                            ...{
                                                color: props.errors.password ? 'red' : undefined,
                                                borderColor: props.errors.password ? 'red' : undefined
                                            }, ...inputStyle
                                        }}
                                        placeholder={'Mot de passe'}
                                        id={'id_password'}
                                        autoComplete={'new-password'}
                                        onChange={props.handleChange}
                                    />
                                    {props.errors.password &&
                                    <div id="feedback" style={{color: "red"}}>{props.errors.password}</div>}
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
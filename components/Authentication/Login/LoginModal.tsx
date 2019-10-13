import React from 'react'
import {Input, Modal} from "antd";
import Button from "../../Button";

const inputStyle = {
    width: "400px",
    paddingBottom: '30px'
};

declare interface LoginModalProps {
    login: any
}

declare interface LoginModalState {
    modalLogin: boolean;
    confirmLoading: boolean;
}

class LoginModal extends React.Component<LoginModalProps, LoginModalState> {
    state = {
        modalLogin: false,
        confirmLoading: false
    };

    openModal = () => {
        console.log("opening modal");
        this.setState({
            modalLogin: true
        });
    };

    render() {
        let email = "";
        let password = "";
        return (
            <div>
                <Button color={"primary"} onClick={this.openModal}>Login</Button>
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
                        this.props.login({variables: {email: email, password: password}}).then((data: any) => {
                            console.log(data);
                            this.setState({
                                confirmLoading: false,
                                modalLogin: false
                            })
                        });
                    }}
                >
                    <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', padding: '9%'}}>
                        <Input type={"default"} style={inputStyle} placeholder={'Login'} id={'id_login'}
                            addonBefore={"Login"} onChange={(e) => {email = e.target.value;}}
                        />
                        <Input type={"password"} style={inputStyle} placeholder={'Password'} id={'id_password'}
                               addonBefore={"Password"} onChange={(e) => {password = e.target.value;}}
                        />
                    </div>
                </Modal>
            </div>
        )
    }
}

export default LoginModal
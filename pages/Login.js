import React from "react";
import {Icon} from 'antd'
import Button from "../components/Button";
import Modal from "../components/Modal";
import Input from "../components/Input";


const inputStyle = {
    width: "400px",
    paddingBottom: '30px'
};

export default class Login extends React.Component {
    // const [modalVisible, setModalVisible] = useState(false);
    // useState(() => {         // constructeur hooks fct
    //     }  , []);
    constructor(props) {
        super(props);
        this.state = {
            modalLogin: false,
            id: '',
            password: '',
            confirmLoading: false
        };
    }

    openModal = () => {
        this.setState({
            modalLogin: true
        });
    };

    render() {
        return (
            <div>
                <div style={{position: 'absolute', left: '95%'}}>
                    <Button color={"primary"} onClick={this.openModal}>Login</Button>
                </div>
                <Modal
                    title={"Login"}
                    centered
                    visible={this.state.modalLogin}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={() => {
                        console.log('User: ', this.state.id);
                        console.log('Password: ', this.state.password);
                        this.setState({
                            modalLogin: false
                        })
                    }}
                    onOk={() => {
                        console.log('User: ', this.state.id);
                        console.log('Password: ', this.state.password);
                        this.setState({
                            confirmLoading: true
                        })
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
                                    id: e.target.value
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
            </div>
        );
    }
}

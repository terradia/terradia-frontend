import React from "react";
import RegisterButton from "./RegisterButton";

declare interface RegisterProps {

}

declare interface RegisterState {

}

class Register extends React.Component<RegisterProps, RegisterState> {

    OnErrorHandler = (data: { message: any; }) => {
        console.log(data.message);
        this.setState({
            confirmLoading: false
        });
    };

    render() {
        return (
            <RegisterButton/>
        );
    }
}

export default Register
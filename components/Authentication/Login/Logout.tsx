import React from 'react'
import {ApolloClient} from "apollo-client";
import Button from "../../Button";

declare interface LogoutProps {
    client: ApolloClient<object>;
    visible?: any;
    onLoggedIn?: any;
}

const buttonStyle = {
    backgroundColor: '#5CC04A',
    borderColor: '#5CC04A',
    color: '#FFFFF',
    width: '400px',
    height: '45px',
    position: 'absolute',
    bottom: 10

};

export default function Logout(props: LogoutProps) {

    const onLogoutHandler = () => {
        localStorage.removeItem('token');
        props.client.resetStore().then(() => {
                if (props.visible) {
                    props.visible(false);
                }
                if (props.onLoggedIn) {
                    props.onLoggedIn(false);
                }
            }
        )
    };

    return (
        <Button color={"primary"} onClick={onLogoutHandler}
                style={buttonStyle} text={'Logout'}/>
    )
}
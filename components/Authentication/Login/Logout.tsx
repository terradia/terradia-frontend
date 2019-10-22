import React from 'react'
import {ApolloClient} from "apollo-client";
import Button from "../../Button";

declare interface LogoutProps {
    client: ApolloClient<object>;
    visible?: any;
    onLoggedIn?: any;
}

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
                style={{marginLeft: '10px'}} text={'Logout'}/>
    )
}
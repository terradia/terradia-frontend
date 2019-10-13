import React from 'react'
import {ApolloClient} from "apollo-client";
import Button from "../../Button";

declare interface LogoutProps {
    client: ApolloClient<object>;
    data: any;
}

export default function Logout(props: LogoutProps) {
    const username = props.data.getUser.firstName + " " + props.data.getUser.lastName;

    const onLogoutHandler = () => {
        localStorage.removeItem('token');
        props.client.resetStore();
    };

    return (
        <Button color={"primary"} onClick={onLogoutHandler}
                style={{marginLeft: '10px'}}>
            {username + " Logout"}
        </Button>
    )
}
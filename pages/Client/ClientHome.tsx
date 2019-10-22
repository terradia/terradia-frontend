import React, {useState} from "react";
import {Layout} from "../Layout";

declare interface ClientHomeProps {
    OnLoggedIn?: (loginStatus: boolean) => void
}

const ClientHome = (props: ClientHomeProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const IsLoggedInHandler = (loginStatus: boolean) => {
        console.log(isLoggedIn);
        setIsLoggedIn(loginStatus);
        if (props.OnLoggedIn)
            props.OnLoggedIn(loginStatus);
    };

    return (
        <Layout OnLoggedIn={IsLoggedInHandler}>
        </Layout>
    )
};

export default ClientHome;
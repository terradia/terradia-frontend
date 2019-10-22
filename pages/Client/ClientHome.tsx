import React from "react";
import {Layout} from "../Layout";

declare interface ClientHomeProps {
    OnLoggedIn?: (loginStatus: boolean) => void
}

const ClientHome = (props: ClientHomeProps) => {
    return (
        <Layout OnLoggedIn={props.OnLoggedIn}>
        </Layout>
    )
};

export default ClientHome;
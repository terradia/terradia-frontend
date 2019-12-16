import React from "react";
import {ClientLayout} from "./ClientLayout";

declare interface ClientHomeProps {
    OnLoggedIn?: (loginStatus: boolean) => void
}

const ClientHome = (props: ClientHomeProps) => {
    return (
        <ClientLayout OnLoggedIn={props.OnLoggedIn}>
        </ClientLayout>
    )
};

export default ClientHome;
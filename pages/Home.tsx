import React from "react";
import ProducerHome from "./Producer/ProducerHome";
import ClientHome from "./Client/ClientHome";
import Error from "next/error";

declare interface HomeProps {
    type: string;
}

const Home = (props: HomeProps) => {
    switch (props.type) {
        case "producer":
            return <ProducerHome/>;
        case "client":
            return <ClientHome/>;
        default:
            return <Error statusCode={1}/>
    }
};

export default Home;
import React, {useState} from "react";
import ProducerHome from "./Producer/ProducerHome";
import ClientHome from "./Client/ClientHome";

declare interface HomeProps {
    producer?: boolean;
    isLoggedIn?: boolean;
    OnLoggedIn?: (loginStatus: boolean) => void
}

const Home = (props: HomeProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const IsLoggedInHandler = (loginStatus: boolean) => {
        setIsLoggedIn(loginStatus);
    };

    if ((props.isLoggedIn || isLoggedIn))
        return <ProducerHome/>;
    return <ClientHome OnLoggedIn={IsLoggedInHandler}/>
};

export default Home;
import React, {useState} from "react";
import {Layout} from "../Layout";
import Products from "./Menu/Products";
import Profil from "./Menu/Profil";

declare interface ProducerHomeProps {
    OnLoggedIn?: (loginStatus: boolean) => void
}

const ProducerHome = (props: ProducerHomeProps) => {
    const [itemMenu, setItemMenu] = useState('products');

    return (
        <Layout OnLoggedIn={props.OnLoggedIn} setItemMenu={setItemMenu}>
            {itemMenu === 'products' &&
                <Products/>
            }
            {itemMenu === 'profil' &&
                <Profil/>
            }
        </Layout>
    );
};

export default ProducerHome;
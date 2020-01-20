import React, {useState} from "react";
import {ProducerLayout} from "./ProducerLayout";
import Products from "./Menu/Products";
import Profil from "./Menu/Profil";

declare interface ProducerHomeProps {
    OnLoggedIn?: (loginStatus: boolean) => void
}

const ProducerHome = (props: ProducerHomeProps) => {
    const [itemMenu, setItemMenu] = useState('products');

    return (
        <ProducerLayout OnLoggedIn={props.OnLoggedIn} setItemMenu={setItemMenu} itemMenu={itemMenu}>
            {itemMenu === 'products' &&
                <Products/>
            }
            {itemMenu === 'profil' &&
                <Profil/>
            }
        </ProducerLayout>
    );
};

export default ProducerHome;
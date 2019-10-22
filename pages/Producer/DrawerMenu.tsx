import {Drawer} from 'antd';
import Button from '../../components/Button'
import React, {useState} from "react";
import Logout from "../../components/Authentication/Login/Logout";
import {ApolloConsumer} from "@apollo/react-common";


interface DrawerMenuProps {
    child ?: React.ReactChild;
    onLoggedIn ?: any;
}

export default function DrawerMenu(props: DrawerMenuProps) {
    const [visible, setVisible] = useState(false);


    return (
        <div>
            <Button onClick={() => setVisible(!visible)} text={'Menu'} color={"primary"}
            />
            <ApolloConsumer>
                {client => (
                    <Drawer
                        title="Menu"
                        placement="right"
                        closable={true}
                        visible={visible}
                        onClose={() => setVisible(!visible)}
                    >
                        <Logout client={client} visible={setVisible} onLoggedIn={props.onLoggedIn}/>


                        <p>Statistiques</p>
                        <p>Mes produits</p>
                    </Drawer>
                )}
            </ApolloConsumer>
        </div>
    );
}
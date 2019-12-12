import {Icon} from 'antd';
import Button from '../../components/Button';
import Drawer from '../../components/Drawer';
import React, {useState} from "react";
import Logout from "../../components/Authentication/Login/Logout";
import {ApolloConsumer} from "@apollo/react-hooks";

interface DrawerMenuProps {
    child ?: React.ReactChild;
    onLoggedIn ?: any;
    setItemMenu ?: any;
}

const headerStyle = {
    fontSize: '30px',
    color: '#5CC04A',
};

const bodyStyle = {
    fontSize: '20px',
};

const drawerStyle = {
    color: 'red'
};

const buttonStyle = {
    backgroundColor: '#5CC04A',
    borderColor: '#5CC04A',
    color: '#FFFFF',
    width: '400px',
    height: '45px',
    marginBottom: '20px'
};

const title = <div style={headerStyle}> <Icon type='home'/> Menu </div>;

export default function DrawerMenu(props: DrawerMenuProps) {
    const [visible, setVisible] = useState(false);
    console.log('Drawer props', props);
    return (
        <div>
            <Button onClick={() => setVisible(!visible)} text={'Menu'} color={"primary"}/>
            <ApolloConsumer>
                {client => (
                    <Drawer
                        title={title}
                        placement="right"
                        closable={true}
                        visible={visible}
                        drawerStyle={drawerStyle}
                        bodyStyle={bodyStyle}
                        width={'500px'}
                        onClose={() => setVisible(!visible)}
                    >
                        <Logout client={client} visible={setVisible} onLoggedIn={props.onLoggedIn}/>

                        <Button color={"primary"} onClick={() => {props.setItemMenu('profil')}} style={buttonStyle} text={'Mon profil'}/>
                        <Button color={"primary"} onClick={() => {alert('Statistiques')}} style={buttonStyle} text={'Statistiques'}/>
                        <Button color={"primary"} onClick={() => {props.setItemMenu('products')}} style={buttonStyle} text={'Mes produits'}/>

                    </Drawer>
                )}
            </ApolloConsumer>
        </div>
    );
}
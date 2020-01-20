import React, {ReactNode, useState} from "react";
import Head from 'next/head'
import {Layout as AntLayout, Menu} from "antd";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
import DrawerMenu from "./Producer/DrawerMenu";
import Anchor from "../components/Anchor";

const AntHeader = AntLayout.Header;
const AntFooter = AntLayout.Footer;
const AntContent = AntLayout.Content;
const AntSider = AntLayout.Sider;

declare interface LayoutProps {
    children?: ReactNode
    OnLoggedIn?: (loginStatus: boolean) => void
    setItemMenu?: any;
    itemMenu?: string;
}

const linkTab = [{href: '#General', title: 'Général'}, {href: '#Notifications', title: 'Notifications'}];

const searchStyle = {backgroundColor: 'green', height: '375px'};

export const Layout = (props: LayoutProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const IsLoggedInHandler = (loginStatus: boolean) => {
        setIsLoggedIn(loginStatus);
        if (props.OnLoggedIn)
            props.OnLoggedIn(loginStatus);
    };

    return (
        <div>
            <Head>
                <title>Terradia</title>
                <link rel="shortcut icon" href="/static/app.png"/>
            </Head>

            <AntLayout>
                <AntHeader style={{
                    height: '10vh',
                    width: '100%',
                    display: 'fixed',
                    position: 'relative',
                    backgroundColor: '#E5E5E5',
                    justifyContent: 'space-between'
                }}
                >
                    <Menu mode={"horizontal"} style={{lineHeight: '8vh', background: 'none'}}>
                        <Menu.Item key={'logo'} style={{float: 'left'}}>
                            <img src="/static/Titre.png" style={{maxHeight: '6vh', top: '1vh'}} alt={"Terradia"}/>
                        </Menu.Item>
                        {isLoggedIn &&
                        <Menu.Item key={'menu'} style={{float: 'right'}}>
                            <DrawerMenu onLoggedIn={setIsLoggedIn} setItemMenu={props.setItemMenu}/>
                        </Menu.Item>
                        }
                        {!isLoggedIn &&
                        <Menu.Item key={'login'} style={{float: 'right'}}>
                            <Login onLoggedIn={IsLoggedInHandler}/>
                        </Menu.Item>
                        }
                        {!isLoggedIn &&
                        <Menu.Item key={'register'} style={{float: 'right'}}>
                            <Register/>
                        </Menu.Item>
                        }
                    </Menu>
                </AntHeader>

                {props.itemMenu === 'profil' &&
                <AntLayout>
                    <AntSider>
                        <Anchor linkTab={linkTab} affix={true} style={{"margin": "5px"}}/>
                    </AntSider>

                    <AntContent style={{height: '80vh', overflow: 'auto'}}>
                        {props.children}
                    </AntContent>
                </AntLayout>}

                {props.itemMenu === 'products' &&
                <AntContent style={{height: '80vh', overflow: 'scroll', display: 'flex'}}>
                    <div id="search" style={searchStyle}>
                        <p>Recherche</p>
                    </div>
                    <div>
                        {props.children}
                    </div>
                </AntContent>}


                <AntFooter
                    style={{height: '10vh', backgroundImage: 'linear-gradient(90deg, #5CC04A 0%, #8FDD3D 100%)'}}>
                    Copyright © 2019 Terradia Inc. All rights reserved.
                </AntFooter>
            </AntLayout>
        </div>
    )
};


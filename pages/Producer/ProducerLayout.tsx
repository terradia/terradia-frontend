import React, {ReactNode, useState} from "react";
import Head from 'next/head'
import {Layout as AntLayout, Menu} from "antd";
import Login from "../../components/Authentication/Login/Login";
import Register from "../../components/Authentication/Register/Register";
import DrawerMenu from "../Producer/DrawerMenu";
import Anchor from "../../components/Anchor";

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

const searchStyle = {backgroundColor: 'green', height: '30vh'};

export const ProducerLayout = (props: LayoutProps) => {
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
                    position: 'relative',
                    backgroundColor: '#E5E5E5',
                    justifyContent: 'space-between'
                }}
                >
                    <div id='logo' style={{position: "absolute", top: '1vh'}}>
                        <img src="/static/Titre.png" style={{maxHeight: '6vh', top: '1vh'}} alt={"Terradia"}/>
                    </div>
                    <div style={{top: '1vh', right: '35px', position: 'absolute'}}>
                        {isLoggedIn &&
                        <DrawerMenu onLoggedIn={setIsLoggedIn} setItemMenu={props.setItemMenu}/>
                        }
                        {!isLoggedIn &&
                        <Login onLoggedIn={IsLoggedInHandler}/>
                        }
                        {!isLoggedIn &&
                        <Register/>
                        }
                    </div>
                </AntHeader>

                {props.itemMenu === 'profil' &&
                <AntLayout>
                    <AntSider>
                        <Anchor linkTab={linkTab} affix={true} style={{"margin": "5px"}}/>
                    </AntSider>

                    <AntContent style={{height: '90vh', overflow: 'auto', display: 'block'}}>
                        {props.children}
                        <AntFooter
                            style={{
                                height: '7vh',
                                background: 'linear-gradient(90deg, #8FDD3D 0%, #5EC14A 100%), #C4C4C4'
                            }}>
                            Copyright © 2019 Terradia Inc. All rights reserved.
                        </AntFooter>
                    </AntContent>
                </AntLayout>}

                {props.itemMenu === 'products' &&
                <AntContent style={{height: '90vh', overflow: 'auto'}}>
                    {props.children}
                    <AntFooter
                        style={{
                            height: '7vh',
                            background: 'linear-gradient(90deg, #8FDD3D 0%, #5EC14A 100%), #C4C4C4'
                        }}>
                        Copyright © 2019 Terradia Inc. All rights reserved.
                    </AntFooter>
                </AntContent>}


            </AntLayout>
        </div>
    )
};


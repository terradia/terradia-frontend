import React, {ReactNode} from "react";
import Head from 'next/head'
import {Layout as AntLayout, Menu} from "antd";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register";

const AntHeader = AntLayout.Header;
const AntFooter = AntLayout.Footer;
const AntContent = AntLayout.Content;

declare interface LayoutProps {
    children?: ReactNode
}

export const Layout = (props: LayoutProps) => {
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
                    backgroundImage: 'linear-gradient(90deg, #5CC04A 0%, #8FDD3D 100%)',
                    justifyContent: 'space-between'
                }}
                >
                    <Menu mode={"horizontal"} style={{lineHeight: '8vh', background: 'none'}}>
                        <Menu.Item key={'logo'}>
                            <img src="/static/Titreblanc.png" style={{maxHeight: '6vh', top: '1vh'}} alt={"Terradia"}/>
                        </Menu.Item>
                        <Menu.Item key={'login'}>
                            <Login/>
                        </Menu.Item>
                        <Menu.Item key={'register'}>
                            <Register/>
                        </Menu.Item>
                    </Menu>
                </AntHeader>

                <AntContent style={{height: '80vh'}}>
                    {props.children}
                </AntContent>

                <AntFooter style={{height: '10vh', backgroundImage: 'linear-gradient(90deg, #5CC04A 0%, #8FDD3D 100%)'}}>
                    Copyright © 2019 Terradia Inc. All rights reserved.
                </AntFooter>
            </AntLayout>
        </div>
    )
};

import React, {ReactNode, useState} from "react";
import Head from 'next/head'
import {Card, Divider, Icon, Layout as AntLayout, Menu} from "antd";
import Login from "../../components/Authentication/Login/Login";
import Register from "../../components/Authentication/Register/Register";
import DrawerMenu from "../Producer/DrawerMenu";
import Link from "next/link";
import Button from '../../components/Button';

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

const titleStyle = {
    marginRight: '40px',
    fontSize: '25px',
    fontFamily: 'Montserrat',
    fontWeight: 'bold' as 'bold',
    color: '#5CC04A'
};

const headerStyle = {
    height: '10vh',
    width: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between'
};

const contentStyle = {
    height: '90vh',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF'
};

const footerStyle = {
    height: '10vh',
    backgroundImage: 'linear-gradient(90deg, #5CC04A 0%, #8FDD3D 100%)'
};

export const ClientLayout = (props: LayoutProps) => {
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
                <AntHeader style={headerStyle}>
                    <div style={{display: "flex"}}>

                        <div id='logo' style={{paddingTop: '1vh'}}>
                            <img src="/static/Titre.png" style={{maxHeight: '6vh', top: '1vh'}} alt={"Terradia"}/>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            padding: '1vh 10% 0 50%'
                        }}>
                            {isLoggedIn &&
                            <DrawerMenu onLoggedIn={setIsLoggedIn} setItemMenu={props.setItemMenu}/>
                            }
                            <Link href="/about">
                                <a style={titleStyle}>A propos</a>
                            </Link>
                            <Link href="www.netflix.com">
                                <a style={titleStyle}>Blog</a>
                            </Link>
                            <Link href="/contact">
                                <a style={titleStyle}>Contact</a>
                            </Link>
                        </div>
                    </div>
                </AntHeader>

                <AntContent style={contentStyle}>
                    <div>
                        <div style={{}}>
                            <p style={{
                                font: '45px bold',
                                color: '#5CC04A',
                                width: '35%',
                                padding: '4% 0 0 10%'
                            }}>L’application qui facilite l’accès aux produits locaux.</p>
                        </div>
                        <div>
                            <div style={{
                                width: '100%',
                                margin: '0% 0 -15% 0',
                                maxHeight: '50vh',
                                display: 'flex',
                                padding: '0 10% 0 8%'
                            }}>
                                <img src="/static/iphone.png"
                                     style={{maxHeight: '50vh', top: '1vh', position: 'relative', zIndex: 5}}
                                     alt={"iphone"}/>
                                <img src="/static/tracteur.png" style={{
                                    maxHeight: '20vh',
                                    top: '1vh',
                                    position: 'relative',
                                    zIndex: 5,
                                    margin: '8.5% 0 0 16%',
                                    transform: 'rotate(-15deg)'
                                }} alt={"tractor"}/>
                                <Card title={'Déjà membre ?'} bordered={true} style={{
                                    zIndex: 5,
                                    borderRadius: '16px',
                                    width: '25%',
                                    margin: '0 0 5% 22%',
                                    boxShadow: '7px 7px rgba(0, 0, 0, 0.3)'
                                }} headStyle={{
                                    borderColor: 'white',
                                    fontFamily: 'Montserrat',
                                    color: '#8D8D8D',
                                    margin: '0 30% 0 30%'
                                }}>
                                    <Login onLoggedIn={IsLoggedInHandler}/>
                                    <Divider/>
                                    <Register/>
                                    <Button text={'Connexion Facebook'}
                                            icon={<Icon type="facebook" style={{color: '#2174EE'}} theme={'filled'}/>}
                                            size={'large'} style={{
                                        width: '100%',
                                        marginBottom: '7%',
                                        borderColor: '#2174EE',
                                        color: '#2174EE'
                                    }}/>
                                    <Button text={'Connexion Apple'}
                                            icon={<Icon type="apple" style={{color: '#202020'}} theme={'filled'}/>}
                                            size={'large'}
                                            style={{width: '100%', color: '#202020', borderColor: '#202020'}}/>
                                </Card>
                            </div>


                            <div style={{
                                background: 'linear-gradient(90deg, #8FDD3D 0%, #5EC14A 100%), #C4C4C4',
                                height: '1140px',
                                width: '2500px',
                                transform: 'rotate(-15deg)',
                                zIndex: -1
                            }}>

                            </div>
                        </div>
                    </div>
                    {props.children}
                </AntContent>


                {/*<AntFooter*/}
                {/*    style={footerStyle}>*/}
                {/*    Copyright © 2019 Terradia Inc. All rights reserved.*/}
                {/*</AntFooter>*/}
            </AntLayout>
        </div>
    )
};


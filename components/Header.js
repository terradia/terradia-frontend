import React from "react";
import Link from 'next/link';
import Drawer from "../components/Drawer";


const headerStyle = {
    marginRight: 15,
    position: "relative",
    height: "150px",
    width: "100%",
    backgroundColor: "red"
};

const titleStyle = {
    position: "absolute",
    top: "50",
    left: "0"
};

const drawerStyle = {
    position: "absolute",
    left: "1790px"
};

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={headerStyle}>
                <div style={titleStyle}>
                    <Link href={"/"}>
                        <img alt="example"
                             src={"https://gamepedia.cursecdn.com/terraria_gamepedia/1/13/CoverLogo.png?version=e937afee4def5488ac24dbf9f7d0396a"}/>
                        {/*<a style={linkStyle}>Home</a>*/}
                    </Link>
                </div>
                <div style={drawerStyle}>
                    <Drawer/>
                </div>
            </div>
        )
    }
}
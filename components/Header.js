import Link from 'next/link';
import React from "react";


const linkStyle = {
    marginRight: 15
};

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link href={"/"}>
                    <img alt="example" src={"https://gamepedia.cursecdn.com/terraria_gamepedia/1/13/CoverLogo.png?version=e937afee4def5488ac24dbf9f7d0396a"} />
                    {/*<a style={linkStyle}>Home</a>*/}
                </Link>
            </div>
        )
    }
}
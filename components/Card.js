import React from "react"
import {Card as AntCard} from "antd"
import Link from "next/link";

const { Meta } = AntCard;

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <AntCard
                hoverable
                style={{ width: 240, height: 300}}
                cover={<img alt="example" src={this.props.content.image} style={{height: 200, objectFill: 'cover'}}/>}
                onClick={()=> window.open(this.props.content.website, "_blank")}
            >
                <Meta title={this.props.content.name} />
            </AntCard>
        )
    }
}
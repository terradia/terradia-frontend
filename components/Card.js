import React from "react"
import {Card as AntCard} from "antd"

const { Meta } = AntCard;

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        console.log('Card props', this.props);
    }

    render () {
        return (
            <AntCard
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={this.props.content.image} />}
            >
                <Meta title={this.props.content.name} description={this.props.content.website} />
            </AntCard>
        )
    }
}
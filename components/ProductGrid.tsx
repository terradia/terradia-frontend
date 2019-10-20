import React from 'react'
import ReactGridLayout from 'react-grid-layout'
import {Card, Icon} from "antd";
import {Query} from "@apollo/react-components";
import {ApolloError, gql} from "apollo-boost";

const GET_PRODUCTS = gql`
    {
        getAllProducts {
            id
            name
            description
        }
    }
`;

declare interface GetProductsData {
    getAllProducts: {
        id: string;
        name: string;
        description: string;
        categories: string;
    }
}

export default function () {
    const OnQueryError = (err: ApolloError) => {
        console.log(err);
    };

    const layout = [
        {i: "default", x: 0, y: 0, w: 2, h: 2, static: true}
    ];

    return (
            <Query<GetProductsData> query={GET_PRODUCTS} onError={OnQueryError}>
            {({loading, data}) => {
                console.log(data);
                if (loading) {
                    console.log("retrieving products");
                    return (
                        <ReactGridLayout className={"layout"} layout={layout} width={1920}>
                            <Card key={"default"} title={"Loading Products"}>
                                <Icon type={"loading"} style={{fontSize: '64px'}}/>
                            </Card>
                        </ReactGridLayout>
                    )
                } else {
                    console.log("products retrieved ... displaying it");
                    return (
                        <ReactGridLayout className={"layout"} layout={layout} width={1920}>
                            <Card key={"default"} title={"Add new Product"}>
                                <Icon type="plus-circle" style={{ fontSize: '64px'}}/>
                            </Card>
                        </ReactGridLayout>
                    )
                }
            }}
            </Query>
    )
}
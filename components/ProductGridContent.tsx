import React, {ReactNode} from 'react'
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import ReactGridLayout, {Layout, WidthProvider} from "react-grid-layout";
import AddProduct from "./AddProduct";
import {Card} from "antd";

const Grid = WidthProvider(ReactGridLayout);

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
    getAllProducts: [{
            id: string
            name: string;
            description: string;
            categories: string;
    }]
}

const ProductGridContent = () => {
    const {loading, error, data, refetch} = useQuery<GetProductsData>(GET_PRODUCTS);
    const layout: Layout[] = [{i: "AddProduct", x: 0, y: 0, w: 1, h: 1, minH: 1, maxH: 2, minW: 1, maxW: 2, static: true}];

    if (loading) {
        return (
            <Grid className={"layout"} layout={layout} cols={4}>
                <div key={"AddProduct"}>
                    <AddProduct isLoading/>
                </div>
            </Grid>
        )
    }

    if (error) {
        console.log(error);
        return null;
    }

    let cards: ReactNode[] = [];
    if (data && data.getAllProducts) {
        cards = data.getAllProducts.map((product: any, index: number) => {
            const x = (index + 1) % 4;
            const y = Math.ceil((index + 1) / 4);
            layout.push({i: product.id, x: x, y: y, w: 1, h: 1, minH: 1, maxH: 2, minW: 1, maxW: 2});
            return (
                <div key={product.id}>
                    <Card title={product.name} style={{textAlign: "center"}}>
                        {product.description}
                    </Card>
                </div>
            )
        })
    }
    return (
        <Grid className={"layout"} layout={layout} cols={4}>
            <div key={"AddProduct"} style={{marginBottom: '16px'}}>
                <AddProduct onProductAdded={refetch}/>
            </div>
            {cards}
        </Grid>
    )
};

export default ProductGridContent
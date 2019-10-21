import React, {useEffect} from 'react'
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import {Responsive, WidthProvider, Layouts} from "react-grid-layout";
import AddProduct from "./AddProduct";
import {Card} from "antd";

const Grid = WidthProvider(Responsive);

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
    const {loading, error, data} = useQuery<GetProductsData>(GET_PRODUCTS);
    let layout: Layouts = {};

    useEffect(() => {
        layout = {
            lg: [{x: 0, y: 0, w: 2, h: 2, static: true}],
            md: [{x: 0, y: 0, w: 2, h: 2, static: true}],
            sm: [{x: 0, y: 0, w: 2, h: 2, static: true}],
            xs: [{x: 0, y: 0, w: 2, h: 2, static: true}],
            xss: []
        };
    });

    if (loading) {
        return (
            <Grid className={"layout"} layouts={layout}>
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

    return (
        <Grid className={"layout"} layouts={layout}
              breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
              cols={{lg: 6, md: 5, sm: 4, xs: 2, xxs: 0}}>
            <div key={"AddProduct"}>
                <AddProduct/>
            </div>
            {data && data.getAllProducts && data.getAllProducts.map((product: any) => {
                return (
                    <div key={product.id}>
                        <Card title={product.name}>
                            {product.description}
                        </Card>
                    </div>
                )
            })
            }
        </Grid>
    )
};

export default ProductGridContent
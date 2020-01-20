import React, {ReactNode} from 'react'
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import ReactGridLayout, {Layout, WidthProvider} from "react-grid-layout";
import AddProduct from "./AddProduct";
import {Row, Col, Slider} from 'antd';

// import {Card} from "antd";
import getProductsQuery from "../apollo/query/getAllProducts";
import Card from "./Card";

const Grid = WidthProvider(ReactGridLayout);


declare interface GetProductsData {
    getAllProducts: [{
        id: string
        name: string;
        description: string;
        categories: {
            name: string;
        };
    }]
}

const ProductGridContent = () => {
    const {loading, error, data, refetch} = useQuery<GetProductsData>(getProductsQuery);
    const nb_cols = 5;

    const getCategoriePicture = (category: string) => {
        switch (category) {
            case 'cheese':
                return 'cheese.jpg';
            case 'ice-cream':
                return 'iceCream.jpg';
            case 'meat':
                return 'meat.jpg';
            case 'vegetables':
                return 'vegetable.jpg';
            case 'wine':
                return 'wine.jpg';
            case undefined:
                return null;
        }
    };

    if (loading) {
        return (
            <Grid className={"layout"} cols={nb_cols}>
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
            const x = (index + 1) % nb_cols;
            const y = Math.ceil((index + 1) / nb_cols);
            return (
                <div key={product.id}>
                    {/*<Col lg={{span: 2, offset: 3}}>*/}
                    <Col span={24 / 4}>
                        <Card
                            title={product.name}
                            backgroundPath={`/static/foodCategories/${getCategoriePicture( product.categories.length > 0 ? product.categories[0].name : undefined)}`}
                        />
                    </Col>
                </div>
            )
        })
    }
    return (
        <Row gutter={[30, 30]} style={{width: '100%', marginLeft: '4%', overflow: 'hidden', paddingBottom: '30px'}}>
            <Col span={24 / 4}>
                <AddProduct onProductAdded={refetch}/>
            </Col>
            {cards}
        </Row>
    )
};

export default ProductGridContent
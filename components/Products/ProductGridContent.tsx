import React, {ReactNode, useState} from 'react'
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import ReactGridLayout, {Layout, WidthProvider} from "react-grid-layout";
import AddProduct from "./AddProduct";
import {Row, Col, Slider, Divider, Avatar} from 'antd';
import getProductsQuery from "../../apollo/query/getAllProducts";
import ProductsCard from "./ProductsCard";
import Modal from "../Modal";
import Rate from "../Rate";
import List from "../List";
import {List as AntList} from 'antd';
import ProductModal from "./ProductModal";

const Grid = WidthProvider(ReactGridLayout);


declare interface GetProductsData {
    getAllProducts: [{
        id: string
        name: string;
        description: string;
        categories: [{
            name: string;
        }];
    }]
}

const ProductGridContent = () => {
    const {loading, error, data, refetch} = useQuery<GetProductsData>(getProductsQuery);
    const nb_cols = 6;



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
                    <Col span={24 / nb_cols}>
                        <ProductModal product={product}/>
                    </Col>
                </div>
            )
        })
    }
    return (
        <Row gutter={[16, 16]} style={{width: '100%', margin: '0', overflow: 'hidden', paddingBottom: '5%'}}>
            <Col span={24 / nb_cols}>
                <AddProduct onProductAdded={refetch}/>
            </Col>
            {cards}
        </Row>
    )
};

export default ProductGridContent
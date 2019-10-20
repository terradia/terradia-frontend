import React from "react";
import {Layout} from "../Layout";
import SubHeader from "../../components/SubHeader";
import ProductGrid from "../../components/ProductGrid";

const ProducerHome = () => {
    return (
        <Layout>
            <SubHeader/>
            <ProductGrid/>
        </Layout>
    );
};

export default ProducerHome
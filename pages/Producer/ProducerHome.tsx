import React from "react";
import {Layout} from "../Layout";
import SubHeader from "../../components/SubHeader";
import ProductGridContent from "../../components/ProductGridContent";

const ProducerHome = () => {
    return (
        <Layout>
            <SubHeader/>
            <ProductGridContent/>
        </Layout>
    );
};

export default ProducerHome
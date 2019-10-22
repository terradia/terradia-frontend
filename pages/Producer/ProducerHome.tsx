import React from "react";
import {Layout} from "../Layout";
import SubHeader from "../../components/SubHeader";
import ProductGridContent from "../../components/ProductGridContent";

declare interface ProducerHomeProps {
    OnLoggedIn?: (loginStatus: boolean) => void
}

const ProducerHome = (props: ProducerHomeProps) => {
    return (
        <Layout OnLoggedIn={props.OnLoggedIn}>
            <SubHeader/>
            <ProductGridContent/>
        </Layout>
    );
};

export default ProducerHome
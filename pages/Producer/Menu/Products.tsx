import SubHeader from "../../../components/SubHeader";
import ProductGridContent from "../../../components/ProductGridContent";
import React from "react";
import Input from "../../../components/Input";
import {Icon} from "antd";

const searchStyle = {height: '30vh', marginBottom: '30px', background: 'linear-gradient(90deg, #8FDD3D 0%, #5EC14A 100%), #C4C4C4', width: '100%'};

const Products = () => {
    return (
        <div style={{overflow: 'hidden'}}>
            {/*<SubHeader/>*/}
            <div id="search" style={searchStyle}>
                <img  src={"/static/paysan.png"} alt={"Farmer"} style={{position: 'relative', left:'63%', top:'-13%'}}/>
                <img  src={"/static/panier.png"} alt={"Panier"} style={{position: 'relative', left:'16%', top: '-2%'}}/>
                <Input type={'search'}  style={{position: "relative", left: '9%', width: '40%', top: '14%'}} placeholder={'Rechercher un produit'} />
            </div>
            <ProductGridContent/>
        </div>
    );
};

export default Products;

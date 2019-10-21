import React from "react";
import {Card, Icon} from "antd";
import {gql} from "apollo-boost";
import {useMutation} from "@apollo/react-hooks";

const ADD_PRODUCT = gql`
    mutation AddProduct {
        createProduct(description: "", name: "") {
            description
            id
            name
    }
}
`;

declare interface AddProductData {
    createProduct: {
        description: string;
        id: string;
        name: string;
    }
}

declare interface AddProductParams {
    description: string;
    name: string;
}

declare interface AddProductProps {
    isLoading?: boolean
}

const AddProduct = (props: AddProductProps) => {
    const [addProduct] = useMutation<AddProductData, AddProductParams>(ADD_PRODUCT);
    const handleAddProduct = (event: React.MouseEvent) => {
        console.log(event);
        console.log("icon clicked");
        addProduct({variables: {name: "Test Product", description: "This is a test product"}}).then((data) => {
            console.log(data);
        })
    };

    let icon = <Icon type={"plus-circle"} style={{ fontSize: '64px'}} onClick={(event) => {handleAddProduct(event)}}/>;
    let title = "Add new Product";
    if (props.isLoading)
        icon = <Icon type={"loading"} style={{ fontSize: '64px'}}/>;
    if (props.isLoading)
        title = "Loading Products";
    return (
        <Card key={"default"} title={title}>
            {icon}
        </Card>
    )
};

export default AddProduct
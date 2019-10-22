import React from "react";
import {Card, Icon} from "antd";
import {gql} from "apollo-boost";
import {useMutation} from "@apollo/react-hooks";

const ADD_PRODUCT = gql`
    mutation AddProduct($name: String!, $description: String!) {
        createProduct(name: $name, description: $description) {
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
    isLoading?: boolean;
    onProductAdded?: any;
}

const AddProduct = (props: AddProductProps) => {
    const [addProduct] = useMutation<AddProductData, AddProductParams>(ADD_PRODUCT);
    const handleAddProduct = () => {
        addProduct({variables: {name: "Test Product", description: "This is a test product"}}).then((data) => {
            console.log(data);
            if (props.onProductAdded)
                props.onProductAdded();
        }).catch((error) => {
            console.log(error);
        });
    };

    const icon = (
        <Icon type={props.isLoading ? "loading" : "plus-circle"}
              style={{ fontSize: '64px'}}
              onClick={props.isLoading ? undefined : handleAddProduct}
        />
    );
    return (
        <Card key={"default"}
              title={props.isLoading ? "Loading Products" : "Add new Product"}
              style={{textAlign: "center"}}
        >
            {icon}
        </Card>
    )
};

export default AddProduct
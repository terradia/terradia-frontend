import {Avatar, Col, Divider} from "antd";
import Rate from "../Rate";
import List, {ListProps} from "../List";
import Modal from "../Modal";
import React, {useState} from "react";
import ProductsCard from "./ProductsCard";

interface cat {
    name: string;
}

export interface ProductModalProps {
    product: {
        id: string
        name: string;
        description: string;
        categories: Array<cat>
    };
}

const ProductModal = (props: ProductModalProps) => {
    const [showModal, setShowModal] = useState(false);

    const getRandomRate = () => {
        return Math.floor(Math.random() * Math.floor(5));
    };

    const onClickHandler = (value: boolean) => {
        console.log('salut');
        setShowModal(value)
    };

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

    // Simulated value -> waiting for backend
    const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
    let fakeData: any;
    const dataTest = [
        {
            name: 'Jean-Paul Dupuis',
            text: 'Excellent fromage, je recommande',
            createdAt: '20 janvier 2020'
        },
        {
            name: 'Sophie Trada',
            text: 'Super qualité',
            createdAt: '8 janvier 2020'
        },
        {
            name: 'Kévin Panchici',
            text: 'Le goût est exquis, je vous le conseille fortement',
            createdAt: '2 janvier 2020'
        },
        {
            name: 'Aziz Bentala',
            text: 'Fromage de qualité moyenne, je m\'attendais à une meilleure qualité',
            createdAt: '27 décembre 2019'
        },
    ];


    return (<div>
            <ProductsCard
                title={props.product.name}
                // backgroundPath={`/static/foodCategories/${getCategoriePicture(props.product.categories.length > 0 ? props.product.categories[0].name : undefined)}`}
                onClick={() => {
                    onClickHandler(true)
                }}
            />
            <Modal
                title={props.product.name}
                centered
                visible={showModal}
                onCancel={() => {
                    setShowModal(false)
                }}
                destroyOnClose={true}
                footer={null}
            >
                <p>{props.product.description}</p>
                <Divider/>
                <Rate value={getRandomRate()} disabled={true}/>

                <List
                    itemLayout="horizontal"
                    dataSource={dataTest}
                    renderItem={item => (
                        <List type={'item'}>
                            <List type={'meta'}
                                  avatar={<Avatar
                                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                  title={item.name}
                                  description={item.text}
                            />
                        </List>
                    )}
                />
            </Modal>
        </div>
    );
};

export default ProductModal;
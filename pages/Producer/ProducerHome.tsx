import React from "react";
import {Layout as AntLayout, Menu, Card, Icon, Row, Col} from "antd";
import {Layout} from "../Layout";
import Button from '../../components/Button'

const AntHeader = AntLayout.Header;

const ProducerHome = () => {
    return (
        <Layout>
            <AntHeader style={{
                height: '10vh',
                width: '100%',
                display: 'fixed',
                position: 'relative',
                background: 'none',
                justifyContent: 'space-between'
            }}>
                <Menu mode="horizontal" style={{lineHeight: '6vh', background: 'none'}}>
                    <Menu.Item key={"sort"}>
                        <Button>
                            Sort
                        </Button>
                    </Menu.Item>
                    <Menu.Item key={"label"}>
                        <Button>
                            Label
                        </Button>
                    </Menu.Item>
                    <Menu.Item key={"another sort"}>
                        <Button>
                            Another Sort
                        </Button>
                    </Menu.Item>
                </Menu>
            </AntHeader>
            <Row type={"flex"} justify={"start"} style={{paddingLeft: '24px', paddingRight: '24px'}} gutter={24}>
                <Col span={6}>
                    <Card title={"Add new Product"}>
                        <Icon type="plus-circle" style={{ fontSize: '64px'}}/>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title={"product 1"}>
                        <Icon type="plus-circle" style={{ fontSize: '64px'}}/>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title={"product 2"}>
                        <Icon type="plus-circle" style={{ fontSize: '64px'}}/>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title={"product 2"}>
                        <Icon type="plus-circle" style={{ fontSize: '64px'}}/>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title={"product 2"}>
                        <Icon type="plus-circle" style={{ fontSize: '64px'}}/>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title={"product 2"}>
                        <Icon type="plus-circle" style={{ fontSize: '64px'}}/>
                    </Card>
                </Col>
            </Row>
        </Layout>
    );
};

export default ProducerHome
import React, {ReactElement, ReactNode} from 'react'
import {List as AntList} from 'antd'

export interface ListProps {
    type?: 'default' | 'item' | 'meta';

    //default type
    children?: Element | ReactElement | Element[] | ReactElement[];
    bordered?: boolean;
    footer?: string | ReactNode;
    grid?: object;
    header?: string | ReactNode;
    itemLayout?: 'horizontal' | 'vertical';
    rowKey?: string;
    loading?: boolean;
    loadMore?: boolean;
    pagination?: any;
    split?: boolean;
    dataSource?: any[];
    renderItem?: (item: any) => ReactNode; // Work with dataSource

    //item type
    actions?: Array<any>;
    extra?: string | ReactNode;

    //meta type
    avatar?: ReactNode;
    description?: string | ReactNode;
    title?: string | ReactNode;
}

List.defaultProps = {
    type: 'default',
    children: null
};

export default function List(props: ListProps) {
    let listType;
    const {children, type, actions, extra, avatar, description, title, ...lastProps} = props;

    switch (type) {
        case 'default':
            listType = <AntList {...lastProps}> {children} </AntList>;
            break;
        case 'item':
            listType = <AntList.Item actions={actions} extra={extra}> {children} </AntList.Item>;
            break;
        case 'meta':
            listType = <AntList.Item.Meta avatar={avatar} description={description} title={title}> {children} </AntList.Item.Meta>;
            break;
        default:
            listType = <div/>
    }
    return listType;
};
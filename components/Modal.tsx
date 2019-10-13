import React, {ReactElement, ReactNode} from 'react'
import {Modal as AntModal} from 'antd'

export interface ModalProps {
    children?: Element | ReactElement | Element[] | ReactElement[];
    centered?: boolean;
    closable?: boolean;
    closeIcon?: ReactNode;
    confirmLoading?: boolean;
    destroyOnClose?: boolean;
    mask?: boolean;
    maskClosable?: boolean;
    maskStyle?: object;
    okText?: string;
    cancelText?: string;
    title?: string;
    visible?: boolean;
    width?: string | number;
    zIndex?: number;
}

Modal.defaultProps = {
    centered: false,
    closable: true,
    closeIcon: undefined,
    confirmLoading: false,
    destroyOnClose: false,
    mask: true,
    maskClosable: true,
    maskStyle: {},
    okText: "Confirm",
    cancelText: "Cancel",
    title: "",
    visible: false,
    width: 520,
    zIndex: 1000
};

export default function Modal(props: ModalProps) {
    return (
        <AntModal
            {...props}
        >
            {props.children}
        </AntModal>
    )
}
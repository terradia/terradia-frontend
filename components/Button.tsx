import React from 'react'
import {Button as AntButton} from 'antd'
import {ButtonShape, ButtonSize, ButtonType} from "antd/es/button";

export interface ButtonProps {
    children: React.ReactChildren;
    text?: string;
    color?: ButtonType;
    disable?: boolean;
    shape?: ButtonShape;
    isLoading?: boolean;
    icon?: undefined;
    size?: ButtonSize;
    targetLink?: string;
    fitParentWidth?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>
}

Button.defaultProps = {
    text: "",
    color: "default",
    disable: false,
    shape: undefined,
    isLoading: false,
    icon: undefined,
    size: "Normal",
    targetLink: "",
    fitParentWidth: false,
    onClick: undefined
};

export default function Button(props: ButtonProps)  {
    return (
        (!props.disable &&
            <AntButton type={props.color}
                       shape={props.shape}
                       loading={props.isLoading}
                       onClick={props.onClick}
                       size={props.size}
                       target={props.targetLink}
                       block={props.fitParentWidth}>
                {props.icon}
                {props.text}
                {props.children}
            </AntButton>
        )
    )
}
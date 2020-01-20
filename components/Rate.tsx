import React, {ReactElement, ReactNode} from 'react'
import {Rate as AntRate} from 'antd'

export interface RateProps {
    allowClear?: boolean;
    allowHalf?: boolean;
    character?: ReactNode;
    className?: string;
    count?: number;
    defaultValue?: number;
    disabled?: boolean;
    style?: object;
    tooltips?: string[];
    value: number;
    onBlur?: Function;
    onChange?: (value:number) => void;
    onFocus?: Function;
    onHoverChange?: (value: number) => void;
    onKeydown?: (event: Event) => void;
}

export default function Rate(props: RateProps) {
    return (
        <AntRate
            {...props}
        />
    );
}
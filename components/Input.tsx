import {Input as AntInput} from 'antd'
import React from "react";

export interface InputProps {
    addonAfter?: string;
    addonBefore?: string;
    allowClear?: boolean;
    defaultValue?: string;
    disabled?: boolean;
    enterButton?: boolean;
    id?: string;
    type?: string;
    placeholder?: string;
    onSearch(): any;
    prefix?: string;
    size?: "default" | "large" | "small" | undefined;
    suffix?: string;
}

Input.defaultProps = {     addonAfter: "", // (string) The label text displayed after (on the right side of) the input field
    addonBefore: "", // (string) The label text displayed before (on the left side of) the input field
    allowClear: false, // (boolean) allow to remove input content with clear icon
    defaultValue: "", // (string) default value of input
    disabled: false, // (boolean) Whether the input is disabled
    enterButton: false, // (boolean) to show an enter button after input. This prop is conflict with addon | work only if this.props.type is "search"
    id: "", // (string) the id of the input
    type: "default", // (string) type of the input
    onChange: undefined, // (function(e)) callback when user input
    onPressEnter: undefined, // (function(e)) The callback function that is triggered when Enter key is pressed
    onSearch: undefined, // (function(value, event)) The callback function that is triggered when you click on the search-icon or press Enter key
    // only work is this.props.type is "search" | will be overwritten by this.props.onPressEnter if both are in props
    placeholder: "", // (string) placeholder of the input
    prefix: "", // (string) the prefix icon of the input
    size: 'default', // (string) size of the input
    suffix: "" // (string) the suffix icon of the input | if this.props.type is "password", suffix icon will be replaced by the icon "hide" for password
    };

export default function Input(props: InputProps) {
    let inputType;
    const {enterButton, onSearch, ...lastProps} = props;

    switch (props.type) {
        case "default":
            inputType = <AntInput {...lastProps}/>;
            break;
        case "search":
            inputType = <AntInput.Search {...lastProps} enterButton={enterButton} onSearch={onSearch}/>;
            break;
        case "password":
            inputType = <AntInput.Password {...lastProps}/>;
            break;
        default:
            inputType = <AntInput/>
    }
    return inputType
}
import {Input as AntInput} from 'antd';
import React from "react";

const {Search} = AntInput;

class Input extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        if (this.props.isSearch) {
            return (
                <div style={this.props.style}>
                    <Search
                        addonAfter={this.props.addonAfter}
                        addonBefore={this.props.addonBefore}
                        allowClear={this.props.allowClear}
                        defaultValue={this.props.defaultValue}
                        disabled={this.props.disabled}
                        enterButton={this.props.enterButton}
                        id={this.props.id}
                        onChange={this.props.onChange}
                        onSearch={this.props.onSearch}
                        placeholder={this.props.placeholder}
                        prefix={this.props.prefix}
                        suffix={this.props.suffix}
                    />
                </div>
            )
        } else if (this.props.isPassword) {
            return (
                <div style={this.props.style}>
                    <AntInput.Password
                        addonAfter={this.props.addonAfter}
                        addonBefore={this.props.addonBefore}
                        allowClear={this.props.allowClear}
                        defaultValue={this.props.defaultValue}
                        disabled={this.props.disabled}
                        id={this.props.id}
                        onChange={this.props.onChange}
                        onPressEnter={this.props.onPressEnter}
                        placeholder={this.props.placeholder}
                        prefix={this.props.prefix}
                        size={this.props.size}
                        suffix={this.props.suffix}
                    />
                </div>
            )
        } else {
            return (
                <div style={this.props.style}>
                    <AntInput
                        addonAfter={this.props.addonAfter}
                        addonBefore={this.props.addonBefore}
                        allowClear={this.props.allowClear}
                        defaultValue={this.props.defaultValue}
                        disabled={this.props.disabled}
                        id={this.props.id}
                        onChange={this.props.onChange}
                        onPressEnter={this.props.onPressEnter}
                        placeholder={this.props.placeholder}
                        prefix={this.props.prefix}
                        size={this.props.size}
                        suffix={this.props.suffix}
                    />
                </div>
            )
        }

    }
}

function onChangeDefault(e) {
    console.log('onChangeDefault');
    // console.log("e", e.target.value);
}

function onPressEnterDefault(e) {
    console.log('onPressEnterDefault');
    // console.log('value', e.target.value);
}

function onSearchDefault(value, event) {
    console.log('onSearchDefault');
    // console.log('value', value);
    // console.log('event', event);
}

Input.defaultProps = {
    addonAfter: null, // (string) The label text displayed after (on the right side of) the input field
    addonBefore: null, // (string) The label text displayed before (on the left side of) the input field
    allowClear: false, // (boolean) allow to remove input content with clear icon
    defaultValue: null, // (string) default value of input
    disabled: false, // (boolean) Whether the input is disabled
    enterButton: false, // (boolean) to show an enter button after input. This prop is conflict with addon | work only if isSearch is "true"
    id: null, // (string) the id of the input
    isPassword: false, // (boolean) display icon to hide/show the password | if this.props.isSearch is "true", isPassword will be ignored
    isSearch: false, // (boolean) if there is the icon for search
    onChange: onChangeDefault, // (function(e)) callback when user input
    onPressEnter: onPressEnterDefault, // (function(e)) The callback function that is triggered when Enter key is pressed
    onSearch: onSearchDefault, // (function(value, event)) The callback function that is triggered when you click on the search-icon or press Enter key
                               // only work is this.props.isSearch is "true" | will be overwritten by this.props.onPressEnter if both are in props
    placeholder: null, // (string) placeholder of the input
    prefix: null, // (string) the prefix icon of the input
    size: 'default', // (string) size of the input
    suffix: null // (string) the suffix icon of the input | if this.props.isPassword is "true", suffix icon will be replaced by the icon "hide" for password
};

export default Input;
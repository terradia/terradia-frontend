import {Anchor as AntAnchor} from 'antd'
import React, {ChangeEventHandler, ReactElement, ReactNode} from "react";

export interface AnchorProps {
    affix ?: boolean;
    bounds ?: number;
    getContainer ?: () => HTMLElement;
    offsetBottom ?: number;
    offsetTop ?: number;
    showInkInFixed ?: boolean;
    onClick ?: any;
    getCurrentAnchor ?: () => string;
    targetOffset ?: number;
    onChange ?: (currentActiveLink: string) => void;
    linkTab : Array<{  href: string; title: string;}>;
    style: object
}

export default function Anchor(props: AnchorProps) {
    console.log('anchorProps', props);
    const {linkTab, ...lastProps} = props;
    const {Link} = AntAnchor;

    return (
        <AntAnchor
            {...props}
        >
            {linkTab.map((link) => {
                console.log('link: ', link);
                return (<Link href={link.href} title={link.title}/>);
            })}
        </AntAnchor>
    );
}
import React, {useState} from "react"

declare interface CardProps {
    hoverable?: boolean;
    backgroundColor?: string;
    width?: string;
    height?: string;
    title?: string;
    backgroundPath?: string;
    titleStyle?: object;
    bodyStyle?: object;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

ProductsCard.defaultProps = {
    title: 'Title',
    hoverable: true,
    backgroundColor: 'black',
    width: '100%',
    height: '175px',
    titleStyle: {
        fontSize: '30px',
        color: '#E5E5E5',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
        position: 'absolute',
        top: '69%',
        left: '7%',
        filter: 'brightness(100%)'
    }
};

export default function ProductsCard (props: CardProps) {
    const backgroundPath = '/static/foodCategories/cheese.jpg';
    const [hover, setHover] = useState(false);

    return (
        <div>
            <div
                className={"card"}
                style={Object.assign({
                    backgroundColor: props.backgroundColor,
                    backgroundImage: `url(${props.backgroundPath})`,
                    backgroundSize: 'cover',
                    border: '1px solid #E5E5E5',
                    borderRadius: '15px',
                    width: props.width,
                    height: props.height,
                    transition: 'all 0.5s',
                    filter: 'brightness(50%)',
                }, hover && {
                    cursor: 'pointer', transform: "scale(1.05)", filter: 'brightness(100%)',
                })}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => {
                    setHover(false)
                }}
                onClick={props.onClick}
            />
            <p style={props.titleStyle}>{props.title}</p>
        </div>
    )
};


import React from 'react';

//THATS ART

interface btnProps {
    size: string;
    color: string;
    backgroundColor: string;
    hoverColor: string;
    className?: string;
}

function OrderNowBtn({size, color, backgroundColor, hoverColor, className}: btnProps) {

    const [hover, setHover] = React.useState(false);

    const btnStyle: React.CSSProperties = {
        fontSize: size,
        color: hover? backgroundColor : color,
        backgroundColor: hover? hoverColor : backgroundColor,
        borderColor: hover? hoverColor : color,
        border: '3px solid',
        borderRadius: '30px',
        width: 'fit-content',
        padding: `calc(${size} * .4) calc(${size} * .8)`,
        cursor: 'pointer',
        transition: 'all .2s ease-in-out'
    };

    return (
        <button style={btnStyle} className={className} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>PEÇA JÁ!</button>
    )
}

export default OrderNowBtn
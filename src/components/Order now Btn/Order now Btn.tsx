import React from 'react';

// interface btnProps {
//     color: string;
//     backgroundColor: string;
//     hoverColor: string;
//     hoverBackgroundColor: string;
// }

//function OrderNowBtn({color, backgroundColor, hoverColor, hoverBackgroundColor}: btnProps) {
function OrderNowBtn() {
    const btnStyle: React.CSSProperties = {
        fontSize: '32px',
        color: '#F6A011',
        backgroundColor: '#f1ecc8',
        border: '4px solid #F6A011',
        borderRadius: '30px',
        width: 'fit-content',
        padding: '10px 20px',
        cursor: 'pointer',
    };

    return (
        <button style={btnStyle}>PEÇA JÁ!</button>
    )
}

export default OrderNowBtn
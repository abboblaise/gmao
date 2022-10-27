import React from 'react';

const Button = ({bgColor, color, size, text, borderRadius, cunstomAction}) => {
    return (
        <button
            type='button'
            style={{ backgroundColor: bgColor, color, borderRadius }}
            className={`text-${size} p-3 hover:drop-shadow-xl`}
            onClick={cunstomAction}
        >
            {text}
        </button>
    );
};

export default Button;

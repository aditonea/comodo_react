import React from "react";


export default function Tooltip({ children, text }) {

    return (
        <div className="tooltip">
            {children}
            <span className="tooltiptext">{text}</span>
        </div>
    )
}
import React, { Children } from "react";
import "@styles/components/atoms/button/buttonBase.css";

const ButtonBase = ({ children, ...props }) => {
    return (
        <div className="buttonBase" {...props}>
            {children}
        </div>
    );
};

export default ButtonBase;

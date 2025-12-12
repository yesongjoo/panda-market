import React from "react";

const Button = ({ children, disabled, ...props }) => {
    return (
        <button
            disabled={disabled}
            className={`
                py-[12px] px-[23px] rounded-[8px]
                font-base font-semibold text-lg text-secondary-50
                transition-colors
                cursor-pointer
                bg-primary-100 hover:bg-primary-200 active:bg-primary-300
                disabled:bg-secondary-400 disabled:cursor-not-allowed disabled:hover:bg-secondary-400
            `}
            {...props}
        >
            {children}
        </button>
    );
};
export default Button;

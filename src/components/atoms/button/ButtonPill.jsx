import React from "react";

const ButtonPill = ({ children, ...props }) => {
    return (
        <button
            className="py-[12px] px-[71px] rounded-[40px] bg-primary-100 font-base font-semibold text-2lg text-secondary-50 cursor-pointer hover:bg-primary-200 active:bg-primary-300 transition-colors"
            {...props}
        >
            {children}
        </button>
    );
};

export default ButtonPill;

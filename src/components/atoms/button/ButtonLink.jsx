import React from "react";
import { Link } from "react-router-dom";
import ButtonBase from "./ButtonBase";
import "@styles/components/atoms/button/buttonLink.css";

const ButtonLink = ({ to, children, ...props }) => {
    return (
        <Link className="buttonLink" to={to} {...props}>
            <ButtonBase {...props}>{children}</ButtonBase>
        </Link>
    );
};

export default ButtonLink;

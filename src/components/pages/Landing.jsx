import React from "react";
import ButtonBase from "../atoms/button/ButtonBase";
import ButtonLink from "../atoms/button/ButtonLink";

const Landing = () => {
    return (
        <div>
            <ButtonBase> 돌아가기</ButtonBase>
            {/* <div style={{ width: "555px" }}> */}
            <ButtonLink to="/products">구경하러 가기</ButtonLink>
            {/* </div> */}
        </div>
    );
};

export default Landing;

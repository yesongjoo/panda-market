import React from "react";
import ButtonPill from "@atoms/button/ButtonPill";
import Button from "@atoms/button/Button";
import ButtonLike from "@atoms/button/ButtonLike";

const Landing = () => {
    return (
        <div>
            <ButtonPill>되돌아가기</ButtonPill>
            <Button>등록</Button>
            <ButtonLike />
        </div>
    );
};

export default Landing;

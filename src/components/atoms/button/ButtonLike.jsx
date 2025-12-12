import React from "react";
import LikeIcon from "@assets/icons/LikeIcon";

const ButtonLike = ({ likes = 500, isClicked = true, ...props }) => {
    const fill = isClicked ? "#FF68CC" : "none";
    const stroke = isClicked ? "none" : "#9CA3AF"; // stroke 주고 싶을 때
    return (
        <button
            className={`py-[4px] px-[12px]  rounded-full   border-solid border-1  border-secondary-200 flex gap-1 cursor-pointer`}
            {...props}
        >
            <LikeIcon fill={fill} stroke={stroke} />
            <span className="font-base font-medium text-lg  text-secondary-500">
                {likes}
            </span>
        </button>
    );
};

export default ButtonLike;

import React from "react";

import Text from "../Text/Text";
import Title from "../Title/Title";
import StartImg from "../../assets/images/star.svg";
import Start2Img from "../../assets/images/start2.svg";

const RecieptCard2 = ({ rate, title, type, Image, bg }) => {
  return (
    <div
      style={{ boxShadow: "0px 11px 39px 0px rgba(0,0,0,0.12)" , backgroundColor: bg}}
      className="flex items-start pl-[25px] rounded-[17px] hover:scale-110 transition-all duration-300 pt-[33px] w-[287px] h-[306px] flex-col"
    >
      <Image/>
      <Title
        title={title}
        extraStyle={
          "!text-black !leading-[50px] !font-medium !text-[26px] !mt-[19px]"
        }
      />
      <Text
        title={type}
        extraStyle={"text-green text-[18px] !leading-[21.33px] !font-medium"}
      />

      <div className="flex items-center mt-[19px] gap-[4px]">
        {[...Array(rate)].map((item, index) => (
          <img src={StartImg} key={index} alt="star" />
        ))}
        {[...Array(5 - rate)].map((item, index) => (
          <img src={Start2Img} key={index} alt="star" />
        ))}
      </div>
    </div>
  );
};

export default RecieptCard2;

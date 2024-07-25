import React from "react";

const Button = ({ title, style, extraStyle, children }) => {
  return (
    <button
      style={{ boxShadow: style }}
      className={`
        text-white
        rounded-full
        font-medium
        leading-[22px]
        text-[14px]
        bg-green
        py-[10px]
        px-[18px]
        ${extraStyle}
      `}
    >
      {title} {children}
    </button>
  );
};

export default Button;

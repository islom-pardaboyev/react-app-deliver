import React from 'react'

const Button = ({title, style, extraStyle}) => {
  return (
    <button style={{boxShadow: style}} className={`text-white rounded-[100px] font-medium leading-[22px] text-[14px] bg-green py-[10px] px-[18px] ${extraStyle}`}>{title}</button>
  )
}

export default Button
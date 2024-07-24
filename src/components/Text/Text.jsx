import React from 'react'

const Text = ({extraStyle, title}) => {
  return (
    <p className={`text-gray leading-[29px] font-normal text-[18px] ${extraStyle}`}>{title}</p>
  )
}

export default Text
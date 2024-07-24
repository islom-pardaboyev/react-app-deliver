import React from 'react'

const Discount = ({show}) => {
  return (
    <div className={`absolute -top-4 left-[50%] capitalize bg-red text-white text-center leading-[14px] font-bold text-[8px] px-[9px] py-[3px] rounded-[8px] ${show ? "" : "hidden"}`}>hot</div>
  )
}

export default Discount
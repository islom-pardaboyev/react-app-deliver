import React from 'react'
import Button from '../Button/Button'

const Input = () => {
  return (
    <div className='flex items-center'>
        <input type="email" className='border w-full outline-none h-full rounded-l-[8px] border-black px-[15px] placeholder:text-black' placeholder='Your email address'/>
        <Button title={"Send"} extraStyle={"!rounded-r-[8px] !rounded-l-[0px] !font-medium !text-[14px] !leading-[24px]"}/>
    </div>
  )
}

export default Input
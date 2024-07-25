import React from 'react'

const Title = ({title, extraStyle}) => {
  
  return (
    <h1 className={`text-green capitalize leading-[64px] font-bold text-[64px] ${extraStyle}`}>{title}</h1>
  )
}

export default Title
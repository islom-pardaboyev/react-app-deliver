import React from 'react'

const NavbarItems = ({title, extraStyle}) => {
  return (
    <a href="/" className={`text-gray leading-[22px] font-medium text-[14px] ${extraStyle}`}>{title}</a>
  )
}

export default NavbarItems
import React from 'react'
import HeaderItem from './HeaderItem'
function Header() {
  return (
    <div className=" fixed top-0 left-0 right-0 z-10 flex items-center  justify-around  p-6 shadow-md">
      <HeaderItem title="HOME" />
      <HeaderItem title="CONTACT" />
      <HeaderItem title="ABOUT" />
    </div>
  )
}

export default Header

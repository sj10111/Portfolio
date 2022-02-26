import React from 'react'

function HeaderItem({ title }) {
  return (
    <div className="group  flex  items-center ">
      <p className="text-3xl font-bold  text-white transition-all duration-100 hover:cursor-pointer group-hover:scale-110 ">
        {title}
      </p>
    </div>
  )
}

export default HeaderItem

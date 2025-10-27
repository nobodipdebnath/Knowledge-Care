import React from 'react'

export const BookMark = ({bookMark}) => {
  const {title} = bookMark;
  return (
    <div className=" p-4 bg-white mt-4 rounded-lg">
      <h3 className='text-lg font-semibold text-[#111111]'>{title}</h3>
    </div>
  )
}


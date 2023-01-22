import React from 'react'

export default function HandIcons({extraClass, images,val,handleClick}) {
  return (
    <button
      className={`bg-white flex flex-col rounded-full my-4 mx-6 h-32 w-32 justify-center
          border-[1rem]  ${extraClass}
    `}
      value={val}
      onClick={handleClick}
    >
              <img src={images}
                  alt='rock paper scissors logo'
        className='mx-auto my-6 w-[83px] sm:w-auto self-center'
        />
       
      </button>
  )
}

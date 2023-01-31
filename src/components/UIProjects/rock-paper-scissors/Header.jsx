import React from 'react'
import images from '../../../setup/images'
export default function Header({score=0}) {
  return (
      <div>
          <div className='flex justify-between  max-w-[700px] mx-8 md:mx-auto border-2 border-header-outline rounded-sm sm:rounded-2xl'>
        <img className='mx-6 lg:mx-8 my-6 w-[83px] sm:w-auto self-center' src={images.logo} alt='rock paper scissors logo' />
        <div className='bg-white flex flex-col rounded-lg my-4 mx-6'>
          <div className='px-6 py-2 sm:px-8 sm:py-4 text-center'>
            <p className='uppercase text-score-text text-xs sm:text-base font-semibold tracking-[2.5px]'>Score</p>
            <p id='scoreboard' className='text-4xl sm:text-6xl font-bold text-score-count'>{score}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

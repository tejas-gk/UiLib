import React from 'react'

export default function LandingPage() {
  return (
      <div>
          {/* navbar */}
          <div className='flex justify-between items-center px-4 py-3'>
              <div className='flex items-center'>
                  <div className='flex items-center'>
                      <img src='/assets/react.svg' alt='logo' className='h-8 w-8' />
                      <span className='text-gray-700 font-semibold text-lg'>NFT</span>
                  </div>
                  <div className='flex items-center ml-6'>
                      <a href='#' className='text-gray-600 px-3 py-2 rounded-md text-sm font-medium'>Home</a>
                      <a href='#' className='text-gray-600 px-3 py-2 rounded-md text-sm font-medium'>About</a>
                      <a href='#' className='text-gray-600 px-3 py-2 rounded-md text-sm font-medium'>Contact</a>
                  </div>

              </div>
              <div className='flex items-center'>
                  <a href='#' className='text-gray-600 px-3 py-2 rounded-md text-sm font-medium'>Login</a>
                  <a href='#' className='text-gray-600 px-3 py-2 rounded-md text-sm font-medium'>Sign Up</a>
              </div>
          </div>

          {/* hero */}
          <div className='flex justify-center items-center h-screen '
              style={{ backgroundImage: "url('https://www.')", backgroundSize: 'cover' }}
          >
              <div className='flex flex-col items-center'>
                  <h1 className='text-4xl font-bold'>NFT Marketplace</h1>
                  <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                  <div className='flex mt-4'>
                      <a href='#' className='bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium'>Get Started</a>
                      <a href='#' className='bg-gray-200 text-gray-600 px-4 py-2 rounded-md text-sm font-medium ml-4'>Learn More</a>
                  </div>
                  
              </div>
          </div>

          {/* footer */}
          <div className='flex justify-center items-center h-24 bg-gray-100'>
              <div className='flex items-center'>
                  <span className='text-gray-700 font-semibold text-lg'>NFT</span>
                  <span className='text-gray-600 ml-4'>© 2021 NFT. All rights reserved</span>
              </div>
          </div>
          
          
          
    </div>
  )
}

import React from 'react'

export default function Login() {
  return (
    <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center
    '>
          <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
              <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                  <div className='mt-12 flex flex-col items-center'>
                      <h1 className='text-2xl xl:text-3xl font-extrabold'>
                          Sign In 
                      </h1>
                  </div>
                  <div className='w-full flex-1 mt-8 text-indigo-500'>
                      <div className='mx-auto max-w-xs relative '>
                          <form className='mx-auto max-w-xs relative '>
                              <input type='email' placeholder='Email' className='w-full px-8 py-2 rounded-lg border border-gray-300 mt-5
                                ' />
                              <input type='password' placeholder='Password' className='w-full px-8 py-2 rounded-lg border border-gray-300 mt-5
                                ' />
                              <button type='submit'
                                  className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg 
                                  hover:bg-indigo-700
                                '>
                                  Sign In
                              </button>
                          </form>
                          
                      </div>
                  </div>
              </div>
              <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
                  <div className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat' style={{ backgroundImage: "url('https://source.unsplash.com/IXUM4cJynP0/600x800')" }}>
                  </div></div>
          </div>
    </div>
  )
}

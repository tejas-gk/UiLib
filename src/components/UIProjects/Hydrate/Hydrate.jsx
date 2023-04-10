import React from 'react';
import { Bell } from 'react-feather';
import { FaCircle } from 'react-icons/fa';
import './hydrate.css';
export default function Hydrate() {
    return (
        <div className='hydrate flex flex-col items-center justify-center h-screen'>
            <div className='container flex flex-col  p-8 w-[40%] max-w-2xl  justify-between shadow-2xl shadow-blue-400'>
                <div className='header flex flex-row justify-between w-full'>
                    <div className='hamburger-menu flex  flex-col gap-1 '>
                        <span
                            className='one w-6 bg-white rounded-md h-1  block 
                  '
                        />
                        <span className='two w-6 bg-white rounded-md h-1  block -translate-x-2' />
                        <span className='three w-6 bg-white rounded-md h-1  block' />
                    </div>
                    <div className='bell-icon'>
                        <Bell
                            className='
          '
                        />
                    </div>
                </div>

                <main className='items-center flex flex-col mt-10'>
                    <div className='text-center text-white mb-2'>
                        <h2>Today</h2>
                        <p className='text-2xl font-semibold tracking-widest'>
                            1.3l of 2l
                        </p>
                    </div>
                    <FaCircle className='h-3 w-3 text-[#1797f7]' />
                    <div className='image'>
                        <img
                            src='https://www.linkpicture.com/q/water.png'
                            alt='Water bottle'
                            className='h-48 w-auto'
                        />
                    </div>
                    <button
                        className='main-btn font-bold  px-8 py-4 rounded-full mt-8 w-[13rem]
          '
                    >
                        Drink Water
                    </button>
                </main>
            </div>
            <footer
                className='mx-0  text-black bg-[#edf6fc] py-4 pl-4  w-[40%]  shadow-2xl shadow-blue-400   pb-8
        '
            >
                <p className='font-semibold pl-5 uppercase'>Your streak</p>
                <div className='days flex flex-row gap-[4.5rem] mt-2  items-center justify-start pl-4'>
                    <h1>S</h1>
                    <h1>M</h1>
                    <h1>T</h1>
                    <h1>W</h1>
                    <h1>T</h1>
                    <h1>F</h1>
                    <h1>S</h1>
                </div>
                <div
                    className='stats  mt-3 flex flex-row gap-16 justify-start items-center  text-[#1597fb] text pl-4
        '
                >
                    <FaCircle className='h-3 w-3' />
                    <FaCircle className='h-6 w-6' />
                    <FaCircle className='h-2 w-2' />
                    <FaCircle className='h-6 w-6' />
                    <FaCircle className='h-4 w-4' />
                    <FaCircle className='h-6 w-6 text-[#cfd8dc]' />
                    <FaCircle className='h-6 w-6 text-[#cfd8dc]' />
                </div>
            </footer>
        </div>
    );
}

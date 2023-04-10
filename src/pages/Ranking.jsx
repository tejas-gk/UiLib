import React from 'react';
import { Share2, Star } from 'react-feather';

const ranking = [
    {
        id: 1,
        name: 'John Doe',
        score: 100,
    },
    {
        id: 2,
        name: 'Jane Doe',
        score: 90,
    },
    {
        id: 3,
        name: 'John Doe',
        score: 80,
    },
    {
        id: 4,
        name: 'Jane Doe',
        score: 70,
    },
    {
        id: 5,
        name: 'John Doe',
        score: 60,
    },
];
export default function Ranking() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div
                className='flex flex-col shadow-lg p-8 w-full max-w-2xl border border-gray-200 rounded-xl z-10
      '
            >
                <div className='flex flex-row items-center debug justify-between'>
                    <h4 className='uppercase font-semibold'>Rankings</h4>
                    <Share2
                        className='ml-2 bg-[rgb(253,92,119)] text-white p-2 rounded-md shadow-md h-8 w-8 hover:bg-red-800
          '
                    />
                </div>
                <div className='ranks relative z-10 mt-4'>
                    {ranking.map((rank, index) => (
                        <div
                            className='ranks flex flex-row items-center justify-between mt-4  border-b-2 pb-2
              '
                            key={index}
                        >
                            <div className='flex flex-row items-center card'>
                                <i></i>
                                <span className='font-bold mr-2 z-50'>
                                    {index + 1}
                                </span>
                                <div className='flex flex-col'>
                                    <span className='font-bold z-50'>
                                        {rank.name}
                                    </span>
                                </div>
                            </div>
                            <span className='font-bold z-50'>{rank.score}</span>
                            {ranking[0].id === rank.id && (
                                <div
                                    className='flex flex-row items-center justify-center 
                    absolute top-4 right-0 bg-yellow-500 text-white p-2 rounded-md shadow-md h-8 w-8 z-50 crown
                    '
                                >
                                    <Star
                                        className='h-4 w-4
                      '
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='flex flex-row items-center justify-evenly mt-4 relative'>
                    <button
                        className='bg-white text-gray-600 p-2 rounded-md  hover:shadow-lg  px-9
          '
                    >
                        Exit
                    </button>
                    <button
                        className='continue text-white p-2 rounded-xl shadow-md bg-blue-700 px-9 hover:bg-blue-800
          '
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

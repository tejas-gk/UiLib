import React from 'react';
import images from '../../../setup/images';
import HandIcons from './HandIcons';
export default function Choice({ player, playerChoice, outcome }) {
    return (
        <div className='sm:mx-14 flex flex-col-reverse lg:flex-col justify-between text-center'>
            <p className='py-4 sm:py-16 uppercase text-white font-bold text-sm sm:text-2xl tracking-[3px]'>
                {player} picked
            </p>
            <div className='rounded-full'>
                <HandIcons
                    extraClass={`border-[1rem] 
              ${
                  !playerChoice
                      ? 'border-[#dc3b5b]'
                      : playerChoice === 'rock'
                      ? 'border-[#dc3b5b]'
                      : playerChoice === 'paper'
                      ? 'border-[#536df7]'
                      : 'border-[#f7b536]'
              }
             `}
                    images={
                        !playerChoice ? images.circle : images[playerChoice]
                    }
                    val={playerChoice}
                    handleClick={() => handleClick('rock')}
                />
            </div>
        </div>
    );
}

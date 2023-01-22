import {useState,createContext} from 'react'
import images from '../../../setup/images'
import HandIcons from './HandIcons'
import Choice from './Choice'
import Header from './Header'
import './rock-paper-scrissors.css'
export const ScoreContext = createContext({score:0})

export default function index() {
    const [userChoice, setUserChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const [result, setResult] = useState(null)
    const [score, setScore] = useState(0)

    const choices = ['rock', 'paper', 'scissors']
   

  const handleClick = (userChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    const result = getResult(userChoice, computerChoice)
    setUserChoice(userChoice)
    setComputerChoice(computerChoice)
    setResult(result)
    if (result === 'win') {
      setScore(score + 1)
    } else if (result === 'lose') {
      setScore(score - 1)
    }

    console.table({userChoice, computerChoice, result})
  }

  const getResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'draw'
    }

    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'lose'
      } else {
        return 'win'
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'lose'
      } else {
        return 'win'
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'lose'
      } else {
        return 'win'
      }
    }
  }

  
    const resetGame = () => {
        setUserChoice(null)
        setComputerChoice(null)
        setResult(null)
    }

  return (
    <div className='body'>
       <Header
        score={score}
      />
       <div className="flex flex-col items-center  h-screen text-2xl mt-24">
      
    {!userChoice ? (
          <div className={`playable-area mt-8 w-[312px] h-[282px] sm:w-[476px] sm:h-[430px] bg-[length:166px_188px] sm:bg-auto 
          bg-no-repeat bg-center mx-auto`}>
    
            <div className='flex flex-row justify-between ' > 
          <HandIcons
              extraClass='border-[1rem] border-[#dc3b5b]'
          images={images.rock}
          val='rock'
          handleClick={() => handleClick('rock')}
          />
   
    
          <HandIcons
              extraClass='border-[1rem] border-[#536df7]'
          images={images.paper}
          val='paper'
          handleClick={() => handleClick('paper')}
              />
    
        
          </div>
      
          <div className='scissors flex justify-center mt-20'
          >
        <HandIcons
          extraClass='border-[1rem] border-[#f7b536]'
          images={images.scissors}
          val='scissors' 
          handleClick={() => handleClick('scissors')}
        />
      </div>
          </div>
      ) : (
            <div className='m-4 lg:m-0 flex justify-center items-center'>  
        <div className='mr-4 lg:m-0'>     
        <Choice player='you' playerChoice={userChoice} outcome={result}/>
              </div>
        {
          <div className='absolute lg:static text-center bottom-[15%]'
          >
            <p className='mb-4 text-5xl sm:text-6xl font-bold text-center text-white uppercase'>{result === 'win' ? 'You Win' : result === 'lose' ? 'You Lose' : 'Draw'}</p>
            <button onClick={() => resetGame()} className='px-14 py-3 bg-white text-dark-text rounded-lg cursor-pointer hover:text-[#DB2E4D] focus:text-[#DB2E4D] transition-all sm:text-base font-semibold uppercase tracking-[2.5px]'>Play Again</button>
          </div>
        }
        <Choice player='the house' playerChoice={computerChoice} outcome={result === 'lose' ? 'win' : false}/>
      </div>
      )}
          
        </div>



    </div>
  )
}

import { useState } from "react"
export default function Advice() {
    const [advice, setAdvice] = useState('')
    const [adviceId, setAdviceId] = useState(0)
    const getAdvice = async () => {
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()
        setAdvice(data.slip.advice)
        setAdviceId(data.slip.id)
    }

  return (
      <div className='bg-[#202632] min-h-screen flex justify-center items-center '>
          <div className='bg-[#313a49] w-[36rem] rounded-2xl relative'>
              <div className=" px-12 py-8 flex flex-col items-center justify-center gap-8 text-center">
                  <p className='text-[#47b687] uppercase leading-3 text-sm tracking-[0.3rem]'>Advice 
                      <span className='tracking-wide ml-0.5'>#{adviceId}</span></p>
                  <h2 className='text-[#b3bfcd] text-3xl'>" <span
                        className='text-white'
                  >{advice}</span>"</h2>
                  <div className='mb-4'>
                      <img src='/assets/advice-generator-app-main/images/pattern-divider-desktop.svg' alt='hello'/>
                  </div>
                  <button
                      onClick={getAdvice}
                      className='absolute bg-[#57fcaf] rounded-full -bottom-8 items-center justify-center p-4
                        hover:animate-spin active:animate-bounce
                      '>
                      <img src='/assets/advice-generator-app-main/images/icon-dice.svg'
                          alt='hello' />
                  </button>
              </div>
          </div>
    </div>
  )
}

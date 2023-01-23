import illustrationHero from '/assets/order-summary/images/illustrationHero.svg';
import IconMusic from '/assets/order-summary/images/icon-music.svg';
import './order-summary.css'
export default function OrderSummary() {
  return (
      <div className="flex items-center justify-center h-screen mt-12">
          <div className="flex flex-col items-center justify-center md:w-1/2 shadow-md max-w-[28rem] bg-white lmd:pb-[5rem]">
              <img src={illustrationHero} alt="illustrationHero" />
              <div className="flex flex-col items-center justify-center p-6 mt-12">
                  <h1 className="text-3xl font-bold text-center">Order Summary</h1>
                  <p className="text-center text-gray-400 p-6 max-w-[20rem[">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
              </div>
              
              <div className='plan flex flex-row items-center justify-between w-auto shadow-lg shadow-[hsl(225, 100%, 98%)]
                rounded-[0.5rem] lg:p-4 gap-7 
              '>
                  <div className="flex flex-col items-center justify-center">
                      <img src={IconMusic
                        } alt="IconMusic" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                      <h1 className="md:text-xl font-bold text-center text-md
                      ">Annual Plan</h1>
                      <p className="text-gray-400">$59.99/year</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                      <button className="bg-[hsl(225, 100%, 98%)] rounded-[0.5rem] p-2 text-[#6259b9] underline font-semibold">Change</button>
                  </div>
              </div>

              <div className='flex flex-col items-center justify-center w-[78%] mt-12'>
                  <button className="bg-[#382ae1] rounded-[0.5rem] p-2 text-white font-semibold hover:bg-[#6259b9]
                  w-full">Proceed to Payment</button>
                  <button className="bg-[hsl(225, 100%, 98%)] rounded-[0.5rem] p-2 text-[#9298b1] underline font-semibold mt-4 w-full">Cancel Order</button>
              </div>
              
              
          </div>
          
      </div>
      
                      
                          
      
  )
}

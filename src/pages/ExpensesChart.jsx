import { useEffect } from "react";
import { useState } from "react";
import LogoIcon from "/assets/expenses-chart/images/logo.svg";

export default function ExpensesChart() {
  const [amount1, setAmount1] = useState(false);
  const [amount2, setAmount2] = useState(false);

  useEffect(() => {
    let amountElement = document.querySelector("#amount1");
    amountElement.classList.toggle("hidden");
  }, [amount1]);

  useEffect(() => {
    let amountElement = document.querySelector("#amount2");
    amountElement.classList.toggle("hidden");
  }, [amount2]);

  return (
    <div className="bg-[#F8E9DD] h-screen">
      <div className="grid grid-rows-[100px_minmax(0px,_1fr)_100px]">
        <nav className="w-[375px] h-20 bg-[#EA6348] rounded-xl flex mt-[20%] justify-between items-center px-4 justify-self-center self-center">
          <div>
            <p className="text-xs italic text-white font-medium ">My balance</p>
            <h1 className="text-3xl text-white font-bold">$921.48</h1>
          </div>
          <div>
            <img src={LogoIcon} alt="" srcset="" />
          </div>
        </nav>
        <main className="w-[375px] h-auto bg-[#FFFAF5] p-4 rounded-xl justify-self-center self-center mt-[10%]">
          <div>
            <h2 className="text-[#382314] font-bold text-2xl text-center">
              Spending - Last 7 days
            </h2>
          </div>
          <div>
            <div className="w-full grid grid-cols-7 rotate-180 h-[160px] justify-around">
              <div className="relative cursor-pointer bg-[#EA6348] rounded hover:bg-[#F3A596] mx-1 h-[65px]"></div>
              <div className="relative cursor-pointer bg-[#EA6348] rounded hover:bg-[#F3A596] mx-1 h-[100px]"></div>
              <div className="relative cursor-pointer bg-[#EA6348] rounded hover:bg-[#F3A596] mx-1 h-[60px]"></div>
              <div
                className="relative cursor-pointer bg-[#EA6348] rounded hover:bg-[#F3A596] mx-1 h-[70px] z-[1]"
                onMouseEnter={() => setAmount2(true)}
                onMouseLeave={() => setAmount2(false)}
              >
                <div
                  id="amount2"
                  className="hidden absolute w-[60px] h-[30px] bg-[#382314] right-[-10px] bottom-[-40px] rounded flex justify-center items-center"
                >
                  <p className="text-base text-white font-bold rotate-180">
                    $31.07
                  </p>
                </div>
              </div>
              <div
                className="relative cursor-pointer bg-[#76B5BC] rounded hover:bg-[#b5e1e6] mx-1 h-[120px] z-[0]"
                onMouseEnter={() => setAmount1(true)}
                onMouseLeave={() => setAmount1(false)}
              >
                <div
                  id="amount1"
                  className="hidden absolute w-[60px] h-[30px] bg-[#382314] right-[-10px] bottom-[-40px] rounded flex justify-center items-center"
                >
                  <p className="text-base text-white font-bold rotate-180">
                    $52.36
                  </p>
                </div>
              </div>
              <div className="relative cursor-pointer bg-[#EA6348] rounded hover:bg-[#F3A596] mx-1 h-[80px]"></div>
              <div className="relative cursor-pointer bg-[#EA6348] rounded hover:bg-[#F3A596] mx-1 h-[40px]"></div>
            </div>
            <div className="flex w-full align-center pb-4 border-b-[2px] border-[#F8E9DD]">
              <div className=" w-[41px] text-center mx-1 text-[#93867B] font-thin">
                mon
              </div>
              <div className=" w-[41px] text-center mx-1 text-[#93867B] font-thin">
                tue
              </div>
              <div className=" w-[41px] text-center mx-1 text-[#93867B] font-thin">
                wed
              </div>
              <div className=" w-[41px] text-center mx-1 text-[#93867B] font-thin">
                thu
              </div>
              <div className=" w-[41px] text-center mx-1 text-[#93867B] font-thin">
                fri
              </div>
              <div className=" w-[41px] text-center mx-1 text-[#93867B] font-thin">
                sat
              </div>
              <div className=" w-[41px] text-center mx-1 text-[#93867B] font-thin">
                sun
              </div>
            </div>
            <div className="w-full flex justify-between mt-4 mb-6 h-[60px]">
              <div>
                <p className="font-sm text-[#93867B] font-thin">
                  Total this month
                </p>
                <h1 className="text-3xl text-[#382314] font-bold">$478.33</h1>
              </div>
              <div className="grid grid-rows-[60px_minmax(0px,_1fr)_100px]">
                <div className="font-sm text-[#382314] font-bold justify-self-end self-center">
                  +2.4%
                </div>
                <div className="font-sm text-[#93867B] font-thin justify-self-end self-end">
                  from last month
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

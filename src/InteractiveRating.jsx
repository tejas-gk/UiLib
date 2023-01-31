import { useState, useRef } from "react";
const ratering = [
  {
    rating: 1,
  },
  {
    rating: 2,
  },
  {
    rating: 3,
  },
  {
    rating: 4,
  },
  {
    rating: 5,
  },
];
export default function InteractiveRating() {
  const [rate, setRate] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ratingRef = useRef(null);
  return (
    <div
      className="bg-[#141519] h-screen flex justify-center items-center
      "
    >
      {!isSubmitted ? (
        <div className="text-white mx-auto w-96  bg-[#1f252d] text-sm rounded-2xl p-5  md:w-[26rem] md:rounded-[2rem] md:p-9">
          <div
            className="rounded-full  w-9 h-9 flex items-center justify-center md:w-12 md:h-12 bg-[#232f36] 
            "
          >
            <img src="/assets/interactive-rating-component-main/images/icon-star.svg" />
          </div>
          <div>
            <p className="font-bold text-2xl mt-5 mb-4  md:mt-8 text-white">
              How did we do?
            </p>
            <p className="text-[#686e79] md:text-[0.9375rem] md:leading-6">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div className="flex justify-between my-7 gap-4">
            {ratering.map(({ rating, i }) => (
              <div
                key={i}
                ref={ratingRef}
                onClick={() => {
                  setRate(rating);
                }}
                className={`rounded-full bg-[#252e37] w-9 h-9 flex items-center justify-center 
                          hover:bg-[#fc7613] hover:text-white cursor-pointer transition ease-in-out 
                             ${
                               rating === rate
                                 ? "bg-[#fc7613] text-white"
                                 : "text-[#4b545d]"
                             }
                                md:w-12 md:h-12 md:text-[0.9375rem] md:font-bold`}
              >
                {rating}
              </div>
            ))}
          </div>
          <button
            onClick={() => setIsSubmitted(true)}
            className="uppercase flex items-center justify-center w-full h-12 rounded-full bg-[#fc7613] mt-2 text-white
                  tracking-widest hover:bg-white hover:text-[#fc7613]  transition ease-in-out md:text-[0.9375rem]"
          >
            submit
          </button>
        </div>
      ) : (
        <div
          className="text-white mx-auto w-80  bg-[#1f252d] text-sm  rounded-2xl p-5 
                       md:w-[26rem] md:rounded-[3rem] md:p-9"
        >
          <div className="scale-90 flex items-center justify-center md:scale-100">
            <img src="/assets/interactive-rating-component-main/images/illustration-thank-you.svg" />
          </div>
          <div
            className="text-[#fc7613] rounded-full text-center p-1 my-6 bg-[#2d3743]
                           w-3/5 mx-auto md:mt-12 md:mb-10 text-[0.9375rem]"
          >
            You selected {rate} out of 5
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl mt-5 mb-4 md:text-[1.7rem]">
              Thank you!
            </p>
            <p className="text-[#686e79] md:text-[0.9375rem]">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

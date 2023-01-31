export default function FourCards() {
    return (
        <div className='

        '>
            <div className="my-0 mx-auto mb-10 text-center px-5 max-w-[78%]">

            <h2 className="text-3xl font-bold"
            >  Reliable, efficient delivery
            </h2>
            <h3>
                Powered by Technology
            </h3>
            <p className="text-gray-400 text-center 
            ">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
            </div>

            <div className='grid p-8 gap-8'>
                <div className='border-0 rounded-sm p-[30px] bg-white shadow-lg 
                    border-t-4 border-[#3b3054] md:absolute md:translate-x-(-110%) md:translate-y-(73%) md:z-10
                '>
                    <h3>Supervisor</h3>
                    <p className="pt-5 text-[0.875rem] leading-[1.5rem]">Monitors activity to identify project roadblocks</p>
                    <div className=" mt-10 flex ">
                    <img src="/assets/four-card-feature-section-master/images/icon-supervisor.svg" alt="supervisor" />
                    </div>
                </div>
                <div className='border-0 rounded-sm p-[30px] bg-white shadow-lg  border-t-4 border-[#f46262]
                    md:absolute md:translate-x-(110%) md:translate-y-(-190%) md:z-10
                '>
                    <h3>Team Builder</h3>
                    <p className="pt-5 text-[0.875rem] leading-[1.5rem]">Scans our talent network to create the optimal team for your project</p>
                    <div className=" mt-10 flex ">

                    <img src="/assets/four-card-feature-section-master/images/icon-team-builder.svg" alt="team builder" />
                    </div>
                </div>
                
                <div className='border-0 rounded-sm p-[30px] bg-white shadow-lg border-t-4 border-[#f2c94c]
                     md:absolute md:translate-x-(-110%) md:translate-y-(190%) md:z-10
                    '>
                    <h3>Karma</h3>
                    <p className="pt-5 text-[0.875rem] leading-[1.5rem]">Regularly evaluates our talent to ensure quality</p>
                    <div className=" mt-10 flex ">
                    <img src="/assets/four-card-feature-section-master/images/icon-karma.svg" alt="karma" />
                    </div>

                    </div>
                <div className='border-0 rounded-sm p-[30px] bg-white shadow-lg border-t-4 border-[#2acfcf]
                    md:absolute md:translate-x-(110%) md:translate-y-(73%) md:z-10
                '>
                    <h3>Calculator</h3>
                    <p className="pt-5 text-[0.875rem] leading-[1.5rem]">Uses data from past projects to provide better delivery estimates</p>
                    <div className=" mt-10 flex ">

                    <img src="/assets/four-card-feature-section-master/images/icon-calculator.svg" alt="calculator" />
                    </div>
                </div>
            </div>
            
        </div>
    )

}
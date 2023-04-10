import React from 'react';

export default function FourCards() {
    return (
        <div className='flex flex-col gap-10 p-8 pt-14 min-[339px]:p-14 min-[412px]:p-16 min-[540px]:p-24 min-[540px]:gap-20 md:p-24 lg:py-12 items-center'>
            <section className='flex flex-col gap-4 text-center md:gap-10 lg:px-32'>
                <div className='text-lg min-[320px]:text-xl min-[540px]:text-3xl md:text-5xl flex flex-col md:gap-3 lg:text-4xl lg:gap-1'>
                    <h1 className='font-extralight text-[#9e9ea9]'>
                        Reliable, efficient delivery
                    </h1>
                    <h1 className='font-semibold'>Powered by Technology</h1>
                </div>
                <div>
                    <p className='text-[#b7acb0] text-xs min-[360px]:text-sm min-[540px]:text-lg md:text-3xl lg:text-xl'>
                        Our Artificial Intelligence powered tools use millions
                        of project data points to ensure that your project is
                        successful
                    </p>
                </div>
            </section>
            <section className='flex flex-col gap-6 min-[540px]:gap-12 lg:grid grid-cols-3 items-center lg:gap-8 xl:w-4/5'>
                <div className='gap-1 shadow-[0px_1px_20px_1px_rgba(0,0,0,.2)] flex flex-col p-5 border-t-2 border-solid rounded-md min-[412px]:gap-3 min-[540px]:shadow-[0px_1px_25px_1px_rgba(0,0,0,.2)] min-[540px]:border-t-4 md:p-10 md:gap-14 md:rounded-xl md:w-8/12 lg:gap-6 lg:w-full lg:md:rounded-md lg:p-6 border border-t-[#45d3d3] lg:row-span-2'>
                    <div className='flex flex-col gap-1 min-[360px]:gap-2 min-[540px]:gap-4 md:gap-7 lg:gap-2'>
                        <h1 className=' font-semibold   min-[360px] text-xl min-[540px]:text-3xl md:text-5xl lg:text-xl'>
                            Supervisor
                        </h1>
                        <p className='text-[#b8b9c0] text-[10px] min-[360px]:text-xs min-[540px]:text-base md:text-2xl lg:text-sm'>
                            Monitors activity to identify project roadblocks
                        </p>
                    </div>
                    <picture className='w-full flex justify-end'>
                        <img
                            className='w-11 min-[412px]:w-12 min-[540px]:w-14 md:w-20 lg:w-12'
                            src='/assets/four-card-feature-section-master/images/icon-supervisor.svg'
                            alt=''
                        />
                    </picture>
                </div>

                <div className='gap-1 shadow-[0px_1px_20px_1px_rgba(0,0,0,.2)] flex flex-col p-5 border-t-2 border-solid rounded-md min-[412px]:gap-3 min-[540px]:shadow-[0px_1px_25px_1px_rgba(0,0,0,.2)] min-[540px]:border-t-4 md:p-10 md:gap-14 md:rounded-xl md:w-8/12 lg:gap-6 lg:w-full lg:md:rounded-md lg:p-6 border-[#ea5353]'>
                    <div className='flex flex-col gap-1 min-[360px]:gap-2 min-[540px]:gap-4 md:gap-7 lg:gap-2'>
                        <h1 className='  font-semibold   min-[360px] text-xl min-[540px]:text-3xl md:text-5xl lg:text-xl'>
                            Team Builder
                        </h1>
                        <p className='text-[#b8b9c0] text-[10px] min-[360px]:text-xs min-[540px]:text-base md:text-2xl lg:text-sm'>
                            Scans our talent network to create the optimal team
                            for your project
                        </p>
                    </div>
                    <picture className='w-full flex justify-end'>
                        <img
                            className='w-11 min-[412px]:w-12 min-[540px]:w-14 md:w-20 lg:w-12'
                            src='/assets/four-card-feature-section-master/images/icon-team-builder.svg'
                            alt=''
                        />
                    </picture>
                </div>
                <div
                    className='gap-1 shadow-[0px_1px_20px_1px_rgba(0,0,0,.2)] flex flex-col p-5 border-t-2 border-solid 
                rounded-md min-[412px]:gap-3 min-[540px]:shadow-[0px_1px_25px_1px_rgba(0,0,0,.2)] min-[540px]:border-t-4 md:p-10 md:gap-14 md:rounded-xl md:w-8/12 lg:gap-6 lg:w-full lg:md:rounded-md lg:p-6 
                border-[#fcaf4a] lg:col-start-2 col-end-3'
                >
                    <div className='flex flex-col gap-1 min-[360px]:gap-2 min-[540px]:gap-4 md:gap-7 lg:gap-2'>
                        <h1 className='  font-semibold   min-[360px] text-xl min-[540px]:text-3xl md:text-5xl lg:text-xl'>
                            Karma
                        </h1>
                        <p className='text-[#b8b9c0] text-[10px] min-[360px]:text-xs min-[540px]:text-base md:text-2xl lg:text-sm'>
                            Regularly evaluates our talent to ensure quality
                        </p>
                    </div>
                    <picture className='w-full flex justify-end'>
                        <img
                            className='w-11 min-[412px]:w-12 min-[540px]:w-14 md:w-20 lg:w-12'
                            src='/assets/four-card-feature-section-master/images/icon-karma.svg'
                            alt=''
                        />
                    </picture>
                </div>
                <div
                    className='gap-1 shadow-[0px_1px_20px_1px_rgba(0,0,0,.2)] flex flex-col p-5 border-t-2 border-solid rounded-md min-[412px]:gap-3 
                min-[540px]:shadow-[0px_1px_25px_1px_rgba(0,0,0,.2)] min-[540px]:border-t-4 md:p-10 md:gap-14 md:rounded-xl md:w-8/12 lg:gap-6
                lg:w-full lg:md:rounded-md lg:p-6 border-[#549ef2] lg:row-start-1 row-span-2 col-start-3 col-end-4'
                >
                    <div className='flex flex-col gap-1 min-[360px]:gap-2 min-[540px]:gap-4 md:gap-7 lg:gap-2'>
                        <h1 className='  font-semibold   min-[360px] text-xl min-[540px]:text-3xl md:text-5xl lg:text-xl'>
                            Calculator
                        </h1>
                        <p className='text-[#b8b9c0] text-[10px] min-[360px]:text-xs min-[540px]:text-base md:text-2xl lg:text-sm'>
                            Uses data from past projects to provide better
                            delivery estimates
                        </p>
                    </div>
                    <picture className='w-full flex justify-end'>
                        <img
                            className='w-11 min-[412px]:w-12 min-[540px]:w-14 md:w-20 lg:w-12'
                            src='/assets/four-card-feature-section-master/images/icon-calculator.svg'
                            alt=''
                        />
                    </picture>
                </div>
            </section>
        </div>
    );
}

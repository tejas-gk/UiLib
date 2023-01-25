export default function News() {
    return (
        <div className="px-[5rem]">
           
            
             <header className="flex w-full mb-5">
      <div className="mobile-nav">
        <div className="flex items-center">
          <img src="/assets/news/assets/images/logo.svg" alt="Page Logo"/>
        </div>
        <div className="hidden">
          <img src="/assets/news/assets/images/icon-menu.svg" alt="menu icon"/>
        </div>
      </div>
      <div className="flex justify-end items-center flex-1">
          <a href="#Home" className="text-sm pl-6 font-normal text-#7e7b83] decoration-none  text-center transition-[.3s] hover:text-[#f15d51]">Home</a>
          <a href="#New" className="text-sm pl-6 font-normal text-#7e7b83] decoration-none  text-center transition-[.3s] hover:text-[#f15d51]">New</a>
          <a href="#Popular" className='text-sm pl-6 font-normal text-#7e7b83] decoration-none  text-center transition-[.3s] hover:text-[#f15d51]'>Popular</a>
          <a href="#Trending" className='text-sm pl-6 font-normal text-#7e7b83] decoration-none  text-center transition-[.3s] hover:text-[#f15d51]'>Trending</a>
          <a href="#Categories" className='text-sm pl-6 font-normal text-#7e7b83] decoration-none  text-center transition-[.3s] hover:text-[#f15d51]'>Categories</a>
      </div>
            </header>
            



              <section className="grid grid-cols-2 overflow-hidden gap-7  h-min">
      <article className="h-auto">
        <img className="w-full h-1/2 object-cover" src="/assets/news/assets//images/image-web-3-desktop.jpg" alt=""/>
        <img className="mobile-carousel-img" src="/assets/news/assets//images/image-web-3-mobile.jpg" alt="" hidden/>
        <div className="grid grid-cols-2 gap-5 pt-5">
            <h1 className="font-extrabold text-[#01001b] m-0 pr-24 text-[40px] ">The Bright Future of Web 3.0?</h1>
          <div className="flex flex-col py-0 justify-between">
            <div className="p-0flex flex-col ">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
              But is it really fulfilling its promise?</div>
            <button className="justify-end w-36 bg-[#f15d51] text-white uppercase tracking-[1.5px] shadow-inner text-sm py-3">Read more</button>
          </div> 
        </div>  
      </article>

          <aside className='bg-[#00001a] text-white h-min float-right py-3 px-10 flex flex-col 
      '>
        <h3 className="text-[#e9ab53] font-bold tracking-[1pz] py-5 text-3xl mb-12">New</h3>
        <div className="article-content">
          <div className="pb-5 article-one">
            <div className="hover:text-[#e0ab53]" id="1">Hydrogen VS Electric Cars</div>
            <div className="article-description">Will hydrogen-fueled cars ever catch up to EVs?</div>
          </div>
          <div className="pb-5 article-two">
            <div className="article-title" id="2">The Downsides of AI Artistry</div>
            <div className="article-description">What are the possible adverse effects of on-demand AI image generation?</div>
          </div>
          <div className="pb-5 article-three">
            <div className="article-title" id="3">Is VC Funding Drying Up?</div>
            <div className="article-description">Private funding by VC firms is down 50% YOY. We take a look at what that means.</div>
          </div>         
        </div>
      </aside>
    </section>

        <section>
      <div className="flex flex-col md:flex-row px-20">

        <div className="flex flex-row mt-10 md:w-1/3">

          <img
            src="/assets/news/assets/images/image-top-laptops.jpg"
            className="w-20"
            alt=""
          />
          <div className="flex flex-col mx-6">
            <h2 className="text-3xl font-bold text-gray-300">01</h2>
            <h2 className="text-xl font-bold text-gray-700">Reviving Retro PCs</h2>
            <p className="text-sm text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing
            </p>
          </div>
        </div>


        <div className="flex flex-row mt-10 md:w-1/3">
  
          <img src="/assets/news/assets/images/image-retro-pcs.jpg" className="w-20" alt="" />
          <div className="flex flex-col mx-6">
            <h2 className="text-3xl font-bold text-gray-300">02</h2>
            <h2 className="text-xl font-bold text-gray-700">Reviving Retro PCs</h2>
            <p className="text-sm text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing
            </p>
          </div>
        </div>


        <div className="flex flex-row mt-10 md:w-1/3">
   
          <img
            src="/assets/news/assets/images/image-gaming-growth.jpg"
            className="w-20"
            alt=""
          />
          <div className="flex flex-col mx-6">
            <h2 className="text-3xl font-bold text-gray-300">03</h2>
            <h2 className="text-xl font-bold text-gray-700">Reviving Retro PCs</h2>
            <p className="text-sm text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing
            </p>
          </div>
        </div>
      </div>
    </section>


        </div>
    )
}
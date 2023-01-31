import { Home, ChevronRight } from "react-feather"
import { Link as LinkRouter } from "react-router-dom"
import { GitHub } from "react-feather"
const navigation = [
  {
    id: 1,
    name: 'Home',
    link: 'https://ui-lib-chi.vercel.app/',
    icon: <Home size={20} />,
  },
]

export default function Navbar() {
  return (
    <div className='flex flex-row w-full h-12 bg-white shadow-lg'>
      <div className='flex flex-row w-full h-full justify-between items-center'>
        {
          navigation.map((item) => {
            return (
              <div key={item.id} className='flex flex-row w-1/4 h-full justify-center items-center'>
                <a href={item.link}>
                  <div className='flex flex-row w-full h-full justify-center items-center'>
                    <div className='flex flex-row w-1/2 h-full justify-center items-center'>


                      <div className='flex flex-row w-full h-full justify-center items-center'>
                        {item.icon}
                      </div>
                      <p className='capitalize  hover:border-b-2 hover:border-b-red-500 
                                    transition duration-300 ease-in-out
                                                '>{item.name}</p>
                      <div>


                      </div>

                    </div>
                  </div>
                </a>
              </div>
            )
          }
          )
        }
        <div className='flex flex-row w-1/2 h-full justify-center items-center gap-4'>
          <span
            className="text-gray-500 hover:text-gray-700"
          >contribute </span>
          <span>
            <a href="https://github.com/tejas-gk/UiLib">
              <GitHub size={20} />
            </a>
          </span>
        </div>
      </div>


    </div>
  )
}


const Breadcrumb = ({ pages }) => {
  return (
    <nav className="flex items-center text-sm">
      <ol className="flex list-none">
        {pages.map((page, index) => {
          const isLastPage = index === pages.length - 1;
          return (
            <li key={page.id} className="text-gray-500">
              <a href={page.link} className={`text-gray-500 hover:text-gray-700 ${isLastPage ? 'font-medium' : ''}`}>
                {page.name}
              </a>
              {!isLastPage && <span className="text-gray-500 mx-2">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
import { Home } from "react-feather"
import { Link as LinkRouter } from "react-router-dom"

const navigation = [
    {
        id: 1,
        name: 'Home',
        // icon: <Home />,
        link: '/'
    },
]

export default function Navbar() {
    return (
        <div className='flex flex-row w-full h-12 bg-white shadow-lg'>
            <div className='flex flex-row w-full h-full justify-between items-center'>
                {
                    navigation.map((item) => {
                        return (
                            <div className='flex flex-row w-1/4 h-full justify-center items-center' key={item.id}>
                                <LinkRouter to={item.link}>
                                    <div className='flex flex-row w-full h-full justify-center items-center'>
                                        <div className='flex flex-row w-1/2 h-full justify-center items-center'>
                                            {item.icon}
                                        </div>
                                        <div className='flex flex-row w-1/2 h-full justify-center items-center'>
                                            {item.name}
                                        </div>
                                    </div>
                                </LinkRouter>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>  
    )
}
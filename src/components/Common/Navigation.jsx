import { Link } from 'react-router-dom'
const navigation = [
    {
        name: 'qr',
        link: '/qr',
        img: '/assets/qr/design/desktop-design.jpg',
        description: 'QR code generator',

    },
    {

        name: 'order-summary',
        link: '/order-summary',
        img: '/assets/order-summary/design/desktop-design.jpg',
        description: 'Order summary',

    },
    {
        name: 'dictionary',
        link: '/dictionary',
        img: '/assets/dictionary-app-main/design/desktop-design.jpg',
        description: 'Dictionary',
        timespent: '1 hour'
    },
    {

        name: 'hydrate',
        link: '/hydrate',
        img: '/assets/hydrate.jpeg',
        description: 'Hydrate',

    },
    {

        name: 'shopping-cart',
        link: '/shopping-cart',
        img: '/assets/shopping-cart.jpeg',
        description: 'shopping cart',


    },
    {

        name: 'product-preview',
        link: '/product-preview',
        img: '/assets/product-preview-card-component-main/product-preview-card-component-main/design/desktop-design.jpg',
        description: 'product preview',

    },
    {

        name: 'nft',
        link: '/nft',
        img: '/assets/nft-preview-card-component-main/design/desktop-design.jpg',
        description: 'nft',

    },
    {

        name: 'rock-paper-scissors',
        link: '/rock-paper-scissors',
        img: '/assets/rock-paper-scissors/design/desktop-preview.jpg',
        description: 'rock-paper-scissors',


    },
    {

        name: 'profile-card',
        link: '/profile-card',
        img: '/assets/profile-card-component-main/design/desktop-design.jpg',
        description: 'profile-card',

    },
    {

        name: 'advice',
        link: 'advice',
        img: '/assets/advice-generator-app-main/design/active-states.jpg',
        description: 'advice',
    },
    {

        name: 'password-generator',
        link: 'password-generator',
        img: '/assets/password-generator.jpg',
        status: 'in progress',
        description: 'password-generator',
        
    }
]
    
export default function Navigation() {
  return (
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4 px-8 gap-6'>
          {
              navigation.map((item,i) => {
                  return (
                      <div key={i} className='mt-2 flex justify-center items-center'
                      >
                          <Link to={item.link}>
                              <Card
                                  children={item.name}
                                  img={item.img}
                                  description={item.description}
                                  status={item?.status}
                                />
                          </Link>
                      </div>
                  )
              })
            }
    </div>
  )
}

const Card = ({ children,
    img,
    description,
    ...props
}) => {
    return (
        <div className='flex flex-col w-80 h-80 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out 
        '>
            <div className='flex justify-center items-center h-inherit rounded-lg'>
                <img src={img} alt='hello'
                    className='w-80 h-[12rem] rounded-lg'
                />
            </div>
            <div className='flex pl-4 h-20  text-start flex-col mt-2'>
                <h1 className='text-2xl font-bold capitalize'>{children}</h1>
                <div className='flex justify-between items-center mt-2'>
                <p className='text-gray-400 text-sm pt-2 pl-2 capitalize'>{description}</p>
                    <p className='text-gray-400 text-sm mr-4'>{props.status}</p>
                </div>
                
            </div>
            
            
        </div>
    )
}


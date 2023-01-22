import { Link } from 'react-router-dom'
const navigation = [
    {
        id: 1,
        name: 'qr',
        link: '/qr',
        img: '/assets/qr/design/desktop-design.jpg',
        description: 'QR code generator'
    },
    {
        id: 2,
        name: 'order-summary',
        link: '/order-summary',
        img: '/assets/order-summary/design/desktop-design.jpg',
        description: 'Order summary'
    },
    {
        id: 3,
        name: 'hydrate',
        link: '/hydrate',
        img: '/assets/hydrate.jpeg',
        description: 'Hydrate'
    },
    {
        id: 4,
        name: 'ranking',
        link: '/ranking',
        img: '/assets/rankings.jpeg',
        description:'rankings'
    },
    {
        id: 5,
        name: 'shopping-cart',
        link: '/shopping-cart',
        img: '/assets/shopping-cart.jpeg',
        description: 'shopping cart'

    },
    {
        id: 6,
        name: 'product-preview',
        link: '/product-preview',
        img: '/assets/product-preview-card-component-main/product-preview-card-component-main/design/desktop-design.jpg',
        description: 'product preview'
    },
    {
        id: 7,
        name: 'nft',
        link: '/nft',
        img: '/assets/nft-preview-card-component-main/design/desktop-design.jpg',
        description: 'nft'
    },
    {
        id: 8,
        name: 'rock-paper-scissors',
        link: '/rock-paper-scissors',
        img: '/assets/rock-paper-scissors/design/desktop-preview.jpg',
        description: 'rock-paper-scissors'

    }
]
    
export default function Navigation() {
  return (
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4 px-8 gap-6'>
          {
              navigation.map((item) => {
                  return (
                      <div key={item.id} className='mt-2'
                      >
                          <Link to={item.link}>
                              <Card
                                  children={item.name}
                                  img={item.img}
                                  description={item.description}
                                />
                          </Link>
                      </div>
                  )
              })
            }
    </div>
  )
}

const Card = ({ children,img,description }) => {
    return (
        <div className='flex flex-col w-80 h-80 bg-white rounded-lg shadow-lg'>
            <div className='flex justify-center items-center h-inherit rounded-lg'>
                <img src={img} alt='hello'
                    className='w-80 h-[12rem] rounded-lg'
                />
            </div>
            <div className='flex pl-4 h-20  text-start flex-col mt-2'>
                <h1 className='text-2xl font-bold capitalize'>{children}</h1>
                <p className='text-gray-400 text-sm pt-2 pl-2'>{description}</p>
            </div>

            
        </div>
    )
}


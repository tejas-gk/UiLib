import { useState } from "react"
import { ShoppingCart, Heart } from "react-feather"
function Cart() {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [clickedCart, setClickedCart] = useState(false)
  const [clickedWishlist, setClickedWishlist] = useState(false)
  const [addedToCart, setAddedToCart] = useState('Add to cart')
  const addToCart = () => {
    setCart([...cart, 1])
    console.log(cart.length)
    setClickedCart(true)
    setTimeout(() => {
      setClickedCart(false)
    }
      , 2000)
    setAddedToCart('Added to cart')
  }

  const addToWishlist = () => {
    setWishlist([...wishlist, 1])
  }

  
  return (
    <div className="flex items-center justify-center h-screen">
      <div className='flex flex-row shadow-lg p-8 w-full max-w-2xl border'>
        <img src="https://t2.gstatic.com/images?q=tbn:ANd9GcTRE-2HigMgYsEBNmtnOOCDB_F8WmKnFvVxTqSKjscLQytslqOw"
          alt="" className="h-48 object-cover aspect-auto
          " />
        <div className='text-start'>
          <span className="batch cursor-none p-1 bg-slate-800 text-white rounded-full text-xs font-medium">Free shipping</span>
          <h1 className="text-slate-800 py-4 font-semibold">Razer Kraten Kitty Edt Gaming Headset Quartz</h1>
          <h3 className="text-sm text-slate-600 line-through font-medium">1699,-</h3>
          <h1 className="text-3xl font-bold text-slate-800 py-2">799,-</h1>
          <p className='font-light text-sm text-gray-400'>The offer is void until December 31 or as long as stocks lasts</p>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 mt-4 border-b-4 border-b-blue-800
          hover:bg-blue-700 hover:border-b-blue-900 rounded w-full
          "
            onClick={addToCart}
          >
            <div className="flex flex-row justify-center">
              {
                clickedCart ? <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg> : null
              }
              <span className="font-medium">
                {
                  clickedCart ? 'Adding to cart' : addedToCart
               }
              </span>
            </div>
            
          </button>

          <div className="flex flex-row  mt-4">
            <span className='h-3 w-3 bg-green-500 rounded-full mt-1' />
            <span className='text-xs text-black font-light ml-2 mb-2'
            >50+ pcs in stock</span>
          </div>
          
          <div className="flex flex-row mt-4">
            <button className="border border-gray-400 rounded-md p-2 mr-2 hover:bg-gray-200 text-sm block shadow-sm w-full
            "
              onClick={addToCart}
            >
              <ShoppingCart className="inline-block mr-2 h-5 w-auto hover:text-blue-500
              " />
              {
                cart.length > 0 ?
                  <span className="text-xs py-1 ml-2">
                    {cart.length}
                </span> : <span>Add to cart</span>

              }
            </button>
             <button className="border border-gray-400 rounded-md p-2 mr-2 hover:bg-gray-200 text-sm block shadow-sm w-full relative
            "
              onClick={addToWishlist}
            >
              <Heart className="heart inline-block mr-2 h-5 w-auto hover:text-red-500 
              " />
              Add to wishlist
              {
                wishlist.length > 0 ? <span className="text-xs text-white bg-red-500 rounded-full px-2 absolute -top-3 -right-2 
                py-1 ml-2">{wishlist.length}</span> : null
              }
            </button>
          </div>
          
      </div>
      </div>


</div>
  )
}

export default Cart

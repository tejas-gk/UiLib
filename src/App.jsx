import React from 'react'
import Cart from './pages/Cart'
import OrderSummary from './components/UIProjects/order-summary/OrderSummary'
import Hydrate from './components/UIProjects/Hydrate/Hydrate'
import Ranking from './pages/Ranking'
import Qr from './pages/Qr'
import {
  BrowserRouter, Route, Link,Routes
} from 'react-router-dom'
import ProductPreview from './pages/ProductPreview'
import Nft from './components/UIProjects/Nft/Nft'
import Navbar from './components/Common/Navbar'
import Navigation from './components/Common/Navigation'
import RockPaperScissors from './components/UIProjects/rock-paper-scissors/index'
import ProfileCard from './pages/ProfileCard'
import Advice from './pages/Advice'
import PasswordGenerator from './pages/PasswordGenerator'
import Dictionary from './components/UIProjects/dictionary/index'
import Pomodoro from './components/UIProjects/pomodoro/index'
import GameOfLife from './components/UIProjects/game-of-life/index'
import News from './pages/News'
export default function App() {
  return (
      <>
    <div>
        <BrowserRouter>
          <div className='mb-1'>
            <Navbar />
            </div>
        <Routes>
          <Route path='/' element={<Navigation/>} />
          <Route path='/order-summary' element={<OrderSummary />} />
          <Route path='/hydrate' element={<Hydrate />} />
          <Route path='/ranking' element={<Ranking />} />
          <Route path='/qr' element={<Qr />} />
          <Route path='shopping-cart' element={<Cart />} />
          <Route path='product-preview' element={<ProductPreview />} />
            <Route path='nft' element={<Nft />} />
            <Route path='rock-paper-scissors' element={<RockPaperScissors />} />
            <Route path='profile-card' element={<ProfileCard />} />
            <Route path='advice' element={<Advice />} />
            <Route path='dictionary' element={<Dictionary />} />
            <Route path='password-generator' element={<PasswordGenerator />} />
            <Route path='pomodoro' element={<Pomodoro />} />
            <Route path='game-of-life' element={<GameOfLife />} />
            <Route path='news' element={<News />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
      
    </div>
    </>
  )
}

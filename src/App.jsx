import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import OrderSummary from './components/UIProjects/order-summary/OrderSummary';
import Hydrate from './components/UIProjects/Hydrate/Hydrate';
import Ranking from './pages/Ranking';
import Qr from './pages/Qr';
import ProductPreview from './pages/ProductPreview';
import Nft from './components/UIProjects/Nft/Nft';
import Navbar from './components/Common/Navbar';
import Navigation from './components/Common/Navigation';
import RockPaperScissors from './components/UIProjects/rock-paper-scissors/index';
import ProfileCard from './pages/ProfileCard';
import Advice from './pages/Advice';
import PasswordGenerator from './pages/PasswordGenerator';
import Dictionary from './components/UIProjects/dictionary/index';
import GameOfLife from './components/UIProjects/game-of-life/index';
import News from './pages/News';
import ExpensesChart from './pages/ExpensesChart';
import InteractiveRating from './pages/InteractiveRating';
import FourCards from './pages/FourCards';
import Clock from './components/UIProjects/clock/index';
import Alram from './pages/Alram';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import ColorPallette from './pages/ColorPallette';
import Results from './pages/Results';
export default function App() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Navigation />} />
                        <Route
                            path='order-summary'
                            element={<OrderSummary />}
                        />
                        <Route path='hydrate' element={<Hydrate />} />
                        <Route path='ranking' element={<Ranking />} />
                        <Route path='qr' element={<Qr />} />
                        <Route path='shopping-cart' element={<Cart />} />
                        <Route
                            path='product-preview'
                            element={<ProductPreview />}
                        />
                        <Route path='nft' element={<Nft />} />
                        <Route
                            path='rock-paper-scissors'
                            element={<RockPaperScissors />}
                        />
                        <Route path='profile-card' element={<ProfileCard />} />.
                        <Route
                            path='expenses-chart'
                            element={<ExpensesChart />}
                        />
                        <Route path='advice' element={<Advice />} />
                        <Route path='dictionary' element={<Dictionary />} />
                        <Route
                            path='password-generator'
                            element={<PasswordGenerator />}
                        />
                        <Route path='game-of-life' element={<GameOfLife />} />
                        <Route path='news' element={<News />} />
                        <Route
                            path='interactive-rating'
                            element={<InteractiveRating />}
                        />
                        <Route
                            path='four-card-feature'
                            element={<FourCards />}
                        />
                        <Route path='clock' element={<Clock />} />
                        <Route path='alarm' element={<Alram />} />
                        <Route path='login' element={<Login />} />
                        <Route path='landing-page' element={<LandingPage />} />
                        <Route
                            path='color-pallette'
                            element={<ColorPallette />}
                        />
                        <Route path='results' element={<Results />} />
                        <Route path='*' element={<div>404</div>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

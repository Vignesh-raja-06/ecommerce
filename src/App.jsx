import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import './index.css'

function App() {
    const [activePage, setActivePage] = useState('home');

    const renderPage = () => {
        switch (activePage) {
            case 'home': return <Home onShopNow={() => setActivePage('products')} />;
            case 'products': return <Products />;
            case 'about': return <About />;
            case 'contact': return <Contact />;
            default: return <Home onShopNow={() => setActivePage('products')} />;
        }
    }

    return (
        <div className="app-container">
            <Navbar activePage={activePage} setActivePage={setActivePage} />
            <main className="content">
                {renderPage()}
            </main>
            <Footer />
        </div>
    )
}

export default App

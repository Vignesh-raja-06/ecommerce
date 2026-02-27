import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import './index.css'

function App() {
    const [activePage, setActivePage] = useState('home');
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(item => (item._id || item.id) === (product._id || product.id));
            if (existing) {
                return prev.map(item =>
                    (item._id || item.id) === (product._id || product.id)
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (productId, delta) => {
        setCart(prev => prev.map(item => {
            if ((item._id || item.id) === productId) {
                const newQuantity = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const removeFromCart = (productId) => {
        setCart(prev => prev.filter(item => (item._id || item.id) !== productId));
    };

    const renderPage = () => {
        switch (activePage) {
            case 'home': return <Home onShopNow={() => setActivePage('products')} />;
            case 'products': return <Products addToCart={addToCart} />;
            case 'about': return <About />;
            case 'contact': return <Contact />;
            case 'cart': return <Cart
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                onCheckout={() => alert('Checkout flow not yet implemented!')}
                onShopNow={() => setActivePage('products')}
            />;
            default: return <Home onShopNow={() => setActivePage('products')} />;
        }
    }

    return (
        <div className="app-container">
            <Navbar activePage={activePage} setActivePage={setActivePage} cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />
            <main className="content">
                {renderPage()}
            </main>
            <Footer />
        </div>
    )
}

export default App

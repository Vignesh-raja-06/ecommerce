import React from 'react'

const Navbar = ({ activePage, setActivePage, cartCount }) => {
    return (
        <nav className="navbar">
            <div className="logo" onClick={() => setActivePage('home')}>Student Kart</div>
            <ul className="nav-links">
                {['home', 'products', 'about', 'contact'].map((page) => (
                    <li key={page}>
                        <a
                            href={`#${page}`}
                            className={activePage === page ? 'active' : ''}
                            onClick={(e) => {
                                e.preventDefault();
                                setActivePage(page);
                            }}
                        >
                            {page.charAt(0).toUpperCase() + page.slice(1)}
                        </a>
                    </li>
                ))}
                <li key="cart">
                    <a
                        href="#cart"
                        className={activePage === 'cart' ? 'active' : ''}
                        onClick={(e) => {
                            e.preventDefault();
                            setActivePage('cart');
                        }}
                    >
                        Cart {cartCount > 0 && <span style={{
                            background: 'var(--primary)',
                            color: 'white',
                            borderRadius: '50%',
                            padding: '2px 8px',
                            fontSize: '0.8rem',
                            marginLeft: '5px'
                        }}>{cartCount}</span>}
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

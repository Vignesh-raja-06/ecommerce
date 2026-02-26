import React from 'react'

const Navbar = ({ activePage, setActivePage }) => {
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
            </ul>
        </nav>
    )
}

export default Navbar

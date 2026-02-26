import React, { useState } from 'react'

const productsData = [
    { id: 1, name: "Stellar Book Pro", price: 899, category: "Laptops", image: "💻" },
    { id: 2, name: "QuietFlow Headphones", price: 149, category: "Audio", image: "🎧" },
    { id: 3, name: "ErgoDesk Mouse", price: 59, category: "Accessories", image: "🖱️" },
    { id: 4, name: "Lumina Desk Lamp", price: 45, category: "Lifestyle", image: "💡" },
    { id: 5, name: "FocusPad XL", price: 29, category: "Accessories", image: "⌨️" },
    { id: 6, name: "Acoustic Pods", price: 129, category: "Audio", image: "📻" },
]

const Products = () => {
    const [filter, setFilter] = useState('All');

    const filteredProducts = filter === 'All'
        ? productsData
        : productsData.filter(p => p.category === filter);

    return (
        <div className="page products-page">
            <header className="page-header">
                <h1>Our <span className="gradient-text">Catalog</span></h1>
                <div className="filter-bar">
                    {['All', 'Laptops', 'Audio', 'Accessories', 'Lifestyle'].map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </header>

            <div className="product-grid">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card glass-card">
                        <div className="product-image">{product.image}</div>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="category">{product.category}</p>
                            <div className="product-footer">
                                <span className="price">${product.price}</span>
                                <button className="add-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products

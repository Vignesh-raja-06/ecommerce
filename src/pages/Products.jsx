import React, { useState } from 'react'

const productsData = [
    { 
        id: 1, 
        name: "Stellar Book Pro", 
        price: 899, 
        category: "Laptops", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4ejUavHCU_27wm0HHYE-1H84xcyML-pFig&s"
    },
    { 
        id: 2, 
        name: "QuietFlow Headphones", 
        price: 149, 
        category: "Audio", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRru1gpWx9p9eROH8dQpyoG49wYtbzP4GXcYA&s"
    },
    { 
        id: 3, 
        name: "ErgoDesk Mouse", 
        price: 59, 
        category: "Accessories", 
        image: "https://cdn.shopify.com/s/files/1/2084/6601/files/mouse-with-additional-buttons.jpg?v=1721141924"
    },
    { 
        id: 4, 
        name: "Lumina Desk Lamp", 
        price: 45, 
        category: "Lifestyle", 
        image: "https://mobilla.in/cdn/shop/files/mcharge_lumina_1.png?v=1741093584"
    },
    { 
        id: 5, 
        name: "FocusPad XL", 
        price: 29, 
        category: "Accessories", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ffgSE1i69yZYjPmnjfRd-mk9RJrOo_EiOw&s"
    },
    { 
        id: 6, 
        name: "iphone", 
        price: 999, 
        category: "mobile", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjxA4-jlECytxXWi100sXAUDAl8RW6aoVpA&s"
    },
];

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
                        
                        {/* ✅ FIXED IMAGE PART */}
                        <div className="product-image">
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                            />
                        </div>

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
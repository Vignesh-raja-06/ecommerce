import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Products = ({ addToCart }) => {
    const [filter, setFilter] = useState('All');
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/products');
                setProductsData(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to load products.");
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = filter === 'All'
        ? productsData
        : productsData.filter(p => p.category === filter);

    if (loading) {
        return (
            <div className="page products-page">
                <header className="page-header">
                    <h1>Our <span className="gradient-text">Catalog</span></h1>
                </header>
                <div style={{ textAlign: 'center', padding: '50px' }}>Loading products...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="page products-page">
                <header className="page-header">
                    <h1>Our <span className="gradient-text">Catalog</span></h1>
                </header>
                <div style={{ textAlign: 'center', padding: '50px', color: '#ff4d4f' }}>{error}</div>
            </div>
        );
    }

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
                    <div key={product._id || product.id} className="product-card glass-card">

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
                                <span className="price">Rs.{product.price}</span>
                                <button className="add-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
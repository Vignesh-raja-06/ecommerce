import React from 'react'

const Home = ({ onShopNow }) => {
    return (
        <div className="page home-page">
            <section className="hero">
                <div className="hero-content">
                    <h1>Upgrade Your <span className="gradient-text">Student Life</span></h1>
                    <p>Modern essentials for modern students. From high-performance laptops to ergonomic desk gear, we've got everything you need to excel.</p>
                    <button className="cta-button" onClick={onShopNow}>Browse Catalog</button>
                </div>
                <div className="hero-stats">
                    <div className="stat">
                        <span className="stat-value">10k+</span>
                        <span className="stat-label">Students Served</span>
                    </div>
                    <div className="stat">
                        <span className="stat-value">500+</span>
                        <span className="stat-label">Premium Products</span>
                    </div>
                    <div className="stat">
                        <span className="stat-value">4.9/5</span>
                        <span className="stat-label">User Rating</span>
                    </div>
                </div>
            </section>

            <section className="featured-preview">
                <h2>Trending Now</h2>
                <div className="preview-grid">
                    <div className="preview-item glass-card">
                        <h3>Laptops</h3>
                        <p>Power through assignments.</p>
                    </div>
                    <div className="preview-item glass-card">
                        <h3>Accessories</h3>
                        <p>Complete your setup.</p>
                    </div>
                    <div className="preview-item glass-card">
                        <h3>Lifestyle</h3>
                        <p>Work hard, play hard.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home

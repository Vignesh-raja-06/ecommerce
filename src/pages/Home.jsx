import React from 'react'

const Home = ({ onShopNow }) => {
    return (
        <div className="page home-page">
            <section className="hero">
                <div className="hero-content">
                    <h1><span className="gradient-text">Student Life Improve by technologies</span></h1>
                    <h2>Modern essentials for todays modern students. From high-performance laptops and desk gear, we've got everything from this environment</h2>
                    <button className="cta-button" onClick={onShopNow}>Browse to more</button>
                </div>
                <div className="hero-stats">
                    <div className="stat">
                        <span className="stat-value">count</span>
                        <span className="stat-label">Students Served</span>
                    </div>
                    <div className="stat">
                        <span className="stat-value">sale</span>
                        <span className="stat-label">Premium Products</span>
                    </div>
                    <div className="stat">
                        <span className="stat-value">hype points</span>
                        <span className="stat-label">User Rating</span>
                    </div>
                </div>
            </section>

            <section className="featured-preview">
                <h2>what we offer</h2>
                <div className="preview-grid">
                    <div className="preview-item glass-card">
                        <h3>Laptops</h3>
                        <p>In 2026, many guides recommend mid-range machines (Core i5/Ryzen 5 with 8–16 GB RAM) as the best mix of performance and value for students.</p>
                    </div>
                    <div className="preview-item glass-card">
                        <h3>Accessories</h3>
                        <p>Many students find that a good mouse, keyboard, and webcam are essential for remote learning.</p>
                    </div>
                    <div className="preview-item glass-card">
                        <h3>work purposes</h3>
                        <p>ideal for office productivity, remote work, video calls, MS Office, browsing, and everyday tasks.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home

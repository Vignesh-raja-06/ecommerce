import React, { useState } from 'react'

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would send the data to the backend here
        setIsSubmitted(true);
    };

    return (
        <div className="page contact-page">
            <header className="page-header">
                <h1><span className="gradient-text">Communicate with us</span></h1>
                <p>Have questions? We're here to listen.</p>
            </header>

            <div className="contact-container">
                {isSubmitted ? (
                    <div className="success-message glass-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                        <h2>Message Sent!</h2>
                        <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
                            Thanks for reaching out! We will get back to you as soon as possible.
                        </p>
                        <button
                            className="cta-button"
                            style={{ padding: '0.8rem 2rem', marginTop: '2rem', fontSize: '1rem' }}
                            onClick={() => setIsSubmitted(false)}
                        >
                            Send Another Message
                        </button>
                    </div>
                ) : (
                    <form className="contact-form glass-card" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="student@university.edu" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="How can we help?" required></textarea>
                        </div>
                        <button type="submit" className="cta-button" style={{ marginTop: '1rem' }}>Send Message</button>
                    </form>
                )}

                <div className="contact-info">
                    <div className="info-card glass-card">
                        <h3>Office Address</h3>
                        <p>ACET</p>
                        <p>Villianur, Puducherry</p>
                    </div>
                    <div className="info-card glass-card">
                        <h3>Working Hours</h3>
                        <p>Mon - Fri: 9am - 6pm</p>
                    </div>
                    <div className="social-links">
                        <a href="#" className="social-icon">Facebook</a>
                        <a href="#" className="social-icon">Instagram</a>
                        <a href="#" className="social-icon">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

import React from 'react'

const Contact = () => {
    return (
        <div className="page contact-page">
            <header className="page-header">
                <h1>Get in <span className="gradient-text">Touch</span></h1>
                <p>Have questions? We're here to help you find the perfect setup.</p>
            </header>

            <div className="contact-container">
                <form className="contact-form glass-card" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="student@university.edu" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" placeholder="How can we help?"></textarea>
                    </div>
                    <button type="submit" className="cta-button">Send Message</button>
                </form>

                <div className="contact-info">
                    <div className="info-card glass-card">
                        <h3>Official Headquarters</h3>
                        <p>123 Innovation Drive</p>
                        <p>Silicon Valley, CA 94025</p>
                    </div>
                    <div className="info-card glass-card">
                        <h3>Support Hours</h3>
                        <p>Mon - Fri: 9am - 6pm EST</p>
                        <p>Weekend: 10am - 2pm EST</p>
                    </div>
                    <div className="social-links">
                        <span className="social-icon">Twitter</span>
                        <span className="social-icon">Instagram</span>
                        <span className="social-icon">LinkedIn</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

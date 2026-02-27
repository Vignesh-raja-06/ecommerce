import React from 'react'

const About = () => {
    return (
        <div className="page about-page">
            <section className="about-hero">
                <h1> <span className="gradient-text">For Little Info</span></h1>
                <p className="lead">Empowering the next generation of innovators with the tools they need to succeed.</p>
            </section>

            <section className="mission glass-card">
                <h2>Our Mission</h2>
                <p>Student Kart was born out of a simple observation: students often lack access to high-quality, reliable gear that fits their budget. We believe that your equipment should never be a bottleneck to your creativity or productivity.</p>
                <p>We partner with top manufacturers to bring you curated tech and lifestyle products at student-friendly prices.</p>
            </section>

            <section className="values">
                <div className="value-item">
                    <div className="icon"></div>
                    <h3>Quality First</h3>
                    <p>Here are high-quality laptops ideal for work/professional use — prioritizing build quality, performance, durability, reliability, and long-term productivity in 2026.</p>
                </div>
                <div className="value-item">
                    <div className="icon"></div>
                    <h3>Customer Focused</h3>
                    <p>Every decision we starts with the question: 'How does this help for every student?'</p>
                </div>
                <div className="value-item">
                    <div className="icon"></div>
                    <h3>Sustainable</h3>
                    <p>We prioritize eco-friendly packaging and fast delivery on time.</p>
                </div>
            </section>
        </div>
    )
}

export default About

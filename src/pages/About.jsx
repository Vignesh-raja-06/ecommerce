import React from 'react'

const About = () => {
    return (
        <div className="page about-page">
            <section className="about-hero">
                <h1>About <span className="gradient-text">Student Kart</span></h1>
                <p className="lead">Empowering the next generation of innovators with the tools they need to succeed.</p>
            </section>

            <section className="mission glass-card">
                <h2>Our Mission</h2>
                <p>Student Kart was born out of a simple observation: students often lack access to high-quality, reliable gear that fits their budget. We believe that your equipment should never be a bottleneck to your creativity or productivity.</p>
                <p>We partner with top manufacturers to bring you curated tech and lifestyle products at student-friendly prices.</p>
            </section>

            <section className="values">
                <div className="value-item">
                    <div className="icon">💎</div>
                    <h3>Quality First</h3>
                    <p>We only stock items that we would use ourselves in our studies.</p>
                </div>
                <div className="value-item">
                    <div className="icon">🎓</div>
                    <h3>Student Focused</h3>
                    <p>Every decision we make starts with the question: 'How does this help a student?'</p>
                </div>
                <div className="value-item">
                    <div className="icon">🌍</div>
                    <h3>Sustainable</h3>
                    <p>We prioritize eco-friendly packaging and ethical sourcing.</p>
                </div>
            </section>
        </div>
    )
}

export default About

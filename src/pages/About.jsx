import React from 'react'

const About = () => {
    return (
        <div className="page about-page">
            <section className="about-hero">
                <h1><span className="gradient-text">Student Kart</span></h1>
                <p className="lead">Empowering the next generation of innovators with the tools they need to succeed.</p>
            </section>

            <section className="mission glass-card">
                <h2>Our Mission</h2>
                <p>Student Kart is dedicated to helping students succeed by providing access to high-quality, affordable tech and lifestyle products. We know that the right tools can make a huge difference in learning, creativity, and productivity..</p>
                <p>Our mission is simple: equip students with the resources they need to achieve their goals without overspending. We carefully select every product we offer and partner with trusted brands to ensure quality and reliability..</p>
                <p>At Student Kart, we are student-focused, quality-driven, and sustainability-minded. Every decision we make starts with one question: “How does this help a student?” From eco-friendly packaging to ethical sourcing, we strive to create a platform that benefits both students and the planet.</p>
            </section>

            <section className="values">
                <div className="value-item">
                    <div className="icon"></div>
                    <h3>Quality First</h3>
                    <p>To become the most trusted platform for students, where every product and service supports learning, creativity, and personal growth..</p>
                </div>
                <div className="value-item">
                    <div className="icon"></div>
                    <h3>Student Focused</h3>
                    <p>We provide tools and products that leverage current technologies to make learning easier and more effective.</p>
                </div>
                <div className="value-item">
                    <div className="icon"></div>
                    <h3>Sustainable</h3>
                    <p>We choose eco-friendly products and packaging that help students make a positive impact on the planet while learning and growing.</p>
                </div>
            </section>
        </div>
    )
}

export default About

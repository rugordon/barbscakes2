import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content text-center fade-in">
                <h1 className="hero-title">
                    Barb's <span className="text-accent">Free From</span> Cakes
                </h1>
                <p className="hero-subtitle">
                    Welcome to Barb’s Free From Cakes. Hi, I’m Barb – passionate baker, cake enthusiast, and proud coeliac!
                </p>
                <div className="hero-buttons">
                    <a href="#gallery" className="btn btn-primary">View Our Cakes</a>
                    <a href="#about" className="btn btn-outline">Our Story</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

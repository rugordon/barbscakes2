import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container text-center">
                <h3 className="footer-logo">Barb's <span className="text-secondary">Free From</span> Cakes</h3>
                <p className="footer-links">
                    <a href="#hero">Home</a>
                    <a href="#gallery">Cakes</a>
                    <a href="#about">Story</a>
                    <a href="#contact">Contact</a>
                </p>
                <p className="copyright">&copy; {new Date().getFullYear()} Barb's Free From Cakes. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container about-container">
                <div className="about-image">
                    {/* User requested cartoon image of Barb */}
                    <img src="/baking_with_love.png" alt="Barb baking with love" />
                </div>
                <div className="about-text">
                    <h2 className="section-title">Welcome to Barb’s Free From Cakes</h2>
                    <p className="mb-2">
                        Hi, I’m <strong>Barb</strong> – passionate baker, cake enthusiast, and proud coeliac! I started Barb’s Free From Cakes because I know how hard it can be to find gluten-free treats that actually taste amazing. So I rolled up my sleeves, fired up the oven, and set out to prove that gluten free can be just as delicious (if not more!) than the rest.
                    </p>
                    <p className="mb-2">
                        All my cakes are lovingly made in a 100% gluten-free kitchen, with carefully chosen ingredients and plenty of creativity. From velvety cheesecakes to comforting classics with a twist, there’s something here to make everyone smile – whether you're coeliac, gluten intolerant, or just cake-curious.
                    </p>
                    <p>
                        Because life’s too short for dry sponge and boring bakes. Let’s make gluten free fun, fabulous, and full of flavour!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;

import React from 'react';
import { cakes } from '../data/cakes';
import './Gallery.css';

const Gallery = () => {
    return (
        <section id="gallery" className="section bg-off-white">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="section-title">My Creations Gallery</h2>
                    <p className="section-subtitle">A showcase of my delicious gluten-free bakes.</p>
                </div>

                <div className="products-grid">
                    {cakes.map(cake => (
                        <div key={cake.id} className="product-card">
                            <div className="product-image">
                                <img src={cake.image} alt={cake.name} />
                            </div>
                            <div className="product-info">
                                <h3>{cake.name}</h3>
                                <p className="tagline">{cake.tagline}</p>
                                <div className="description-container">
                                    <p className="full-description">{cake.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;

import React from 'react';
import './Products.css';

const products = [
    {
        id: 1,
        name: 'Classic Chocolate Fudge',
        description: 'Rich, moist chocolate cake with velvety ganache. 100% GF.',
        price: '$45.00',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' // Placeholder reuse
    },
    {
        id: 2,
        name: 'Lemon Drizzle Dream',
        description: 'Zesty lemon sponge with a crunchy sugar crust.',
        price: '$40.00',
        image: 'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 3,
        name: 'Red Velvet Delight',
        description: 'Classic red velvet with smooth cream cheese frosting.',
        price: '$48.00',
        image: 'https://images.unsplash.com/photo-1586788680434-30d32443d516?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
];

const Products = () => {
    return (
        <section id="products" className="section bg-off-white">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="section-title">Our Signature Cakes</h2>
                    <p className="section-subtitle">Baked fresh, safely gluten-free.</p>
                </div>

                <div className="products-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <div className="product-footer">
                                    <span className="price">{product.price}</span>
                                    <button className="btn btn-primary btn-sm">Order</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;

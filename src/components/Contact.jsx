import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section bg-off-white">
            <div className="container text-center max-w-600">
                <h2 className="section-title">Get in Touch</h2>
                <div className="contact-content">
                    <p className="mb-4 text-lg">
                        Interested in our cakes or have a question? We'd love to hear from you!
                    </p>
                    <p className="email-link-container">
                        Please email us at:<br />
                        <a href="mailto:barbsfreefromcakes@gmail.com" className="email-link">
                            barbsfreefromcakes@gmail.com
                        </a>
                    </p>
                    <p className="mt-4">
                        for more information.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;

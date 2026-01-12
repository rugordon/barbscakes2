import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Placeholder email - USER PLEASE UPDATE THIS
        const emailTo = 'barb@example.com';
        const subject = `New Inquiry from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

        window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;

        alert('Opening your email client to send the message...');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="section bg-off-white">
            <div className="container text-center max-w-600">
                <h2 className="section-title">Get in Touch</h2>
                <p className="mb-4">Want to order a custom cake or have a question? Drop us a line.</p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            className="form-control"
                            rows="5"
                            placeholder="How can we help you?"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

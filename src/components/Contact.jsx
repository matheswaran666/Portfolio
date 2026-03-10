import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const contactInfo = [
    { icon: <HiMail size={22} />, label: 'Email', value: 'matheswaran.m@zohocorp.com', href: 'mailto:matheswaran.m@zohocorp.com' },
    { icon: <HiLocationMarker size={22} />, label: 'Location', value: 'Tenkasi', href: null },
];

const socials = [
    { icon: <FaGithub size={20} />, href: 'https://github.com/matheswaran666', label: 'GitHub' },
];

export default function Contact() {
    const [ref, isInView] = useInView(0.15);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const data = new FormData(e.target);
        data.append('access_key', import.meta.env.VITE_WEB3_ACCESS_KEY);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: data,
            });
            const result = await response.json();

            if (result.success) {
                setStatus('sent');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }

        setTimeout(() => setStatus(''), 4000);
    };

    return (
        <section id="contact" className="section contact" ref={ref}>
            <div className="bg-glow bg-glow-purple" style={{ width: 400, height: 400, top: '10%', left: '10%' }} />
            <div className="bg-glow bg-glow-cyan" style={{ width: 350, height: 350, bottom: '15%', right: '5%' }} />

            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Let&apos;s Connect
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Have a project in mind or just want to chat? I&apos;d love to hear from you!
                </motion.p>

                <div className="contact__grid">
                    {/* Contact info side */}
                    <motion.div
                        className="contact__info"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h3>Let&apos;s talk</h3>
                        <p>
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities
                            to be part of your vision.
                        </p>

                        <div className="contact__details">
                            {contactInfo.map((item) => (
                                <div key={item.label} className="contact__detail">
                                    <div className="contact__detail-icon">{item.icon}</div>
                                    <div>
                                        <span className="contact__detail-label">{item.label}</span>
                                        {item.href ? (
                                            <a href={item.href} className="contact__detail-value">{item.value}</a>
                                        ) : (
                                            <span className="contact__detail-value">{item.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="contact__socials">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact__social"
                                    aria-label={s.label}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form side */}
                    <motion.form
                        className="contact__form glass-card"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <div className="contact__field">
                            <label htmlFor="contact-name">Your Name</label>
                            <input
                                type="text"
                                id="contact-name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="contact__field">
                            <label htmlFor="contact-email">Your Email</label>
                            <input
                                type="email"
                                id="contact-email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@email.com"
                                required
                            />
                        </div>
                        <div className="contact__field">
                            <label htmlFor="contact-message">Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                rows="5"
                                required
                                style={{ resize: 'none' }}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-primary contact__submit" disabled={status === 'sending'}>
                            <span>
                                {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Sent!' : status === 'error' ? 'Error, try again' : 'Send Message'}
                            </span>
                            <HiMail size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

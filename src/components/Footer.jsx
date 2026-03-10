import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <a href="#home" className="footer__logo" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                            <span className="gradient-text">&lt;</span>
                            <span style={{ display: 'flex' }}>
                                <motion.span
                                    initial={{ height: 0 }}
                                    whileInView={{ height: 'auto' }}
                                    viewport={{ once: false, amount: 0.1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    style={{ display: 'inline-block', color: 'var(--accent-primary)', overflow: 'hidden' }}
                                >
                                    <span style={{ display: 'block' }}>Matheswaran</span>
                                </motion.span>
                            </span>
                            <span className="gradient-text">/&gt;</span>
                        </a>
                        <p className="footer__tagline">
                            Building the web, one pixel at a time.
                        </p>
                    </div>

                    <div className="footer__links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer__socials">
                        <a href="https://github.com/matheswaran666" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub size={18} />
                        </a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>
                        © {year} Matheswaran
                    </p>
                </div>
            </div>
        </footer>
    );
}

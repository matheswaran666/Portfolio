import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Track which section is currently in view
    // Retries until real sections exist (they're absent during skeleton loading)
    useEffect(() => {
        const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
        let observers = [];

        const setup = () => {
            // Clean up any previous observers
            observers.forEach((obs) => obs.disconnect());
            observers = [];

            const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
            if (elements.length === 0) return false; // sections not yet in DOM

            elements.forEach((el) => {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setActiveSection(el.id);
                        }
                    },
                    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
                );
                observer.observe(el);
                observers.push(observer);
            });
            return true;
        };

        // Try immediately, then poll every 500ms until sections appear
        if (!setup()) {
            const interval = setInterval(() => {
                if (setup()) clearInterval(interval);
            }, 500);
            return () => {
                clearInterval(interval);
                observers.forEach((obs) => obs.disconnect());
            };
        }

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="navbar__container container">
                <a href="#home" className="navbar__logo" onClick={(e) => handleClick(e, '#home')} style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <span className="gradient-text">&lt;</span>
                    <span style={{ display: 'flex' }}>
                        <motion.span
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{ display: 'inline-block', color: 'var(--accent-primary)', overflow: 'hidden' }}
                        >
                            <span style={{ display: 'block' }}>Matheswaran</span>
                        </motion.span>
                    </span>
                    <span className="gradient-text">/&gt;</span>
                </a>

                <ul className="navbar__links">
                    {navLinks.map((link) => (
                        <li key={link.name} style={{ position: 'relative' }}>
                            <a
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                className={activeSection === link.href.replace('#', '') ? 'navbar__link--active' : ''}
                            >
                                {link.name}
                            </a>
                            {activeSection === link.href.replace('#', '') && (
                                <motion.div
                                    layoutId="navbar-active-pill"
                                    className="navbar__active-indicator"
                                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                />
                            )}
                        </li>
                    ))}
                </ul>

                <button
                    className="navbar__toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="navbar__mobile"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                className={activeSection === link.href.replace('#', '') ? 'navbar__mobile-link--active' : ''}
                                initial={{ x: -30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.08 }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

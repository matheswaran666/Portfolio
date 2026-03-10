import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown, HiMail } from 'react-icons/hi';
import { FaGithub, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const roles = ['AI/ML Enthusiast', 'Aspiring Full Stack Developer', 'Data Science Lover', 'Problem Solver'];

function useTypingEffect(texts, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentText.length) {
                    setDisplayText(currentText.slice(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                if (charIndex > 0) {
                    setDisplayText(currentText.slice(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setTextIndex((textIndex + 1) % texts.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

    return displayText;
}

export default function Hero() {
    const typedRole = useTypingEffect(roles);

    return (
        <section id="home" className="hero">
            {/* Background glows */}
            <div className="bg-glow bg-glow-cyan" style={{ width: 400, height: 400, top: '10%', left: '5%' }} />
            <div className="bg-glow bg-glow-purple" style={{ width: 500, height: 500, top: '20%', right: '10%' }} />
            <div className="bg-glow bg-glow-pink" style={{ width: 300, height: 300, bottom: '10%', left: '40%' }} />

            {/* Floating decors */}
            <motion.div
                className="hero__shape hero__shape--1"
                animate={{ y: [0, -20, 0], rotate: [45, 60, 45] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="hero__shape hero__shape--2"
                animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="hero__shape hero__shape--3"
                animate={{ y: [0, -40, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="hero__content container">
                <motion.div
                    className="hero__text"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.p
                        className="hero__greeting"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hello, I&apos;m
                    </motion.p>

                    <motion.h1
                        className="hero__name"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Mathes<span className="gradient-text">waran</span>
                    </motion.h1>

                    <motion.div
                        className="hero__role-wrapper"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <span className="hero__role">
                            {typedRole}
                            <span className="hero__cursor">|</span>
                        </span>
                    </motion.div>

                    <motion.p
                        className="hero__description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        I build intelligent solutions powered by AI and machine learning.
                        Passionate about data science, deep learning, and my ultimate goal is to become an AI Engineer.
                    </motion.p>

                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                    >
                        <a href="#contact" className="btn-primary" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            <span>Get In Touch</span>
                            <HiMail size={18} />
                        </a>
                        <a href="#projects" className="btn-outline" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            <span>View Projects</span>
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero__socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <a href="https://github.com/matheswaran666" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub size={22} />
                        </a>
                        <a href="https://leetcode.com/u/matheswaranyadav/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                            <SiLeetcode size={22} />
                        </a>
                        <a href="https://www.codewars.com/users/matheswaran" target="_blank" rel="noopener noreferrer" aria-label="CodeWars">
                            <FaCode size={22} />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero__visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <div className="hero__avatar">
                        <div className="hero__avatar-ring" />
                        <img src="/images/avatar.png" alt="Matheswaran" className="hero__avatar-img" />
                    </div>
                </motion.div>
            </div>

            <motion.a
                href="#about"
                className="hero__scroll-cta"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <HiArrowDown size={20} />
            </motion.a>
        </section >
    );
}

import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { FaCode, FaServer, FaPalette } from 'react-icons/fa';
import { HiLightningBolt, HiGlobe, HiHeart } from 'react-icons/hi';

const highlights = [
    { icon: <HiLightningBolt size={24} />, title: 'Passionate', desc: 'Developer' },
    { icon: <HiGlobe size={24} />, title: 'AI / ML', desc: 'Enthusiast' },
];

export default function About() {
    const [ref, isInView] = useInView(0.2);

    return (
        <section id="about" className="section about" ref={ref}>
            <div className="bg-glow bg-glow-cyan" style={{ width: 400, height: 400, top: '-10%', right: '-5%' }} />
            <div className="bg-glow bg-glow-purple" style={{ width: 300, height: 300, bottom: '-5%', left: '-10%' }} />

            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    A glimpse into who I am and what drives me
                </motion.p>

                <div className="about__grid">
                    <motion.div
                        className="about__bio glass-card"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="about__bio-badge">
                            <HiHeart className="about__bio-icon" />
                        </div>
                        <h3>Who I Am</h3>
                        <p>
                            I&apos;m passionate about diving deep into AI/ML
                            and exploring full-stack development. I have a strong drive to learn
                            machine learning, data science, and web technologies — turning theoretical concepts
                            into practical, hands-on projects.
                        </p>
                        <p>
                            Beyond my training models, I enjoy sharpening my problem-solving
                            skills on LeetCode and CodeWars, keeping up with cutting-edge AI research,
                            and building applications to accelerate my learning journey.
                        </p>
                        <div className="about__tags">
                            {['AI/ML', 'Python', 'Java', 'React', 'Node.js', 'JavaScript', 'MySQL', 'Git', 'HTML/CSS'].map((tag) => (
                                <span key={tag} className="about__tag">{tag}</span>
                            ))}
                        </div>
                    </motion.div>

                    <div className="about__highlights">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.title}
                                className="about__highlight glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                            >
                                <div className="about__highlight-icon">{item.icon}</div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

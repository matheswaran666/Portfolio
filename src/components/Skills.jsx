import { motion } from 'framer-motion';
import { useInView } from './useInView';
import {
    FaHtml5, FaCss3Alt, FaJava, FaNodeJs, FaPython, FaRobot, FaGitAlt, FaReact
} from 'react-icons/fa';
import { SiJavascript, SiMysql } from 'react-icons/si';

const skills = [
    { name: 'AI / ML', icon: <FaRobot />, color: '#ff6f61' },
    { name: 'Python', icon: <FaPython />, color: '#3776ab' },
    { name: 'Java', icon: <FaJava />, color: '#ed8b00' },
    { name: 'React', icon: <FaReact />, color: '#61dafb' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#68a063' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
    { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
    { name: 'HTML', icon: <FaHtml5 />, color: '#e34f26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572b6' },
];

const tools = [
    // Coding Assistants & Agents
    { name: 'Antigravity', icon: '/icons/antigravity.svg', color: '#3186ff' },
    { name: 'Copilot', icon: '/icons/copilot.svg', color: '#ffffff' },
    { name: 'Codex', icon: '/icons/codex.png', color: '#00a67e' },

    // General Purpose LLMs
    { name: 'ChatGPT', icon: '/icons/chatgpt.png', color: '#10a37f' },
    { name: 'Claude', icon: '/icons/claude.svg', color: '#d97706' },
    { name: 'Gemini', icon: '/icons/gemini.svg', color: '#4285f4' },
    { name: 'Qwen', icon: '/icons/qwen.svg', color: '#6366f1' },

    // AI Search
    { name: 'Perplexity', icon: '/icons/perplexity.svg', color: '#22b8cf' },
];

export default function Skills() {
    const [ref, isInView] = useInView(0.1);

    return (
        <section id="skills" className="section skills" ref={ref}>
            <div className="bg-glow bg-glow-accent" style={{ width: 400, height: 400, top: '20%', right: '5%' }} />
            <div className="bg-glow bg-glow-secondary" style={{ width: 350, height: 350, bottom: '10%', left: '10%' }} />

            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Skills & Technologies
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Technologies I work with to bring ideas to life
                </motion.p>

                <div className="skills__grid">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            className="skills__card glass-card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                            whileHover={{ scale: 1.08, y: -6 }}
                            style={{ '--skill-color': skill.color }}
                        >
                            <div className="skills__icon">{skill.icon}</div>
                            <span className="skills__name">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.h3
                    className="skills__category-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    AI Tools I Use
                </motion.h3>

                <div className="skills__grid skills__grid--tools">
                    {tools.map((tool, i) => (
                        <motion.div
                            key={tool.name}
                            className="skills__card glass-card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.9 + i * 0.08 }}
                            whileHover={{ scale: 1.08, y: -6 }}
                            style={{ '--skill-color': tool.color }}
                        >
                            <div className="skills__icon">
                                <img src={tool.icon} alt={tool.name} className="skills__tool-svg" />
                            </div>
                            <span className="skills__name">{tool.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

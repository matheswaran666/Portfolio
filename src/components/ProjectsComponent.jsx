import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from './useInView';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: 'RAG AI Bot',
        description: 'An intelligent AI-powered chatbot built with Retrieval-Augmented Generation (RAG) for context-aware responses using document-based knowledge.',
        tags: ['Python', 'AI/ML', 'RAG', 'NLP'],
        category: 'AI/ML',
        best: true,
        github: 'https://github.com/matheswaran666/RAG_AI_BOT',
        link: 'https://rag-ai-bot-elpx.onrender.com/docs',
        image: '/images/rag_ai_bot.png',
    },
    {
        title: 'Linear Regression Model',
        description: 'A machine learning project implementing linear regression for predictive analysis.',
        tags: ['Java', 'Machine Learning', 'Data Science'],
        category: 'AI/ML',
        best: true,
        github: 'https://github.com/matheswaran666/Linear-regression-model',
        image: '/images/linear_regression.png',
    },
    {
        title: 'URL Shortener',
        description: 'A full-stack URL shortening service with custom short links, click tracking, and a clean user interface built with Node.js and EJS templating.',
        tags: ['Node.js', 'EJS', 'Express', 'JavaScript', 'MySQL'],
        category: 'Web Dev',
        best: true,
        github: 'https://github.com/matheswaran666/URL_Shortner',
        image: '/images/url_shortener.png',
    },
    {
        title: 'ToDo App',
        description: 'A feature-rich task management application built with Java, offering intuitive task creation, editing, and organization capabilities.',
        tags: ['Java', 'OOP', 'Data Structures'],
        category: 'Java/Apps',
        best: true,
        github: 'https://github.com/matheswaran666/ToDo-App',
        image: '/images/todo_app.png',
    },
    {
        title: 'TreeSet Implementation',
        description: 'A Java implementation of the TreeSet data structure demonstrating sorted set operations, balanced tree algorithms, and efficient lookups.',
        tags: ['Java', 'Data Structures', 'Algorithms'],
        category: 'Java/Apps',
        best: true,
        github: 'https://github.com/matheswaran666/TreeSet',
        image: '/images/treeset.png',
    },
    {
        title: 'HTML CSS Project',
        description: 'A responsive web project showcasing modern HTML5 and CSS3 techniques with clean layouts, animations, and best practices in web design.',
        tags: ['HTML', 'CSS', 'Responsive Design'],
        category: 'Web Dev',
        best: true,
        github: 'https://github.com/matheswaran666/HTML-CSS-Project',
        link: 'https://matheswaran666.github.io/HTML-CSS-Project/',
        image: '/images/html_css_project.png',
    },
    {
        title: 'Bank Simulation',
        description: 'An interactive web-based banking simulation application allowing users to experience and perform virtual banking operations and transactions.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        category: 'Web Dev',
        github: 'https://github.com/matheswaran666/bank_simulation',
        link: 'https://matheswaran666.github.io/bank_simulation/',
        image: '/images/bank_simulation.png',
    },
    {
        title: 'Weather App',
        description: 'A responsive weather application providing live weather updates, forecasts, and atmospheric conditions built with HTML, CSS, and JavaScript.',
        tags: ['JavaScript', 'API', 'HTML/CSS'],
        category: 'Web Dev',
        github: 'https://github.com/matheswaran666/weather-app',
        link: 'https://matheswaran666.github.io/weather-app/',
        image: '/images/weather_app.png',
    },
    {
        title: 'Planets Explorer',
        description: 'An interactive web application exploring planetary data. Built as a server-side rendered application using Node.js and EJS.',
        tags: ['Node.js', 'EJS', 'JavaScript', 'HTML/CSS'],
        category: 'Web Dev',
        github: 'https://github.com/matheswaran666/Planets',
        link: 'https://planets-smj7.onrender.com',
        image: '/images/planets.png',
    },
    {
        title: 'Flight Tracker',
        description: 'A real-time flight tracking application providing live aviation data, flight paths, and status updates using global aviation APIs.',
        tags: ['JavaScript', 'API', 'HTML/CSS'],
        category: 'Web Dev',
        github: 'https://github.com/matheswaran666/Flight-Tracker',
        link: 'https://matheswaran666.github.io/Flight-Tracker/',
        image: '/images/flight_tracker.png',
    },
];

const categories = ['All', 'AI/ML', 'Java/Apps', 'Web Dev'];
const INITIAL_PROJECTS_COUNT = 6;

export default function ProjectsComponent() {
    const [ref, isInView] = useInView(0.05);
    const [filter, setFilter] = useState('All');
    const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECTS_COUNT);

    const filteredProjects = projects.filter(project => {
        if (filter === 'All') return true;
        return project.category === filter;
    });

    const displayedProjects = filteredProjects.slice(0, visibleCount);
    const hasMore = visibleCount < filteredProjects.length;

    const handleFilterChange = (category) => {
        setFilter(category);
        setVisibleCount(INITIAL_PROJECTS_COUNT); // Reset count when filter changes
    };

    const toggleShowMore = () => {
        if (hasMore) {
            setVisibleCount(prev => prev + 3); // Load 3 more at a time
        } else {
            setVisibleCount(INITIAL_PROJECTS_COUNT); // Reset back to initial
            // Optional: Scroll back to top of projects section smoothly
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="projects" className="section projects" ref={ref}>
            <div className="bg-glow bg-glow-pink" style={{ width: 400, height: 400, top: '15%', left: '5%' }} />
            <div className="bg-glow bg-glow-cyan" style={{ width: 350, height: 350, bottom: '20%', right: '10%' }} />

            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Projects
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Some of my recent work that I&apos;m proud of
                </motion.p>

                {/* Creative Filter Tabs */}
                <motion.div
                    className="projects__filter-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleFilterChange(category)}
                            className={`projects__filter-btn ${filter === category ? 'active' : ''}`}
                        >
                            {category}
                            {filter === category && (
                                <motion.div
                                    layoutId="active-filter-bg"
                                    className="projects__filter-highlight"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </motion.div>

                <motion.div layout className="projects__grid">
                    <AnimatePresence mode='popLayout'>
                        {displayedProjects.map((project, i) => (
                            <motion.div
                                layout
                                key={project.title}
                                className="projects__card glass-card"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="projects__card-header">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="projects__card-img"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://placehold.co/600x400/1e1e2f/06b6d4?text=' + encodeURIComponent(project.title);
                                        }}
                                    />
                                    <div className="projects__card-overlay">
                                        <div className="projects__card-links">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View source">
                                                    <FaGithub size={20} />
                                                </a>
                                            )}
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                                    <FaExternalLinkAlt size={18} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="projects__card-body">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="projects__tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="projects__tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length > INITIAL_PROJECTS_COUNT && (
                    <motion.div
                        className="projects__load-more"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}
                    >
                        <button onClick={toggleShowMore} className="btn-primary">
                            <span>{hasMore ? 'Load More' : 'Show Less'}</span>
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

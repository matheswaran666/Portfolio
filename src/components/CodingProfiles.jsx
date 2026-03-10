import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { SiLeetcode, SiCodewars } from 'react-icons/si';

export default function CodingProfiles() {
    const [ref, isInView] = useInView(0.1);
    const [leetcodeData, setLeetcodeData] = useState(null);
    const [codewarsData, setCodewarsData] = useState(null);
    const [loadingLeetcode, setLoadingLeetcode] = useState(true);
    const [loadingCodewars, setLoadingCodewars] = useState(true);

    useEffect(() => {
        const fetchCodewars = async () => {
            try {
                const res = await fetch('https://www.codewars.com/api/v1/users/matheswaran');
                if (res.ok) {
                    const data = await res.json();
                    setCodewarsData(data);
                }
            } catch (error) {
                console.error('Error fetching CodeWars profile:', error);
            } finally {
                setLoadingCodewars(false);
            }
        };

        const fetchLeetcode = async () => {
            try {
                // Fetch using a reliable API endpoint
                const res = await fetch('https://leetcode-api-faisalshohag.vercel.app/matheswaranyadav');
                if (res.ok) {
                    const data = await res.json();
                    if (!data.errors) {
                        setLeetcodeData(data);
                        setLoadingLeetcode(false);
                    }
                }
            } catch (error) {
                console.error('Error fetching LeetCode profile:', error);
            } finally {
                setLoadingLeetcode(false);
            }
        };

        fetchCodewars();
        fetchLeetcode();
    }, []);

    return (
        <section id="coding-profiles" className="section coding-profiles" ref={ref}>
            <div className="bg-glow bg-glow-cyan" style={{ width: 350, height: 350, top: '20%', left: '10%' }} />
            <div className="bg-glow bg-glow-purple" style={{ width: 400, height: 400, bottom: '10%', right: '5%' }} />

            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Competitive Programming
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    My problem-solving journey across different platforms
                </motion.p>

                <div className="coding-profiles__grid">
                    {/* LeetCode Card */}
                    <motion.div
                        className="coding-profiles__card glass-card"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="coding-profiles__header">
                            <SiLeetcode className="coding-profiles__icon leetcode-icon" size={40} />
                            <h3>LeetCode</h3>
                        </div>

                        {loadingLeetcode ? (
                            <div className="coding-profiles__skeleton">
                                <div className="skeleton-line" style={{ width: '50%' }}></div>
                                <div className="skeleton-line"></div>
                                <div className="skeleton-line"></div>
                            </div>
                        ) : leetcodeData && !leetcodeData.errors ? (
                            <div className="coding-profiles__stats">
                                <div className="stat-row">
                                    <span className="stat-label">Total Solved</span>
                                    <span className="stat-value highlight">{leetcodeData.totalSolved}</span>
                                </div>
                                <div className="stat-row">
                                    <span className="stat-label">Easy</span>
                                    <span className="stat-value text-easy">{leetcodeData.easySolved}</span>
                                </div>
                                <div className="stat-row">
                                    <span className="stat-label">Medium</span>
                                    <span className="stat-value text-medium">{leetcodeData.mediumSolved}</span>
                                </div>
                                <div className="stat-row">
                                    <span className="stat-label">Hard</span>
                                    <span className="stat-value text-hard">{leetcodeData.hardSolved}</span>
                                </div>
                                <div className="stat-row">
                                    <span className="stat-label">Global Rank</span>
                                    <span className="stat-value">{leetcodeData.ranking?.toLocaleString() || 'N/A'}</span>
                                </div>
                            </div>
                        ) : (
                            <div className="coding-profiles__error">
                                <p>Could not load LeetCode data.</p>
                            </div>
                        )}
                        <a href="https://leetcode.com/u/matheswaranyadav/" target="_blank" rel="noopener noreferrer" className="coding-profiles__link">View Profile</a>
                    </motion.div>

                    {/* CodeWars Card */}
                    <motion.div
                        className="coding-profiles__card glass-card"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="coding-profiles__header">
                            <SiCodewars className="coding-profiles__icon codewars-icon" size={40} />
                            <h3>CodeWars</h3>
                        </div>

                        {loadingCodewars ? (
                            <div className="coding-profiles__skeleton">
                                <div className="skeleton-line" style={{ width: '60%' }}></div>
                                <div className="skeleton-line"></div>
                                <div className="skeleton-line"></div>
                            </div>
                        ) : codewarsData ? (
                            <div className="coding-profiles__stats">
                                <div className="stat-row">
                                    <span className="stat-label">Overall Rank</span>
                                    <span className="stat-value highlight">{codewarsData.ranks?.overall?.name || 'N/A'}</span>
                                </div>
                                <div className="stat-row">
                                    <span className="stat-label">Honor</span>
                                    <span className="stat-value">{codewarsData.honor?.toLocaleString() || '0'}</span>
                                </div>
                                <div className="stat-row">
                                    <span className="stat-label">Leaderboard Pos</span>
                                    <span className="stat-value">#{codewarsData.leaderboardPosition?.toLocaleString() || 'N/A'}</span>
                                </div>
                                <div className="stat-row">
                                    <span className="stat-label">Total Completed</span>
                                    <span className="stat-value">{codewarsData.codeChallenges?.totalCompleted || '0'}</span>
                                </div>
                                <div className="stat-row">
                                    <span className="stat-label">Top Language</span>
                                    <span className="stat-value" style={{ textTransform: 'capitalize' }}>
                                        {codewarsData.ranks?.languages ? Object.keys(codewarsData.ranks.languages)[0] : 'N/A'}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="coding-profiles__error">
                                <p>Could not load CodeWars data.</p>
                            </div>
                        )}
                        <a href="https://www.codewars.com/users/matheswaran" target="_blank" rel="noopener noreferrer" className="coding-profiles__link">View Profile</a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

import { motion } from 'framer-motion';

function SkeletonBlock({ width = '100%', height = '20px', radius = '8px', style = {} }) {
    return (
        <div
            className="skeleton"
            style={{ width, height, borderRadius: radius, ...style }}
        />
    );
}

export default function SkeletonLoader() {
    return (
        <motion.div
            className="skeleton-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
            {/* Hero Skeleton */}
            <section className="skeleton-section skeleton-hero">
                <div className="skeleton-hero__content container">
                    <div className="skeleton-hero__text">
                        <SkeletonBlock width="140px" height="24px" />
                        <SkeletonBlock width="380px" height="64px" radius="12px" style={{ marginTop: '16px' }} />
                        <SkeletonBlock width="280px" height="32px" style={{ marginTop: '16px' }} />
                        <SkeletonBlock width="100%" height="18px" style={{ marginTop: '28px', maxWidth: '480px' }} />
                        <SkeletonBlock width="90%" height="18px" style={{ marginTop: '10px', maxWidth: '440px' }} />
                        <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
                            <SkeletonBlock width="160px" height="52px" radius="9999px" />
                            <SkeletonBlock width="160px" height="52px" radius="9999px" />
                        </div>
                        <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
                            {[1, 2, 3, 4].map((i) => (
                                <SkeletonBlock key={i} width="44px" height="44px" radius="50%" />
                            ))}
                        </div>
                    </div>
                    <div className="skeleton-hero__visual">
                        <SkeletonBlock width="300px" height="300px" radius="50%" />
                    </div>
                </div>
            </section>

            {/* About Skeleton */}
            <section className="skeleton-section">
                <div className="container">
                    <SkeletonBlock width="200px" height="36px" radius="12px" style={{ margin: '0 auto' }} />
                    <SkeletonBlock width="340px" height="18px" style={{ margin: '16px auto 48px' }} />
                    <div className="skeleton-about__grid">
                        <div className="skeleton-about__bio">
                            <SkeletonBlock width="48px" height="48px" radius="12px" />
                            <SkeletonBlock width="140px" height="28px" style={{ marginTop: '20px' }} />
                            <SkeletonBlock width="100%" height="16px" style={{ marginTop: '16px' }} />
                            <SkeletonBlock width="95%" height="16px" style={{ marginTop: '10px' }} />
                            <SkeletonBlock width="85%" height="16px" style={{ marginTop: '10px' }} />
                            <SkeletonBlock width="100%" height="16px" style={{ marginTop: '16px' }} />
                            <SkeletonBlock width="70%" height="16px" style={{ marginTop: '10px' }} />
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <SkeletonBlock key={i} width={`${60 + i * 10}px`} height="32px" radius="9999px" />
                                ))}
                            </div>
                        </div>
                        <div className="skeleton-about__highlights">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="skeleton-highlight-card">
                                    <SkeletonBlock width="52px" height="52px" radius="12px" />
                                    <div style={{ flex: 1 }}>
                                        <SkeletonBlock width="120px" height="20px" />
                                        <SkeletonBlock width="80px" height="14px" style={{ marginTop: '6px' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Skeleton */}
            <section className="skeleton-section">
                <div className="container">
                    <SkeletonBlock width="260px" height="36px" radius="12px" style={{ margin: '0 auto' }} />
                    <SkeletonBlock width="360px" height="18px" style={{ margin: '16px auto 48px' }} />
                    <div className="skeleton-skills__grid">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                            <div key={i} className="skeleton-skill-card">
                                <SkeletonBlock width="40px" height="40px" radius="8px" style={{ margin: '0 auto' }} />
                                <SkeletonBlock width="60px" height="14px" style={{ margin: '14px auto 0' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Skeleton */}
            <section className="skeleton-section">
                <div className="container">
                    <SkeletonBlock width="240px" height="36px" radius="12px" style={{ margin: '0 auto' }} />
                    <SkeletonBlock width="320px" height="18px" style={{ margin: '16px auto 48px' }} />
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <SkeletonBlock key={i} width={`${60 + i * 8}px`} height="36px" radius="9999px" />
                        ))}
                    </div>
                    <div className="skeleton-projects__grid">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="skeleton-project-card">
                                <SkeletonBlock width="100%" height="180px" radius="0" />
                                <div style={{ padding: '24px' }}>
                                    <SkeletonBlock width="70%" height="22px" />
                                    <SkeletonBlock width="100%" height="14px" style={{ marginTop: '12px' }} />
                                    <SkeletonBlock width="90%" height="14px" style={{ marginTop: '8px' }} />
                                    <div style={{ display: 'flex', gap: '6px', marginTop: '16px' }}>
                                        {[1, 2, 3].map((j) => (
                                            <SkeletonBlock key={j} width="60px" height="24px" radius="9999px" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Skeleton */}
            <section className="skeleton-section">
                <div className="container">
                    <SkeletonBlock width="200px" height="36px" radius="12px" style={{ margin: '0 auto' }} />
                    <SkeletonBlock width="400px" height="18px" style={{ margin: '16px auto 48px' }} />
                    <div className="skeleton-contact__grid">
                        <div>
                            <SkeletonBlock width="160px" height="28px" />
                            <SkeletonBlock width="100%" height="16px" style={{ marginTop: '16px', maxWidth: '300px' }} />
                            <SkeletonBlock width="90%" height="16px" style={{ marginTop: '8px', maxWidth: '280px' }} />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '32px' }}>
                                {[1, 2].map((i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <SkeletonBlock width="48px" height="48px" radius="12px" />
                                        <div>
                                            <SkeletonBlock width="50px" height="12px" />
                                            <SkeletonBlock width="160px" height="16px" style={{ marginTop: '4px' }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="skeleton-contact__form">
                            {[1, 2].map((i) => (
                                <div key={i} style={{ marginBottom: '20px' }}>
                                    <SkeletonBlock width="80px" height="14px" />
                                    <SkeletonBlock width="100%" height="48px" radius="12px" style={{ marginTop: '8px' }} />
                                </div>
                            ))}
                            <SkeletonBlock width="70px" height="14px" />
                            <SkeletonBlock width="100%" height="120px" radius="12px" style={{ marginTop: '8px' }} />
                            <SkeletonBlock width="100%" height="52px" radius="9999px" style={{ marginTop: '28px' }} />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

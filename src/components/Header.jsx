import React, { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLightTheme, setIsLightTheme] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const nextTheme = !isLightTheme;
        setIsLightTheme(nextTheme);
        if (nextTheme) {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a href="#" className="logo">
                    <div className="logo-icon">Q</div>
                    <div className="logo-text">
                        <span className="logo-main">QUANTEX</span>
                        <span className="logo-sub">Intelligence Solutions</span>
                    </div>
                </a>

                <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="#brand-intro" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Overview</a>
                    <a href="#solve-by-role" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Solutions</a>
                    <a href="#comparison" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Matrix</a>
                    <a href="#roi-calculator" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>ROI Calculator</a>
                    <a href="#prototype-logins" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Simulators</a>
                    <a href="#contact" className="btn btn-primary btn-sm" onClick={() => setIsMobileMenuOpen(false)}>Request Demo</a>
                    
                    {/* Theme Toggle Button */}
                    <button className="theme-btn" id="theme-toggle" onClick={toggleTheme} aria-label="Toggle Light/Dark Theme">
                        {isLightTheme ? (
                            <svg viewBox="0 0 24 24" className="theme-icon sun-icon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41zM7.05 18.01c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41z"/></svg>
                        ) : (
                            <svg viewBox="0 0 24 24" className="theme-icon moon-icon"><path d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.47 17.82 14.99 20 12 20c-4.41 0-8-3.59-8-8 0-2.99 2.18-5.47 5.37-6.49zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.1 0-.2-.01-.3-.99.64-2.17 1.02-3.43 1.02-3.81 0-6.9-3.09-6.9-6.9 0-1.26.38-2.44 1.02-3.43-.1-.01-.2-.01-.3-.01z"/></svg>
                        )}
                    </button>
                </nav>

                <button 
                    className={`mobile-nav-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Mobile Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}

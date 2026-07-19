import React, { useState, useRef } from 'react';

export default function Hero() {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const toggleSound = () => {
        if (videoRef.current) {
            const nextMuted = !isMuted;
            videoRef.current.muted = nextMuted;
            setIsMuted(nextMuted);
        }
    };

    return (
        <section id="overview" className="hero-section">
            {/* Video Background Container */}
            <div className="video-bg-container">
                <video 
                    id="hero-bg-video" 
                    ref={videoRef}
                    autoplay="autoplay"
                    loop 
                    muted 
                    playsinline
                >
                    <source src="bg_video.mp4" type="video/mp4" />
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-fog-covering-mountain-peaks-43288-large.mp4" type="video/mp4" />
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-clouds-moving-slowly-over-mountain-tops-42217-large.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>

            {/* Sound Toggle Button (Floating Bottom-Right) */}
            <button 
                id="sound-toggle-btn" 
                className="sound-toggle-btn" 
                onClick={toggleSound}
                aria-label="Toggle Sound"
            >
                <span className="sound-toggle-icon">{isMuted ? '🔇' : '🔊'}</span>
                <span className="sound-toggle-text">{isMuted ? 'Sound Off' : 'Sound On'}</span>
            </button>
        </section>
    );
}

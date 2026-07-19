import React from 'react';

export default function BrandIntro({ activeRole, setActiveRole }) {
    const roles = [
        { id: 'student', cx: 200, cy: 70, icon: '🎓', label: 'STUDENT' },
        { id: 'teacher', cx: 310, cy: 140, icon: '👩‍🏫', label: 'TEACHER' },
        { id: 'hod', cx: 280, cy: 290, icon: '📊', label: 'HOD' },
        { id: 'parent', cx: 120, cy: 290, icon: '👪', label: 'PARENT' },
        { id: 'admin', cx: 90, cy: 140, icon: '🏫', label: 'ADMIN' }
    ];

    return (
        <section id="brand-intro" class="brand-intro-section">
            <div class="container hero-container">
                <div class="hero-content">
                    <div class="badge-new">NEW: Quantex Academic Excellence Platform</div>
                    <h1 class="hero-title">Where Vision Meets <span class="gradient-text">Intelligence</span></h1>
                    <p class="hero-subtitle">
                        An AI-Powered Academic Excellence Platform that empowers Students, Teachers, HODs, Parents, Administrators, and Institution Chairmen with unified data-driven insights.
                    </p>
                    <div class="hero-actions">
                        <a href="#solve-by-role" class="btn btn-primary btn-lg">Launch Live Simulator</a>
                        <a href="#roi-calculator" class="btn btn-outline btn-lg">Calculate Impact ROI</a>
                    </div>
                    <div class="hero-stats">
                        <div class="stat-item">
                            <span class="stat-num">500+</span>
                            <span class="stat-lbl">Institutions</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-num">2.5L+</span>
                            <span class="stat-lbl">Students Active</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-num">92%</span>
                            <span class="stat-lbl">Success Rate (by 2027)</span>
                        </div>
                    </div>
                </div>

                <div class="hero-preview">
                    {/* AI Interactive Motion Hub Graphic */}
                    <div class="glass-container hero-glass-preview">
                        <div class="preview-header">
                            <div class="preview-dots">
                                <span></span><span></span><span></span>
                            </div>
                            <div class="preview-title">Quantex Academic Intelligence Platform - Unified Hub</div>
                        </div>
                        <div class="preview-body" style={{ padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg viewBox="0 0 400 400" className="ai-hub-svg">
                                <defs>
                                    <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
                                        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                                    </radialGradient>
                                </defs>
                                {/* Connections */}
                                <line x1="200" y1="200" x2="200" y2="70" className={`hub-line ${activeRole === 'student' ? 'active-line' : ''}`} style={{ strokeWidth: activeRole === 'student' ? '3px' : '2px' }} />
                                <line x1="200" y1="200" x2="310" y2="140" className={`hub-line ${activeRole === 'teacher' ? 'active-line' : ''}`} style={{ strokeWidth: activeRole === 'teacher' ? '3px' : '2px' }} />
                                <line x1="200" y1="200" x2="280" y2="290" className={`hub-line ${activeRole === 'hod' ? 'active-line' : ''}`} style={{ strokeWidth: activeRole === 'hod' ? '3px' : '2px' }} />
                                <line x1="200" y1="200" x2="120" y2="290" className={`hub-line ${activeRole === 'parent' ? 'active-line' : ''}`} style={{ strokeWidth: activeRole === 'parent' ? '3px' : '2px' }} />
                                <line x1="200" y1="200" x2="90" y2="140" className={`hub-line ${activeRole === 'admin' ? 'active-line' : ''}`} style={{ strokeWidth: activeRole === 'admin' ? '3px' : '2px' }} />

                                {/* Flowing data packets */}
                                <circle cx="200" cy="70" r="4" className="flow-dot flow-dot-1" />
                                <circle cx="310" cy="140" r="4" className="flow-dot flow-dot-2" />
                                <circle cx="280" cy="290" r="4" className="flow-dot flow-dot-3" />
                                <circle cx="120" cy="290" r="4" className="flow-dot flow-dot-4" />
                                <circle cx="90" cy="140" r="4" className="flow-dot flow-dot-5" />

                                {/* Ambient Core Glow */}
                                <circle cx="200" cy="200" r="80" fill="url(#core-glow)" className="hub-core-glow" />

                                {/* Outer Pulsing Rings */}
                                <circle cx="200" cy="200" r="55" className="hub-core-ring ring-1" />
                                <circle cx="200" cy="200" r="65" className="hub-core-ring ring-2" />

                                {/* Center Core Node */}
                                <circle cx="200" cy="200" r="45" className="hub-node hub-core" />
                                <text x="200" y="196" textAnchor="middle" className="hub-text core-title">QUANTEX</text>
                                <text x="200" y="210" textAnchor="middle" className="hub-text core-subtitle">AI CORE</text>

                                {/* Outer Stakeholder Nodes */}
                                {roles.map((role) => (
                                    <g 
                                        key={role.id}
                                        className={`outer-node-group cursor-pointer transition-all duration-300 ${activeRole === role.id ? 'active-node-glow scale-110' : ''}`} 
                                        onMouseEnter={() => setActiveRole(role.id)}
                                        onClick={() => setActiveRole(role.id)}
                                    >
                                        <circle cx={role.cx} cy={role.cy} r="26" className={`hub-node node-${role.id}`} />
                                        <text x={role.cx} y={role.cy + 6} textAnchor="middle" className="hub-icon-text">{role.icon}</text>
                                        <text x={role.cx} y={role.cy + 42} textAnchor="middle" className={`hub-label ${activeRole === role.id ? 'font-bold' : ''}`}>{role.label}</text>
                                    </g>
                                ))}
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

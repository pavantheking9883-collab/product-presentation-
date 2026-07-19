import React from 'react';

export default function Features() {
    return (
        <section id="key-features" className="features-section py-16 px-4 md:px-0 bg-slate-900/10">
            <div className="container mx-auto max-w-[1240px]">
                <div className="section-header text-center mb-12">
                    <span className="badge uppercase text-xs font-bold text-indigo-500 tracking-wider">Features</span>
                    <h2 className="section-title text-3xl font-extrabold text-white mt-1">Engineered for High-Stakes Academics</h2>
                    <p className="section-desc text-slate-400 mt-2 max-w-2xl mx-auto">Quantex is more than just administration. It is a secure intelligence layer that directly impacts student success and improves administrative throughput.</p>
                </div>

                <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="feature-card glass-container p-6 rounded-2xl border border-white/5 bg-slate-950/20 text-left transition hover:-translate-y-1 hover:shadow-lg">
                        <div className="feature-icon-wrapper purple mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20">
                            <svg className="feature-icon-illustration w-8 h-8 text-purple-500 overflow-visible" viewBox="0 0 60 60">
                                <circle cx="30" cy="30" r="14" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5"/>
                                <line x1="30" y1="4" x2="30" y2="56" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1"/>
                                <line x1="4" y1="30" x2="56" y2="30" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1"/>
                                <circle cx="40" cy="20" r="6" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
                                <circle cx="40" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" className="svg-pulse-ring"/>
                                <circle cx="20" cy="38" r="4" fill="currentColor" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">AI Weak Topic Detection</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">Our algorithms track mock tests and quizzes to isolate which concepts require focus, reducing student revision panic.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="feature-card glass-container p-6 rounded-2xl border border-white/5 bg-slate-950/20 text-left transition hover:-translate-y-1 hover:shadow-lg">
                        <div className="feature-icon-wrapper orange mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20">
                            <svg className="feature-icon-illustration w-8 h-8 text-orange-500 overflow-visible" viewBox="0 0 60 60">
                                <path d="M 12 18 L 12 12 L 18 12" fill="none" stroke="currentColor" strokeWidth="2" />
                                <path d="M 42 12 L 48 12 L 48 18" fill="none" stroke="currentColor" strokeWidth="2" />
                                <path d="M 48 42 L 48 48 L 42 48" fill="none" stroke="currentColor" strokeWidth="2" />
                                <path d="M 18 48 L 12 48 L 12 42" fill="none" stroke="currentColor" strokeWidth="2" />
                                <circle cx="30" cy="24" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3"/>
                                <path d="M 18 42 C 18 32, 42 32, 42 42" fill="none" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3"/>
                                <line x1="10" y1="28" x2="50" y2="28" stroke="currentColor" strokeWidth="2" className="svg-laser-line" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Face Recognition Attendance</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">A star feature for teachers. Mark classroom and hostel attendance instantly with high accuracy, saving hours of manual logging.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="feature-card glass-container p-6 rounded-2xl border border-white/5 bg-slate-950/20 text-left transition hover:-translate-y-1 hover:shadow-lg">
                        <div className="feature-icon-wrapper blue mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20">
                            <svg className="feature-icon-illustration w-8 h-8 text-sky-500 overflow-visible" viewBox="0 0 60 60">
                                <rect x="12" y="16" width="30" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                                <rect x="20" y="10" width="30" height="34" rx="4" fill="var(--bg-dark)" stroke="currentColor" strokeWidth="2" className="svg-doc-card" />
                                <line x1="26" y1="18" x2="36" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <line x1="26" y1="26" x2="44" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="38" cy="36" r="5" fill="var(--emerald)" />
                                <path d="M 36 36 L 37.5 37.5 L 40 34.5" fill="none" stroke="#fff" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Personalized Practice Sheets</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">Automatically triggers customized diagnostic sets mapped specifically to individual students' conceptual flaws.</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="feature-card glass-container p-6 rounded-2xl border border-white/5 bg-slate-950/20 text-left transition hover:-translate-y-1 hover:shadow-lg">
                        <div className="feature-icon-wrapper emerald mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                            <svg className="feature-icon-illustration w-8 h-8 text-emerald-500 overflow-visible" viewBox="0 0 60 60">
                                <line x1="10" y1="48" x2="50" y2="48" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"/>
                                <line x1="12" y1="10" x2="12" y2="50" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"/>
                                <rect x="18" y="32" width="6" height="16" fill="var(--emerald-glow)" stroke="currentColor" strokeWidth="1.5" rx="1"/>
                                <rect x="28" y="24" width="6" height="24" fill="var(--emerald-glow)" stroke="currentColor" strokeWidth="1.5" rx="1"/>
                                <rect x="38" y="14" width="6" height="34" fill="var(--emerald-glow)" stroke="currentColor" strokeWidth="1.5" rx="1"/>
                                <path d="M 12 40 L 21 34 L 31 22 L 41 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                <circle cx="41" cy="12" r="3" fill="currentColor" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Institutional Benchmarking</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">Allows HODs and Principals to view multi-section performance distributions, tracking student outcomes in real time.</p>
                    </div>

                    {/* Feature 5 */}
                    <div className="feature-card glass-container p-6 rounded-2xl border border-white/5 bg-slate-950/20 text-left transition hover:-translate-y-1 hover:shadow-lg">
                        <div className="feature-icon-wrapper yellow mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                            <svg className="feature-icon-illustration w-8 h-8 text-yellow-500 overflow-visible" viewBox="0 0 60 60">
                                <rect x="8" y="24" width="12" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>
                                <circle cx="30" cy="30" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
                                <rect x="42" y="14" width="12" height="12" rx="3" fill="none" stroke="var(--emerald)" stroke-width="2"/>
                                <rect x="42" y="34" width="12" height="12" rx="3" fill="none" stroke="var(--red)" stroke-width="2"/>
                                <path d="M 20 30 L 24 30" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M 36 30 L 42 20" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M 36 30 L 42 40" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="20" cy="30" r="2" fill="currentColor" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Smart Complaint Pipeline</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">Students and parents log facility or academic complaints, which are automatically prioritized and tracked till resolution.</p>
                    </div>

                    {/* Feature 6 */}
                    <div className="feature-card glass-container p-6 rounded-2xl border border-white/5 bg-slate-950/20 text-left transition hover:-translate-y-1 hover:shadow-lg">
                        <div className="feature-icon-wrapper red mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20">
                            <svg className="feature-icon-illustration w-8 h-8 text-red-500 overflow-visible" viewBox="0 0 60 60">
                                <rect x="18" y="8" width="24" height="44" rx="6" fill="none" stroke="currentColor" stroke-width="2"/>
                                <line x1="26" y1="12" x2="34" y2="12" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round"/>
                                <rect x="22" y="18" width="16" height="8" rx="2" fill="var(--red-glow)" stroke="currentColor" strokeWidth="1"/>
                                <rect x="22" y="29" width="16" height="8" rx="2" fill="var(--red-glow)" stroke="currentColor" strokeWidth="1"/>
                                <line x1="25" y1="22" x2="31" y2="22" stroke="currentColor" strokeWidth="1.5" />
                                <line x1="25" y1="33" x2="31" y2="33" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Real-time Parent Feeds</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">Closes the communication gap with instant notifications regarding exam marks, remarks, and daily campus activity.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

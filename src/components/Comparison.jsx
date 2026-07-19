import React from 'react';

export default function Comparison() {
    return (
        <section id="comparison" className="comparison-section py-16 px-4 md:px-0">
            <div className="container mx-auto max-w-[1240px]">
                <div className="section-header text-center mb-10">
                    <h2 className="section-title text-3xl font-extrabold text-white">The Paradigm Shift in <span className="gradient-text">Academic Success</span></h2>
                    <p className="section-desc text-slate-400 mt-2">See how Quantex Academic Intelligence Platform stacks up against traditional institutional methods.</p>
                </div>

                <div className="comparison-table-wrapper glass-container overflow-x-auto rounded-2xl border border-white/5 bg-slate-950/20 shadow-xl">
                    <table className="comparison-table w-full border-collapse text-left text-xs md:text-sm">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="p-4 md:p-6 font-bold text-white uppercase tracking-wider bg-slate-950/30">Feature Dimension</th>
                                <th className="p-4 md:p-6 font-bold text-slate-400 uppercase tracking-wider bg-slate-950/30">Traditional Approach</th>
                                <th className="p-4 md:p-6 font-bold text-indigo-400 uppercase tracking-wider bg-indigo-500/5 active-col border-l border-r border-indigo-500/20">Quantex Academic Intelligence Platform</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="p-4 md:p-6 font-semibold text-white">Performance Tracking</td>
                                <td className="p-4 md:p-6 text-slate-400">Manual entries, disjointed spreadsheets, static reports.</td>
                                <td className="p-4 md:p-6 text-slate-300 active-col bg-indigo-500/5 border-l border-r border-indigo-500/20">AI-powered tracking, weak topic identification, real-time feedback.</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="p-4 md:p-6 font-semibold text-white">Student Attendance</td>
                                <td className="p-4 md:p-6 text-slate-400">Paper registers, takes 5-10 mins per lecture. Buddy punching possible.</td>
                                <td className="p-4 md:p-6 text-slate-300 active-col bg-indigo-500/5 border-l border-r border-indigo-500/20">AI Face Recognition. Takes seconds, 100% secure & automatic.</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="p-4 md:p-6 font-semibold text-white">Revision and Exams</td>
                                <td className="p-4 md:p-6 text-slate-400">Generic study plans, same practice materials for everyone.</td>
                                <td className="p-4 md:p-6 text-slate-300 active-col bg-indigo-500/5 border-l border-r border-indigo-500/20">Adaptive mock test generators and personalized question banks.</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="p-4 md:p-6 font-semibold text-white">Parent Alignment</td>
                                <td className="p-4 md:p-6 text-slate-400">Isolated parent-teacher meetings, delayed updates on grades.</td>
                                <td className="p-4 md:p-6 text-slate-300 active-col bg-indigo-500/5 border-l border-r border-indigo-500/20">Dedicated Parent Dashboard with real-time progress feeds and alerts.</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="p-4 md:p-6 font-semibold text-white">Grievance Resolution</td>
                                <td className="p-4 md:p-6 text-slate-400">Written complaints often ignored, untracked progress.</td>
                                <td className="p-4 md:p-6 text-slate-300 active-col bg-indigo-500/5 border-l border-r border-indigo-500/20">Automated ticket sorting, escalation matrices, tracking.</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="p-4 md:p-6 font-semibold text-white">Management Insights</td>
                                <td className="p-4 md:p-6 text-slate-400">Decisions based on assumptions, post-mortem results evaluation.</td>
                                <td className="p-4 md:p-6 text-slate-300 active-col bg-indigo-500/5 border-l border-r border-indigo-500/20">Predictive rank indicators, inter-section analysis, faculty scoring.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

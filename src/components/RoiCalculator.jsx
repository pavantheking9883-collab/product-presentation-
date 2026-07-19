import React, { useState } from 'react';

export default function RoiCalculator() {
    const [students, setStudents] = useState(1200);
    const [teachers, setTeachers] = useState(60);
    const [tests, setTests] = useState(8);

    // Calculate outputs reactively
    const hoursSaved = Math.round((teachers * 8) + (students * 0.15));
    
    let performanceRate = "+25%";
    if (tests >= 5 && tests < 12) performanceRate = "+30%";
    else if (tests >= 12 && tests < 20) performanceRate = "+35%";
    else if (tests >= 20) performanceRate = "+42%";

    let efficiencyRed = "70%";
    if (teachers > 100 && teachers <= 250) efficiencyRed = "75%";
    else if (teachers > 250) efficiencyRed = "80%";

    return (
        <section id="roi-calculator" className="roi-section py-16 px-4 md:px-0 bg-slate-900/5 border-t border-b border-white/5">
            <div className="container mx-auto max-w-[1240px]">
                <div className="roi-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="roi-inputs-side text-left">
                        <h2 className="section-title text-3xl font-extrabold text-white">Calculate Your Institution's <span class="gradient-text">Quantex Impact</span></h2>
                        <p className="section-desc text-slate-400 mt-2">See the quantitative hours saved, administrative relief, and performance gains with the implementation of Academic Companion.</p>
                        
                        <div className="calculator-inputs mt-8 flex flex-col gap-6">
                            <div className="input-group flex flex-col gap-2.5">
                                <label htmlFor="range-students" className="text-sm font-semibold text-slate-300 flex justify-between">
                                    <span>Number of Enrolled Students:</span>
                                    <span className="text-indigo-400 font-bold">{students}</span>
                                </label>
                                <input 
                                    type="range" 
                                    id="range-students" 
                                    min="100" 
                                    max="10000" 
                                    step="50" 
                                    value={students}
                                    onChange={(e) => setStudents(parseInt(e.target.value))}
                                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                />
                            </div>
                            <div className="input-group flex flex-col gap-2.5">
                                <label htmlFor="range-teachers" className="text-sm font-semibold text-slate-300 flex justify-between">
                                    <span>Number of Faculty Members:</span>
                                    <span className="text-indigo-400 font-bold">{teachers}</span>
                                </label>
                                <input 
                                    type="range" 
                                    id="range-teachers" 
                                    min="10" 
                                    max="500" 
                                    step="5" 
                                    value={teachers}
                                    onChange={(e) => setTeachers(parseInt(e.target.value))}
                                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                />
                            </div>
                            <div className="input-group flex flex-col gap-2.5">
                                <label htmlFor="range-tests" className="text-sm font-semibold text-slate-300 flex justify-between">
                                    <span>Mock Tests Conducted / Month:</span>
                                    <span className="text-indigo-400 font-bold">{tests}</span>
                                </label>
                                <input 
                                    type="range" 
                                    id="range-tests" 
                                    min="1" 
                                    max="30" 
                                    step="1" 
                                    value={tests}
                                    onChange={(e) => setTests(parseInt(e.target.value))}
                                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="roi-results-side">
                        <div className="glass-container roi-result-card p-6 md:p-8 rounded-2xl border border-white/5 bg-slate-950/20 shadow-xl text-left">
                            <h3 className="text-lg font-bold text-white mb-6">Quantex Projection Summary</h3>
                            <div className="roi-metrics-grid grid grid-cols-2 gap-6">
                                <div className="roi-metric">
                                    <div className="roi-val text-2xl font-extrabold text-indigo-400 mb-1">{hoursSaved} hrs</div>
                                    <div className="roi-lbl text-xs text-slate-400 leading-normal">Faculty Admin Time Saved / Month</div>
                                </div>
                                <div className="roi-metric">
                                    <div className="roi-val text-2xl font-extrabold text-emerald-400 mb-1">{efficiencyRed}</div>
                                    <div className="roi-lbl text-xs text-slate-400 leading-normal">Reduction in Manual Analysis</div>
                                </div>
                                <div className="roi-metric">
                                    <div className="roi-val text-2xl font-extrabold text-orange-400 mb-1">{performanceRate}</div>
                                    <div className="roi-lbl text-xs text-slate-400 leading-normal">Faster Performance Growth</div>
                                </div>
                                <div className="roi-metric">
                                    <div className="roi-val text-2xl font-extrabold text-white mb-1">Instant</div>
                                    <div className="roi-lbl text-xs text-slate-400 leading-normal">Test Grading & AI Insights Delivery</div>
                                </div>
                            </div>
                            <div className="roi-disclaimer text-[10px] text-slate-500 italic mt-6 pt-4 border-t border-white/5">
                                *Projections based on historical success indicators from Quantex AI Adoption models.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

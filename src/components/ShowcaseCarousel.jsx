import React, { useState } from 'react';

export default function ShowcaseCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { id: 0, image: 'student_dashboard.jpg', label: 'Student', badge: 'STUDENT PORTAL', title: 'Student AI Companion', desc: 'Displays customized NEET/JEE mock analytics, percentile progression curves, and AI-mapped conceptual topic gaps.' },
        { id: 1, image: 'teacher_dashboard.jpg', label: 'Teacher', badge: 'TEACHER CONSOLE', title: 'Faculty Attendance & Grade Console', desc: 'Tracks instant face-recognition classroom attendance, pushes immediate alerts for missing students, and charts assignment score averages.' },
        { id: 2, image: 'hod_dashboard.jpg', label: 'HOD', badge: 'HOD COMMANDER', title: 'HOD Department Control Center', desc: 'Provides department heads with a unified birds-eye view of syllabus completion tracking, test averages across sections, and faculty status feeds.' },
        { id: 3, image: 'parent_dashboard.jpg', label: 'Parent', badge: 'PARENT HUB', title: 'EduFlow Parent Hub', desc: 'Closes the safety and academic communication gap, bringing parents real-time visibility into their ward\'s marks, attendance, and campus security logs.' },
        { id: 4, image: 'admin_dashboard.jpg', label: 'Admin', badge: 'SUPER ADMIN COMMAND', title: 'Central Administrative Terminal', desc: 'Gives administrators a high-level operational overview to track teacher attendance, campus safety logs, student enrollment growth, and grievance resolution pipelines.' },
        { id: 5, image: 'frs_dashboard.jpg', label: 'FRS Biometrics', badge: 'BIOMETRIC SCAN GATE', title: 'Face Recognition Attendance Portal', desc: 'Fast, secure classroom and hostel check-in portal designed for tablet/gate display terminals.' },
        { id: 6, image: 'chairman_dashboard.jpg', label: 'Chairman', badge: 'CHAIRMAN BOARD CONSOLE', title: 'Chairman Strategic Dashboard', desc: 'Provides trustees and chairmen with high-level institutional health metrics, multi-year success trends, budget analysis, and strategic growth charts.' }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const activeData = slides[currentSlide];

    return (
        <section className="showcase-section py-16 px-4 md:px-0">
            <div className="container mx-auto max-w-[1240px]">
                <div className="section-header text-center mb-10">
                    <h2 className="section-title text-3xl font-extrabold text-white">Platform <span className="gradient-text">Screenshots</span></h2>
                    <p className="section-desc text-slate-400 mt-2">Browse the real operational dashboards designed for each stakeholder group.</p>
                </div>

                <div className="carousel-container max-w-[900px] mx-auto relative">
                    <div className="carousel-viewport relative aspect-video bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
                        {/* Widescreen header bar */}
                        <div className="bg-slate-900 border-b border-white/10 px-4 py-2 flex items-center gap-1.5 select-none text-[8px] text-slate-500">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="bg-slate-950 px-2 py-0.5 rounded border border-white/5 truncate max-w-xs text-center mx-auto">
                                https://quantexsys.com/academic-companion/{activeData.image.split('_')[0]}
                            </span>
                        </div>

                        {/* Slider Track */}
                        <div 
                            className="flex h-[calc(100%-24px)] transition-transform duration-500 ease-in-out" 
                            style={{ width: `${slides.length * 100}%`, transform: `translateX(-${(currentSlide * 100) / slides.length}%)` }}
                        >
                            {slides.map((slide) => (
                                <div key={slide.id} className="h-full" style={{ width: `${100 / slides.length}%` }}>
                                    <img 
                                        src={slide.image} 
                                        className="w-full h-full object-cover block" 
                                        alt={slide.title} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button 
                        className="carousel-control-btn prev absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-slate-200 text-slate-800 hover:bg-indigo-500 hover:text-white flex items-center justify-center font-extrabold shadow-md cursor-pointer transition select-none z-10" 
                        onClick={prevSlide}
                        aria-label="Previous Slide"
                    >
                        &larr;
                    </button>
                    <button 
                        className="carousel-control-btn next absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-slate-200 text-slate-800 hover:bg-indigo-500 hover:text-white flex items-center justify-center font-extrabold shadow-md cursor-pointer transition select-none z-10" 
                        onClick={nextSlide}
                        aria-label="Next Slide"
                    >
                        &rarr;
                    </button>
                </div>

                {/* Dashboard Metadata Cards & Slide Indicators */}
                <div className="max-w-[700px] mx-auto mt-8 text-center bg-slate-950/20 border border-white/5 rounded-2xl p-6 glass-container">
                    <span className="inline-block py-1 px-3.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[10px] font-bold text-indigo-400 uppercase tracking-wide mb-2">
                        {activeData.badge}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-2">{activeData.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-lg mx-auto">{activeData.desc}</p>
                    
                    {/* Indicators list */}
                    <div className="carousel-nav flex justify-center gap-2 flex-wrap max-w-md mx-auto">
                        {slides.map((slide) => (
                            <button 
                                key={slide.id}
                                className={`carousel-indicator py-1.5 px-3 rounded-md text-[10px] font-bold transition border cursor-pointer ${currentSlide === slide.id ? 'active bg-indigo-500 text-white border-indigo-500 shadow-md' : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10'}`}
                                onClick={() => setCurrentSlide(slide.id)}
                            >
                                {slide.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

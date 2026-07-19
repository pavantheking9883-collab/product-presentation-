import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import BrandIntro from './components/BrandIntro.jsx';
import StakeholderHub from './components/StakeholderHub.jsx';
import ShowcaseCarousel from './components/ShowcaseCarousel.jsx';
import Features from './components/Features.jsx';
import Comparison from './components/Comparison.jsx';
import RoiCalculator from './components/RoiCalculator.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
    const [activeRole, setActiveRole] = useState('student');

    return (
        <div className="app-root relative overflow-x-hidden min-h-screen text-slate-100 bg-slate-950 font-sans">
            {/* Background Sparkles & Motion Blobs */}
            <div className="blob-container absolute inset-0 pointer-events-none z-[-2] overflow-hidden">
                <div className="blob blob-1 absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
                <div className="blob blob-2 absolute top-[60%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[130px] mix-blend-screen animate-pulse"></div>
            </div>

            {/* Layout Header */}
            <Header />

            <main>
                {/* Cinematic Background video */}
                <Hero />

                {/* Slogans and SVG AI Hub */}
                <BrandIntro activeRole={activeRole} setActiveRole={setActiveRole} />

                {/* Stakeholder Tab controls & Live Simulator dashboards */}
                <StakeholderHub activeRole={activeRole} setActiveRole={setActiveRole} />

                {/* Dashboard Screenshot Widescreen Carousel */}
                <ShowcaseCarousel />

                {/* Key feature grids */}
                <Features />

                {/* Comparison Matrix table */}
                <Comparison />

                {/* ROI Calculators */}
                <RoiCalculator />

                {/* Booking contact forms */}
                <ContactForm />
            </main>

            {/* Layout Footer */}
            <Footer />
        </div>
    );
}

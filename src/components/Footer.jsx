import React from 'react';

export default function Footer() {
    return (
        <footer className="footer bg-[#040509] border-t border-white/5 py-10">
            <div className="container mx-auto max-w-[1240px] footer-container flex justify-between items-center text-xs text-slate-500">
                <p>© 2026 Quantex Intelligence Solutions. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition">Terms of Service</a>
                    <a href="#" className="hover:text-white transition">Security Info</a>
                </div>
            </div>
        </footer>
    );
}

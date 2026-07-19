import React, { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('chairman');
    const [message, setMessage] = useState('');
    
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('info'); // 'info', 'success', 'error'
    const [showToast, setShowToast] = useState(false);

    const triggerToast = (msg, type) => {
        setToastMessage(msg);
        setToastType(type);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3500);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        triggerToast("Submitting your request...", "info");

        const web3FormsAccessKey = "6659c8c0-10b0-4d2d-80ad-e69f5a958d69"; 
        const tgBotToken = "8739804225:AAE23UaWdWtl7CL1dbTCFn-jHRBVk-ZMcAo";
        const tgUserId = "5816427459";
        
        const tgMessage = `🚨 <b>New Demo Requested!</b> 🚨\n\n` +
                          `👤 <b>Name:</b> ${name}\n` +
                          `📧 <b>Email:</b> ${email}\n` +
                          `💼 <b>Role:</b> ${role}\n` +
                          `🏫 <b>Institution Details:</b> ${message}\n\n` +
                          `📞 <b>Call them now:</b> <a href="tel:${phone}">${phone}</a>`;

        // Send Telegram notification in background
        const tgUrl = `https://api.telegram.org/bot${tgBotToken}/sendMessage`;
        fetch(tgUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: tgUserId,
                text: tgMessage,
                parse_mode: "HTML"
            })
        }).catch(err => console.warn("Telegram failed: ", err));

        // Send Email notification in background
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    access_key: web3FormsAccessKey,
                    subject: `New Demo Call Request from ${name}`,
                    from_name: "Quantex Landing Page",
                    name,
                    email,
                    phone,
                    role,
                    message: `Someone with details below wants a demo call:\n\n` +
                             `Name: ${name}\n` +
                             `Email: ${email}\n` +
                             `Role: ${role}\n` +
                             `Institution/Message: ${message}\n\n` +
                             `CALL THEM NOW at: ${phone}`
                })
            });

            const result = await response.json();
            if (response.status === 200) {
                triggerToast("Demo requested successfully! We will contact you soon.", "success");
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
            } else {
                triggerToast(result.message || "Submission error. Please try again.", "error");
            }
        } catch (err) {
            triggerToast("Network error. Please check your connection.", "error");
        }
    };

    return (
        <section id="contact" className="contact-section py-16 px-4 md:px-0">
            <div className="container mx-auto max-w-[1240px]">
                <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="contact-info text-left">
                        <h2 className="text-3xl font-extrabold text-white">Ready to Elevate Your Institution?</h2>
                        <p className="text-slate-400 mt-2">Join hundreds of schools and colleges who have digitized their academic lifecycle, bolstered outcomes, and restored parent confidence.</p>
                        
                        <div className="contact-details mt-8 flex flex-col gap-6">
                            <div className="contact-item flex gap-4">
                                <span className="contact-icon text-2xl">📧</span>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Have questions or need a custom proposal?</h4>
                                    <a href="mailto:pavankumarpothula9@gmail.com" className="text-indigo-400 hover:underline text-xs">pavankumarpothula9@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-item flex gap-4">
                                <span className="contact-icon text-2xl">🚀</span>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Presented by</h4>
                                    <p className="text-slate-400 text-xs mt-0.5">Pavanswetha (Lead Developer & Product Designer)</p>
                                    <p className="text-indigo-400 text-xs font-semibold">QUANTEX INTELLIGENCE SOLUTIONS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-side">
                        <form className="glass-container contact-form p-6 md:p-8 rounded-2xl border border-white/5 bg-slate-950/20 text-left shadow-xl" onSubmit={handleSubmit}>
                            <h3 className="text-lg font-bold text-white mb-6">Book a Personal Demo</h3>
                            <div className="form-group flex flex-col gap-1.5 mb-4">
                                <label htmlFor="form-name" className="text-xs font-semibold text-slate-300">Full Name</label>
                                <input 
                                    type="text" 
                                    id="form-name" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="e.g. Dr. Ramesh Kumar" 
                                    className="bg-slate-900 border border-white/5 p-2 rounded text-xs text-white outline-none focus:border-indigo-500" 
                                    required 
                                />
                            </div>
                            <div className="form-group flex flex-col gap-1.5 mb-4">
                                <label htmlFor="form-email" className="text-xs font-semibold text-slate-300">Email Address</label>
                                <input 
                                    type="email" 
                                    id="form-email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="e.g. principal@college.edu" 
                                    className="bg-slate-900 border border-white/5 p-2 rounded text-xs text-white outline-none focus:border-indigo-500" 
                                    required 
                                />
                            </div>
                            <div className="form-group flex flex-col gap-1.5 mb-4">
                                <label htmlFor="form-phone" className="text-xs font-semibold text-slate-300">Phone Number</label>
                                <input 
                                    type="tel" 
                                    id="form-phone" 
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="e.g. +91 9059530595" 
                                    className="bg-slate-900 border border-white/5 p-2 rounded text-xs text-white outline-none focus:border-indigo-500" 
                                    required 
                                />
                            </div>
                            <div className="form-group flex flex-col gap-1.5 mb-4">
                                <label htmlFor="form-role" className="text-xs font-semibold text-slate-300">Your Role</label>
                                <select 
                                    id="form-role" 
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="bg-slate-900 border border-white/5 p-2 rounded text-xs text-white outline-none focus:border-indigo-500 cursor-pointer"
                                >
                                    <option value="chairman">Chairman / Board Member</option>
                                    <option value="principal">Principal / Director</option>
                                    <option value="hod">HOD</option>
                                    <option value="faculty">Faculty Member</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group flex flex-col gap-1.5 mb-6">
                                <label htmlFor="form-message" className="text-xs font-semibold text-slate-300">Institution Name & Requirements</label>
                                <textarea 
                                    id="form-message" 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows="3" 
                                    placeholder="Tell us about your institution size..."
                                    className="bg-slate-900 border border-white/5 p-2 rounded text-xs text-white outline-none focus:border-indigo-500 resize-none"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block w-full py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded shadow transition text-xs">Schedule Demo Session</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Float Toast Notification */}
            <div 
                className={`fixed bottom-6 right-6 py-3 px-5 rounded-lg shadow-xl text-xs font-bold text-white transition-all duration-300 z-50 ${showToast ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}
                style={{ 
                    background: toastType === 'success' ? 'var(--emerald)' : toastType === 'error' ? 'var(--red)' : 'var(--primary)' 
                }}
            >
                {toastMessage}
            </div>
        </section>
    );
}

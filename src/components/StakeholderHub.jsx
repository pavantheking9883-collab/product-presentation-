import React, { useState } from 'react';

export default function StakeholderHub({ activeRole, setActiveRole }) {
    const [viewMode, setViewMode] = useState('interactive'); // 'interactive' or 'screenshot'

    // Student Dashboard Sim States
    const [selectedMock, setSelectedMock] = useState('test5');
    const [studentTasks, setStudentTasks] = useState([false, false, false]);
    const [scannedMessage, setScannedMessage] = useState('');
    const [scheduledRevisions, setScheduledRevisions] = useState([false, false, false]);

    // Teacher Dashboard Sim States
    const [isPresentAnanya, setIsPresentAnanya] = useState(false);
    const [showTeacherLog, setShowTeacherLog] = useState(false);

    // HOD Dashboard Sim States
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [compilingReport, setCompilingReport] = useState(false);
    const [reportStatus, setReportStatus] = useState(false);

    // Parent Dashboard Sim States
    const [selectedDay, setSelectedDay] = useState('July 1');

    // Admin Dashboard Sim States
    const [tickets, setTickets] = useState([
        { id: 1, name: 'Block B WiFi Outage', severity: 'warning', resolved: false },
        { id: 2, name: 'Mess Food Quality', severity: 'danger', resolved: false }
    ]);

    // Chairman Dashboard Sim States
    const [selectedYear, setSelectedYear] = useState(null);

    const rolesData = {
        student: {
            title: "Quantex Student Companion",
            badge: "STUDENT PORTAL",
            url: "https://academic-companion.quantexsys.com/student-dashboard",
            intro: "Acts as a personal academic guide for every student, pinpointing exact learning gaps, managing assignments, and relieving competitive exam stress.",
            challenges: [
                "Lack of personalized study paths; studying without prioritization.",
                "Know marks but have no clear analysis of scores or where the weak areas lie.",
                "Extreme stress and anxiety regarding major JEE, NEET, and board exams.",
                "Hostel management issues like tedious leave requests and lack of safety transparency."
            ],
            solutions: [
                "Provides automated daily study plans and revision schedules tailored to performance.",
                "AI Recommendation Engine isolates exact gaps (e.g., Integration, Chemical Equilibrium).",
                "Mock Test Intelligence and Rank Predictors help track preparation progress with confidence.",
                "Digital Hostel Module enables transparent leave logs, food feedback, and direct warden contact."
            ]
        },
        teacher: {
            title: "Faculty Attendance & Grade Console",
            badge: "TEACHER CONSOLE",
            url: "https://academic-companion.quantexsys.com/teacher-dashboard",
            intro: "Reduces teachers' administrative workloads by automating routine tasks, allowing them to focus entirely on tutoring and active student intervention.",
            challenges: [
                "High faculty workloads from managing scores, assignments, and behavior remarks across 100+ students.",
                "Taking roll-call consumes 10-15 minutes of every lecture hour.",
                "Lack of structures to collect student feedback and measure overall teaching effectiveness."
            ],
            solutions: [
                "Face Recognition Attendance automates student check-ins in seconds with 100% accuracy.",
                "Digital student records log positive achievements, daily remarks, and behavioral feedback.",
                "Real-time student feedback reports highlight specific educators or courses requiring support."
            ]
        },
        hod: {
            title: "HOD Department Control Center",
            badge: "HOD COMMANDER",
            url: "https://academic-companion.quantexsys.com/hod-dashboard",
            intro: "Empowers Department Heads with real-time analytics to audit syllabus tracking, monitor test averages across classrooms, and resolve faculty challenges.",
            challenges: [
                "No objective way to track syllabus coverage progress across multiple sections.",
                "Identifying weak classrooms or teaching bottlenecks happens too late (after final exam results).",
                "Compiling performance reports manually for the principal takes hours of administrative work."
            ],
            solutions: [
                "Unified Department Dashboard visualizes test averages, pass percentages, and syllabus completion charts.",
                "AI-driven inter-section gap analysis identifies low-performing sections instantly.",
                "One-click reports dispatch strategic diagnostic data directly to the principal's portal."
            ]
        },
        parent: {
            title: "EduFlow Parent Hub App",
            badge: "PARENT HUB",
            url: "https://academic-companion.quantexsys.com/parent-app",
            intro: "Closes the safety and academic communication gap, bringing parents real-time visibility into their ward's marks, attendance, and campus security logs.",
            challenges: [
                "Anxiety regarding student security inside college campuses and hostels.",
                "Late awareness of serious academic slides or behavioral concerns when it is already difficult to intervene.",
                "Disjointed parent-teacher meetings leave parents with sparse details on actual day-to-day progress."
            ],
            solutions: [
                "Instant push feeds log real-time entry/exit gates, biometric check-ins, and warden actions.",
                "Digital progress feeds display mock test rankings, percentile scores, and gaps immediately.",
                "Direct coordinator feedback remarks provide continuous alignment on student focus areas."
            ]
        },
        admin: {
            title: "Central Administrative Terminal",
            badge: "SUPER ADMIN COMMAND",
            url: "https://academic-companion.quantexsys.com/central-admin",
            intro: "Gives administrators a high-level operational overview to track teacher attendance, campus safety logs, student enrollment growth, and grievance resolution pipelines.",
            challenges: [
                "Overseeing thousands of students and teachers makes individual tracking virtually impossible.",
                "Student complaints regarding hostel facilities, faculty, or transport get forgotten or delayed.",
                "No centralized ledger to audit active systems, biometric entries, or institutional resources."
            ],
            solutions: [
                "Highlights Board features top operational alerts (e.g., pending leaves, low-attendance students).",
                "Ticketing and tracking system categorizes student complaints, sorting by urgency.",
                "Secure centralized system audits biometric devices, database health, and server uptimes."
            ]
        },
        chairman: {
            title: "Chairman Strategic Dashboard",
            badge: "CHAIRMAN BOARD CONSOLE",
            url: "https://academic-companion.quantexsys.com/chairman-console",
            intro: "Provides trustees and chairmen with high-level institutional health metrics, multi-year success trends, budget analysis, and strategic growth charts.",
            challenges: [
                "Evaluating overall institutional health across multiple state campuses is fragmented.",
                "Hard to verify whether strategic technology investments are yielding improvements.",
                "No dashboard to inspect strategic growth, brand reputation indicators, or parent reviews."
            ],
            solutions: [
                "Multi-campus visualizer compares grade outputs, success rates, and budget margins.",
                "Interactive multi-year growth indicators prove ROI and performance gains.",
                "Direct sentiment indicators monitor parent rating trends and student satisfaction feeds."
            ]
        }
    };

    const mockTests = {
        test5: { score: '186 / 300', pct: '99.12%', strokeDash: '62, 100', rank: '#1,120', diagnosis: 'Lost 24 marks in Maths due to <em>Formula recall gaps</em> in integration. Silly mistakes detected in Chemistry.' },
        test4: { score: '162 / 300', pct: '97.45%', strokeDash: '54, 100', rank: '#3,240', diagnosis: 'Concept gap identified in <em>Current Electricity</em>. Chemistry equilibrium calculation was skipped.' },
        test3: { score: '201 / 300', pct: '99.64%', strokeDash: '67, 100', rank: '#450', diagnosis: 'Excellent performance. Small conceptual slide detected in <em>Chemical Equilibrium</em> reactions.' },
        test2: { score: '148 / 300', pct: '95.20%', strokeDash: '49, 100', rank: '#6,180', diagnosis: 'High errors in Calculus chapters. Plan triggered: scheduled active revisions on integration chapters.' },
        test1: { score: '172 / 300', pct: '98.15%', strokeDash: '57, 100', rank: '#2,350', diagnosis: 'Good foundation. Rotational mechanics shows structural formula confusion.' }
    };

    const calendarLogs = {
        'July 1': 'Campus entry: 08:32 AM (Biometric Face Verified). Exit: 04:15 PM (Warden checkout checked).',
        'July 2': 'Campus entry: 08:30 AM (Biometric Face Verified). Exit: 04:12 PM.',
        'July 3': 'Campus entry: 08:31 AM (Biometric Face Verified). Exit: 04:18 PM.',
        'July 4': 'Campus entry: 08:29 AM (Biometric Face Verified). Exit: 04:10 PM.',
        'July 5': "No biometric check-in. Leave form 'Sick Leave - High fever' approved by coordinator Mrs. Savitha.",
        'July 6': 'Weekend prep class. Campus entry: 08:58 AM (Biometric Face Verified). Exit: 12:30 PM.',
        'July 8': 'Campus entry: 08:34 AM (Biometric Face Verified). Exit: 04:16 PM.',
        'July 9': 'Campus entry: 08:28 AM (Biometric Face Verified). Exit: 04:11 PM.',
        'July 10': 'Campus entry: 08:35 AM (Biometric Face Verified). Exit: 04:14 PM.',
        'July 11': 'Campus entry: 08:30 AM (Biometric Face Verified). Exit: 04:10 PM.',
        'July 12': 'Campus entry: 08:31 AM (Biometric Face Verified). Exit: 04:18 PM.',
        'July 13': 'Weekend prep class. Campus entry: 08:59 AM (Biometric Face Verified). Exit: 12:35 PM.'
    };

    const activeData = rolesData[activeRole];

    const handleTaskChange = (index) => {
        const nextTasks = [...studentTasks];
        nextTasks[index] = !nextTasks[index];
        setStudentTasks(nextTasks);
    };

    const completedTasksCount = studentTasks.filter(Boolean).length;
    const taskProgressPct = Math.round((completedTasksCount / 3) * 100);

    // Render corresponding interactive templates
    const renderInteractiveDashboard = () => {
        switch (activeRole) {
            case 'student':
                const activeMock = mockTests[selectedMock];
                return (
                    <div className="dash-sim-wrapper text-slate-800">
                        <div className="dash-header-section">
                            <div className="dash-user-profile">
                                <div className="dash-avatar bg-indigo-500 font-extrabold shadow-sm border border-white text-white">AR</div>
                                <div className="dash-user-info">
                                    <h5 className="font-bold text-slate-900 text-sm">Ananya Reddy</h5>
                                    <span className="text-xs text-slate-500">Class 12 - MPC | Roll No: 23891</span>
                                </div>
                            </div>
                            <span className="pulse-indicator bg-emerald-50 text-emerald-600 border border-emerald-200 py-1 px-3 rounded-full text-xs font-bold">Mock Active</span>
                        </div>

                        {/* Live NEET Mock Exam Banner Card */}
                        <div className="dash-panel bg-red-50/50 border border-red-200 relative overflow-hidden mb-4 p-4 rounded-lg">
                            <div className="absolute right-2 top-2 text-5xl opacity-10">🩺</div>
                            <h6 className="text-red-500 font-extrabold text-[10px] uppercase tracking-wider mb-1">🔥 LIVE EXAM SIMULATOR</h6>
                            <h5 className="mb-2 font-bold text-slate-900 text-sm">Deekshya Medical Academy NEET 2026 Test Series</h5>
                            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                                Attempt actual Biology, Chemistry, and Physics questions from the Deekshya test series with real-time marking (+4/-1) and detailed explanations.
                            </p>
                            <button 
                                className="btn bg-red-500 hover:bg-red-600 text-white font-bold py-1.5 px-4 rounded text-xs transition" 
                                onClick={() => alert('NEET Live Mock Test Simulator is starting...')}
                            >
                                Try NEET Mock Test Right Now →
                            </button>
                        </div>

                        {/* Stats Strip */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                            <div className="dash-stat-box border-t-3 border-indigo-500 p-3 bg-white rounded-lg shadow-sm">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-lg font-bold text-slate-900">24</span>
                                    <span className="text-indigo-500">📝</span>
                                </div>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Tests Took</span>
                            </div>
                            <div className="dash-stat-box border-t-3 border-sky-500 p-3 bg-white rounded-lg shadow-sm">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-lg font-bold text-sky-600">78.6%</span>
                                    <span className="text-sky-500">📈</span>
                                </div>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Avg Score</span>
                            </div>
                            <div className="dash-stat-box border-t-3 border-orange-500 p-3 bg-white rounded-lg shadow-sm">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-lg font-bold text-orange-600">156</span>
                                    <span className="text-orange-500">🏆</span>
                                </div>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">All India Rank</span>
                            </div>
                            <div className="dash-stat-box border-t-3 border-purple-500 p-3 bg-white rounded-lg shadow-sm">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-lg font-bold text-purple-600">12 Days</span>
                                    <span className="text-purple-500">🔥</span>
                                </div>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Study Streak</span>
                            </div>
                        </div>

                        {/* Interactive Mock selector */}
                        <div className="dash-panel bg-white p-4 rounded-lg shadow-sm mb-4">
                            <div className="flex justify-between items-center mb-3">
                                <h6 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Mock Analytics & Gap Analysis</h6>
                                <select 
                                    className="bg-slate-100 border border-slate-200 text-slate-800 text-xs px-2 py-1 rounded font-semibold cursor-pointer outline-none"
                                    value={selectedMock}
                                    onChange={(e) => {
                                        setSelectedMock(e.target.value);
                                        setScannedMessage('');
                                    }}
                                >
                                    <option value="test5">JEE Mock Test 5 (Recent)</option>
                                    <option value="test4">JEE Mock Test 4</option>
                                    <option value="test3">JEE Mock Test 3</option>
                                    <option value="test2">JEE Mock Test 2</option>
                                    <option value="test1">JEE Mock Test 1</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-3 gap-2.5 mb-3">
                                <div className="bg-slate-50 border border-slate-100 border-l-3 border-indigo-500 p-2.5 rounded flex items-center justify-between">
                                    <div>
                                        <span className="text-[9px] text-slate-500 font-bold uppercase block">Score</span>
                                        <span className="text-sm font-bold text-indigo-600">{activeMock.score}</span>
                                    </div>
                                    <svg width="24" height="24" viewBox="0 0 36 36">
                                        <circle cx="18" cy="18" r="15.9155" fill="none" stroke="rgba(99, 102, 241, 0.08)" strokeWidth="3.5" />
                                        <circle cx="18" cy="18" r="15.9155" fill="none" stroke="rgb(99, 102, 241)" strokeWidth="3.5" strokeDasharray={activeMock.strokeDash} strokeLinecap="round" transform="rotate(-90 18 18)" />
                                    </svg>
                                </div>
                                <div className="bg-slate-50 border border-slate-100 border-l-3 border-orange-500 p-2.5 rounded flex items-center justify-between">
                                    <div>
                                        <span className="text-[9px] text-slate-500 font-bold uppercase block">Percentile</span>
                                        <span className="text-sm font-bold text-orange-600">{activeMock.pct}</span>
                                    </div>
                                    <svg width="24" height="24" viewBox="0 0 36 36">
                                        <circle cx="18" cy="18" r="15.9155" fill="none" stroke="rgba(249, 115, 22, 0.08)" strokeWidth="3.5" />
                                        <circle cx="18" cy="18" r="15.9155" fill="none" stroke="rgb(249, 115, 22)" strokeWidth="3.5" strokeDasharray={activeMock.strokeDash} strokeLinecap="round" transform="rotate(-90 18 18)" />
                                    </svg>
                                </div>
                                <div className="bg-slate-50 border border-slate-100 border-l-3 border-purple-500 p-2.5 rounded flex items-center justify-between">
                                    <div>
                                        <span className="text-[9px] text-slate-500 font-bold uppercase block">Predicted Rank</span>
                                        <span className="text-sm font-bold text-purple-600">{activeMock.rank}</span>
                                    </div>
                                    <span className="text-base text-purple-500">🏆</span>
                                </div>
                            </div>

                            <div 
                                className="bg-indigo-50/50 border border-dashed border-indigo-200 border-l-4 border-indigo-500 p-3 rounded text-xs mb-3 text-left leading-relaxed text-slate-800"
                                dangerouslySetInnerHTML={{ __html: scannedMessage || activeMock.diagnosis }}
                            />

                            <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-500 italic">Last scanned: 2 mins ago</span>
                                <button 
                                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-3 rounded shadow transition"
                                    onClick={() => {
                                        setScannedMessage("⚡ <strong>AI Concept Re-check complete!</strong> Recalculated percentile parameters and locked in 3 high priority topic revisions.");
                                    }}
                                >
                                    Run AI Concept Re-check
                                </button>
                            </div>
                        </div>

                        {/* Weak Concepts and Daily Progress Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="dash-panel bg-white p-4 rounded-lg shadow-sm">
                                <h6 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">Weak Concepts (AI Identified)</h6>
                                <div className="flex flex-col gap-2">
                                    {[
                                        { id: 0, name: 'Substitution Integration', sub: 'High Priority (Maths)' },
                                        { id: 1, name: 'Current Electricity', sub: 'Critical Gap (Physics)' },
                                        { id: 2, name: 'Chemical Equilibrium', sub: 'Medium Gap (Chemistry)' }
                                    ].map((item) => (
                                        <div key={item.id} className="flex justify-between items-center p-2.5 rounded border border-red-100 bg-red-50/30 border-l-3 border-red-500 text-left">
                                            <div>
                                                <span className="font-semibold text-slate-800 text-xs block">{item.name}</span>
                                                <span className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                                                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                                                    {scheduledRevisions[item.id] ? 'Scheduled' : item.sub}
                                                </span>
                                            </div>
                                            <button 
                                                className={`py-1 px-3.5 rounded text-[10px] font-bold text-white transition ${scheduledRevisions[item.id] ? 'bg-emerald-500' : 'bg-red-500 hover:bg-red-600'}`}
                                                disabled={scheduledRevisions[item.id]}
                                                onClick={() => {
                                                    const nextRev = [...scheduledRevisions];
                                                    nextRev[item.id] = true;
                                                    setScheduledRevisions(nextRev);
                                                }}
                                            >
                                                {scheduledRevisions[item.id] ? 'Scheduled' : 'Revise'}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="dash-panel bg-white p-4 rounded-lg shadow-sm">
                                <div className="flex justify-between items-center mb-3">
                                    <h6 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Daily Study Plan Progress</h6>
                                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 py-0.5 px-2 rounded-full">{taskProgressPct}%</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-100 rounded-full mb-4 overflow-hidden">
                                    <div className="bg-indigo-500 h-full transition-all duration-300" style={{ width: `${taskProgressPct}%` }}></div>
                                </div>
                                <div className="flex flex-col gap-3 text-xs text-left">
                                    {[
                                        'Solve 15 Maths Mock Questions',
                                        'Review Physics Electrostatics Theory',
                                        'Review mistakes in Mock Test 5'
                                    ].map((task, idx) => (
                                        <label key={idx} className="flex items-center gap-2.5 cursor-pointer font-medium text-slate-700">
                                            <input 
                                                type="checkbox" 
                                                className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500 cursor-pointer"
                                                checked={studentTasks[idx]}
                                                onChange={() => handleTaskChange(idx)}
                                            />
                                            <span className={studentTasks[idx] ? 'line-through text-slate-400' : ''}>{task}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'teacher':
                return (
                    <div className="dash-sim-wrapper text-slate-800">
                        <div className="dash-header-section">
                            <div className="dash-user-profile">
                                <div className="dash-avatar bg-purple-500 text-white font-extrabold shadow-sm">SM</div>
                                <div className="dash-user-info">
                                    <h5 className="font-bold text-slate-900 text-sm">Mrs. Savitha M.</h5>
                                    <span className="text-xs text-slate-500">Grade 12 Coordinator | Mathematics</span>
                                </div>
                            </div>
                            <span className="pulse-indicator bg-indigo-50 text-indigo-600 border border-indigo-200 py-1 px-3 rounded-full text-xs font-bold">Class Online</span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                            <div className="dash-stat-box p-3 bg-white rounded-lg shadow-sm border-t-3 border-slate-300">
                                <span className="text-lg font-bold text-slate-900 block">4</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Classes</span>
                            </div>
                            <div className="dash-stat-box p-3 bg-white rounded-lg shadow-sm border-t-3 border-indigo-500">
                                <span className="text-lg font-bold text-indigo-600 block">76%</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Class Avg</span>
                            </div>
                            <div className="dash-stat-box p-3 bg-white rounded-lg shadow-sm border-t-3 border-emerald-500">
                                <span className="text-lg font-bold text-emerald-600 block">86%</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Pass Rate</span>
                            </div>
                            <div className="dash-stat-box p-3 bg-white rounded-lg shadow-sm border-t-3 border-sky-500">
                                <span className="text-lg font-bold text-sky-600 block">{isPresentAnanya ? '100%' : '75%'}</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Attendance</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="dash-panel bg-white p-4 rounded-lg shadow-sm">
                                <h6 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">Face Recognition Attendance Tracker</h6>
                                <div className="attendance-sim-box flex flex-col items-center">
                                    <div className="scanner-frame id-sim-scanner relative overflow-hidden bg-slate-900 w-32 h-32 rounded-lg flex items-center justify-center border-2 border-dashed border-indigo-500">
                                        <svg xmlns='http://www.w3.org/2000/svg' className="w-16 h-16 text-indigo-500" viewBox='0 0 100 100'>
                                            <circle cx='50' cy='45' r='20' fill='currentColor'/>
                                            <path d='M20 80c0-20 15-30 30-30s30 10 30 30z' fill='currentColor'/>
                                        </svg>
                                        <div className="scan-laser absolute left-0 right-0 h-0.5 bg-indigo-400 shadow-md"></div>
                                    </div>
                                    <button 
                                        className="btn bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1.5 px-4 rounded text-xs transition mt-4 w-full"
                                        disabled={isPresentAnanya}
                                        onClick={() => {
                                            setIsPresentAnanya(true);
                                            setShowTeacherLog(true);
                                        }}
                                    >
                                        {isPresentAnanya ? 'Attendance Saved' : 'Trigger AI Attendance Scan'}
                                    </button>
                                </div>
                            </div>

                            <div className="dash-panel bg-white p-4 rounded-lg shadow-sm">
                                <h6 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">Class Attendance Roster ({isPresentAnanya ? '4' : '3'} / 4 Present)</h6>
                                <div className="flex flex-col gap-2.5 text-xs text-left">
                                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                        <span className="font-medium text-slate-700">Ananya Reddy</span>
                                        <span className={`font-bold ${isPresentAnanya ? 'text-emerald-500' : 'text-red-500'}`}>
                                            {isPresentAnanya ? 'Present (AI Verified)' : 'Absent (Awaiting Scan)'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                        <span className="font-medium text-slate-700">Lokesh Kumar</span>
                                        <span className="text-emerald-500 font-bold">Present (AI Verified)</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                        <span className="font-medium text-slate-700">Arjun Mehta</span>
                                        <span className="text-emerald-500 font-bold">Present (AI Verified)</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                        <span className="font-medium text-slate-700">Sneha Patil</span>
                                        <span className="text-emerald-500 font-bold">Present (AI Verified)</span>
                                    </div>
                                </div>
                                {showTeacherLog && (
                                    <div className="text-[10px] text-slate-500 italic text-left mt-3 leading-relaxed border-t border-slate-100 pt-2.5">
                                        [Log]: Biometric scan matches Ananya Reddy (Class 12 - MPC). Attendance registered!
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );

            case 'hod':
                return (
                    <div className="dash-sim-wrapper text-slate-800">
                        <div className="dash-header-section">
                            <div className="dash-user-profile">
                                <div className="dash-avatar bg-sky-500 text-white font-extrabold shadow-sm">DS</div>
                                <div className="dash-user-info">
                                    <h5 className="font-bold text-slate-900 text-sm">Dr. Srinivas Rao</h5>
                                    <span className="text-xs text-slate-500">HOD - Mathematics Department</span>
                                </div>
                            </div>
                            <span className="pulse-indicator bg-sky-50 text-sky-600 border border-sky-200 py-1 px-3 rounded-full text-xs font-bold">Math Dept Active</span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                            <div className="dash-stat-box p-3 bg-white rounded-lg shadow-sm border-t-3 border-slate-300">
                                <span className="text-lg font-bold text-slate-900 block">12</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Math Teachers</span>
                            </div>
                            <div className="dash-stat-box p-3 bg-white rounded-lg shadow-sm border-t-3 border-purple-500">
                                <span className="text-lg font-bold text-purple-600 block">6</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Sections</span>
                            </div>
                            <div className="dash-stat-box p-3 bg-white rounded-lg shadow-sm border-t-3 border-indigo-500">
                                <span className="text-lg font-bold text-indigo-600 block">81%</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Dept Average</span>
                            </div>
                            <div className="dash-stat-box p-3 bg-white rounded-lg shadow-sm border-t-3 border-emerald-500">
                                <span className="text-lg font-bold text-emerald-600 block">94%</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Syllabus Covered</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="dash-panel bg-white p-4 rounded-lg shadow-sm">
                                <h6 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">Faculty Class Averages (Click to inspect)</h6>
                                <div className="flex justify-between items-end h-28 pt-2.5">
                                    {[
                                        { id: 'prasad', name: 'Prasad', full: 'Mr. Prasad', syllabus: '84%', avg: '78%', height: '84%', color: 'bg-indigo-500' },
                                        { id: 'savitha', name: 'Savitha', full: 'Mrs. Savitha', syllabus: '96%', avg: '86%', height: '96%', color: 'bg-purple-500' },
                                        { id: 'raghavan', name: 'Raghavan', full: 'Mr. Raghavan', syllabus: '78%', avg: '74%', height: '78%', color: 'bg-indigo-500' }
                                    ].map((bar) => (
                                        <div 
                                            key={bar.id} 
                                            className="flex flex-col items-center flex-grow cursor-pointer group"
                                            onClick={() => {
                                                setSelectedTeacher(bar);
                                                setReportStatus(false);
                                            }}
                                            style={{ opacity: selectedTeacher && selectedTeacher.id === bar.id ? 1 : 0.6 }}
                                        >
                                            <div className="w-6 bg-slate-100 rounded-t overflow-hidden relative" style={{ height: '80px' }}>
                                                <div className={`absolute bottom-0 left-0 right-0 ${bar.color} transition-all`} style={{ height: bar.height }}></div>
                                            </div>
                                            <span className="text-[9px] text-slate-500 font-semibold mt-1">{bar.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="dash-panel bg-white p-4 rounded-lg shadow-sm flex flex-col justify-between">
                                <h6 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">Faculty Gap Analyzer Feed</h6>
                                <div className="flex flex-col gap-2.5 text-xs text-left">
                                    <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg min-h-24">
                                        {selectedTeacher ? (
                                            <>
                                                <strong className="text-indigo-600 text-sm block mb-1">{selectedTeacher.full}</strong>
                                                <div className="text-slate-600 leading-normal">
                                                    <strong>Syllabus Progress:</strong> {selectedTeacher.syllabus}<br/>
                                                    <strong>Class Performance Average:</strong> {selectedTeacher.avg}<br/>
                                                    <span className="text-emerald-500 text-[10px] block mt-1">✓ No operational bottlenecks identified</span>
                                                </div>
                                            </>
                                        ) : (
                                            <span className="text-slate-400">Click any bar on the chart to inspect syllabus completion and class averages instantly.</span>
                                        )}
                                    </div>
                                    
                                    <button 
                                        className="btn bg-slate-800 hover:bg-slate-900 text-white font-bold py-1.5 px-4 rounded text-xs transition w-full"
                                        disabled={compilingReport}
                                        onClick={() => {
                                            setCompilingReport(true);
                                            setTimeout(() => {
                                                setCompilingReport(false);
                                                setReportStatus(true);
                                            }, 800);
                                        }}
                                    >
                                        {compilingReport ? 'Compiling Database...' : 'Generate Departmental Gap Analysis Report'}
                                    </button>
                                    {reportStatus && (
                                        <span className="text-[10px] text-emerald-600 font-bold block text-center mt-1">Report Compiled & Dispatched to Principal!</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'parent':
                return (
                    <div className="mobile-simulator-phone max-w-[310px] bg-slate-900 border-[10px] border-slate-800 rounded-[32px] mx-auto flex flex-col overflow-hidden relative shadow-lg text-slate-900 font-sans text-left">
                        {/* Phone Status Bar */}
                        <div className="bg-slate-900 text-slate-400 px-4 py-1.5 flex justify-between text-[9px] font-bold select-none">
                            <span>9:41 AM</span>
                            <div className="flex gap-1.5 items-center">
                                <span>📶</span>
                                <span>🛜</span>
                                <span>🔋 88%</span>
                            </div>
                        </div>

                        {/* App Navigation Bar */}
                        <div className="bg-slate-800 border-b border-white/5 px-3 py-2 flex justify-between items-center text-white">
                            <span className="text-xs font-extrabold text-orange-500 tracking-wide">EduFlow Parent Hub</span>
                            <div className="flex gap-2 items-center">
                                <span className="text-[8px] bg-orange-500/20 border border-orange-500/30 px-1.5 py-0.5 rounded-full font-bold text-orange-400">Feed Live</span>
                                <span className="text-xs cursor-pointer">🔔</span>
                            </div>
                        </div>

                        {/* App Body (Scrollable) */}
                        <div className="flex-grow h-[350px] overflow-y-auto p-3 bg-slate-50 text-slate-800 parent-app-body">
                            {/* Student Profile Card */}
                            <div className="bg-white border border-slate-100 p-2.5 rounded-xl mb-3 flex items-center gap-2.5 shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs">AR</div>
                                <div>
                                    <h6 className="margin-0 text-xs font-bold text-slate-800">Ananya Reddy</h6>
                                    <span className="text-[9px] text-slate-400">Class 12 - MPC | Roll No: 23891</span>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-2 mb-3">
                                <div className="bg-white border border-slate-100 p-2 rounded-xl text-center shadow-sm">
                                    <span className="text-[8px] text-slate-400 uppercase font-bold block">Overall Attendance</span>
                                    <div className="text-base font-extrabold text-emerald-500 my-0.5">96.2%</div>
                                    <span className="text-[8px] text-emerald-500 font-semibold block">● Excellent Status</span>
                                </div>
                                <div className="bg-white border border-slate-100 p-2 rounded-xl text-center shadow-sm">
                                    <span className="text-[8px] text-slate-400 uppercase font-bold block">Academic Score</span>
                                    <div className="text-base font-extrabold text-indigo-500 my-0.5">78.6%</div>
                                    <span className="text-[8px] text-indigo-500 font-semibold block">● Top 12% Rank</span>
                                </div>
                            </div>

                            {/* Attendance Calendar */}
                            <div className="bg-white border border-slate-100 p-3 rounded-xl mb-3 shadow-sm">
                                <div className="flex justify-between items-center mb-2">
                                    <h6 className="margin-0 text-[9px] uppercase text-slate-400 font-extrabold tracking-wide">July 2026 Attendance Grid</h6>
                                    <span className="text-[8px] text-orange-500 font-bold">(Tap day)</span>
                                </div>
                                
                                <div className="grid grid-cols-7 gap-1 text-center">
                                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
                                        <span key={idx} className="text-[8px] font-bold text-slate-400">{day}</span>
                                    ))}

                                    {[
                                        { d: 1, active: true, ok: true },
                                        { d: 2, active: true, ok: true },
                                        { d: 3, active: true, ok: true },
                                        { d: 4, active: true, ok: true },
                                        { d: 5, active: true, ok: false },
                                        { d: 6, active: true, ok: true },
                                        { d: 7, active: false },
                                        { d: 8, active: true, ok: true },
                                        { d: 9, active: true, ok: true },
                                        { d: 10, active: true, ok: true },
                                        { d: 11, active: true, ok: true },
                                        { d: 12, active: true, ok: true },
                                        { d: 13, active: true, ok: true },
                                        { d: 14, active: false }
                                    ].map((day, idx) => {
                                        if (!day.active) {
                                            return <div key={idx} className="h-5 bg-slate-100 rounded text-[9px] text-slate-400 flex items-center justify-center">{day.d}</div>;
                                        }
                                        const dateStr = `July ${day.d}`;
                                        return (
                                            <div 
                                                key={idx}
                                                className={`h-5 rounded text-[9px] font-bold flex items-center justify-center cursor-pointer transition ${day.ok ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'} ${selectedDay === dateStr ? 'border-2 border-orange-500' : ''}`}
                                                onClick={() => setSelectedDay(dateStr)}
                                            >
                                                {day.d}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Details Box */}
                            <div className="bg-white border border-slate-100 p-2.5 rounded-xl mb-3 shadow-sm text-left">
                                <h6 className="margin-0 text-[8px] uppercase text-slate-400 font-extrabold mb-1">Safety Log: <span className="text-orange-500 font-bold">{selectedDay}</span></h6>
                                <div className="text-[10px] text-slate-700 leading-relaxed">
                                    {calendarLogs[selectedDay] || 'Select an active day on the grid to inspect.'}
                                </div>
                            </div>

                            {/* Remarks */}
                            <div className="bg-white border border-slate-100 p-2.5 rounded-xl shadow-sm text-left">
                                <h6 className="margin-0 text-[8px] uppercase text-slate-400 font-extrabold mb-2">Latest Coordinator Remarks</h6>
                                <div className="border-l-3 border-orange-500 pl-2">
                                    <div className="flex justify-between items-center mb-0.5 text-[9px]">
                                        <strong className="color-slate-800">Mrs. Savitha M. (Maths)</strong>
                                        <span className="text-slate-400">Yesterday</span>
                                    </div>
                                    <p className="margin-0 text-[9px] text-slate-500 leading-relaxed">"Ananya's integration concepts show revision gains. Trigonometry test accuracy reached 85%."</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Mobile Tab Bar */}
                        <div className="bg-white border-t border-slate-100 py-1.5 grid grid-cols-4 text-center text-[8px] font-bold text-slate-400 select-none">
                            <div className="text-orange-500 cursor-pointer">
                                <span className="block text-[13px] mb-0.5">🏠</span>
                                Home
                            </div>
                            <div className="cursor-pointer" onClick={() => alert('Attendance tracker screen is active!')}>
                                <span className="block text-[13px] mb-0.5">📅</span>
                                Attendance
                            </div>
                            <div className="cursor-pointer" onClick={() => alert('Academic Reports & Grades dashboard!')}>
                                <span className="block text-[13px] mb-0.5">📊</span>
                                Grades
                            </div>
                            <div className="cursor-pointer" onClick={() => alert('Coordinator Remarks logs screen!')}>
                                <span className="block text-[13px] mb-0.5">💬</span>
                                Remarks
                            </div>
                        </div>
                    </div>
                );

            case 'admin':
                const activeTickets = tickets.filter(t => !t.resolved);
                return (
                    <div className="dash-sim-wrapper text-slate-800">
                        <div className="dash-header-section">
                            <div className="dash-user-profile">
                                <div className="dash-avatar bg-orange-400 text-white font-extrabold shadow-sm">DR</div>
                                <div className="dash-user-info">
                                    <h5 className="font-bold text-slate-900 text-sm">Dr. Roy (Principal)</h5>
                                    <span className="text-xs text-slate-500">Super Admin | Central Campus</span>
                                </div>
                            </div>
                            <span className="pulse-indicator bg-orange-50 text-orange-600 border border-orange-200 py-1 px-3 rounded-full text-xs font-bold">Server Live</span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                            <div className="dash-stat-box p-3 bg-white rounded-lg shadow-sm border-t-3 border-indigo-500">
                                <span className="text-lg font-bold text-slate-900 block">17.2K</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Students</span>
                            </div>
                            <div className="dash-stat-box p-3 bg-white rounded-lg shadow-sm border-t-3 border-purple-500">
                                <span className="text-lg font-bold text-slate-900 block">1.2K</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Teachers</span>
                            </div>
                            <div className="dash-stat-box p-3 bg-white rounded-lg shadow-sm border-t-3 border-sky-500">
                                <span className="text-lg font-bold text-indigo-500 block">2.9K</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Active Tests</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="dash-panel bg-white p-4 rounded-lg shadow-sm flex flex-col justify-center">
                                <h6 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Student Enrollment Growth Trend</h6>
                                <div className="w-full h-20 mt-2">
                                    <svg viewBox="0 0 200 80" className="w-full h-full overflow-visible">
                                        <defs>
                                            <linearGradient id="chart-area-grad" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3"/>
                                                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0"/>
                                            </linearGradient>
                                        </defs>
                                        <path d="M 0 70 Q 30 60 60 45 T 120 30 T 180 15 L 180 80 L 0 80 Z" fill="url(#chart-area-grad)"/>
                                        <path d="M 0 70 Q 30 60 60 45 T 120 30 T 180 15" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round"/>
                                        <circle cx="180" cy="15" r="3.5" fill="var(--primary)" stroke="#fff" strokeWidth="1.5" />
                                        <text x="10" y="78" fill="var(--text-muted)" fontSize="6">2024</text>
                                        <text x="90" y="78" fill="var(--text-muted)" fontSize="6">2025</text>
                                        <text x="170" y="78" fill="var(--text-muted)" fontSize="6">2026</text>
                                    </svg>
                                </div>
                            </div>

                            <div className="dash-panel bg-white p-4 rounded-lg shadow-sm">
                                <h6 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">Grievance Complaints Pipeline ({activeTickets.length} Pending)</h6>
                                <div className="flex flex-col gap-2">
                                    {activeTickets.length > 0 ? (
                                        activeTickets.map(ticket => (
                                            <div 
                                                key={ticket.id} 
                                                className={`flex justify-between items-center text-xs p-2 rounded border border-slate-100 text-left border-l-3 ${ticket.severity === 'warning' ? 'border-l-yellow-500' : 'border-l-red-500'}`}
                                            >
                                                <span className="font-medium text-slate-800">{ticket.name}</span>
                                                <button 
                                                    className="sim-btn-small py-1 px-3.5 rounded text-[10px] font-bold text-white transition bg-slate-800 hover:bg-slate-900"
                                                    onClick={() => {
                                                        const nextTickets = tickets.map(t => t.id === ticket.id ? { ...t, resolved: true } : t);
                                                        setTickets(nextTickets);
                                                    }}
                                                >
                                                    Resolve
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-xs text-emerald-500 font-bold border border-dashed border-emerald-200 p-4 rounded bg-emerald-50/20">
                                            ✓ All student grievances resolved successfully!
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'chairman':
                return (
                    <div className="dash-sim-wrapper text-slate-800">
                        <div className="dash-header-section">
                            <div className="dash-user-profile">
                                <div className="dash-avatar bg-emerald-500 text-white font-extrabold shadow-sm">B</div>
                                <div className="dash-user-info">
                                    <h5 className="font-bold text-slate-900 text-sm">Chairman Suite</h5>
                                    <span className="text-xs text-slate-500">Quantex Board Console</span>
                                </div>
                            </div>
                            <span className="pulse-indicator bg-emerald-50 text-emerald-600 border border-emerald-200 py-1 px-3 rounded-full text-xs font-bold">Secure Connection</span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                            <div className="dash-stat-box p-3 bg-white rounded-lg shadow-sm border-t-3 border-emerald-500">
                                <span className="text-lg font-bold text-slate-900 block">8</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Campuses</span>
                            </div>
                            <div className="dash-stat-box p-3 bg-white rounded-lg shadow-sm border-t-3 border-indigo-500">
                                <span className="text-lg font-bold text-indigo-600 block">18.5K</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Total Enrolled</span>
                            </div>
                            <div className="dash-stat-box p-3 bg-white rounded-lg shadow-sm border-t-3 border-emerald-500">
                                <span className="text-lg font-bold text-emerald-600 block">92%</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Success Target</span>
                            </div>
                            <div className="dash-stat-box p-3 bg-white rounded-lg shadow-sm border-t-3 border-purple-500">
                                <span className="text-lg font-bold text-purple-600 block">+70%</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Manual Work Cut</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="dash-panel bg-white p-4 rounded-lg shadow-sm">
                                <h6 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">Success Rate (2023-2027)</h6>
                                <div className="flex justify-between items-end h-28 pt-2.5">
                                    {[
                                        { year: 2023, pct: '45%', height: '45%', color: 'bg-emerald-500', desc: 'Success Rate: 45% | Campuses: 4 | Enrollment: 6.2K' },
                                        { year: 2024, pct: '57%', height: '57%', color: 'bg-emerald-500', desc: 'Success Rate: 57% | Campuses: 5 | Enrollment: 8.4K' },
                                        { year: 2025, pct: '68%', height: '68%', color: 'bg-emerald-500', desc: 'Success Rate: 68% | Campuses: 6 | Enrollment: 11.2K' },
                                        { year: 2026, pct: '78%', height: '78%', color: 'bg-emerald-500', desc: 'Success Rate: 78% | Campuses: 8 | Enrollment: 15.6K' },
                                        { year: 2027, pct: '92%', height: '92%', color: 'bg-orange-500', desc: 'Success Rate: 92% (Predicted) | Campuses: 8 | Enrollment: 18.5K' }
                                    ].map((col) => (
                                        <div 
                                            key={col.year} 
                                            className="flex flex-col items-center flex-grow cursor-pointer group"
                                            onClick={() => setSelectedYear(col)}
                                            style={{ opacity: selectedYear && selectedYear.year === col.year ? 1 : 0.6 }}
                                        >
                                            <div className="w-7 bg-slate-100 rounded-t overflow-hidden relative" style={{ height: '75px' }}>
                                                <div className={`absolute bottom-0 left-0 right-0 ${col.color} transition-all`} style={{ height: col.height }}></div>
                                            </div>
                                            <span className="text-[9px] text-slate-500 font-semibold mt-1">{col.year}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="dash-panel bg-white p-4 rounded-lg shadow-sm flex flex-col justify-between">
                                <h6 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">Board Room Analyzer</h6>
                                <div className="flex flex-col gap-2.5 text-xs text-left">
                                    <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg min-h-20">
                                        {selectedYear ? (
                                            <>
                                                <strong className="text-emerald-600 text-sm block mb-1">{selectedYear.year} Metrics</strong>
                                                <span className="text-slate-600 leading-normal">{selectedYear.desc}</span>
                                            </>
                                        ) : (
                                            <span className="text-slate-400">Click any growth bar column to inspect strategic multi-year performance logs.</span>
                                        )}
                                    </div>
                                    <div className="flex justify-between items-center text-slate-800 text-[10px]">
                                        <span className="font-semibold">Adoptions Growth Rate</span>
                                        <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="bg-emerald-500 h-full w-[82%]"></div>
                                        </div>
                                        <span className="font-bold text-emerald-500">82%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <section id="solve-by-role" className="solve-section py-16 px-4 md:px-0 bg-slate-900/30 border-b border-white/5">
            <div className="container mx-auto max-w-[1240px]">
                <div className="section-header text-center mb-10">
                    <h2 className="section-title text-3xl font-extrabold text-white">Built for Everyone. <span className="gradient-text">Designed for Success.</span></h2>
                    <p className="section-desc text-slate-400 mt-2 max-w-2xl mx-auto">Select your role to see how Quantex Academic Intelligence Platform resolves your unique challenges and presents you with the tools you need.</p>
                </div>

                {/* Stakeholder Navigation Tabs */}
                <div className="role-tabs grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-8 max-w-4xl mx-auto">
                    {[
                        { id: 'student', label: 'Student Portal', emoji: '🎓' },
                        { id: 'teacher', label: 'Teacher Console', emoji: '👩‍🏫' },
                        { id: 'hod', label: 'HOD Commander', emoji: '📊' },
                        { id: 'parent', label: 'Parent App Feed', emoji: '👪' },
                        { id: 'admin', label: 'Administration', emoji: '🏫' },
                        { id: 'chairman', label: 'Chairman Suite', emoji: '🏢' }
                    ].map((tab) => (
                        <button 
                            key={tab.id}
                            className={`role-tab flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-bold border border-white/5 transition-all ${activeRole === tab.id ? 'active bg-indigo-500 text-white shadow-lg border-indigo-500' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
                            onClick={() => setActiveRole(tab.id)}
                        >
                            <span>{tab.emoji}</span>
                            <span className="text-xs">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Interactive Display Board */}
                <div className="role-board glass-container grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 rounded-2xl relative overflow-hidden border border-white/10 bg-slate-950/40">
                    {/* Info Side */}
                    <div className="role-info-side lg:col-span-5 flex flex-col text-left">
                        <div className="role-badge text-xs font-bold tracking-wider text-orange-500 mb-2 uppercase">STAKEHOLDER PROFILE</div>
                        <h3 className="role-board-title text-2xl font-extrabold text-white mb-2" id="role-title">{activeData.title}</h3>
                        <p className="role-board-intro text-slate-400 text-sm leading-relaxed mb-6" id="role-intro">{activeData.intro}</p>
                        
                        <div className="challenges-block mb-6">
                            <h4 className="text-xs font-extrabold uppercase text-white tracking-wide mb-3">Current Challenges Faced</h4>
                            <ul className="challenge-list flex flex-col gap-2.5 text-xs text-slate-400">
                                {activeData.challenges.map((challenge, idx) => (
                                    <li key={idx} className="relative pl-6 leading-relaxed">
                                        <span className="absolute left-0 text-red-500 font-bold">✕</span>
                                        {challenge}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="solutions-block">
                            <h4 className="text-xs font-extrabold uppercase text-white tracking-wide mb-3">How Quantex Solves It</h4>
                            <ul className="solution-list flex flex-col gap-2.5 text-xs text-slate-300">
                                {activeData.solutions.map((solution, idx) => (
                                    <li key={idx} className="relative pl-6 leading-relaxed">
                                        <span className="absolute left-0 text-emerald-500 font-bold">✓</span>
                                        {solution}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    {/* Live Simulator View */}
                    <div className="role-dashboard-side lg:col-span-7 flex flex-col">
                        <div className="simulator-window bg-slate-950 border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col h-full min-h-[480px]">
                            {/* Browser Mockup Header */}
                            <div className="simulator-header bg-slate-900 border-b border-white/10 py-2.5 px-4 flex items-center justify-between gap-3 select-none">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                </div>
                                <span className="sim-url text-[10px] text-slate-500 bg-slate-950 border border-white/5 py-1 px-3 rounded-md flex-grow max-w-sm text-center truncate">{activeData.url}</span>
                                
                                {/* View Toggle Buttons */}
                                <div className="sim-view-toggle flex bg-slate-950 border border-white/5 p-0.5 rounded-md text-[10px] font-bold text-slate-400">
                                    <button 
                                        className={`view-toggle-btn px-2.5 py-0.5 rounded transition ${viewMode === 'interactive' ? 'active bg-indigo-500 text-white' : 'hover:text-white'}`}
                                        onClick={() => setViewMode('interactive')}
                                    >
                                        Live
                                    </button>
                                    <button 
                                        className={`view-toggle-btn px-2.5 py-0.5 rounded transition ${viewMode === 'screenshot' ? 'active bg-indigo-500 text-white' : 'hover:text-white'}`}
                                        onClick={() => setViewMode('screenshot')}
                                    >
                                        Mockup
                                    </button>
                                </div>
                            </div>
                            
                            {/* Canvas body */}
                            <div className="simulator-canvas flex-grow p-4 md:p-6 overflow-y-auto max-h-[500px]">
                                {viewMode === 'screenshot' ? (
                                    <img 
                                        src={`${activeRole}_dashboard.jpg`} 
                                        className="screenshot-view-img w-full h-full object-cover rounded-lg border border-white/5" 
                                        alt={`${activeData.title} Widescreen Mockup`} 
                                    />
                                ) : (
                                    renderInteractiveDashboard()
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

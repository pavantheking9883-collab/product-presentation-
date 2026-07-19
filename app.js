// Stakeholders Data (Challenges, Solutions, and Custom Configurations)
const stakeholderData = {
    student: {
        title: "Quantex Student Companion",
        url: "https://academic-companion.quantexsys.com/student-dashboard",
        intro: "Acts as a personal academic guide for every student, pinpointing exact learning gaps, managing assignments, and relieving competitive exam stress.",
        challenges: [
            "Lack of personalized study paths; studying randomly without prioritization.",
            "Know marks but have no clear analysis of why they lost scores or where the weak areas lie.",
            "Extreme stress and anxiety regarding major exams like JEE, NEET, and board exams.",
            "Hostel management issues like tedious manual leave requests and lack of safety transparency."
        ],
        solutions: [
            "Provides automated daily study plans and concept revision schedules tailored to performance.",
            "AI Recommendation Engine isolates exact weak chapters (e.g., Integration, Chemical Equilibrium).",
            "Mock Test Intelligence and Rank Predictors trace preparation progress with confidence.",
            "Digital Hostel Module enables transparent leave requests, food feedback, and direct warden contact."
        ]
    },
    teacher: {
        title: "Teacher Empowerment Dashboard",
        url: "https://academic-companion.quantexsys.com/teacher-portal",
        intro: "Reduces teachers' administrative workloads by automating routine tasks, allowing them to focus entirely on tutoring and active student intervention.",
        challenges: [
            "Troublesome work maintaining manual attendance, leave reports, and class timetables.",
            "High faculty workloads from managing scores, assignments, and behavior remarks across 100+ students.",
            "Difficulty identifying conceptual gaps across sections until actual exams are completed.",
            "Lack of structures to collect student feedback and measure overall teaching effectiveness."
        ],
        solutions: [
            "Face Recognition Attendance automates student check-ins in seconds with 100% accuracy.",
            "All-in-One Assignment Module allows instant question paper generation, sharing, and submission tracking.",
            "Topic-wise and section-wise mock performance analysis detects learning gaps instantly.",
            "Digital student records log positive achievements, daily remarks, and behavioral feedback."
        ]
    },
    hod: {
        title: "HOD Department Command Center",
        url: "https://academic-companion.quantexsys.com/hod-analytics",
        intro: "Consolidates classroom reports and instructor statistics into a unified department view, ensuring quality control and measurable outcomes.",
        challenges: [
            "No complete visibility of faculty performance across multiple classrooms and branches.",
            "Unable to analyze section-to-section performance gaps or identify weak subject areas early.",
            "Excessive administrative work consolidating manual grading reports from different teachers.",
            "Decisions regarding study plans and student interventions based on assumptions rather than data."
        ],
        solutions: [
            "Interactive dashboards benchmark teacher performance and syllabus coverage metrics.",
            "Automated reports display performance trends comparing Section A, B, and C.",
            "Real-time student feedback reports highlight specific educators or courses requiring support.",
            "Provides concrete topic performance insights to direct subject-wide study interventions."
        ]
    },
    parent: {
        title: "Parent Visibility Portal",
        url: "https://academic-companion.quantexsys.com/parent-feed",
        intro: "Provides parents with absolute real-time transparency into their child's daily progress, attendance, and campus safety, eliminating communication delays.",
        challenges: [
            "Limited communication with the institution; only learning about grades during annual meetings.",
            "Unsure whether the child is attending classes or actively engaging in the academic routine.",
            "Late awareness of serious academic slides or behavioral concerns when it is already difficult to intervene.",
            "Anxiety regarding residential hostellers' food, health, and leave safety."
        ],
        solutions: [
            "Real-time Parent Dashboard displays daily performance charts and concept tracking.",
            "Continuous Attendance Feeds and active teacher remarks sent directly via instant alerts.",
            "Early warning notifications highlight sudden dips in mock scores or behavioral logs.",
            "Dedicated Hostel Tracker logs leave request updates, warden messages, and attendance check-ins."
        ]
    },
    admin: {
        title: "Principal & Admin Dashboard",
        url: "https://academic-companion.quantexsys.com/admin-control",
        intro: "Gives administrators a high-level operational overview to track teacher attendance, campus safety logs, student enrollment growth, and grievance resolution pipelines.",
        challenges: [
            "Overseeing thousands of students and teachers makes individual tracking virtually impossible.",
            "Problems such as drops in exam performance or high absences are discovered far too late.",
            "Student complaints regarding hostel facilities, faculty, or transport get forgotten or delayed.",
            "Complex reporting workflows between wardens, teachers, and main administration."
        ],
        solutions: [
            "Highlights Board features top operational alerts (e.g., pending leaves, low-attendance students).",
            "Automatic notification pipelines connect principal dashboards with emergency reports.",
            "Ticketing and tracking system categorizes student complaints, sorting by urgency.",
            "Integrated databases sync hostel wardens, security, and class coordinators automatically."
        ]
    },
    chairman: {
        title: "Institutional Intelligence Console",
        url: "https://academic-companion.quantexsys.com/chairman-insights",
        intro: "Provides the Board of Trustees and Chairmen with high-level multi-campus success indices, AI adoption ROI, competitive metrics, and enrollment analytics.",
        challenges: [
            "Low overall performance metrics directly impacting the institution's admissions percentage.",
            "Difficulty maintaining competitive examination rankings (JEE, NEET, EAMCET) across campuses.",
            "Managing institution assets and evaluating strategic budgets based on scattered reports.",
            "Heavy drop in faculty performance caused by administrative exhaustion."
        ],
        solutions: [
            "Consolidated success rate graphs map the direct impact of AI-Adoption over a multi-year cycle.",
            "Competitor benchmarking tools compare success indices with state averages.",
            "ROI dashboards illustrate administrative hours saved, proving efficiency gains.",
            "Enterprise-grade scaling dashboard covers multi-branch performance metrics in a click."
        ]
    }
};

// State Variables for Interactive Mockups
let faceScanning = false;
let studentTasksChecked = [false, false, false];
let currentViewMode = "interactive"; // "interactive" or "screenshot"

// DOMContentLoaded Event Listener
document.addEventListener("DOMContentLoaded", () => {
    // Navigation Toggler for Mobile Layouts
    const mobileToggle = document.querySelector(".mobile-nav-toggle");
    const nav = document.querySelector(".nav");
    
    if (mobileToggle && nav) {
        mobileToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
            mobileToggle.classList.toggle("active");
        });
        
        // Close menu on clicking nav link
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                mobileToggle.classList.remove("active");
            });
        });
    }

    // Header Scroll Handling (Transparent at top, Blur/solid background on scroll)
    const header = document.querySelector(".header");
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Run once initially in case page starts scrolled
    }

    // Hero Background Video Sound Control
    const bgVideo = document.getElementById("hero-bg-video");
    const soundToggle = document.getElementById("hero-sound-toggle");
    
    if (bgVideo && soundToggle) {
        soundToggle.addEventListener("click", () => {
            const isMuted = bgVideo.muted;
            bgVideo.muted = !isMuted;
            
            // Update button text and icon
            const icon = soundToggle.querySelector(".sound-toggle-icon");
            const text = soundToggle.querySelector(".sound-toggle-text");
            
            if (bgVideo.muted) {
                if (icon) icon.innerText = "🔇";
                if (text) text.innerText = "Sound Off";
            } else {
                if (icon) icon.innerText = "🔊";
                if (text) text.innerText = "Sound On";
            }
        });
    }

    // Theme Toggle (Light / Dark Mode)
    const themeToggle = document.getElementById("theme-toggle");
    const darkIcon = document.querySelector(".theme-icon-dark");
    const lightIcon = document.querySelector(".theme-icon-light");

    const setTheme = (themeName) => {
        if (themeName === "light") {
            document.body.classList.add("light-theme");
            if (darkIcon) darkIcon.style.display = "none";
            if (lightIcon) lightIcon.style.display = "block";
        } else {
            document.body.classList.remove("light-theme");
            if (darkIcon) darkIcon.style.display = "block";
            if (lightIcon) lightIcon.style.display = "none";
        }
        // Redraw active mock dashboard to load appropriate styles
        const activeTab = document.querySelector(".role-tab.active");
        if (activeTab) {
            updateRoleBoard(activeTab.dataset.role);
        }
    };

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const isLight = document.body.classList.contains("light-theme");
            const newTheme = isLight ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            setTheme(newTheme);
        });
    }

    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    // Initialize Stakeholder Click Event Listeners
    const roleTabs = document.querySelectorAll(".role-tab");
    roleTabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            const currentTab = e.currentTarget;
            roleTabs.forEach(t => t.classList.remove("active"));
            currentTab.classList.add("active");
            
            const selectedRole = currentTab.dataset.role;
            updateRoleBoard(selectedRole);
        });
    });

    // Initialize SVG Hub Nodes Interactivity
    const hubNodes = document.querySelectorAll(".outer-node-group");
    hubNodes.forEach(node => {
        node.addEventListener("click", () => {
            const role = node.dataset.role;
            if (!role) return;

            const tabButton = document.querySelector(`.role-tab[data-role="${role}"]`);
            if (tabButton) {
                tabButton.click();
                const section = document.getElementById("solve-by-role");
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // Initialize Default Role
    updateRoleBoard("student");

    // Initialize ROI Calculator Event Listeners
    const sliderStudents = document.getElementById("range-students");
    const sliderTeachers = document.getElementById("range-teachers");
    const sliderTests = document.getElementById("range-tests");

    if (sliderStudents && sliderTeachers && sliderTests) {
        const updateROI = () => {
            const S = parseInt(sliderStudents.value);
            const T = parseInt(sliderTeachers.value);
            const M = parseInt(sliderTests.value);

            // Display Values
            document.getElementById("val-students").innerText = S;
            document.getElementById("val-teachers").innerText = T;
            document.getElementById("val-tests").innerText = M;

            // Projections Logic
            // Admin Time Saved = 8 hours per teacher + 0.1 hours per student (grading + attendance automated)
            const hoursSaved = Math.round((T * 8) + (S * 0.15));
            document.getElementById("res-hours-saved").innerText = `${hoursSaved} hrs`;

            // Performance Growths scaling with mock tests count
            let performanceRate = "+25%";
            if (M >= 5 && M < 12) performanceRate = "+30%";
            else if (M >= 12 && M < 20) performanceRate = "+35%";
            else if (M >= 20) performanceRate = "+42%";
            document.getElementById("res-performance").innerText = performanceRate;

            // Efficiency reduction stays strong
            let efficiencyRed = "70%";
            if (T > 100) efficiencyRed = "75%";
            if (T > 250) efficiencyRed = "80%";
            document.getElementById("res-efficiency").innerText = `${efficiencyRed}`;
        };

        sliderStudents.addEventListener("input", updateROI);
        sliderTeachers.addEventListener("input", updateROI);
        sliderTests.addEventListener("input", updateROI);
        
        // Trigger initial calculate
        updateROI();
    }

    // Demo Form Submission (Background Email/Notification Submission)
    const demoForm = document.getElementById("demo-form");
    if (demoForm) {
        demoForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            
            const name = document.getElementById("form-name").value;
            const email = document.getElementById("form-email").value;
            const phone = document.getElementById("form-phone").value;
            const role = document.getElementById("form-role").value;
            const message = document.getElementById("form-message").value;
            
            const toast = document.getElementById("toast");
            toast.innerText = "Submitting your request...";
            toast.style.background = "var(--primary)";
            toast.classList.add("show");
            
            // Credentials
            const web3FormsAccessKey = "6659c8c0-10b0-4d2d-80ad-e69f5a958d69"; 
            const tgBotToken = "8739804225:AAE23UaWdWtl7CL1dbTCFn-jHRBVk-ZMcAo";
            const tgUserId = "5816427459";
            
            // Format the Telegram notification message
            const tgMessage = `🚨 <b>New Demo Requested!</b> 🚨\n\n` +
                              `👤 <b>Name:</b> ${name}\n` +
                              `📧 <b>Email:</b> ${email}\n` +
                              `💼 <b>Role:</b> ${role}\n` +
                              `🏫 <b>Institution Details:</b> ${message}\n\n` +
                              `📞 <b>Call them now:</b> <a href="tel:${phone}">${phone}</a>`;
            
            // Send Telegram message in background
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
            }).then(() => {
                console.log("Telegram notification sent successfully.");
            }).catch(err => {
                console.warn("Telegram notification failed: ", err);
            });
            
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
                        name: name,
                        email: email,
                        phone: phone,
                        role: role,
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
                    toast.innerText = "Demo requested successfully! We will contact you soon.";
                    toast.style.background = "var(--emerald)";
                } else {
                    toast.innerText = "Submission error: " + (result.message || "Please try again.");
                    toast.style.background = "var(--red)";
                }
            } catch (err) {
                console.error("Form submission failed: ", err);
                toast.innerText = "Network error. Please check your connection.";
                toast.style.background = "var(--red)";
            }
            
            setTimeout(() => {
                toast.classList.remove("show");
            }, 4000);
            
            demoForm.reset();
        });
    }

    // Simulator View Toggle Event Listeners
    const viewButtons = document.querySelectorAll(".view-toggle-btn");
    viewButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const mode = e.currentTarget.dataset.view;
            currentViewMode = mode;

            // Toggle active classes
            viewButtons.forEach(b => {
                if (b.dataset.view === mode) b.classList.add("active");
                else b.classList.remove("active");
            });

            // Re-render active role board
            const activeTab = document.querySelector(".role-tab.active");
            if (activeTab) {
                updateRoleBoard(activeTab.dataset.role);
            }
        });
    });


});

// Update the Stakeholder display board
function updateRoleBoard(roleKey) {
    const data = stakeholderData[roleKey];
    if (!data) return;

    // Update textual information
    document.getElementById("role-title").innerText = data.title;
    document.getElementById("role-intro").innerText = data.intro;
    document.getElementById("sim-url").innerText = data.url;

    // Render Challenges List
    const challengeList = document.getElementById("role-challenges");
    challengeList.innerHTML = "";
    data.challenges.forEach(challenge => {
        const li = document.createElement("li");
        li.innerText = challenge;
        challengeList.appendChild(li);
    });

    // Render Solutions List
    const solutionList = document.getElementById("role-solutions");
    solutionList.innerHTML = "";
    data.solutions.forEach(solution => {
        const li = document.createElement("li");
        li.innerText = solution;
        solutionList.appendChild(li);
    });

    // Show/hide view toggle - enabled for all roles
    const toggleBar = document.getElementById("sim-view-toggle");
    if (toggleBar) {
        toggleBar.style.display = "flex";
    }

    // Render Dashboard Canvas
    const canvas = document.getElementById("sim-canvas");
    if (currentViewMode === "screenshot") {
        canvas.innerHTML = `<img src="${roleKey}_dashboard.jpg" class="screenshot-view-img" alt="${data.title} Screenshot">`;
        canvas.style.padding = "0"; // Flush image to browser mockup edges
    } else {
        canvas.innerHTML = getDashboardMockupHTML(roleKey);
        canvas.style.padding = "24px"; // Restore canvas standard padding
        bindDashboardSimEvents(roleKey);
    }
}

// Get the corresponding Dashboard simulator HTML
function getDashboardMockupHTML(roleKey) {
    switch (roleKey) {
        case "student":
            return `
                <div class="dash-header-section">
                    <div class="dash-user-profile">
                        <div class="dash-avatar" style="background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%); font-weight:800; box-shadow: 0 4px 10px rgba(99, 102, 241, 0.25); border: 2px solid rgba(255,255,255,0.85);">AR</div>
                        <div class="dash-user-info">
                            <h5 style="font-weight: 700; color: var(--text-main); margin-bottom: 2px;">Ananya Reddy</h5>
                            <span style="font-size:10px; color: var(--text-muted); font-weight: 500;">Class 12 - MPC | Roll No: 23891</span>
                        </div>
                    </div>
                    <span class="pulse-indicator" style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">Mock Active</span>
                </div>

                <!-- Live NEET Mock Exam Banner Card -->
                <div class="dash-panel" id="neet-mock-launcher-card" style="margin-bottom: 16px; background: linear-gradient(135deg, rgba(229,57,53,0.12) 0%, rgba(229,57,53,0.03) 100%); border: 1px solid rgba(229,57,53,0.25); position:relative; overflow:hidden;">
                    <div style="position:absolute; right:-10px; top:-10px; font-size:64px; opacity:0.04; pointer-events:none;">🩺</div>
                    <h6 style="color: var(--red); font-weight:800; font-size:10px; text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;">🔥 LIVE EXAM SIMULATOR</h6>
                    <h5 style="margin-bottom:6px; font-size:13px; font-weight:700; color:var(--text-main);">Deekshya Medical Academy NEET 2026 Test Series</h5>
                    <p style="font-size:11px; color:var(--text-muted); margin-bottom:12px; line-height:1.45;">
                        Attempt actual Biology, Chemistry, and Physics questions from the Deekshya test series with real-time marking (+4/-1) and detailed explanations.
                    </p>
                    <button class="btn btn-primary sim-btn-small" style="background:var(--red); border:none; color:#fff; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 4px 12px rgba(229,57,53,0.2);" id="btn-launch-neet-mock">Try NEET Mock Test Right Now →</button>
                </div>
                
                <div class="dash-stats-strip" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 16px;">
                    <div class="dash-stat-box" style="border-top: 3px solid var(--primary); padding: 12px 14px; text-align: left; background: #FFFFFF; border-radius: 8px; box-shadow: var(--shadow-sm);">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                            <span class="dash-val" style="font-size: 16px; font-weight: 800; color: var(--text-main);">24</span>
                            <svg style="width:16px; height:16px; color:var(--primary); opacity:0.8;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        </div>
                        <div class="dash-lbl" style="font-size: 9px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin: 0;">Tests Took</div>
                    </div>
                    <div class="dash-stat-box" style="border-top: 3px solid var(--blue); padding: 12px 14px; text-align: left; background: #FFFFFF; border-radius: 8px; box-shadow: var(--shadow-sm);">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                            <span class="dash-val" style="font-size: 16px; font-weight: 800; color: var(--blue);">78.6%</span>
                            <svg style="width:16px; height:16px; color:var(--blue); opacity:0.8;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path></svg>
                        </div>
                        <div class="dash-lbl" style="font-size: 9px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin: 0;">Avg Score</div>
                    </div>
                    <div class="dash-stat-box" style="border-top: 3px solid var(--accent); padding: 12px 14px; text-align: left; background: #FFFFFF; border-radius: 8px; box-shadow: var(--shadow-sm);">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                            <span class="dash-val" style="font-size: 16px; font-weight: 800; color: var(--accent);">156</span>
                            <svg style="width:16px; height:16px; color:var(--accent); opacity:0.8;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path><path d="M12 2a4 4 0 0 0-4 4v5a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"></path></svg>
                        </div>
                        <div class="dash-lbl" style="font-size: 9px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin: 0;">All India Rank</div>
                    </div>
                    <div class="dash-stat-box" style="border-top: 3px solid var(--purple); padding: 12px 14px; text-align: left; background: #FFFFFF; border-radius: 8px; box-shadow: var(--shadow-sm);">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                            <span class="dash-val" style="font-size: 16px; font-weight: 800; color: var(--purple);">12 Days</span>
                            <svg style="width:16px; height:16px; color:var(--purple); opacity:0.8;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
                        </div>
                        <div class="dash-lbl" style="font-size: 9px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin: 0;">Study Streak</div>
                    </div>
                </div>

                <!-- Interactive Mock Test & Gap Analysis Panel -->
                <div class="dash-panel" style="margin-bottom: 16px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
                        <h6 style="margin-bottom:0; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted);">Mock Test Analytics & AI Gap Analysis</h6>
                        <select id="mock-test-selector" style="background:rgba(15, 23, 42, 0.03); border:1px solid var(--border-color); color:var(--text-main); font-size:10px; padding:4px 8px; border-radius:6px; font-family:var(--font-heading); font-weight:600; cursor:pointer;">
                            <option value="test5">JEE Mock Test 5 (Recent)</option>
                            <option value="test4">JEE Mock Test 4</option>
                            <option value="test3">JEE Mock Test 3</option>
                            <option value="test2">JEE Mock Test 2</option>
                            <option value="test1">JEE Mock Test 1</option>
                        </select>
                    </div>

                    <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:12px; margin-bottom:14px;">
                        <div style="background:rgba(15, 23, 42, 0.01); border:1px solid var(--border-color); border-left:3px solid var(--primary); padding:10px; border-radius:8px; display:flex; align-items:center; justify-content:space-between; gap:10px;">
                            <div style="text-align: left;">
                                <span style="font-size:8px; color:var(--text-muted); text-transform:uppercase; font-weight:700; display:block; margin-bottom:4px;">Score</span>
                                <div id="mock-score-val" style="font-size:14px; font-weight:800; color:var(--primary);">186 / 300</div>
                            </div>
                            <svg width="28" height="28" viewBox="0 0 36 36">
                                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="rgba(99, 102, 241, 0.08)" stroke-width="3" />
                                <circle id="score-ring-path" cx="18" cy="18" r="15.9155" fill="none" stroke="var(--primary)" stroke-width="3" stroke-dasharray="62, 100" stroke-linecap="round" transform="rotate(-90 18 18)" />
                            </svg>
                        </div>
                        <div style="background:rgba(15, 23, 42, 0.01); border:1px solid var(--border-color); border-left:3px solid var(--accent); padding:10px; border-radius:8px; display:flex; align-items:center; justify-content:space-between; gap:10px;">
                            <div style="text-align: left;">
                                <span style="font-size:8px; color:var(--text-muted); text-transform:uppercase; font-weight:700; display:block; margin-bottom:4px;">Percentile</span>
                                <div id="mock-pct-val" style="font-size:14px; font-weight:800; color:var(--accent);">99.12%</div>
                            </div>
                            <svg width="28" height="28" viewBox="0 0 36 36">
                                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="rgba(245, 158, 11, 0.08)" stroke-width="3" />
                                <circle id="pct-ring-path" cx="18" cy="18" r="15.9155" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="99.12, 100" stroke-linecap="round" transform="rotate(-90 18 18)" />
                            </svg>
                        </div>
                        <div style="background:rgba(15, 23, 42, 0.01); border:1px solid var(--border-color); border-left:3px solid var(--purple); padding:10px; border-radius:8px; display:flex; align-items:center; justify-content:space-between; gap:10px;">
                            <div style="text-align: left;">
                                <span style="font-size:8px; color:var(--text-muted); text-transform:uppercase; font-weight:700; display:block; margin-bottom:4px;">Predicted Rank</span>
                                <div id="mock-rank-val" style="font-size:14px; font-weight:800; color:var(--purple);">#1,120</div>
                            </div>
                            <div style="font-size: 15px; background: rgba(168, 85, 247, 0.08); width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--purple);">🏆</div>
                        </div>
                    </div>

                    <div style="background:rgba(99,102,241,0.03); border:1px dashed rgba(99, 102, 241, 0.4); padding:12px; border-radius:8px; font-size:11px; margin-bottom:14px; color:var(--text-main); line-height:1.5; border-left: 4px solid var(--primary); text-align: left;" id="mock-error-diagnosis">
                        <strong>AI Gap Analysis:</strong> Lost 24 marks in Maths due to <em>Formula recall gaps</em> in integration. Silly mistakes detected in Chemistry.
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-size:10px; color:var(--text-muted); font-style:italic;" id="mock-analysis-time">Last scanned: 2 mins ago</span>
                        <button class="sim-btn-small" id="btn-mock-recheck" style="background:var(--accent); color:#fff; border:none; padding:6px 14px; border-radius:6px; cursor:pointer; font-weight:600; box-shadow: 0 4px 10px rgba(245, 158, 11, 0.15);">Run AI Concept Re-check</button>
                    </div>
                </div>
                
                <div class="dash-row-grid-2">
                    <div class="dash-panel">
                        <h6 style="font-size:11px; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); margin-bottom:12px;">Weak Concepts (AI Identified)</h6>
                        <div class="weak-badge-list" style="display:flex; flex-direction:column; gap:8px;">
                            <div class="weak-item" id="weak-item-1" style="display:flex; justify-content:space-between; align-items:center; padding:8px 12px; border-radius:8px; border: 1px solid rgba(239, 68, 68, 0.15); background:rgba(239, 68, 68, 0.03); border-left:3px solid var(--red);">
                                <div style="display:flex; flex-direction:column; gap:2px; text-align: left;">
                                    <span class="weak-name" style="font-weight:600; font-size:12px; color:var(--text-main);">Substitution Integration</span>
                                    <span style="font-size:9px; color:var(--red); font-weight:600; display:flex; align-items:center; gap:4px;">
                                        <span style="display:inline-block; width:4px; height:4px; background:var(--red); border-radius:50%;"></span>
                                        High Priority (Maths)
                                    </span>
                                </div>
                                <button class="sim-btn-small" id="btn-revise-1" style="background:var(--red); border:none; padding:4px 10px; border-radius:4px; font-size:10px; color:#fff;">Revise</button>
                            </div>
                            <div class="weak-item" id="weak-item-2" style="display:flex; justify-content:space-between; align-items:center; padding:8px 12px; border-radius:8px; border: 1px solid rgba(239, 68, 68, 0.15); background:rgba(239, 68, 68, 0.03); border-left:3px solid var(--red);">
                                <div style="display:flex; flex-direction:column; gap:2px; text-align: left;">
                                    <span class="weak-name" style="font-weight:600; font-size:12px; color:var(--text-main);">Current Electricity</span>
                                    <span style="font-size:9px; color:var(--red); font-weight:600; display:flex; align-items:center; gap:4px;">
                                        <span style="display:inline-block; width:4px; height:4px; background:var(--red); border-radius:50%;"></span>
                                        Critical Gap (Physics)
                                    </span>
                                </div>
                                <button class="sim-btn-small" id="btn-revise-2" style="background:var(--red); border:none; padding:4px 10px; border-radius:4px; font-size:10px; color:#fff;">Revise</button>
                            </div>
                            <div class="weak-item" id="weak-item-3" style="display:flex; justify-content:space-between; align-items:center; padding:8px 12px; border-radius:8px; border: 1px solid rgba(239, 68, 68, 0.15); background:rgba(239, 68, 68, 0.03); border-left:3px solid var(--red);">
                                <div style="display:flex; flex-direction:column; gap:2px; text-align: left;">
                                    <span class="weak-name" style="font-weight:600; font-size:12px; color:var(--text-main);">Chemical Equilibrium</span>
                                    <span style="font-size:9px; color:var(--red); font-weight:600; display:flex; align-items:center; gap:4px;">
                                        <span style="display:inline-block; width:4px; height:4px; background:var(--red); border-radius:50%;"></span>
                                        Medium Gap (Chemistry)
                                    </span>
                                </div>
                                <button class="sim-btn-small" id="btn-revise-3" style="background:var(--red); border:none; padding:4px 10px; border-radius:4px; font-size:10px; color:#fff;">Revise</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="dash-panel">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                            <h6 style="margin-bottom:0; font-size:11px; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted);">Daily Study Plan Progress</h6>
                            <span id="task-pct-badge" style="font-size:10px; font-weight:700; color:var(--primary); background:rgba(99,102,241,0.08); padding:2px 8px; border-radius:10px;"><span id="task-pct">33</span>%</span>
                        </div>
                        <!-- Visual Progress Bar -->
                        <div style="width:100%; height:6px; background:rgba(99,102,241,0.1); border-radius:3px; margin-bottom:14px; overflow:hidden;">
                            <div id="task-progress-bar" style="height:100%; width:33%; background:linear-gradient(90deg, var(--primary) 0%, var(--primary-hover) 100%); transition: width 0.4s ease; border-radius:3px;"></div>
                        </div>
                        <div class="action-plan-box" style="display:flex; flex-direction:column; gap:10px;">
                            <label style="display: flex; align-items: center; gap: 8px; font-size:12px; cursor:pointer; font-weight:500; color:var(--text-main); text-align: left;">
                                <input type="checkbox" class="study-task-chk" data-idx="0"> Solve 15 Maths Mock Questions
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px; font-size:12px; cursor:pointer; font-weight:500; color:var(--text-main); text-align: left;">
                                <input type="checkbox" class="study-task-chk" data-idx="1" checked> Revise Physics Electrostatics Theory
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px; font-size:12px; cursor:pointer; font-weight:500; color:var(--text-main); text-align: left;">
                                <input type="checkbox" class="study-task-chk" data-idx="2"> Review mistakes in Mock Test 5
                            </label>
                        </div>
                    </div>
                </div>
            `;
        
        case "teacher":
            return `
                <div class="dash-header-section">
                    <div class="dash-user-profile">
                        <div class="dash-avatar" style="background: var(--purple);">SM</div>
                        <div class="dash-user-info">
                            <h5>Mrs. Savitha M.</h5>
                            <span>Grade 12 Coordinator | Mathematics</span>
                        </div>
                    </div>
                    <span class="pulse-indicator">Class Online</span>
                </div>
                
                <div class="dash-stats-strip">
                    <div class="dash-stat-box">
                        <div class="dash-val">4</div>
                        <div class="dash-lbl">Classes</div>
                    </div>
                    <div class="dash-stat-box">
                        <div class="dash-val" style="color: var(--primary);">76%</div>
                        <div class="dash-lbl">Class Avg</div>
                    </div>
                    <div class="dash-stat-box">
                        <div class="dash-val" style="color: var(--emerald);">86%</div>
                        <div class="dash-lbl">Pass Rate</div>
                    </div>
                    <div class="dash-stat-box">
                        <div class="dash-val" style="color: var(--blue);" id="teacher-attendance-pct">75%</div>
                        <div class="dash-lbl">Attendance</div>
                    </div>
                </div>

                <div class="dash-row-grid-2">
                    <div class="dash-panel">
                        <h6>Face Recognition Attendance Tracker</h6>
                        <div class="attendance-sim-box">
                            <div class="scanner-frame" id="sim-scanner">
                                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='45' r='20' fill='%236366f1'/><path d='M20 80c0-20 15-30 30-30s30 10 30 30z' fill='%236366f1'/></svg>" class="scanner-face-img" alt="Scan Face">
                                <div class="scan-laser"></div>
                            </div>
                            <button class="btn btn-primary btn-block" id="btn-simulate-scan" style="margin-top: 12px; padding: 6px 12px; font-size:12px;">Trigger AI Attendance Scan</button>
                        </div>
                    </div>
                    
                    <div class="dash-panel">
                        <h6>Class Attendance Roster (<span id="t-present-count">3</span> / 4 Present)</h6>
                        <div style="display:flex; flex-direction:column; gap:8px;" id="roster-grid">
                            <div style="display:flex; justify-content:space-between; font-size:12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom:6px; align-items:center;">
                                <span>Ananya Reddy</span>
                                <span id="status-ananya" style="color:var(--red); font-weight:700;">Absent (Awaiting Scan)</span>
                            </div>
                            <div style="display:flex; justify-content:space-between; font-size:12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom:6px; align-items:center;">
                                <span>Lokesh Kumar</span>
                                <span style="color:var(--emerald); font-weight:700;">Present (AI Verified)</span>
                            </div>
                            <div style="display:flex; justify-content:space-between; font-size:12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom:6px; align-items:center;">
                                <span>Arjun Mehta</span>
                                <span style="color:var(--emerald); font-weight:700;">Present (AI Verified)</span>
                            </div>
                            <div style="display:flex; justify-content:space-between; font-size:12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom:6px; align-items:center;">
                                <span>Sneha Patil</span>
                                <span style="color:var(--emerald); font-weight:700;">Present (AI Verified)</span>
                            </div>
                        </div>
                        <div class="attendance-logs" id="attendance-log-box" style="display:none; font-size:10px; color:var(--text-muted); margin-top:10px; font-style:italic;">
                            [Log]: Biometric scan matches Ananya Reddy (Class 12 - MPC). Attendance registered!
                        </div>
                    </div>
                </div>
            `;

        case "hod":
            return `
                <div class="dash-header-section">
                    <div class="dash-user-profile">
                        <div class="dash-avatar" style="background: var(--blue);">DS</div>
                        <div class="dash-user-info">
                            <h5>Dr. Srinivas Rao</h5>
                            <span>HOD - Mathematics Department</span>
                        </div>
                    </div>
                    <span class="pulse-indicator" style="color:var(--blue);">Math Dept Active</span>
                </div>
                
                <div class="dash-stats-strip">
                    <div class="dash-stat-box">
                        <div class="dash-val">12</div>
                        <div class="dash-lbl">Math Teachers</div>
                    </div>
                    <div class="dash-stat-box">
                        <div class="dash-val" style="color: var(--purple);">6</div>
                        <div class="dash-lbl">Sections</div>
                    </div>
                    <div class="dash-stat-box">
                        <div class="dash-val" style="color: var(--primary);">81%</div>
                        <div class="dash-lbl">Dept Average</div>
                    </div>
                    <div class="dash-stat-box">
                        <div class="dash-val" style="color: var(--emerald);">94%</div>
                        <div class="dash-lbl">Syllabus Covered</div>
                    </div>
                </div>

                <div class="dash-row-grid-2">
                    <div class="dash-panel">
                        <h6>Faculty Class Averages (Click columns to inspect)</h6>
                        <div class="comparison-chart-sim" style="cursor:pointer; display:flex; align-items:flex-end; height:100px; padding-top:10px;">
                            <div class="chart-bar-column" id="hod-bar-1" data-teacher="Mr. Prasad" data-syllabus="84%" data-avg="78%" style="height:100%; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; flex-grow:1;">
                                <div class="chart-bar-fill" style="height: 84%; width:24px; background:linear-gradient(180deg, var(--primary) 0%, rgba(99,102,241,0.3) 100%); border-radius:4px 4px 0 0;" title="Mr. Prasad"></div>
                                <span class="chart-bar-lbl" style="font-size:9px; color:var(--text-muted); margin-top:4px;">Prasad</span>
                            </div>
                            <div class="chart-bar-column" id="hod-bar-2" data-teacher="Mrs. Savitha" data-syllabus="96%" data-avg="86%" style="height:100%; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; flex-grow:1;">
                                <div class="chart-bar-fill bar-accent" style="height: 96%; width:24px; background:linear-gradient(180deg, var(--purple) 0%, rgba(168,85,247,0.3) 100%); border-radius:4px 4px 0 0;" title="Mrs. Savitha"></div>
                                <span class="chart-bar-lbl" style="font-size:9px; color:var(--text-muted); margin-top:4px;">Savitha</span>
                            </div>
                            <div class="chart-bar-column" id="hod-bar-3" data-teacher="Mr. Raghavan" data-syllabus="78%" data-avg="74%" style="height:100%; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; flex-grow:1;">
                                <div class="chart-bar-fill" style="height: 78%; width:24px; background:linear-gradient(180deg, var(--primary) 0%, rgba(99,102,241,0.3) 100%); border-radius:4px 4px 0 0;" title="Mr. Raghavan"></div>
                                <span class="chart-bar-lbl" style="font-size:9px; color:var(--text-muted); margin-top:4px;">Raghavan</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="dash-panel">
                        <h6>Faculty Gap Analyzer Feed</h6>
                        <div style="display:flex; flex-direction:column; gap:10px;" id="hod-gap-feed">
                            <div style="font-size: 11px; background:rgba(255,255,255,0.01); border:1px solid var(--border-color); padding:10px; border-radius:6px;" id="hod-inspector-box">
                                <strong style="color:var(--primary); font-size:12px; display:block; margin-bottom:4px;" id="hod-inspector-name">Select a faculty column...</strong>
                                <span id="hod-inspector-stats" style="color:var(--text-muted);">Click any bar to inspect syllabus completion and class score averages instantly.</span>
                            </div>
                            <button class="btn btn-outline btn-block sim-btn-small" id="btn-generate-report" style="padding: 6px 12px; font-size:11px; width:100%;">Generate Departmental Gap Analysis Report</button>
                            <span id="report-status" style="font-size:10px; text-align:center; display:none; color:var(--emerald);">Report Compiled & Dispatched to Principal!</span>
                        </div>
                    </div>
                </div>
            `;

        case "parent":
            return `
                <div class="mobile-simulator-phone" style="max-width: 330px; background: #0F172A; border: 10px solid #1E293B; border-radius: 32px; margin: 0 auto; display: flex; flex-direction: column; overflow: hidden; position: relative; box-shadow: 0 15px 30px rgba(0,0,0,0.15); font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; text-align: left;">
                    <!-- Phone Status Bar -->
                    <div style="background:#0F172A; color:#94A3B8; padding:5px 16px; display:flex; justify-content:space-between; font-size:9px; font-weight:700; user-select:none;">
                        <span>9:41 AM</span>
                        <div style="display:flex; gap:5px; align-items:center;">
                            <span>📶</span>
                            <span>🛜</span>
                            <span>🔋 88%</span>
                        </div>
                    </div>

                    <!-- App Navigation Bar -->
                    <div style="background:#1E293B; border-bottom:1px solid rgba(255,255,255,0.06); padding:10px 14px; display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-size:11px; font-weight:800; color:var(--accent); letter-spacing:0.02em;">EduFlow Parent Hub</span>
                        <div style="display:flex; gap:10px; align-items:center;">
                            <span style="font-size:9px; color:#fff; background:rgba(245,158,11,0.2); border:1px solid rgba(245,158,11,0.3); padding:2px 6px; border-radius:10px; font-weight:600;">Feed Live</span>
                            <span style="font-size:12px; cursor:pointer;">🔔</span>
                        </div>
                    </div>

                    <!-- App Body (Scrollable) -->
                    <div style="flex-grow:1; height: 380px; overflow-y:auto; padding:12px; background:#F8FAFC; color:#0F172A;" class="parent-app-body">
                        <!-- Student Selector -->
                        <div style="background:#FFFFFF; border:1px solid rgba(15,23,42,0.08); padding:10px; border-radius:12px; margin-bottom:12px; display:flex; align-items:center; gap:10px; box-shadow:0 1px 3px rgba(0,0,0,0.02);">
                            <div style="width:34px; height:34px; border-radius:50%; background:var(--accent); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:12px;">AR</div>
                            <div style="flex-grow:1;">
                                <h6 style="margin:0; font-size:11px; font-weight:700; color:#0F172A;">Ananya Reddy</h6>
                                <span style="font-size:9px; color:#64748B;">Class 12 - MPC | Roll No: 23891</span>
                            </div>
                        </div>

                        <!-- Stats Strip Grid -->
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px;">
                            <div style="background:#FFFFFF; border:1px solid rgba(15,23,42,0.08); padding:10px; border-radius:12px; text-align:center; box-shadow:0 1px 3px rgba(0,0,0,0.02);">
                                <span style="font-size:8px; color:#64748B; text-transform:uppercase; font-weight:700; display:block;">Overall Attendance</span>
                                <div style="font-size:18px; font-weight:800; color:var(--emerald); margin:2px 0;">96.2%</div>
                                <span style="font-size:8px; color:#10B981; font-weight:600; display:block;">● Excellent Status</span>
                            </div>
                            <div style="background:#FFFFFF; border:1px solid rgba(15,23,42,0.08); padding:10px; border-radius:12px; text-align:center; box-shadow:0 1px 3px rgba(0,0,0,0.02);">
                                <span style="font-size:8px; color:#64748B; text-transform:uppercase; font-weight:700; display:block;">Academic Score</span>
                                <div style="font-size:18px; font-weight:800; color:var(--primary); margin:2px 0;">78.6%</div>
                                <span style="font-size:8px; color:#6366F1; font-weight:600; display:block;">● Top 12% Rank</span>
                            </div>
                        </div>

                        <!-- Attendance Calendar Grid -->
                        <div style="background:#FFFFFF; border:1px solid rgba(15,23,42,0.08); padding:10px; border-radius:12px; margin-bottom:12px; box-shadow:0 1px 3px rgba(0,0,0,0.02);">
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                                <h6 style="margin:0; font-size:10px; text-transform:uppercase; color:#64748B; font-weight:700; font-family:var(--font-heading);">July 2026 Attendance Grid</h6>
                                <span style="font-size:8px; color:var(--accent); font-weight:700;">(Tap day for logs)</span>
                            </div>
                            
                            <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:4px;" id="parent-calendar-grid">
                                <!-- Weekday Labels -->
                                <span style="font-size:7px; font-weight:700; text-align:center; color:#94A3B8;">M</span>
                                <span style="font-size:7px; font-weight:700; text-align:center; color:#94A3B8;">T</span>
                                <span style="font-size:7px; font-weight:700; text-align:center; color:#94A3B8;">W</span>
                                <span style="font-size:7px; font-weight:700; text-align:center; color:#94A3B8;">T</span>
                                <span style="font-size:7px; font-weight:700; text-align:center; color:#94A3B8;">F</span>
                                <span style="font-size:7px; font-weight:700; text-align:center; color:#94A3B8;">S</span>
                                <span style="font-size:7px; font-weight:700; text-align:center; color:#94A3B8;">S</span>

                                <!-- Week 1 -->
                                <div class="cal-day" data-day="July 1" data-log="Campus entry: 08:32 AM (Biometric Face Verified). Exit: 04:15 PM (Warden checkout checked)." style="height:22px; background:var(--emerald); border-radius:4px; cursor:pointer; color:#fff; font-size:9px; font-weight:bold; display:flex; align-items:center; justify-content:center; border:2px solid var(--accent);">1</div>
                                <div class="cal-day" data-day="July 2" data-log="Campus entry: 08:30 AM (Biometric Face Verified). Exit: 04:12 PM." style="height:22px; background:var(--emerald); border-radius:4px; cursor:pointer; color:#fff; font-size:9px; font-weight:bold; display:flex; align-items:center; justify-content:center;">2</div>
                                <div class="cal-day" data-day="July 3" data-log="Campus entry: 08:31 AM (Biometric Face Verified). Exit: 04:18 PM." style="height:22px; background:var(--emerald); border-radius:4px; cursor:pointer; color:#fff; font-size:9px; font-weight:bold; display:flex; align-items:center; justify-content:center;">3</div>
                                <div class="cal-day" data-day="July 4" data-log="Campus entry: 08:29 AM (Biometric Face Verified). Exit: 04:10 PM." style="height:22px; background:var(--emerald); border-radius:4px; cursor:pointer; color:#fff; font-size:9px; font-weight:bold; display:flex; align-items:center; justify-content:center;">4</div>
                                <div class="cal-day" data-day="July 5" data-log="No biometric check-in. Leave form 'Sick Leave - High fever' approved by coordinator Mrs. Savitha." style="height:22px; background:var(--red); border-radius:4px; cursor:pointer; color:#fff; font-size:9px; font-weight:bold; display:flex; align-items:center; justify-content:center;">5</div>
                                <div class="cal-day" data-day="July 6" data-log="Weekend prep class. Campus entry: 08:58 AM (Biometric Face Verified). Exit: 12:30 PM." style="height:22px; background:var(--emerald); border-radius:4px; cursor:pointer; color:#fff; font-size:9px; font-weight:bold; display:flex; align-items:center; justify-content:center;">6</div>
                                <div style="height:22px; background:#F1F5F9; border-radius:4px; color:#94A3B8; font-size:8px; display:flex; align-items:center; justify-content:center;">7</div>

                                <!-- Week 2 -->
                                <div class="cal-day" data-day="July 8" data-log="Campus entry: 08:34 AM (Biometric Face Verified). Exit: 04:16 PM." style="height:22px; background:var(--emerald); border-radius:4px; cursor:pointer; color:#fff; font-size:9px; font-weight:bold; display:flex; align-items:center; justify-content:center;">8</div>
                                <div class="cal-day" data-day="July 9" data-log="Campus entry: 08:28 AM (Biometric Face Verified). Exit: 04:11 PM." style="height:22px; background:var(--emerald); border-radius:4px; cursor:pointer; color:#fff; font-size:9px; font-weight:bold; display:flex; align-items:center; justify-content:center;">9</div>
                                <div class="cal-day" data-day="July 10" data-log="Campus entry: 08:35 AM (Biometric Face Verified). Exit: 04:14 PM." style="height:22px; background:var(--emerald); border-radius:4px; cursor:pointer; color:#fff; font-size:9px; font-weight:bold; display:flex; align-items:center; justify-content:center;">10</div>
                                <div class="cal-day" data-day="July 11" data-log="Campus entry: 08:30 AM (Biometric Face Verified). Exit: 04:10 PM." style="height:22px; background:var(--emerald); border-radius:4px; cursor:pointer; color:#fff; font-size:9px; font-weight:bold; display:flex; align-items:center; justify-content:center;">11</div>
                                <div class="cal-day" data-day="July 12" data-log="Campus entry: 08:31 AM (Biometric Face Verified). Exit: 04:18 PM." style="height:22px; background:var(--emerald); border-radius:4px; cursor:pointer; color:#fff; font-size:9px; font-weight:bold; display:flex; align-items:center; justify-content:center;">12</div>
                                <div class="cal-day" data-day="July 13" data-log="Weekend prep class. Campus entry: 08:59 AM (Biometric Face Verified). Exit: 12:35 PM." style="height:22px; background:var(--emerald); border-radius:4px; cursor:pointer; color:#fff; font-size:9px; font-weight:bold; display:flex; align-items:center; justify-content:center;">13</div>
                                <div style="height:22px; background:#F1F5F9; border-radius:4px; color:#94A3B8; font-size:8px; display:flex; align-items:center; justify-content:center;">14</div>
                            </div>
                        </div>

                        <!-- Selected Attendance Log Detail Box -->
                        <div style="background:#FFFFFF; border:1px solid rgba(15,23,42,0.08); padding:10px; border-radius:12px; margin-bottom:12px; box-shadow:0 1px 3px rgba(0,0,0,0.02);">
                            <h6 style="margin:0; font-size:8px; text-transform:uppercase; color:#64748B; font-weight:700; margin-bottom:4px;">Safety log details: <span id="cal-day-title" style="color:var(--accent); font-weight:bold;">July 1</span></h6>
                            <div id="cal-day-detail" style="font-size:10px; color:#334155; line-height:1.4;">Campus entry: 08:32 AM (Biometric Face Verified). Exit: 04:15 PM (Warden checkout checked).</div>
                        </div>

                        <!-- Recent Coordinator Remarks -->
                        <div style="background:#FFFFFF; border:1px solid rgba(15,23,42,0.08); padding:10px; border-radius:12px; box-shadow:0 1px 3px rgba(0,0,0,0.02);">
                            <h6 style="margin:0; font-size:8px; text-transform:uppercase; color:#64748B; font-weight:700; margin-bottom:6px;">Latest Coordinator Remarks</h6>
                            <div style="border-left:3px solid var(--accent); padding-left:8px; margin-bottom:6px;">
                                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2px;">
                                    <strong style="font-size:10px; color:#0F172A;">Mrs. Savitha M. (Maths)</strong>
                                    <span style="font-size:8px; color:#64748B;">Yesterday</span>
                                </div>
                                <p style="margin:0; font-size:9px; color:#475569; line-height:1.35;">"Ananya's integration concepts show revision gains. Trigonometry test accuracy reached 85%."</p>
                            </div>
                        </div>
                    </div>

                    <!-- App Bottom Mobile Tab Bar -->
                    <div style="background:#FFFFFF; border-top:1px solid rgba(15,23,42,0.08); padding:6px 0; display:grid; grid-template-columns:repeat(4, 1fr); text-align:center; font-size:8px; font-weight:700; color:#64748B; user-select:none;">
                        <div style="color:var(--accent); cursor:pointer;">
                            <span style="display:block; font-size:12px; margin-bottom:1px;">🏠</span>
                            Home
                        </div>
                        <div style="cursor:pointer;" onclick="alert('Attendance tracker screen is active!')">
                            <span style="display:block; font-size:12px; margin-bottom:1px;">📅</span>
                            Attendance
                        </div>
                        <div style="cursor:pointer;" onclick="alert('Academic Reports & Grades dashboard!')">
                            <span style="display:block; font-size:12px; margin-bottom:1px;">📊</span>
                            Grades
                        </div>
                        <div style="cursor:pointer;" onclick="alert('Coordinator Remarks logs screen!')">
                            <span style="display:block; font-size:12px; margin-bottom:1px;">💬</span>
                            Remarks
                        </div>
                    </div>
                </div>
            `;

        case "admin":
            return `
                <div class="dash-header-section">
                    <div class="dash-user-profile">
                        <div class="dash-avatar" style="background: var(--yellow);">DR</div>
                        <div class="dash-user-info">
                            <h5>Dr. Roy (Principal)</h5>
                            <span>Super Admin | Central Campus</span>
                        </div>
                    </div>
                    <span class="pulse-indicator" style="color:var(--yellow);">Server Live</span>
                </div>
                
                <div class="dash-stats-strip">
                    <div class="dash-stat-box">
                        <div class="dash-val">17.2K</div>
                        <div class="dash-lbl">Students</div>
                    </div>
                    <div class="dash-stat-box">
                        <div class="dash-val">1.2K</div>
                        <div class="dash-lbl">Teachers</div>
                    </div>
                    <div class="dash-stat-box" style="color:var(--primary);">2.9K</div>
                    <div class="dash-lbl">Active Tests</div>
                </div>

                <div class="dash-row-grid-2">
                    <div class="dash-panel" style="display:flex; flex-direction:column; justify-content:center;">
                        <h6>Student Enrollment Growth Trend</h6>
                        <div style="width:100%; height:80px; margin-top:8px;">
                            <svg viewBox="0 0 200 80" style="width:100%; height:100%; overflow:visible;">
                                <defs>
                                    <linearGradient id="chart-area-grad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stop-color="var(--primary)" stop-opacity="0.3"/>
                                        <stop offset="100%" stop-color="var(--primary)" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                <path d="M 0 70 Q 30 60 60 45 T 120 30 T 180 15 L 180 80 L 0 80 Z" fill="url(#chart-area-grad)"/>
                                <path d="M 0 70 Q 30 60 60 45 T 120 30 T 180 15" fill="none" stroke="var(--primary)" stroke-width="2.5" stroke-linecap="round"/>
                                <circle cx="180" cy="15" r="3.5" fill="var(--primary)" stroke="#fff" stroke-width="1.5" />
                                <text x="10" y="78" fill="var(--text-muted)" font-size="6">2024</text>
                                <text x="90" y="78" fill="var(--text-muted)" font-size="6">2025</text>
                                <text x="170" y="78" fill="var(--text-muted)" font-size="6">2026</text>
                            </svg>
                        </div>
                    </div>

                    <div class="dash-panel">
                        <h6>Grievance Complaints Pipeline (<span id="ticket-count">2</span> Pending)</h6>
                        <div class="highlights-list">
                            <div class="highlight-row warning" id="ticket-row-1" style="font-size:11px; padding:6px 10px; margin-bottom:6px; display:flex; justify-content:space-between; align-items:center; border-left: 3px solid var(--yellow); border-top:1px solid var(--border-color); border-right:1px solid var(--border-color); border-bottom:1px solid var(--border-color); border-radius:4px;">
                                <span>Block B WiFi Outage</span>
                                <button class="sim-btn-small btn-resolve-ticket" data-row="1" style="background:var(--yellow); color:#000;">Resolve</button>
                            </div>
                            <div class="highlight-row alert" id="ticket-row-2" style="font-size:11px; padding:6px 10px; margin-bottom:6px; display:flex; justify-content:space-between; align-items:center; border-left: 3px solid var(--red); border-top:1px solid var(--border-color); border-right:1px solid var(--border-color); border-bottom:1px solid var(--border-color); border-radius:4px;">
                                <span>Mess Food Quality</span>
                                <button class="sim-btn-small btn-resolve-ticket" data-row="2" style="background:var(--red);">Resolve</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

        case "chairman":
            return `
                <div class="dash-header-section">
                    <div class="dash-user-profile">
                        <div class="dash-avatar" style="background: var(--emerald); font-weight:800; border: 2px solid rgba(255,255,255,0.85); box-shadow: 0 4px 10px rgba(16,185,129,0.25);">B</div>
                        <div class="dash-user-info">
                            <h5 style="color:var(--text-main); font-weight:700; margin-bottom:2px;">Chairman Suite</h5>
                            <span style="color:var(--text-muted); font-size:10px; font-weight:500;">Quantex Board Console</span>
                        </div>
                    </div>
                    <span class="pulse-indicator" style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; color:var(--emerald);">Secure Connection</span>
                </div>
                
                <div class="dash-stats-strip" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 16px;">
                    <div class="dash-stat-box" style="background: #FFFFFF; border: 1px solid rgba(15, 23, 42, 0.08); border-top: 3px solid var(--emerald); padding: 12px 14px; border-radius: 8px; box-shadow: var(--shadow-sm); text-align:left;">
                        <div class="dash-val" style="font-size: 16px; font-weight: 800; color: #0F172A;">8</div>
                        <div class="dash-lbl" style="font-size: 9px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 4px; margin-bottom:0;">Campuses</div>
                    </div>
                    <div class="dash-stat-box" style="background: #FFFFFF; border: 1px solid rgba(15, 23, 42, 0.08); border-top: 3px solid var(--primary); padding: 12px 14px; border-radius: 8px; box-shadow: var(--shadow-sm); text-align:left;">
                        <div class="dash-val" style="font-size: 16px; font-weight: 800; color: var(--primary);">18.5K</div>
                        <div class="dash-lbl" style="font-size: 9px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 4px; margin-bottom:0;">Total Enrolled</div>
                    </div>
                    <div class="dash-stat-box" style="background: #FFFFFF; border: 1px solid rgba(15, 23, 42, 0.08); border-top: 3px solid var(--emerald); padding: 12px 14px; border-radius: 8px; box-shadow: var(--shadow-sm); text-align:left;">
                        <div class="dash-val" style="font-size: 16px; font-weight: 800; color: var(--emerald);">92%</div>
                        <div class="dash-lbl" style="font-size: 9px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 4px; margin-bottom:0;">Success Target</div>
                    </div>
                    <div class="dash-stat-box" style="background: #FFFFFF; border: 1px solid rgba(15, 23, 42, 0.08); border-top: 3px solid var(--purple); padding: 12px 14px; border-radius: 8px; box-shadow: var(--shadow-sm); text-align:left;">
                        <div class="dash-val" style="font-size: 16px; font-weight: 800; color: var(--purple);">+70%</div>
                        <div class="dash-lbl" style="font-size: 9px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 4px; margin-bottom:0;">Manual Work Cut</div>
                    </div>
                </div>

                <div class="dash-row-grid-2" style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 12px;">
                    <div class="dash-panel" style="background: #FFFFFF; border: 1px solid rgba(15, 23, 42, 0.08); padding: 14px; border-radius: 8px; box-shadow: var(--shadow-sm);">
                        <h6 style="color: #0F172A; font-weight: 700; font-size: 11px; margin-bottom: 12px; margin-top:0;">Institutional Success Rate (2023-2027)</h6>
                        <div class="growth-chart-sim" style="cursor:pointer; display:flex; justify-content:space-between; align-items:flex-end; height:120px; padding:10px 0;">
                            <div class="growth-bar-column" data-year="2023" data-stats="Success Rate: 45% | Campuses: 4 | Enrollment: 6.2K" style="height:100%; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; flex-grow:1;">
                                <div class="growth-bar-fill" style="height: 45%; width:32px; background:linear-gradient(180deg, var(--emerald) 0%, rgba(16,185,129,0.2) 100%); border-radius:4px 4px 0 0; position:relative;"><span class="growth-val-label" style="position:absolute; top:-18px; left:50%; transform:translateX(-50%); font-size:9px; font-weight:700; color:#0F172A;">45%</span></div>
                                <span class="chart-bar-lbl" style="font-size:9px; color:#64748B; margin-top:4px;">2023</span>
                            </div>
                            <div class="growth-bar-column" data-year="2024" data-stats="Success Rate: 57% | Campuses: 5 | Enrollment: 8.4K" style="height:100%; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; flex-grow:1;">
                                <div class="growth-bar-fill" style="height: 57%; width:32px; background:linear-gradient(180deg, var(--emerald) 0%, rgba(16,185,129,0.2) 100%); border-radius:4px 4px 0 0; position:relative;"><span class="growth-val-label" style="position:absolute; top:-18px; left:50%; transform:translateX(-50%); font-size:9px; font-weight:700; color:#0F172A;">57%</span></div>
                                <span class="chart-bar-lbl" style="font-size:9px; color:#64748B; margin-top:4px;">2024</span>
                            </div>
                            <div class="growth-bar-column" data-year="2025" data-stats="Success Rate: 68% | Campuses: 6 | Enrollment: 11.2K" style="height:100%; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; flex-grow:1;">
                                <div class="growth-bar-fill" style="height: 68%; width:32px; background:linear-gradient(180deg, var(--emerald) 0%, rgba(16,185,129,0.2) 100%); border-radius:4px 4px 0 0; position:relative;"><span class="growth-val-label" style="position:absolute; top:-18px; left:50%; transform:translateX(-50%); font-size:9px; font-weight:700; color:#0F172A;">68%</span></div>
                                <span class="chart-bar-lbl" style="font-size:9px; color:#64748B; margin-top:4px;">2025</span>
                            </div>
                            <div class="growth-bar-column" data-year="2026" data-stats="Success Rate: 78% | Campuses: 8 | Enrollment: 15.6K" style="height:100%; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; flex-grow:1;">
                                <div class="growth-bar-fill" style="height: 78%; width:32px; background:linear-gradient(180deg, var(--emerald) 0%, rgba(16,185,129,0.2) 100%); border-radius:4px 4px 0 0; position:relative;"><span class="growth-val-label" style="position:absolute; top:-18px; left:50%; transform:translateX(-50%); font-size:9px; font-weight:700; color:#0F172A;">78%</span></div>
                                <span class="chart-bar-lbl" style="font-size:9px; color:#64748B; margin-top:4px;">2026</span>
                            </div>
                            <div class="growth-bar-column" data-year="2027" data-stats="Success Rate: 92% (Predicted) | Campuses: 8 | Enrollment: 18.5K" style="height:100%; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; flex-grow:1;">
                                <div class="growth-bar-fill" style="height: 92%; width:32px; background:linear-gradient(180deg, var(--accent) 0%, rgba(249,115,22,0.2) 100%); border-radius:4px 4px 0 0; position:relative;"><span class="growth-val-label" style="position:absolute; top:-18px; left:50%; transform:translateX(-50%); font-size:9px; font-weight:700; color:#0F172A;">92%</span></div>
                                <span class="chart-bar-lbl" style="font-size:9px; color:#64748B; margin-top:4px;">2027</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="dash-panel" style="background: #FFFFFF; border: 1px solid rgba(15, 23, 42, 0.08); padding: 14px; border-radius: 8px; box-shadow: var(--shadow-sm);">
                        <h6 style="color: #0F172A; font-weight: 700; font-size: 11px; margin-bottom: 12px; margin-top:0;">Board Room Analyzer</h6>
                        <div style="display:flex; flex-direction:column; gap:10px;">
                            <div style="font-size: 11px; background:#F8FAFC; border:1px solid rgba(15, 23, 42, 0.06); padding:10px; border-radius:6px;" id="chairman-stats-box">
                                <strong style="color:var(--emerald); font-size:12px; display:block; margin-bottom:4px;" id="chairman-year-label">Select Year Column...</strong>
                                <span id="chairman-year-desc" style="color:#64748B;">Click any growth bar column to inspect strategic multi-year performance logs.</span>
                            </div>
                            <div style="display:flex; justify-content:space-between; font-size:11px; align-items:center; color:#0F172A;">
                                <span style="font-weight:500;">Adoptions Growth Rate</span>
                                <div style="width:100px; height:8px; background:rgba(15, 23, 42, 0.06); border-radius:4px; overflow:hidden;">
                                    <div style="width:82%; height:100%; background:var(--emerald);"></div>
                                </div>
                                <span style="font-weight:700; color:var(--emerald);">82%</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    }
}

// Bind event listeners for actions inside the dynamic canvas mockups
function bindDashboardSimEvents(roleKey) {
    if (roleKey === "student") {
        // Revision buttons logic
        document.querySelectorAll("[id^='btn-revise-']").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const button = e.currentTarget;
                const parent = button.parentElement;
                button.innerText = "Scheduled";
                button.style.background = "var(--emerald)";
                button.disabled = true;
                
                const statusSpan = parent.querySelector(".weak-status");
                if (statusSpan) {
                    statusSpan.innerText = "Scheduled";
                    statusSpan.style.color = "var(--emerald)";
                }
            });
        });

        // Tasks checkboxes progress tracker
        const checkboxes = document.querySelectorAll(".study-task-chk");
        const updateTasksProgress = () => {
            let checkedCount = 0;
            checkboxes.forEach(chk => {
                if (chk.checked) checkedCount++;
            });
            const pct = Math.round((checkedCount / checkboxes.length) * 100);
            const display = document.getElementById("task-pct");
            if (display) display.innerText = pct;
            const bar = document.getElementById("task-progress-bar");
            if (bar) bar.style.width = pct + "%";
        };

        checkboxes.forEach(chk => {
            chk.addEventListener("change", updateTasksProgress);
        });
        
        // Initial call
        updateTasksProgress();

        // Mock test data repository for simulation selector
        const mockTestData = {
            test5: { score: "186 / 300", pct: "99.12%", rank: "#1,120", diagnosis: "<strong>AI Gap Analysis:</strong> Lost 24 marks in Maths due to <em>Formula recall gaps</em> in integration. Silly mistakes detected in Chemistry." },
            test4: { score: "162 / 300", pct: "97.45%", rank: "#3,240", diagnosis: "<strong>AI Gap Analysis:</strong> Concept gap identified in <em>Current Electricity</em>. Chemistry equilibrium calculation was skipped." },
            test3: { score: "201 / 300", pct: "99.64%", rank: "#450", diagnosis: "<strong>AI Gap Analysis:</strong> Excellent performance. Small conceptual slide detected in <em>Chemical Equilibrium</em> reactions." },
            test2: { score: "148 / 300", pct: "95.20%", rank: "#6,180", diagnosis: "<strong>AI Gap Analysis:</strong> High errors in Calculus chapters. Plan triggered: scheduled active revisions on integration chapters." },
            test1: { score: "172 / 300", pct: "98.15%", rank: "#2,350", diagnosis: "<strong>AI Gap Analysis:</strong> Good foundation. Rotational mechanics shows structural formula confusion." }
        };

        // Select Change handler and initial ring rendering
        const selector = document.getElementById("mock-test-selector");
        
        const updateMockProgressRings = (scoreStr, pctStr) => {
            const pctVal = parseFloat(pctStr);
            const pctRing = document.getElementById("pct-ring-path");
            if (pctRing) pctRing.setAttribute("stroke-dasharray", `${pctVal}, 100`);

            const scoreParts = scoreStr.split("/");
            if (scoreParts.length === 2) {
                const earned = parseInt(scoreParts[0].trim());
                const total = parseInt(scoreParts[1].trim());
                const scorePct = Math.round((earned / total) * 100);
                const scoreRing = document.getElementById("score-ring-path");
                if (scoreRing) scoreRing.setAttribute("stroke-dasharray", `${scorePct}, 100`);
            }
        };

        if (selector) {
            selector.addEventListener("change", (e) => {
                const val = e.target.value;
                const data = mockTestData[val];
                if (data) {
                    document.getElementById("mock-score-val").innerText = data.score;
                    document.getElementById("mock-pct-val").innerText = data.pct;
                    document.getElementById("mock-rank-val").innerText = data.rank;
                    document.getElementById("mock-error-diagnosis").innerHTML = data.diagnosis;
                    document.getElementById("mock-analysis-time").innerText = "Last scanned: Just now";
                    
                    updateMockProgressRings(data.score, data.pct);
                }
            });
            // Initial call for selector rings
            const initData = mockTestData[selector.value];
            if (initData) {
                updateMockProgressRings(initData.score, initData.pct);
            }
        }

        // Run AI Concept Recheck handler
        const btnRecheck = document.getElementById("btn-mock-recheck");
        if (btnRecheck) {
            btnRecheck.addEventListener("click", () => {
                btnRecheck.innerText = "Running Neural Scan...";
                btnRecheck.style.background = "var(--primary)";
                btnRecheck.disabled = true;
                
                const diag = document.getElementById("mock-error-diagnosis");
                const oldContent = diag.innerHTML;
                diag.innerHTML = `<span class="pulse-indicator" style="font-weight:600; color:var(--primary);">Verifying concept gaps... Running diagnostics.</span>`;
                
                setTimeout(() => {
                    btnRecheck.innerText = "AI Scan Finished";
                    btnRecheck.style.background = "var(--emerald)";
                    
                    const selectorVal = selector ? selector.value : "test5";
                    diag.innerHTML = `<strong>AI Recalculated Gaps (${selectorVal.toUpperCase()}):</strong> Analysis verification complete. Focus on recommended revision links below.`;
                    document.getElementById("mock-analysis-time").innerText = "Last scanned: Recalculated just now";
                    
                    // Trigger toast notification safely
                    const toast = document.getElementById("toast");
                    if (toast) {
                        toast.innerText = "Concept verification complete! Diagnostic logs updated.";
                        toast.classList.add("show");
                        setTimeout(() => {
                            toast.classList.remove("show");
                        }, 2500);
                    }

                    setTimeout(() => {
                        btnRecheck.innerText = "Run AI Concept Re-check";
                        btnRecheck.style.background = "var(--accent)";
                        btnRecheck.disabled = false;
                    }, 2000);
                }, 1500);
            });
        }

        // Live NEET Mock Test launch event listener
        const btnLaunchNeet = document.getElementById("btn-launch-neet-mock");
        if (btnLaunchNeet) {
            btnLaunchNeet.addEventListener("click", () => {
                launchNeetMockSimulator();
            });
        }
    }
    
    else if (roleKey === "teacher") {
        const btnScan = document.getElementById("btn-simulate-scan");
        const scanner = document.getElementById("sim-scanner");
        const logBox = document.getElementById("attendance-log-box");
        const statusAnanya = document.getElementById("status-ananya");
        const presentCount = document.getElementById("t-present-count");
        const attendancePct = document.getElementById("teacher-attendance-pct");

        if (btnScan && scanner) {
            btnScan.addEventListener("click", () => {
                if (faceScanning) return;
                
                faceScanning = true;
                scanner.classList.add("scanning");
                btnScan.innerText = "Scanning Face...";
                btnScan.style.opacity = 0.7;

                setTimeout(() => {
                    scanner.classList.remove("scanning");
                    faceScanning = false;
                    btnScan.innerText = "Scan Completed ✅";
                    btnScan.style.background = "var(--emerald)";
                    btnScan.style.opacity = 1;
                    
                    if (statusAnanya) {
                        statusAnanya.innerText = "Present (AI Verified)";
                        statusAnanya.style.color = "var(--emerald)";
                    }
                    if (presentCount) presentCount.innerText = "4";
                    if (attendancePct) attendancePct.innerText = "100%";
                    if (logBox) {
                        logBox.style.display = "block";
                        logBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                }, 2000);
            });
        }
    }
    
    else if (roleKey === "hod") {
        // Faculty column inspector logic
        const bars = document.querySelectorAll(".chart-bar-column");
        const inspectorName = document.getElementById("hod-inspector-name");
        const inspectorStats = document.getElementById("hod-inspector-stats");
        
        bars.forEach(bar => {
            bar.addEventListener("click", () => {
                const teacher = bar.getAttribute("data-teacher");
                const syllabus = bar.getAttribute("data-syllabus");
                const avg = bar.getAttribute("data-avg");
                
                if (inspectorName && inspectorStats) {
                    inspectorName.innerText = teacher;
                    inspectorStats.innerHTML = `
                        <strong>Syllabus Progress:</strong> ${syllabus}<br>
                        <strong>Class Performance Average:</strong> ${avg}<br>
                        <span style="color:var(--emerald); font-size:10px; display:block; margin-top:4px;">✓ No operational bottlenecks identified</span>
                    `;
                }
                
                // Add active highlight border
                bars.forEach(b => b.style.opacity = "0.6");
                bar.style.opacity = "1";
            });
        });

        const btnReport = document.getElementById("btn-generate-report");
        const status = document.getElementById("report-status");
        if (btnReport && status) {
            btnReport.addEventListener("click", () => {
                btnReport.innerText = "Compiling Database...";
                btnReport.disabled = true;
                
                setTimeout(() => {
                    btnReport.innerText = "Report Dispatched";
                    btnReport.style.background = "var(--emerald)";
                    status.style.display = "block";
                }, 1500);
            });
        }
    }
    
    else if (roleKey === "parent") {
        const calDays = document.querySelectorAll(".cal-day");
        const dayDetailDisplay = document.getElementById("cal-day-detail");
        const dayTitleDisplay = document.getElementById("cal-day-title");
        
        calDays.forEach(day => {
            day.addEventListener("click", () => {
                const dayName = day.getAttribute("data-day");
                const logText = day.getAttribute("data-log");
                if (dayTitleDisplay) {
                    dayTitleDisplay.innerText = dayName;
                }
                if (dayDetailDisplay) {
                    dayDetailDisplay.innerText = logText;
                }
                calDays.forEach(d => {
                    d.style.border = "none";
                });
                day.style.border = "2px solid var(--accent)";
            });
        });
    }
    
    else if (roleKey === "admin") {
        let pendingCount = 2;
        const resolveButtons = document.querySelectorAll(".btn-resolve-ticket");
        const ticketCounterDisplay = document.getElementById("ticket-count");
        
        resolveButtons.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const idx = btn.getAttribute("data-row");
                const row = document.getElementById(`ticket-row-${idx}`);
                
                if (row) {
                    row.style.transition = "all 0.4s ease";
                    row.style.opacity = "0";
                    row.style.transform = "translateX(-20px)";
                    
                    setTimeout(() => {
                        row.remove();
                        pendingCount--;
                        if (ticketCounterDisplay) {
                            ticketCounterDisplay.innerText = pendingCount;
                        }
                        
                        // Show toast notification
                        const toast = document.getElementById("toast");
                        if (toast) {
                            toast.innerText = "Grievance resolved and routing updated!";
                            toast.classList.add("show");
                            setTimeout(() => {
                                toast.classList.remove("show");
                            }, 2500);
                        }
                    }, 400);
                }
            });
        });
    }

    else if (roleKey === "chairman") {
        const columns = document.querySelectorAll(".growth-bar-column");
        const yearLabel = document.getElementById("chairman-year-label");
        const yearDesc = document.getElementById("chairman-year-desc");
        
        columns.forEach(col => {
            const updateChairmanStats = () => {
                const year = col.getAttribute("data-year");
                const stats = col.getAttribute("data-stats");
                
                if (yearLabel && yearDesc) {
                    yearLabel.innerText = `${year} Metrics`;
                    yearDesc.innerText = stats;
                }
                
                columns.forEach(c => c.style.opacity = "0.7");
                col.style.opacity = "1";
            };

            col.addEventListener("click", updateChairmanStats);
            col.addEventListener("mouseenter", updateChairmanStats);
        });
    }
}

// =============================================================
// DEEKSHYA NEET 2026 MOCK TEST SIMULATOR ENGINE
// =============================================================
function launchNeetMockSimulator() {
    const canvas = document.getElementById("sim-canvas");
    if (!canvas) return;

    let currentNeetQIndex = 0;
    let neetAnswers = {};
    let neetTimer = 300; // 5 minutes in seconds
    let neetTimerInterval = null;

    const neetQuestions = [
        {
            subject: "Physics",
            topic: "Kinematics",
            q: "A ball is projected horizontally from a height of 80 m with velocity 20 m/s. Time taken to reach the ground is (g = 10 m/s²):",
            opts: ["2 s", "4 s", "6 s", "8 s"],
            ans: 1,
            exp: "Using vertical displacement h = ½gt²: 80 = ½ × 10 × t² → t² = 16 → t = 4 s. Horizontal velocity doesn't affect vertical fall time."
        },
        {
            subject: "Physics",
            topic: "Current Electricity",
            q: "Three 3Ω resistors are connected in parallel. What is the equivalent resistance of the combination?",
            opts: ["9 Ω", "3 Ω", "1 Ω", "0.33 Ω"],
            ans: 2,
            exp: "Using parallel formula: 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ = 1/3 + 1/3 + 1/3 = 1. Therefore, R_eq = 1 Ω."
        },
        {
            subject: "Chemistry",
            topic: "Periodic Table",
            q: "Which statement correctly describes atomic radius trends in the periodic table?",
            opts: [
                "Radius increases across a period due to more electrons",
                "Radius decreases across a period due to increasing nuclear charge without new shells",
                "Radius is constant within a period",
                "Radius decreases going down a group"
            ],
            ans: 1,
            exp: "Across a period, nuclear charge increases while electrons go into the same shell. This increases the positive attraction, pulling shells closer."
        },
        {
            subject: "Chemistry",
            topic: "Redox Reactions",
            q: "In which of the following compounds does Oxygen exhibit a positive oxidation state of +2?",
            opts: ["H₂O₂", "OF₂", "KMnO₄", "Cr₂O₇²⁻"],
            ans: 1,
            exp: "Fluorine is more electronegative than Oxygen and is always assigned -1. In OF₂, Oxygen must be +2 to balance the charges."
        },
        {
            subject: "Biology",
            topic: "Human Physiology",
            q: "Part A of the nephron represents the Loop of Henle. What is its primary physiological function?",
            opts: [
                "Filtration of blood from glomerular capillaries",
                "Concentration of urine by countercurrent mechanism (creating osmotic gradient in medulla)",
                "Secretion of hydrogen ions and absorption of glucose",
                "Production of renin in response to low blood pressure"
            ],
            ans: 1,
            exp: "The Loop of Henle operates a countercurrent multiplier system. It establishes a high osmotic concentration in the medullary interstitium, enabling urine concentration."
        }
    ];

    const renderIntro = () => {
        canvas.innerHTML = `
            <div style="text-align:center; padding:12px 6px;">
                <div style="background:var(--red); color:#fff; width:44px; height:44px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:15px; font-weight:900; margin:0 auto 12px auto; font-family:var(--font-heading);">DX</div>
                <h5 style="font-weight:800; font-size:14px; color:var(--text-main); margin-bottom:2px;">Deekshya Medical Academy</h5>
                <h6 style="font-size:9px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:14px;">NEET 2026 Test Series Mock</h6>
                
                <div style="background:rgba(255,255,255,0.015); border:1px solid var(--border-color); border-radius:8px; padding:10px; text-align:left; font-size:11px; margin-bottom:16px; line-height:1.55;">
                    <strong style="display:block; margin-bottom:6px; color:var(--text-main); font-size:11px;">Exam Instructions:</strong>
                    • <strong>Total Questions:</strong> 5 (Physics, Chemistry & Biology)<br>
                    • <strong>Marking:</strong> <span style="color:var(--emerald); font-weight:700;">+4 Correct</span> | <span style="color:#f87171; font-weight:700;">-1 Incorrect</span><br>
                    • <strong>Timer:</strong> 5:00 Minutes (Auto-submits at 0:00)<br>
                    • Detailed diagnostics and solutions appear instantly upon submission.
                </div>
                
                <div style="display:flex; gap:10px;">
                    <button class="btn btn-outline sim-btn-small" style="flex:1; font-size:11px;" id="btn-neet-abort">Exit</button>
                    <button class="btn btn-primary sim-btn-small" style="flex:2; background:var(--red); border:none; color:#fff; font-size:11px;" id="btn-neet-begin">Begin Mock Test →</button>
                </div>
            </div>
        `;

        document.getElementById("btn-neet-abort").addEventListener("click", () => {
            updateRoleBoard("student");
        });

        document.getElementById("btn-neet-begin").addEventListener("click", () => {
            beginExam();
        });
    };

    const beginExam = () => {
        neetTimerInterval = setInterval(() => {
            neetTimer--;
            if (neetTimer <= 0) {
                clearInterval(neetTimerInterval);
                submitExam();
            } else {
                const timerDisplay = document.getElementById("neet-timer");
                if (timerDisplay) {
                    const m = Math.floor(neetTimer / 60);
                    const s = neetTimer % 60;
                    timerDisplay.innerText = `${m}:${String(s).padStart(2, "0")}`;
                    if (neetTimer < 60) {
                        timerDisplay.style.color = "#f87171";
                    }
                }
            }
        }, 1000);

        renderQuestion();
    };

    const renderQuestion = () => {
        const q = neetQuestions[currentNeetQIndex];
        const m = Math.floor(neetTimer / 60);
        const s = neetTimer % 60;
        const timeText = `${m}:${String(s).padStart(2, "0")}`;

        canvas.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:8px; margin-bottom:12px;">
                <div>
                    <strong style="font-size:11px; color:#f87171; text-transform:uppercase; letter-spacing:0.5px;">NEET Mock Simulation</strong>
                    <div style="font-size:10px; color:var(--text-muted); margin-top:2px;">Question ${currentNeetQIndex + 1} of 5</div>
                </div>
                <div id="neet-timer" style="font-family:monospace; font-size:12px; font-weight:700; color:var(--accent); background:rgba(255,255,255,0.03); padding:4px 8px; border-radius:4px;">${timeText}</div>
            </div>

            <!-- Subject Badge -->
            <div style="display:flex; gap:6px; margin-bottom:10px;">
                <span style="font-size:9px; padding:2px 6px; border-radius:100px; font-weight:700; background:rgba(99,102,241,0.1); color:var(--primary);">${q.subject}</span>
                <span style="font-size:9px; padding:2px 6px; border-radius:100px; font-weight:700; background:rgba(255,255,255,0.05); color:var(--text-muted);">${q.topic}</span>
            </div>

            <!-- Question Body -->
            <div style="font-size:12px; font-weight:600; line-height:1.45; color:var(--text-main); margin-bottom:12px;">
                ${q.q}
            </div>

            <!-- Options -->
            <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">
                ${q.opts.map((opt, oIdx) => {
                    const isSelected = neetAnswers[currentNeetQIndex] === oIdx;
                    const optBorder = isSelected ? "var(--red)" : "var(--border-color)";
                    const optBg = isSelected ? "rgba(229,57,53,0.06)" : "rgba(255,255,255,0.01)";
                    const label = ["A", "B", "C", "D"][oIdx];
                    return `
                        <div class="neet-opt-card" data-idx="${oIdx}" style="display:flex; align-items:center; gap:10px; border:1px solid ${optBorder}; background:${optBg}; padding:10px; border-radius:8px; cursor:pointer; font-size:11px; transition:all 0.2s;">
                            <span style="font-weight:800; color:${isSelected ? "var(--red2)" : "var(--text-muted)"}; font-size:11px;">${label}</span>
                            <span style="color:var(--text-main);">${opt}</span>
                        </div>
                    `;
                }).join("")}
            </div>

            <!-- Navigation Controls -->
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <button class="sim-btn-small" id="btn-neet-prev" ${currentNeetQIndex === 0 ? "disabled" : ""} style="padding:5px 10px; font-size:11px;">← Prev</button>
                
                <!-- Mini Palette Dots -->
                <div style="display:flex; gap:4px;">
                    ${neetQuestions.map((_, dotIdx) => {
                        const answered = neetAnswers[dotIdx] !== undefined;
                        const current = dotIdx === currentNeetQIndex;
                        let dotBg = "rgba(255,255,255,0.08)";
                        if (current) dotBg = "var(--red)";
                        else if (answered) dotBg = "var(--emerald)";
                        return `<div style="width:6px; height:6px; border-radius:50%; background:${dotBg};"></div>`;
                    }).join("")}
                </div>

                ${currentNeetQIndex === 4 ? 
                    `<button class="sim-btn-small" id="btn-neet-submit" style="background:var(--red); color:#fff; border:none; padding:5px 12px; font-size:11px; font-weight:700;">Submit</button>` :
                    `<button class="sim-btn-small" id="btn-neet-next" style="padding:5px 10px; font-size:11px;">Next →</button>`
                }
            </div>
        `;

        // Bind Option Card Click
        canvas.querySelectorAll(".neet-opt-card").forEach(card => {
            card.addEventListener("click", () => {
                const idx = parseInt(card.getAttribute("data-idx"));
                neetAnswers[currentNeetQIndex] = idx;
                renderQuestion();
            });
        });

        // Bind Prev/Next/Submit Controls
        const btnPrev = document.getElementById("btn-neet-prev");
        if (btnPrev) {
            btnPrev.addEventListener("click", () => {
                if (currentNeetQIndex > 0) {
                    currentNeetQIndex--;
                    renderQuestion();
                }
            });
        }

        const btnNext = document.getElementById("btn-neet-next");
        if (btnNext) {
            btnNext.addEventListener("click", () => {
                if (currentNeetQIndex < 4) {
                    currentNeetQIndex++;
                    renderQuestion();
                }
            });
        }

        const btnSubmit = document.getElementById("btn-neet-submit");
        if (btnSubmit) {
            btnSubmit.addEventListener("click", () => {
                submitExam();
            });
        }
    };

    const submitExam = () => {
        if (neetTimerInterval) clearInterval(neetTimerInterval);
        
        let correctCount = 0;
        let wrongCount = 0;
        let skippedCount = 0;

        neetQuestions.forEach((q, idx) => {
            const ans = neetAnswers[idx];
            if (ans === undefined) skippedCount++;
            else if (ans === q.ans) correctCount++;
            else wrongCount++;
        });

        const score = correctCount * 4 - wrongCount;
        const accuracy = (5 - skippedCount) > 0 ? Math.round((correctCount / (5 - skippedCount)) * 100) : 0;
        const estimatedRank = score > 15 ? "Top 1%" : score > 10 ? "Top 5%" : score > 5 ? "Top 15%" : "Keep practicing";

        canvas.innerHTML = `
            <div style="text-align:center; padding:10px 0;">
                <h5 style="font-weight:800; font-size:14px; color:var(--text-main); margin-bottom:2px;">Exam Scorecard</h5>
                <span style="font-size:9px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px;">Deekshya Medical Academy</span>
                
                <div style="background:rgba(255,255,255,0.015); border:1px solid var(--border-color); border-radius:12px; padding:12px; margin:14px 0;">
                    <span style="font-size:9px; color:var(--text-muted); text-transform:uppercase;">Your Score</span>
                    <div style="font-size:32px; font-weight:900; color:var(--red2); font-family:monospace; line-height:1.2; margin-top:2px;">${score} / 20</div>
                    <span style="font-size:10px; color:var(--emerald); font-weight:700;">Rank Est: ${estimatedRank}</span>
                    
                    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; margin-top:12px; border-top:1px solid var(--border-color); padding-top:10px;">
                        <div>
                            <div style="font-size:12px; font-weight:700; color:var(--emerald);">${correctCount}</div>
                            <span style="font-size:8px; color:var(--text-muted);">Correct</span>
                        </div>
                        <div>
                            <div style="font-size:12px; font-weight:700; color:#f87171;">${wrongCount}</div>
                            <span style="font-size:8px; color:var(--text-muted);">Incorrect</span>
                        </div>
                        <div>
                            <div style="font-size:12px; font-weight:700; color:var(--accent);">${accuracy}%</div>
                            <span style="font-size:8px; color:var(--text-muted);">Accuracy</span>
                        </div>
                    </div>
                </div>

                <div style="display:flex; flex-direction:column; gap:8px;">
                    <button class="btn btn-outline sim-btn-small" style="width:100%; border-color:var(--red); color:var(--red2); font-size:11px;" id="btn-neet-review-solutions">Inspect Explanations & Tips</button>
                    <button class="btn btn-primary sim-btn-small" style="width:100%; background:var(--bg-card-hover); border:1px solid var(--border-color); color:var(--text-main); font-size:11px;" id="btn-neet-close">Return to Dashboard</button>
                </div>
            </div>
        `;

        document.getElementById("btn-neet-close").addEventListener("click", () => {
            updateRoleBoard("student");
        });

        document.getElementById("btn-neet-review-solutions").addEventListener("click", () => {
            renderSolutions(correctCount, wrongCount, skippedCount, score, accuracy);
        });
    };

    const renderSolutions = (cVal, wVal, sVal, scoreVal, accVal) => {
        canvas.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:8px; margin-bottom:12px;">
                <h6 style="margin-bottom:0; font-size:11px; text-transform:uppercase; font-weight:800;">Explanations & NCERT Tips</h6>
                <button class="sim-btn-small" id="btn-neet-sol-back" style="font-size:9px; padding:2px 6px;">← Results</button>
            </div>
            
            <div style="display:flex; flex-direction:column; gap:10px; max-height:260px; overflow-y:auto; padding-right:4px;">
                ${neetQuestions.map((q, qIdx) => {
                    const userAns = neetAnswers[qIdx];
                    const isCorrect = userAns === q.ans;
                    const isSkipped = userAns === undefined;
                    const letters = ["A", "B", "C", "D"];
                    return `
                        <div style="background:rgba(255,255,255,0.005); border:1px solid var(--border-color); padding:10px; border-radius:8px; font-size:11px;">
                            <div style="display:flex; justify-content:space-between; font-weight:700; margin-bottom:4px;">
                                <span style="color:var(--text-main);">Question ${qIdx + 1} (${q.subject})</span>
                                <span style="color:${isSkipped ? "var(--text-muted)" : isCorrect ? "var(--emerald)" : "#f87171"}">
                                    ${isSkipped ? "Skipped" : isCorrect ? "✓ Correct" : "✗ Incorrect"}
                                </span>
                            </div>
                            <p style="color:var(--text-muted); margin-bottom:6px; line-height:1.45; text-align:left;">${q.q}</p>
                            <div style="background:rgba(255,255,255,0.015); padding:6px; border-radius:4px; margin-bottom:6px; text-align:left;">
                                <strong>Correct:</strong> ${letters[q.ans]} (${q.opts[q.ans]})<br>
                                ${!isSkipped ? `<strong>Your Selection:</strong> ${letters[userAns]}` : ""}
                            </div>
                            <div style="font-size:10px; color:var(--text-muted); border-left:2px solid var(--accent); padding-left:6px; margin-top:4px; text-align:left; line-height:1.4;">
                                <strong>Explanation:</strong> ${q.exp}
                            </div>
                        </div>
                    `;
                }).join("")}
            </div>
        `;

        document.getElementById("btn-neet-sol-back").addEventListener("click", () => {
            submitExam();
        });
    };

    renderIntro();
}

// =============================================================
// HIGH-FIDELITY SHOWCASE CAROUSEL CONTROLLER
// =============================================================
document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const track = document.getElementById("carousel-track");
    const indicators = document.querySelectorAll(".carousel-indicator");
    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");
    
    // Showcase text elements
    const badge = document.getElementById("showcase-badge");
    const title = document.getElementById("showcase-title");
    const descText = document.getElementById("showcase-desc-text");
    const featuresList = document.getElementById("showcase-features-list");
    const urlBar = document.getElementById("showcase-browser-url");

    if (!track || indicators.length === 0) return;

    const slideData = [
        {
            badge: "STUDENT PORTAL",
            title: "Student AI Companion",
            desc: "Displays customized NEET/JEE mock analytics, percentile progression curves, and AI-mapped conceptual topic gaps.",
            url: "https://quantexsys.com/academic-companion/student-dashboard",
            features: [
                "Dynamic percentile diagnostics",
                "Personal daily study plan progress",
                "NEET Live Test Simulator integration"
            ]
        },
        {
            badge: "TEACHER CONSOLE",
            title: "Faculty Attendance & Grade Console",
            desc: "Tracks instant face-recognition classroom attendance, pushes immediate alerts for missing students, and charts assignment score averages.",
            url: "https://quantexsys.com/academic-companion/teacher-dashboard",
            features: [
                "Biometric face recognition logs",
                "Class score average comparison gauges",
                "Real-time parent alert triggers"
            ]
        },
        {
            badge: "HOD COMMANDER",
            title: "HOD Department Control Center",
            desc: "Provides department heads with a unified birds-eye view of syllabus completion tracking, test averages across sections, and faculty status feeds.",
            url: "https://quantexsys.com/academic-companion/hod-dashboard",
            features: [
                "Faculty syllabus coverage charts",
                "Inter-section score gap analyzer",
                "Departmental reporting dispatchers"
            ]
        },
        {
            badge: "PARENT PORTAL",
            title: "Parent Guard & Safety Portal",
            desc: "Provides parents with a high-fidelity mobile view tracking child's daily attendance logs, progress status, and detailed teacher remarks.",
            url: "https://quantexsys.com/academic-companion/parent-dashboard",
            features: [
                "Daily school entry/exit biometric logs",
                "Teacher feedback & academic remarks",
                "Mobile performance progression charts"
            ]
        },
        {
            badge: "ADMIN GATEWAY",
            title: "Operations & Admissions Console",
            desc: "Empowers administrative teams to manage campus complaints pipelines, year-over-year admissions progress, and ticket priorities.",
            url: "https://quantexsys.com/academic-companion/admin-dashboard",
            features: [
                "Grievance resolution ticketing pipeline",
                "Multi-year enrollment growth curves",
                "Operations resource counters"
            ]
        },
        {
            badge: "BIOMETRIC FRS",
            title: "AI Face Recognition Attendance System",
            desc: "Automates campus entry/exit logins, verifies teacher class session attendance, and displays real-time automated safety audits.",
            url: "https://quantexsys.com/academic-companion/attendance-tracker",
            features: [
                "Face-based biometric session logins",
                "Real-time attendance summaries",
                "Automated parental check-in logs"
            ]
        },
        {
            badge: "CHAIRMAN BOARDROOM",
            title: "Chairman Strategic & Competition Console",
            desc: "Provides high-level benchmarking comparing class and section averages, Mains vs NEET performance trends, and inter-campus mock test progress.",
            url: "https://quantexsys.com/academic-companion/chairman-dashboard",
            features: [
                "Multi-campus rank comparison charts",
                "Inter-class score progression curves",
                "Syllabus coverage benchmark statistics"
            ]
        }
    ];

    const goToSlide = (slideIndex) => {
        currentSlide = (slideIndex + 7) % 7; // Clamp between 0 and 6
        track.style.transform = `translateX(-${currentSlide * 14.285}%)`;
        
        // Update indicators
        indicators.forEach((ind, idx) => {
            if (idx === currentSlide) {
                ind.classList.add("active");
            } else {
                ind.classList.remove("active");
            }
        });

        // Update metadata text dynamically with slide data
        const data = slideData[currentSlide];
        if (data) {
            if (badge) badge.innerText = data.badge;
            if (title) title.innerText = data.title;
            if (descText) descText.innerText = data.desc;
            if (urlBar) urlBar.innerText = data.url;
            
            if (featuresList) {
                featuresList.innerHTML = data.features.map(f => `
                    <li style="font-size: 12px; margin-bottom: 8px; color: var(--text-main); display: flex; align-items: center; gap: 8px; font-weight: 500;">
                        <span style="color: var(--primary); font-weight:bold;">✓</span> ${f}
                    </li>
                `).join("");
            }
        }
    };

    // Bind Controls
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            goToSlide(currentSlide - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            goToSlide(currentSlide + 1);
        });
    }

    indicators.forEach((ind) => {
        ind.addEventListener("click", () => {
            const slideIndex = parseInt(ind.getAttribute("data-slide"));
            goToSlide(slideIndex);
        });
    });

    // Auto-advance every 6 seconds
    let autoPlayInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 6000);

    // Pause autoplay on mouse hover
    const viewport = document.querySelector(".carousel-viewport");
    if (viewport) {
        viewport.addEventListener("mouseenter", () => clearInterval(autoPlayInterval));
        viewport.addEventListener("mouseleave", () => {
            autoPlayInterval = setInterval(() => {
                goToSlide(currentSlide + 1);
            }, 6000);
        });
    }
});

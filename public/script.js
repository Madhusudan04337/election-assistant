// ============================================
// VOTER EDUCATION WEBSITE - COMPLETE JAVASCRIPT
// ============================================

// Step Data
const stepsData = [
    {
        id: 1,
        title: "Are You Eligible to Vote?",
        icon: "✓",
        oneLine: "Check if you meet the requirements to be a voter.",
        content: `
            <h3>What You Need to Know</h3>
            <p><strong>You CAN vote if:</strong></p>
            <ul>
                <li>You are a citizen of India</li>
                <li>You are at least 18 years old</li>
                <li>You live in the voting area</li>
            </ul>
            <p><strong>You CANNOT vote if:</strong></p>
            <ul>
                <li>You are not an Indian citizen</li>
                <li>You are under 18 years old</li>
                <li>You have been convicted of serious crimes</li>
            </ul>
            <div class="tip-box">
                <strong>💡 First-Timer Tip:</strong> You don't need to own property or have a job to vote! Just be Indian, 18+, and live here.
            </div>
        `,
        faq: {
            q: "Can I vote if I'm 17 but turning 18 before the election?",
            a: "No. You must be 18 years old on voting day."
        },
        quiz: {
            q: "What is the minimum age to vote in India?",
            options: ["16 years", "18 years", "21 years", "25 years"],
            correct: 1
        }
    },
    {
        id: 2,
        title: "Register as a Voter",
        icon: "📋",
        oneLine: "Add your name to the official voters list.",
        content: `
            <h3>What You Need to Know</h3>
            <p>Before you can vote, your name must be on the voters list. Registration is FREE and takes just 5-10 minutes online!</p>
            <p><strong>Two Ways to Register:</strong></p>
            <ul>
                <li><strong>Online:</strong> 5-10 minutes, from home</li>
                <li><strong>Offline:</strong> Visit Voter Registration Office, 3-4 weeks processing</li>
            </ul>
            <p><strong>Documents Needed (Pick ANY ONE):</strong></p>
            <ul>
                <li>Aadhar Card</li>
                <li>PAN Card</li>
                <li>Passport</li>
                <li>Driving License</li>
            </ul>
            <div class="tip-box">
                <strong>💡 First-Timer Tip:</strong> Register online! It's the fastest way. Do it from your phone in 5 minutes.
            </div>
        `,
        faq: {
            q: "Is voter registration free?",
            a: "Yes! Voter registration is completely FREE. Don't pay anyone."
        },
        quiz: {
            q: "What's the quickest way to register as a voter?",
            options: ["Visit VRO in person", "Register online", "Call Election Commission", "Ask family member"],
            correct: 1
        }
    },
    {
        id: 3,
        title: "Verify Your Voter Details",
        icon: "🔍",
        oneLine: "Check your name, address, and polling booth location.",
        content: `
            <h3>What You Need to Know</h3>
            <p>After registering, verify your details are correct. Check your name, address, voter ID, and polling booth location.</p>
            <p><strong>How to Check:</strong></p>
            <ul>
                <li>Visit www.eci.gov.in</li>
                <li>Enter your name and area</li>
                <li>Download or check your voter ID</li>
                <li>Note your polling booth location</li>
            </ul>
            <p><strong>Common Mistakes to Avoid:</strong></p>
            <ul>
                <li>Spelling mistakes in name</li>
                <li>Wrong address</li>
                <li>Outdated phone number</li>
                <li>Missing from booth list</li>
            </ul>
            <div class="tip-box">
                <strong>💡 First-Timer Tip:</strong> Check 2-3 weeks before voting day. If something is wrong, you have time to fix it!
            </div>
        `,
        faq: {
            q: "What if my name is spelled wrong on the voters list?",
            a: "Contact your Voter Registration Office (VRO) to correct it. You can do this up to 7 days before voting."
        },
        quiz: {
            q: "Where can you check your voter details online?",
            options: ["www.eci.gov.in", "www.election.com", "www.voting.in", "www.ballot.in"],
            correct: 0
        }
    },
    {
        id: 4,
        title: "Understand the Election Timeline",
        icon: "📅",
        oneLine: "Learn the major stages of the election process.",
        content: `
            <h3>6 Stages of Elections</h3>
            <p><strong>Stage 1: Election Announcement</strong></p>
            <ul>
                <li>Government announces that elections will be held</li>
                <li>Voting dates are set</li>
            </ul>
            <p><strong>Stage 2: Nomination Period</strong></p>
            <ul>
                <li>Candidates register their nomination</li>
                <li>Duration: Usually 1-2 weeks</li>
            </ul>
            <p><strong>Stage 3: Campaign Period</strong></p>
            <ul>
                <li>Candidates campaign to win votes</li>
                <li>Rallies and meetings happen</li>
            </ul>
            <p><strong>Stage 4: Polling Day</strong></p>
            <ul>
                <li>Voting booths open for voters</li>
                <li>You cast your vote</li>
            </ul>
            <p><strong>Stage 5: Vote Counting</strong></p>
            <ul>
                <li>All votes are counted securely</li>
                <li>Usually completes within 24 hours</li>
            </ul>
            <p><strong>Stage 6: Results Declaration</strong></p>
            <ul>
                <li>Winners are announced</li>
                <li>Official declaration is made</li>
            </ul>
            <div class="tip-box">
                <strong>💡 First-Timer Tip:</strong> Mark the voting date on your calendar! Election Commission announces it well in advance.
            </div>
        `,
        faq: {
            q: "How long is the campaign period?",
            a: "The campaign period is usually 2-3 weeks, ending 48 hours before voting day."
        },
        quiz: {
            q: "After polling day, what happens next?",
            options: ["Voting booths close", "Election officials count votes", "Candidates meet voters", "New government takes office"],
            correct: 1
        }
    },
    {
        id: 5,
        title: "Prepare Before Voting Day",
        icon: "✅",
        oneLine: "Get ready with a checklist of what you need.",
        content: `
            <h3>Pre-Voting Day Checklist</h3>
            <p><strong>2-3 Weeks Before:</strong></p>
            <ul>
                <li>✓ Check your voter registration status online</li>
                <li>✓ Verify your name and address are correct</li>
                <li>✓ Find your polling booth location</li>
                <li>✓ Note the address and distance</li>
            </ul>
            <p><strong>1 Week Before:</strong></p>
            <ul>
                <li>✓ Arrange transportation to booth</li>
                <li>✓ Plan your time (avoid rush hours)</li>
                <li>✓ Inform family you'll be voting</li>
            </ul>
            <p><strong>Day Before Voting:</strong></p>
            <ul>
                <li>✓ Keep your voter ID card safe</li>
                <li>✓ Check weather forecast</li>
                <li>✓ Get a good night's sleep</li>
            </ul>
            <p><strong>On Voting Day Morning:</strong></p>
            <ul>
                <li>✓ Wake up early (before booth opens)</li>
                <li>✓ Have breakfast</li>
                <li>✓ Wear comfortable clothes</li>
                <li>✓ Carry voter ID and alternative ID</li>
                <li>✓ Bring water and snacks (booths may have queues)</li>
            </ul>
            <div class="tip-box">
                <strong>💡 First-Timer Tip:</strong> Go to the booth early (7-10 AM) or late (after 4 PM). Afternoon is usually busy!
            </div>
        `,
        faq: {
            q: "Can I vote if I lost my voter ID card?",
            a: "Yes. You can use any other government-issued ID (Aadhar, Passport, Driving License, PAN)."
        },
        quiz: {
            q: "When should you check your polling booth location?",
            options: ["On voting day morning", "2-3 weeks before voting", "1 hour before voting", "After you reach the booth"],
            correct: 1
        }
    },
    {
        id: 6,
        title: "Reach the Polling Booth",
        icon: "📍",
        oneLine: "Find your booth and understand what to expect.",
        content: `
            <h3>How to Find Your Booth</h3>
            <p>Your polling booth location was given when you registered. You can find it on:</p>
            <ul>
                <li>Your voter ID card</li>
                <li>Election Commission website (eci.gov.in)</li>
                <li>SMS from Election Commission</li>
                <li>Visit Voter Registration Office</li>
            </ul>
            <p><strong>When You Arrive at the Booth:</strong></p>
            <ul>
                <li>Look for the booth number and name</li>
                <li>Stand in the queue outside</li>
                <li>Be patient and wait your turn (queues are normal)</li>
            </ul>
            <p><strong>What to Expect in the Queue:</strong></p>
            <ul>
                <li>Queues are usually longest in morning (7-10 AM) and late afternoon (3-6 PM)</li>
                <li>Wait time: 5 minutes to 2 hours (depends on area)</li>
                <li>Polling staff will call you inside when it's your turn</li>
                <li>Bring water and snacks for longer waits</li>
            </ul>
            <p><strong>Inside the Booth:</strong></p>
            <ul>
                <li>You will see polling staff, voting machines, and other voters</li>
                <li>Don't take photos or videos inside (not allowed)</li>
                <li>Follow instructions from polling staff</li>
            </ul>
            <div class="tip-box">
                <strong>💡 First-Timer Tip:</strong> Don't worry about the queue! It's normal and everyone goes through it. Booth staff are friendly and will guide you.
            </div>
        `,
        faq: {
            q: "What if I can't find my polling booth?",
            a: "Ask any local shopkeeper or resident—they'll know. Or call your Voter Registration Office for directions."
        },
        quiz: {
            q: "When are polling booths usually most crowded?",
            options: ["Early morning (7-10 AM)", "Afternoon (12-2 PM)", "Late afternoon (3-6 PM)", "All times are equally crowded"],
            correct: 1
        }
    },
    {
        id: 7,
        title: "Identity Verification",
        icon: "🆔",
        oneLine: "Show your ID so polling staff can verify you're eligible.",
        content: `
            <h3>Step-by-Step Process</h3>
            <p><strong>Step 1: Show Your ID</strong></p>
            <ul>
                <li>When called, go to the verification desk</li>
                <li>Show your voter ID or any other government ID</li>
                <li>Polling staff will check your name on the voter list</li>
            </ul>
            <p><strong>Step 2: They Will Check:</strong></p>
            <ul>
                <li>Your ID matches your face</li>
                <li>Your name is on the voters list</li>
                <li>You haven't already voted today</li>
            </ul>
            <p><strong>Step 3: Approval</strong></p>
            <ul>
                <li>If everything is correct, they'll say "approved"</li>
                <li>You can then move to the next step</li>
                <li>If there's a problem, ask polling officers to help resolve it</li>
            </ul>
            <div class="tip-box">
                <strong>💡 First-Timer Tip:</strong> Be calm and friendly with polling staff. They handle hundreds of voters daily and are used to nervous first-timers!
            </div>
        `,
        faq: {
            q: "What if my ID doesn't match my appearance?",
            a: "It's okay! Your ID is several years old and you might have changed. Show another ID or polling staff will note the difference and let you vote."
        },
        quiz: {
            q: "What happens after your identity is verified at the booth?",
            options: ["You leave immediately", "You go for finger inking and register", "You cast your vote", "You receive your voter certificate"],
            correct: 1
        }
    },
    {
        id: 8,
        title: "Finger Inking & Register Entry",
        icon: "👆",
        oneLine: "Get your voting mark and sign the official register.",
        content: `
            <h3>The Inking Process</h3>
            <p><strong>Is the Ink Safe?</strong></p>
            <ul>
                <li>✓ YES! The ink used is non-toxic and food-safe</li>
                <li>✓ It's the same ink used in schools and hospitals</li>
                <li>✓ It washes off in 2-3 days</li>
                <li>✓ You can eat, drink, and touch your face after voting</li>
            </ul>
            <p><strong>What Happens During Inking:</strong></p>
            <ul>
                <li>Polling staff will mark your left index finger with ink</li>
                <li>This proves you've already voted (you can't vote twice)</li>
                <li>This mark is the same for ALL voters (no special mark for first-timers)</li>
            </ul>
            <p><strong>Register Entry:</strong></p>
            <ul>
                <li>You will be asked to sign or put your thumbprint in the voter register</li>
                <li>The register is an official government document</li>
                <li>This records that you voted today</li>
                <li>No personal information is stored here—just your name and mark</li>
            </ul>
            <p><strong>After Inking:</strong></p>
            <ul>
                <li>You'll receive a ballot slip OR permission to use the EVM</li>
                <li>You can now move to the voting compartment</li>
            </ul>
            <div class="tip-box">
                <strong>💡 First-Timer Tip:</strong> The ink mark is your proof that you voted! Wear it proudly. Many people share photos of their inked finger on social media.
            </div>
        `,
        faq: {
            q: "Can I refuse the ink mark?",
            a: "No. Ink marking is mandatory to prevent double voting. But don't worry—it's safe and washes off naturally."
        },
        quiz: {
            q: "Why do polling staff mark your finger with ink?",
            options: ["To identify you as a first-timer", "To prove you already voted (prevent double voting)", "To record your voting choice", "It's just a tradition"],
            correct: 1
        }
    },
    {
        id: 9,
        title: "Enter the Voting Area",
        icon: "🗳️",
        oneLine: "Move to the private voting compartment.",
        content: `
            <h3>The Private Booth</h3>
            <p><strong>What is the Voting Compartment?</strong></p>
            <ul>
                <li>A small enclosed space where you vote alone</li>
                <li>Completely private—no one can see how you vote</li>
                <li>Walls or curtains prevent people from looking inside</li>
            </ul>
            <p><strong>When You Enter:</strong></p>
            <ul>
                <li>Go inside the booth alone (poll staff wait outside)</li>
                <li>Take your time—no rush (there's no time limit)</li>
                <li>Your vote is completely secret</li>
            </ul>
            <p><strong>What's Inside the Booth?</strong></p>
            <ul>
                <li>A voting machine (EVM) OR a ballot paper</li>
                <li>Instructions on how to vote</li>
                <li>A pen (if ballot paper)</li>
            </ul>
            <p><strong>Remember:</strong></p>
            <ul>
                <li>✓ No one can see who you vote for</li>
                <li>✓ No one will ask you who you voted for after</li>
                <li>✓ Your vote is legally protected as a secret</li>
                <li>✓ This is what makes elections fair and free</li>
            </ul>
            <div class="tip-box">
                <strong>💡 First-Timer Tip:</strong> Don't be scared! This booth is your private space. No one else can come inside. Take your time and vote carefully.
            </div>
        `,
        faq: {
            q: "Can polling staff see how I vote inside the booth?",
            a: "No! It's completely private. The booth has walls or curtains. Poll staff cannot enter or watch you vote."
        },
        quiz: {
            q: "Why is the voting booth completely enclosed?",
            options: ["To protect your voting choice from observation", "To make voting faster", "To prevent people from bringing phones", "To save space in the polling center"],
            correct: 0
        }
    },
    {
        id: 10,
        title: "Cast Your Vote",
        icon: "✅",
        oneLine: "Mark your choice using EVM or ballot paper.",
        content: `
            <h3>Two Voting Methods</h3>
            <p><strong>Method 1: Electronic Voting Machine (EVM)</strong></p>
            <ul>
                <li>Blue-colored machine with a screen</li>
                <li>Shows all candidates and their symbols</li>
                <li>Press the blue button next to your chosen candidate</li>
                <li>You'll hear a beep confirming your vote</li>
                <li>Very quick (takes 10-30 seconds)</li>
                <li>Completely secure and tamper-proof</li>
            </ul>
            <p><strong>Method 2: Ballot Paper (VVPAT)</strong></p>
            <ul>
                <li>White paper with all candidates printed</li>
                <li>Mark a checkmark or cross next to your choice</li>
                <li>Use the pen provided</li>
                <li>Only mark ONE candidate</li>
                <li>Fold the ballot and put it in the sealed box</li>
            </ul>
            <p><strong>Important Rules:</strong></p>
            <ul>
                <li>Vote for ONLY ONE candidate (if you mark more, it's invalid)</li>
                <li>Mark clearly so your choice is obvious</li>
                <li>You cannot change your vote (so be sure!)</li>
                <li>Don't leave marks or information that identifies you</li>
            </ul>
            <p><strong>If You Make a Mistake:</strong></p>
            <ul>
                <li>Tell polling staff immediately</li>
                <li>You'll get a new ballot or another chance</li>
                <li>Mistakes are normal—don't worry!</li>
            </ul>
            <div class="tip-box">
                <strong>💡 First-Timer Tip:</strong> Take 10 seconds to think about your choice. It's YOUR vote—vote for who YOU believe in. Don't let anyone influence you.
            </div>
        `,
        faq: {
            q: "What if I press the wrong button on the EVM by mistake?",
            a: "Tell polling staff immediately. They will reset the machine and let you vote again. There's no penalty for mistakes."
        },
        quiz: {
            q: "How many candidates can you vote for in one election?",
            options: ["As many as you want", "Only 1 candidate", "Up to 3 candidates", "It depends on the election"],
            correct: 1
        }
    },
    {
        id: 11,
        title: "Leave the Polling Station",
        icon: "👋",
        oneLine: "You've completed your democratic duty!",
        content: `
            <h3>After You Vote</h3>
            <p><strong>When You Exit the Booth:</strong></p>
            <ul>
                <li>Leave the booth calmly and peacefully</li>
                <li>Thank the polling staff if you wish</li>
                <li>Your voting is now complete</li>
            </ul>
            <p><strong>Important Rules to Remember:</strong></p>
            <ul>
                <li>✓ Never tell anyone how you voted</li>
                <li>✓ Your vote is your secret—protect it</li>
                <li>✓ Don't discuss your vote with others in the booth</li>
                <li>✓ It's okay to say "I voted" but not WHO you voted for</li>
            </ul>
            <p><strong>Respect the Process:</strong></p>
            <ul>
                <li>Follow all polling staff instructions</li>
                <li>Don't take photos or videos inside the booth</li>
                <li>Don't create disturbance or noise</li>
                <li>Maintain order for other voters</li>
            </ul>
            <p><strong>After Leaving the Station:</strong></p>
            <ul>
                <li>You can return home</li>
                <li>Share your inked finger photo if you wish (it's not your vote—just the mark!)</li>
                <li>Tell others to vote (but don't pressure them)</li>
                <li>Wait for results to come out</li>
            </ul>
            <div class="tip-box">
                <strong>💡 First-Timer Tip:</strong> Congratulations! You just exercised your fundamental right as a citizen. Be proud of participating in democracy!
            </div>
        `,
        faq: {
            q: "Can I tell my parents who I voted for?",
            a: "Your vote is your secret. You're not required to tell anyone. But if you choose to, that's your personal choice—it's your vote!"
        },
        quiz: {
            q: "What should you NOT do after voting?",
            options: ["Tell your vote to anyone", "Share photos of your inked finger", "Tell others to go vote", "Return home peacefully"],
            correct: 0
        }
    },
    {
        id: 12,
        title: "Counting & Results",
        icon: "📊",
        oneLine: "Your vote gets counted and results are announced.",
        content: `
            <h3>How Votes Are Counted</h3>
            <p><strong>Timeline:</strong></p>
            <ul>
                <li>Polling booths close at 6 PM on voting day</li>
                <li>Voting machines are sealed and transported securely</li>
                <li>Counting usually happens within 24 hours</li>
            </ul>
            <p><strong>The Counting Process:</strong></p>
            <ul>
                <li>Election officials open machines in a secure counting center</li>
                <li>Observers from all political parties watch the counting</li>
                <li>Each vote is counted carefully and noted</li>
                <li>Final counts are verified multiple times</li>
                <li>Results are announced publicly</li>
            </ul>
            <p><strong>Result Declaration:</strong></p>
            <ul>
                <li>Official results are announced for each area</li>
                <li>Total votes for each candidate are displayed</li>
                <li>Candidate with most votes wins</li>
                <li>Results are published on Election Commission website</li>
            </ul>
            <p><strong>Your Role Doesn't End Here:</strong></p>
            <ul>
                <li>✓ Monitor what your elected representative does</li>
                <li>✓ Hold them accountable for promises</li>
                <li>✓ Participate in community discussions</li>
                <li>✓ Vote again in future elections</li>
            </ul>
            <div class="tip-box">
                <strong>💡 First-Timer Tip:</strong> Your vote has been cast! Results come out within 24 hours. Check Election Commission website (eci.gov.in) for your area results.
            </div>
        `,
        faq: {
            q: "How long does it take to count all votes?",
            a: "Usually 24 hours after polling ends. For large areas, it might take longer, but results are announced the same day or next day."
        },
        quiz: {
            q: "What happens after all votes are counted?",
            options: ["Results are announced publicly", "Machines are destroyed", "Election ends immediately", "Winning candidate starts work"],
            correct: 0
        }
    }
];

// FAQ Data
const faqData = [
    {
        q: "Who can vote in India?",
        a: "You can vote if you're a citizen of India, at least 18 years old, and live in the area where you want to vote."
    },
    {
        q: "How do I register as a voter?",
        a: "Register online at www.nvsp.in (takes 5-10 minutes) or visit your Voter Registration Office with Form 6."
    },
    {
        q: "Is voter registration free?",
        a: "Yes! Voter registration is completely free. Don't pay anyone for it."
    },
    {
        q: "What ID do I need to bring to vote?",
        a: "Bring any ONE valid ID: Voter ID, Aadhar Card, Passport, Driving License, or PAN Card."
    },
    {
        q: "How do I find my polling booth?",
        a: "Check www.eci.gov.in, your voter ID card, or visit your Voter Registration Office."
    },
    {
        q: "What time should I go to vote?",
        a: "Voting is usually 7 AM to 6 PM. Go early (7-10 AM) or late (after 4 PM) to avoid crowds."
    },
    {
        q: "Is the ink used for voting safe?",
        a: "Yes! The ink is non-toxic and food-safe. It washes off in 2-3 days naturally."
    },
    {
        q: "Can anyone see how I vote?",
        a: "No! Voting is 100% secret. The booth is private, and no one can see your choice."
    },
    {
        q: "What if I make a mistake while voting?",
        a: "Tell polling staff immediately. You'll get a new ballot or another chance to vote."
    },
    {
        q: "When will election results be announced?",
        a: "Usually within 24 hours after polling ends. Check Election Commission website (eci.gov.in) for results."
    }
];

// Current step
let currentStep = 1;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    renderFAQs();
    displayStep(currentStep);
    updateProgress();
}

function setupEventListeners() {
    // Quick links
    document.querySelectorAll('.quick-link-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchSection(this.dataset.section);
        });
    });

    // Next/Previous buttons
    document.getElementById('prevBtn').addEventListener('click', previousStep);
    document.getElementById('nextBtn').addEventListener('click', nextStep);
    document.getElementById('prevBtn2').addEventListener('click', previousStep);
    document.getElementById('nextBtn2').addEventListener('click', nextStep);

    // FAQ items
    document.addEventListener('click', function(e) {
        if (e.target.closest('.faq-question')) {
            const item = e.target.closest('.faq-item');
            item.classList.toggle('open');
        }
    });

    // Search
    document.getElementById('searchInput').addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        searchContent(query);
    });

    // Menu toggle
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('visible');
    });
}

function switchSection(section) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    
    // Show selected section
    const selectedSection = document.getElementById(section + '-section');
    if (selectedSection) {
        selectedSection.classList.add('active');
        window.scrollTo(0, 0);
    }

    // Update active quick link
    document.querySelectorAll('.quick-link-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === section) {
            btn.classList.add('active');
        }
    });
}

function displayStep(stepNumber) {
    if (stepNumber < 1 || stepNumber > stepsData.length) return;

    const step = stepsData[stepNumber - 1];
    const container = document.getElementById('stepContainer');

    const stepHTML = `
        <div class="step-card">
            <div class="step-header">
                <div class="step-icon">${step.icon}</div>
                <div class="step-title-group">
                    <h2>Step ${step.id}: ${step.title}</h2>
                    <p class="one-liner">${step.oneLine}</p>
                </div>
            </div>

            <div class="step-content">
                ${step.content}
            </div>

            <div class="step-quiz">
                <h4>Quick FAQ</h4>
                <p><strong>Q: ${step.faq.q}</strong></p>
                <p><strong>A:</strong> ${step.faq.a}</p>
            </div>

            <div class="step-quiz">
                <h4>Test Your Knowledge</h4>
                <button class="quiz-btn" onclick="openQuiz(${stepNumber - 1})">Take Quiz</button>
            </div>
        </div>
    `;

    container.innerHTML = stepHTML;
    document.getElementById('currentStep').textContent = stepNumber;
    updateNavigation(stepNumber);
    currentStep = stepNumber;
    updateProgress();
}

function nextStep() {
    if (currentStep < stepsData.length) {
        currentStep++;
        displayStep(currentStep);
        window.scrollTo(0, 0);
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
        displayStep(currentStep);
        window.scrollTo(0, 0);
    }
}

function updateNavigation(stepNumber) {
    document.getElementById('prevBtn').disabled = stepNumber === 1;
    document.getElementById('nextBtn').disabled = stepNumber === stepsData.length;
    document.getElementById('prevBtn2').disabled = stepNumber === 1;
    document.getElementById('nextBtn2').disabled = stepNumber === stepsData.length;

    if (stepNumber === 1) {
        document.getElementById('prevBtn').textContent = '← Start';
        document.getElementById('prevBtn2').textContent = '← Start';
    } else {
        document.getElementById('prevBtn').textContent = '← Previous';
        document.getElementById('prevBtn2').textContent = '← Previous';
    }

    if (stepNumber === stepsData.length) {
        document.getElementById('nextBtn').textContent = 'Complete!';
        document.getElementById('nextBtn2').textContent = 'Complete!';
    } else {
        document.getElementById('nextBtn').textContent = 'Next →';
        document.getElementById('nextBtn2').textContent = 'Next →';
    }
}

function updateProgress() {
    const percentage = (currentStep / stepsData.length) * 100;
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = `${currentStep}/${stepsData.length} Steps Completed`;
}

function renderFAQs() {
    const container = document.getElementById('faqContainer');
    const html = faqData.map((item, index) => `
        <div class="faq-item">
            <button class="faq-question">
                <span>${item.q}</span>
                <span class="faq-toggle">▼</span>
            </button>
            <div class="faq-answer">${item.a}</div>
        </div>
    `).join('');

    container.innerHTML = html;
}

function openQuiz(stepIndex) {
    const step = stepsData[stepIndex];
    const modal = document.getElementById('quizModal');
    document.getElementById('quizQuestion').textContent = `Step ${step.id}: ${step.quiz.q}`;

    const optionsHTML = step.quiz.options.map((option, index) => `
        <label class="quiz-option">
            <input type="radio" name="quiz-option" value="${index}">
            ${option}
        </label>
    `).join('');

    document.getElementById('quizOptions').innerHTML = optionsHTML;
    document.getElementById('quizFeedback').style.display = 'none';

    // Add click handlers to options
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Store current quiz step
    window.currentQuizStep = stepIndex;
    modal.classList.add('open');
}

function submitQuiz() {
    const selected = document.querySelector('input[name="quiz-option"]:checked');
    if (!selected) {
        alert('Please select an answer!');
        return;
    }

    const stepIndex = window.currentQuizStep;
    const step = stepsData[stepIndex];
    const isCorrect = parseInt(selected.value) === step.quiz.correct;

    const feedback = document.getElementById('quizFeedback');
    feedback.style.display = 'block';

    if (isCorrect) {
        feedback.className = 'quiz-feedback correct';
        feedback.textContent = '✓ Correct! Great job! You understand this step.';
    } else {
        feedback.className = 'quiz-feedback incorrect';
        feedback.textContent = `✗ Not quite. The correct answer is: "${step.quiz.options[step.quiz.correct]}"`;
    }
}

function closeQuiz() {
    document.getElementById('quizModal').classList.remove('open');
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('quizModal');
    if (e.target === modal) {
        closeQuiz();
    }
});

function searchContent(query) {
    if (query.length < 2) {
        document.querySelectorAll('.step-card, .faq-item').forEach(item => {
            item.style.display = 'block';
        });
        return;
    }

    document.querySelectorAll('.step-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? 'block' : 'none';
    });

    document.querySelectorAll('.faq-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? 'block' : 'none';
    });
}

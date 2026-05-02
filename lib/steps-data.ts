import { QuizQuestion } from '@/components/InteractiveQuiz'

export interface StepContent {
  id: number
  title: string
  shortTitle: string
  description: string
  sections: {
    title: string
    content: string
    points?: string[]
  }[]
  quiz: QuizQuestion[]
}

export const STEPS_DATA: StepContent[] = [
  {
    id: 1,
    title: 'Eligibility Check: Are You Eligible to Vote?',
    shortTitle: 'Eligibility Check',
    description:
      "Before you register as a voter, you need to make sure you meet all the eligibility requirements. Let's find out if you can vote!",
    sections: [
      {
        title: 'Who Can Vote?',
        content:
          'Not everyone can vote in Indian elections. You need to meet specific requirements set by the Election Commission of India to be eligible to register as a voter.',
        points: [
          'You must be a citizen of India',
          'You must be at least 18 years old',
          'You must be a resident of the constituency where you want to vote',
          'You must not be disqualified under Indian law',
        ],
      },
      {
        title: 'Who Cannot Vote?',
        content:
          'Some people are disqualified from voting. These rules exist to maintain the integrity of the electoral process.',
        points: [
          'Non-citizens of India',
          'People below 18 years of age',
          'People with unsound mind (as per legal definition)',
          'People convicted of certain crimes',
          'Non-residents of the area',
          'People disqualified by law for specific reasons',
        ],
      },
      {
        title: 'Check Your Eligibility',
        content:
          "Go through the eligibility criteria above and check if you meet all the requirements. If you do, you're ready to move forward! Head to the next step to learn about voter registration.",
      },
    ],
    quiz: [
      {
        id: '1-1',
        question: 'What is the minimum age to vote in India?',
        options: ['16 years', '18 years', '21 years', '25 years'],
        correctAnswer: 1,
        explanation:
          'You must be at least 18 years old to be eligible to register as a voter in India.',
      },
      {
        id: '1-2',
        question: 'Which of the following is NOT a requirement to vote?',
        options: [
          'Being a citizen of India',
          'Being at least 18 years old',
          'Owning property in the constituency',
          'Residing in the constituency',
        ],
        correctAnswer: 2,
        explanation:
          'You do not need to own property to vote. You only need to be a citizen, at least 18 years old, and a resident of the area.',
      },
      {
        id: '1-3',
        question: 'Can a person convicted of a crime vote?',
        options: [
          'Yes, always',
          'No, never',
          'It depends on the crime and sentence',
          'Only after paying a fine',
        ],
        correctAnswer: 2,
        explanation:
          'People convicted of certain crimes may be disqualified from voting, depending on the nature of the crime and the sentence. Some convictions lead to permanent disqualification.',
      },
    ],
  },
  {
    id: 2,
    title: 'Voter Registration: How to Register',
    shortTitle: 'Voter Registration',
    description:
      "Once you confirm that you're eligible to vote, the next step is to register yourself. Let's learn how to do that.",
    sections: [
      {
        title: 'What is Voter Registration?',
        content:
          'Voter registration is the process of officially enrolling yourself as a voter with the Election Commission. This creates your voter record in the electoral rolls.',
      },
      {
        title: 'How to Register Online',
        content:
          'The easiest way to register is online through the official Election Commission website or portal.',
        points: [
          'Visit the Election Commission of India website',
          'Click on "Register to Vote" or "Voter Registration"',
          'Fill out the online form with your details',
          'Upload required documents (Aadhar, PAN, etc.)',
          'Submit the application',
          'Receive confirmation via email or SMS',
        ],
      },
      {
        title: 'How to Register Offline',
        content:
          'If you prefer to register in person, you can visit your local Voter Registration Office (VRO).',
        points: [
          'Find your nearest VRO office',
          'Collect the registration form (Form 6)',
          'Fill it with your details and sign',
          'Attach proof of citizenship and residence',
          'Submit to the VRO officer',
          'Keep the receipt for tracking',
        ],
      },
      {
        title: 'Required Documents',
        content:
          "You'll need some proof documents to register. Common accepted documents include:",
        points: [
          'Aadhar Card',
          'PAN Card',
          'Passport',
          'Driving License',
          'Utility bills for proof of residence',
          'School/College ID',
        ],
      },
    ],
    quiz: [
      {
        id: '2-1',
        question: 'What is the quickest way to register as a voter?',
        options: [
          'Visit the VRO office in person',
          'Register online through the official portal',
          'Call the Election Commission',
          'Ask a family member to register for you',
        ],
        correctAnswer: 1,
        explanation:
          'Online registration is the quickest and most convenient way to register as a voter. You can do it from the comfort of your home.',
      },
      {
        id: '2-2',
        question: 'Which document is NOT accepted for voter registration?',
        options: ['Aadhar Card', 'PAN Card', 'Library Card', 'Passport'],
        correctAnswer: 2,
        explanation:
          'Library cards are generally not accepted as proof of citizenship or identity for voter registration. Aadhar, PAN, Passport, and Driving License are commonly accepted.',
      },
      {
        id: '2-3',
        question: 'Where is Form 6 used?',
        options: [
          'For online registration',
          'For offline registration at VRO',
          'For checking voter details',
          'For election results',
        ],
        correctAnswer: 1,
        explanation:
          'Form 6 is the voter registration form used for offline registration at the Voter Registration Office (VRO).',
      },
    ],
  },
  {
    id: 3,
    title: 'Check Your Voter Details',
    shortTitle: 'Voter Details',
    description:
      'After registering, you need to know your voter ID and other details. This step will help you find and verify your information.',
    sections: [
      {
        title: 'What is a Voter ID?',
        content:
          'A Voter ID is a unique identification number assigned to each registered voter by the Election Commission. It helps identify you in the electoral rolls.',
      },
      {
        title: 'How to Find Your Voter ID',
        content:
          'You can find your voter ID using multiple methods:',
        points: [
          'Check the Election Commission website and search the electoral roll',
          'Visit your local Voter Registration Office',
          'Call the toll-free helpline 1800-234-1155',
          'Check the voter card you receive by post after registration',
          'Use the IVRS (Interactive Voice Response) service',
        ],
      },
      {
        title: 'Information You Need to Provide',
        content:
          'To locate your voter details, you may need to provide:',
        points: [
          'Your full name',
          'Date of birth',
          'Father\'s name or mother\'s name',
          'Constituency name or code',
          'Aadhar number or other ID number',
        ],
      },
      {
        title: 'Update Your Details if Needed',
        content:
          'If you find any errors in your voter details, you can apply to correct them online or at your local VRO office. Forms like Form 8 (to update details) and Form 8A (to change constituency) are available for this purpose.',
      },
    ],
    quiz: [
      {
        id: '3-1',
        question: 'What is a Voter ID?',
        options: [
          'A form for registration',
          'A unique identification number for voters',
          'Your Aadhar card',
          'A temporary pass for elections',
        ],
        correctAnswer: 1,
        explanation:
          'A Voter ID is a unique identification number assigned by the Election Commission to help identify you in the electoral rolls.',
      },
      {
        id: '3-2',
        question: 'What is the toll-free number to get help with voter details?',
        options: ['1800-234-1100', '1800-234-1155', '1800-111-0555', '1800-123-4567'],
        correctAnswer: 1,
        explanation:
          'You can call the toll-free helpline 1800-234-1155 to get assistance with finding or verifying your voter details.',
      },
      {
        id: '3-3',
        question: 'Which form is used to correct errors in voter details?',
        options: ['Form 6', 'Form 7', 'Form 8', 'Form 9'],
        correctAnswer: 2,
        explanation:
          'Form 8 is used to update or correct information in your voter record, such as a change in address or name.',
      },
    ],
  },
  {
    id: 4,
    title: 'Election Timeline: When and Where?',
    shortTitle: 'Election Timeline',
    description:
      "Elections happen on specific dates. Let's learn about the important dates and timeline for the voting process.",
    sections: [
      {
        title: 'The Election Schedule',
        content:
          'The Election Commission announces the election schedule well in advance. This includes important dates that every voter should know.',
      },
      {
        title: 'Key Dates to Remember',
        content:
          'Various important dates make up the election process:',
        points: [
          'Election Announcement Date: When the election is formally declared',
          'Nomination Date: When candidates can file their nomination papers',
          'Scrutiny Date: When nominations are reviewed and approved',
          'Withdrawal Date: When candidates can withdraw their candidacy',
          'Polling Date: The actual day you vote',
          'Counting Date: When votes are counted and results declared',
        ],
      },
      {
        title: 'What Happens on Polling Day',
        content:
          'Polling Day is when elections are held. On this day, polling booths are open from early morning (usually 7 AM) until evening (usually 6 PM). The exact timings are announced by the Election Commission.',
      },
      {
        title: 'After Voting',
        content:
          'After polling ends, the votes are counted on a predetermined date. Results are usually declared within a few days. You can watch the counting process live on television or online.',
      },
    ],
    quiz: [
      {
        id: '4-1',
        question: 'Who announces the election schedule?',
        options: [
          'The Prime Minister',
          'The Election Commission of India',
          'The President',
          'The Parliament',
        ],
        correctAnswer: 1,
        explanation:
          'The Election Commission of India is responsible for announcing the election schedule and all important dates.',
      },
      {
        id: '4-2',
        question: 'What does the Scrutiny Date refer to?',
        options: [
          'The day of voting',
          'The day results are declared',
          'The day nominations are reviewed',
          'The day campaigning starts',
        ],
        correctAnswer: 2,
        explanation:
          'Scrutiny Date is when the Election Commission reviews and approves the nomination papers filed by candidates.',
      },
      {
        id: '4-3',
        question: 'When do counting and results usually happen?',
        options: [
          'On the same day as polling',
          'Within a few days after polling',
          'A month after polling',
          'During the next election',
        ],
        correctAnswer: 1,
        explanation:
          'Vote counting typically happens within a few days after polling day, and results are declared shortly after.',
      },
    ],
  },
  {
    id: 5,
    title: 'Polling Day Preparation: Get Ready!',
    shortTitle: 'Day Prep',
    description:
      "Polling day is almost here! Let's prepare you for the big day so you're ready to vote.",
    sections: [
      {
        title: 'Know Your Polling Booth',
        content:
          'Every voter is assigned to a specific polling booth. You must vote at your assigned booth. Find out which one is yours!',
        points: [
          'Visit the Election Commission website',
          'Enter your name and constituency details',
          'Your polling booth address and number will be displayed',
          'Note down the address and directions',
          'Plan your route to get there on time',
        ],
      },
      {
        title: 'What to Bring',
        content:
          'You must bring valid identification proof to the polling booth.',
        points: [
          'Aadhar Card (most common)',
          'PAN Card',
          'Passport',
          'Driving License',
          'Voter Card (if you have it)',
          'Any government-issued ID with your photo',
        ],
      },
      {
        title: 'Dos and Don\'ts on Polling Day',
        content:
          'Follow these guidelines to ensure a smooth voting experience:',
        points: [
          'DO: Reach the booth early to avoid queues',
          'DO: Keep your ID ready for verification',
          'DO: Bring your own pen if you prefer',
          "DON'T: Bring guns, weapons, or sharp objects",
          "DON'T: Take photos or videos at the polling booth",
          "DON'T: Campaign or show party symbols near the booth",
        ],
      },
    ],
    quiz: [
      {
        id: '5-1',
        question: 'Where can you find your polling booth number?',
        options: [
          'In your Aadhar card',
          'On the Election Commission website',
          'At your home address',
          'On the voting day',
        ],
        correctAnswer: 1,
        explanation:
          'You can find your polling booth number and address by searching on the Election Commission website using your name and constituency.',
      },
      {
        id: '5-2',
        question: 'What is the best time to vote?',
        options: [
          'Just before polling closes',
          'During lunch time',
          'Early morning to avoid queues',
          'Anytime is fine',
        ],
        correctAnswer: 2,
        explanation:
          'Early morning is the best time to vote to avoid long queues. Reach the polling booth right when it opens or in the early hours.',
      },
      {
        id: '5-3',
        question: 'Is it allowed to take selfies at the polling booth?',
        options: [
          'Yes, always',
          'Only outside the booth',
          'No, photography is not allowed inside',
          'Only with permission',
        ],
        correctAnswer: 2,
        explanation:
          'Photography, including selfies, is strictly not allowed inside the polling booth to maintain the sanctity and secrecy of the voting process.',
      },
    ],
  },
  {
    id: 6,
    title: 'At the Polling Booth: Your Voting Destination',
    shortTitle: 'Polling Booth',
    description:
      "You've arrived at the polling booth! Let's walk through what you'll find there and what happens.",
    sections: [
      {
        title: "What You'll Find at the Booth",
        content:
          'The polling booth is set up with several stations and officials to ensure a smooth and fair voting process.',
        points: [
          'Entry Point: Where your name is checked',
          'Identity Verification Counter: Where your ID is checked',
          'Inking Station: Where your finger is marked with indelible ink',
          'Voting Area: Where you cast your vote',
          'Exit Point: Where you leave after voting',
        ],
      },
      {
        title: 'Polling Booth Staff',
        content:
          'Several trained officials work at each polling booth to help the process:',
        points: [
          'Polling Officers: Manage the booth and process',
          'Poll Assistants: Help voters and record names',
          'Presiding Officer: In charge of the entire booth',
          'Security Personnel: Maintain order and security',
        ],
      },
      {
        title: 'Booth Accessibility',
        content:
          'Polling booths are designed to be accessible to all voters:',
        points: [
          'Persons with disabilities get priority',
          'Elderly voters can bring a companion',
          'Ramps and accessible routes are provided',
          'If you need help, inform the officers',
        ],
      },
    ],
    quiz: [
      {
        id: '6-1',
        question: 'What is the first thing that happens when you enter a polling booth?',
        options: [
          'Your finger is marked with ink',
          'Your name is checked and verified',
          'You cast your vote',
          'You pay a voting fee',
        ],
        correctAnswer: 1,
        explanation:
          "First, poll workers check your name in the voter list to make sure you're registered and haven't already voted.",
      },
      {
        id: '6-2',
        question: 'Who is in charge of the polling booth?',
        options: [
          'Police Officer',
          'Local politician',
          'Presiding Officer',
          'Polling Assistant',
        ],
        correctAnswer: 2,
        explanation:
          'The Presiding Officer is in charge of the entire polling booth and ensures that the voting process follows all rules and procedures.',
      },
      {
        id: '6-3',
        question: 'Can a person with disability get special assistance?',
        options: [
          'No, they must vote like everyone else',
          'Yes, they get priority and can bring a companion',
          'Only if they call in advance',
          'Only if they have a medical certificate',
        ],
        correctAnswer: 1,
        explanation:
          'Yes, persons with disabilities receive priority at polling booths, and they can bring a companion to help them if needed.',
      },
    ],
  },
  {
    id: 7,
    title: "Identity Verification: Proving You're You",
    shortTitle: 'ID Check',
    description:
      "The next step is verifying your identity. This is an important part of the voting process to ensure only eligible voters vote.",
    sections: [
      {
        title: 'Why Identity Verification?',
        content:
          "Identity verification ensures that only registered voters vote and prevents fraud. It's a crucial part of maintaining the integrity of elections.",
      },
      {
        title: 'How Identity Verification Works',
        content:
          "Here's what happens during identity verification:",
        points: [
          'Show your valid ID proof to the poll worker',
          'Your details are matched against the electoral roll',
          'The poll worker checks that you match the photo ID',
          "If verified, you're approved to vote",
          'Your name is marked in the electoral roll',
        ],
      },
      {
        title: 'Accepted ID Proofs',
        content:
          'Any of these government-issued IDs are accepted:',
        points: [
          'Aadhar Card (Most Common)',
          'PAN Card',
          'Passport',
          'Driving License',
          'Voter Card',
          'Post office ID',
          'Student ID issued by recognized institutions',
        ],
      },
      {
        title: "What If I Don't Have ID?",
        content:
          "If you don't have any of the above IDs, you may still be able to vote:",
        points: [
          'Ask for AADHAAR-less voting process',
          'Provide voter card if you have it',
          'You may be verified using other documents',
          'Inform the poll officers about your situation',
        ],
      },
    ],
    quiz: [
      {
        id: '7-1',
        question: 'What is the main purpose of identity verification?',
        options: [
          'To collect personal information',
          'To ensure only registered voters vote',
          'To charge a voting fee',
          'To record political preferences',
        ],
        correctAnswer: 1,
        explanation:
          "Identity verification ensures that only eligible, registered voters cast ballots and prevents fraud in the electoral process.",
      },
      {
        id: '7-2',
        question: 'Which of the following is NOT a valid ID for voting?',
        options: [
          'Aadhar Card',
          'Library Membership Card',
          'Driving License',
          'Passport',
        ],
        correctAnswer: 1,
        explanation:
          "Library Membership Cards are not accepted as valid proof of identity for voting. Government-issued IDs like Aadhar, Driving License, or Passport are required.",
      },
      {
        id: '7-3',
        question: 'What happens after your identity is verified?',
        options: [
          'Your name is marked in the electoral roll',
          'You receive your voter card',
          'You are photographed',
          'You sign a form',
        ],
        correctAnswer: 0,
        explanation:
          "After your identity is verified, your name is marked in the electoral roll to ensure you don't vote twice.",
      },
    ],
  },
  {
    id: 8,
    title: 'Finger Inking: The Voting Mark',
    shortTitle: 'Finger Inking',
    description:
      'Once verified, your finger gets marked with indelible ink. This is a safety measure to ensure you only vote once.',
    sections: [
      {
        title: 'What is Indelible Ink?',
        content:
          "Indelible ink is a special ink that cannot be easily removed. It's used to mark voters to prevent them from voting twice in the same election.",
      },
      {
        title: 'How Does Finger Inking Work?',
        content:
          'The inking process is quick and simple:',
        points: [
          'After identity verification, you go to the inking station',
          'A poll worker applies one small mark of indelible ink on your left hand',
          'Usually the mark is on the nail of the index finger',
          'The ink takes a few minutes to dry',
          'This mark proves you have voted',
        ],
      },
      {
        title: 'Is the Ink Harmful?',
        content:
          "The indelible ink used in elections is safe and non-toxic. It's specifically chosen for its safety and the fact that it lasts for days. Some voters worry about the ink, but it's completely safe for everyone, including children.",
      },
      {
        title: 'The Purpose of Inking',
        content:
          'Finger inking serves two important purposes:',
        points: [
          'Prevents double voting: Ensures you vote only once',
          'Increases accountability: Makes the system transparent',
          'Visual proof: Shows you have participated',
        ],
      },
    ],
    quiz: [
      {
        id: '8-1',
        question: 'Why is indelible ink used in elections?',
        options: [
          'To color-code voters',
          'To prevent people from voting twice',
          'To mark party preferences',
          'To collect voter data',
        ],
        correctAnswer: 1,
        explanation:
          'Indelible ink is used to mark voters so they cannot vote multiple times in the same election. The mark is visible proof of voting.',
      },
      {
        id: '8-2',
        question: 'Is indelible ink harmful to the skin?',
        options: ["Yes, it's toxic", "No, it's safe and non-toxic", 'Only for people with allergies', 'Depends on the brand'],
        correctAnswer: 1,
        explanation:
          "The indelible ink used in elections is specifically chosen for its safety. It's non-toxic and safe for everyone, including children.",
      },
      {
        id: '8-3',
        question: 'Where is the indelible ink mark usually placed?',
        options: [
          'On the forehead',
          'On the left hand (index finger nail)',
          'On the arm',
          'On any visible part of the body',
        ],
        correctAnswer: 1,
        explanation:
          'The indelible ink mark is typically applied to the left hand, usually on the nail of the index finger. This is a standardized practice across Indian elections.',
      },
    ],
  },
  {
    id: 9,
    title: 'Voter Register Entry: Recording Your Vote',
    shortTitle: 'Voter Register',
    description:
      "Your presence and voting is recorded in the electoral roll. Let's understand how this registration works.",
    sections: [
      {
        title: 'What is the Electoral Roll?',
        content:
          "The electoral roll (or voter list) is an official list of all registered voters in a constituency. It's maintained by the Election Commission and updated regularly.",
      },
      {
        title: 'Recording Your Participation',
        content:
          'When you vote, your information is recorded to ensure transparency:',
        points: [
          'Your name is marked against in the electoral roll',
          'The time of your vote is recorded',
          'A unique serial number is assigned to your vote',
          'This creates an official record of your participation',
        ],
      },
      {
        title: 'Why This Record Matters',
        content:
          'Keeping proper records is important for:',
        points: [
          'Accountability: Everyone can see who voted',
          'Preventing fraud: Stops double voting',
          'Legal proof: Serves as evidence in case of disputes',
          'Statistics: Helps analyze voter turnout',
        ],
      },
      {
        title: 'Your Vote Remains Secret',
        content:
          'Important note: While your voting is recorded, your CHOICE of candidate remains completely secret. No one knows who you voted for. This is protected by voting laws.',
      },
    ],
    quiz: [
      {
        id: '9-1',
        question: 'What is the electoral roll?',
        options: [
          'A list of candidates running for election',
          'An official list of registered voters',
          'A record of past election results',
          'A government contact list',
        ],
        correctAnswer: 1,
        explanation:
          'The electoral roll is an official list of all registered voters in a constituency, maintained by the Election Commission.',
      },
      {
        id: '9-2',
        question: 'What happens to your name when you vote?',
        options: [
          "It's removed from the voter list",
          "It's marked to show you have voted",
          "It's published in newspapers",
          "It's kept secret",
        ],
        correctAnswer: 1,
        explanation:
          'Your name is marked in the electoral roll to show that you have voted. This prevents you from voting again.',
      },
      {
        id: '9-3',
        question: 'Is your choice of candidate kept secret?',
        options: [
          'No, everyone can see who you voted for',
          'Yes, your choice is completely confidential',
          'Only if you vote in person',
          'Only in digital voting',
        ],
        correctAnswer: 1,
        explanation:
          'Yes! Your choice of candidate is completely secret. While your voting is recorded, no one will know who you voted for. This is protected by law.',
      },
    ],
  },
  {
    id: 10,
    title: 'The Voting Area: Where the Magic Happens',
    shortTitle: 'Voting Area',
    description:
      "You're almost there! Now let's learn about the voting area and how it's set up.",
    sections: [
      {
        title: 'What is the Voting Area?',
        content:
          "The voting area is a secured, private space where you cast your vote. It's designed to ensure complete privacy and secrecy of your vote.",
      },
      {
        title: 'Design and Privacy',
        content:
          'The voting booths are designed to protect your privacy:',
        points: [
          'Enclosed booths: Private spaces where you vote alone',
          'Curtains or screens: Prevent others from seeing your choice',
          'No one can watch: Poll workers stay outside',
          'Complete privacy: Your vote remains secret',
        ],
      },
      {
        title: 'Equipment in the Voting Area',
        content:
          "Depending on the type of election, you'll find:",
        points: [
          'Electronic Voting Machine (EVM): A button-based voting device',
          'Or Ballot Papers: Printed papers where you mark your choice',
          'Ballot Box: Where your vote is placed',
          'Pen or Pencil: To mark your choice (for ballot papers)',
        ],
      },
      {
        title: 'Time in the Voting Area',
        content:
          "You have enough time in the voting booth to make your choice carefully. There's no rush. Take your time to understand the candidates and make an informed decision.",
      },
    ],
    quiz: [
      {
        id: '10-1',
        question: 'Why are voting booths enclosed?',
        options: [
          'For security reasons',
          'To ensure privacy and secrecy of votes',
          'To prevent crowding',
          'To prevent voter fraud',
        ],
        correctAnswer: 1,
        explanation:
          "Voting booths are enclosed to ensure that your vote remains completely private and secret. No one should be able to see who you're voting for.",
      },
      {
        id: '10-2',
        question: 'Can poll workers watch how you vote?',
        options: [
          'Yes, always',
          'Only in some cases',
          'No, they must stay outside',
          'Only if you ask them to help',
        ],
        correctAnswer: 2,
        explanation:
          'Poll workers are required to stay outside the voting booth. They cannot and should not watch how you vote. Your voting choice must remain secret.',
      },
      {
        id: '10-3',
        question: 'How much time do you have to vote?',
        options: [
          '10 seconds',
          '30 seconds',
          'As much time as you need',
          'Only 5 seconds',
        ],
        correctAnswer: 2,
        explanation:
          "You have as much time as you need to carefully examine the candidates and make your choice. There's no time limit. Take your time to vote wisely.",
      },
    ],
  },
  {
    id: 11,
    title: 'Casting Your Vote: The Moment of Truth',
    shortTitle: 'Cast Your Vote',
    description:
      "This is it! You're in the voting booth. Let's walk through how to actually cast your vote.",
    sections: [
      {
        title: 'Using an Electronic Voting Machine (EVM)',
        content:
          "Most Indian elections use Electronic Voting Machines (EVMs). Here's how to use one:",
        points: [
          'The poll worker will show you the EVM',
          "Candidates' names and symbols appear on the machine",
          'Press the button next to your chosen candidate',
          "You'll see a confirmation",
          'Your vote is recorded electronically',
          'No paper trail needed',
        ],
      },
      {
        title: 'Using Ballot Papers',
        content:
          "In some cases, ballot papers are used. Here's the process:",
        points: [
          "You receive a ballot paper with candidates' names and symbols",
          'You mark an "X" or tick next to your chosen candidate',
          'Only one mark per ballot',
          'Fold the ballot paper as instructed',
          'Place it in the sealed ballot box',
          'Your vote is now recorded',
        ],
      },
      {
        title: 'Important Rules to Follow',
        content: 'Remember these important points when voting:',
        points: [
          'Vote for only ONE candidate',
          "Mark clearly but don't damage the EVM or paper",
          "Don't show your vote to anyone",
          'If you make a mistake, ask for a new ballot paper',
          "Don't take any voting material out of the booth",
        ],
      },
      {
        title: 'After Voting',
        content:
          "After you've cast your vote, exit the booth and leave the polling station. Your vote is now recorded and will be counted on the counting day.",
      },
    ],
    quiz: [
      {
        id: '11-1',
        question: 'How many candidates can you vote for?',
        options: ['As many as you want', 'Only one', 'Up to three', 'Depends on the election'],
        correctAnswer: 1,
        explanation:
          "You can vote for ONLY ONE candidate. Your vote counts for only one person. Voting for multiple candidates makes the vote invalid.",
      },
      {
        id: '11-2',
        question: 'What should you do if you make a mistake on a ballot paper?',
        options: [
          'Correct it with a pen',
          'Ask the poll worker for a new ballot paper',
          'Cross it out heavily',
          'Leave it as is',
        ],
        correctAnswer: 1,
        explanation:
          'If you make a mistake on a ballot paper, ask the poll worker for a new one. They will give you a fresh ballot paper to vote with.',
      },
      {
        id: '11-3',
        question: 'Is it okay to show your vote to someone outside?',
        options: [
          'Yes, to prove you voted',
          'Only with family members',
          'No, your vote must remain secret',
          'Only to election officials',
        ],
        correctAnswer: 2,
        explanation:
          'No! Your vote must remain completely secret. Do not show it to anyone. This is both a law and an ethical responsibility.',
      },
    ],
  },
  {
    id: 12,
    title: 'Election Results: Counting and Winners',
    shortTitle: 'Results',
    description:
      "After voting ends, votes are counted and results are declared. Let's learn about the final step of the election process.",
    sections: [
      {
        title: 'The Counting Process',
        content:
          'After polling booths close, votes are counted in a transparent and carefully monitored process:',
        points: [
          'Counting centers are set up',
          'Votes from all polling booths are brought to the center',
          'Election officials and candidate representatives watch the process',
          'Electronic votes are tallied using machines',
          'Ballot papers (if any) are counted by hand',
          'Results are recorded and verified',
        ],
      },
      {
        title: 'When Are Results Declared?',
        content:
          'Results are usually declared within a few days of the polling day. The exact timeline depends on the number of constituencies and the voting method used. You can watch the counting live on television or online.',
      },
      {
        title: 'Understanding the Results',
        content:
          "When results are declared, you'll see:",
        points: [
          'Total votes cast in each constituency',
          'Votes received by each candidate',
          'The winning candidate with the most votes',
          'Vote percentages and margins',
          'Voter turnout percentage',
        ],
      },
      {
        title: "Your Role Doesn't End Here",
        content:
          'Even after voting and the results are declared, your role as a citizen continues. You can:',
        points: [
          'Hold your elected representatives accountable',
          'Participate in local governance',
          'Vote in future elections',
          'Encourage others to vote',
          'Stay informed about policies and decisions',
        ],
      },
    ],
    quiz: [
      {
        id: '12-1',
        question: 'When are election results usually declared?',
        options: [
          'On the same day as voting',
          'Within a few days of voting',
          'A month after voting',
          'Before the next election',
        ],
        correctAnswer: 1,
        explanation:
          'Election results are usually declared within a few days of the polling day, depending on the number of constituencies and the counting process.',
      },
      {
        id: '12-2',
        question: 'Who watches the counting process?',
        options: [
          'Only election officials',
          'Only the winning candidate',
          'Election officials and representatives of all candidates',
          'The general public only',
        ],
        correctAnswer: 2,
        explanation:
          'The counting process is transparent and monitored by election officials and representatives of all candidates to ensure fairness and accuracy.',
      },
      {
        id: '12-3',
        question: 'What happens after you vote?',
        options: [
          'Your responsibility as a voter ends',
          'You must campaign for your candidate',
          'You remain accountable for holding elected representatives responsible',
          'You cannot vote again',
        ],
        correctAnswer: 2,
        explanation:
          'After voting, your role as a citizen continues. You should hold your elected representatives accountable and stay informed about their actions.',
      },
    ],
  },
]

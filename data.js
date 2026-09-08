// =============================================
// OptiSkill – Shared Dummy Data & Utilities
// =============================================

// ---- DUMMY ACCOUNTS ----
const OPTISKILL_ACCOUNTS = {
  student: { email: 'student@optiskill.com', password: 'student123', role: 'student', name: 'Arjun Sharma' },
  company: { email: 'company@optiskill.com', password: 'company123', role: 'company', name: 'TechCorp HR' }
};

// ---- INTERNSHIPS DATA ----
const INTERNSHIPS = [
  {
    id: 1, title: 'Web Development Intern', company: 'TechCorp India', logo: 'TC',
    location: 'Remote', duration: '3 Months', stipend: '₹15,000/month',
    domain: 'Technology', skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    deadline: '2024-10-30', type: 'Paid',
    desc: 'Build and maintain web applications. Collaborate with senior developers. Exposure to full-stack development using React and Node.js.',
    color: 'blue'
  },
  {
    id: 2, title: 'Data Science Intern', company: 'Analytics Hub', logo: 'AH',
    location: 'Bangalore', duration: '2 Months', stipend: '₹12,000/month',
    domain: 'Data Science', skills: ['Python', 'Pandas', 'ML', 'SQL'],
    deadline: '2024-11-15', type: 'Paid',
    desc: 'Work on real datasets, build predictive models, and present data-driven insights. Hands-on experience with scikit-learn and Tableau.',
    color: 'green'
  },
  {
    id: 3, title: 'UI/UX Design Intern', company: 'DesignWave', logo: 'DW',
    location: 'Remote', duration: '2 Months', stipend: '₹8,000/month',
    domain: 'Design', skills: ['Figma', 'Adobe XD', 'Prototyping'],
    deadline: '2024-10-20', type: 'Paid',
    desc: 'Design intuitive user interfaces for mobile and web applications. Conduct user research and usability testing.',
    color: 'purple'
  },
  {
    id: 4, title: 'Marketing Intern', company: 'BrandBoost', logo: 'BB',
    location: 'Delhi', duration: '3 Months', stipend: '₹6,000/month',
    domain: 'Marketing', skills: ['SEO', 'Social Media', 'Content Writing'],
    deadline: '2024-11-01', type: 'Paid',
    desc: 'Manage social media campaigns, create content, and analyze marketing metrics to boost brand awareness.',
    color: 'pink'
  },
  {
    id: 5, title: 'Cloud Computing Intern', company: 'CloudSphere', logo: 'CS',
    location: 'Remote', duration: '4 Months', stipend: '₹18,000/month',
    domain: 'Technology', skills: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    deadline: '2024-12-01', type: 'Paid',
    desc: 'Assist in cloud infrastructure setup, maintenance, and deployment pipelines using AWS and Azure services.',
    color: 'indigo'
  },
  {
    id: 6, title: 'Finance & Accounting Intern', company: 'FinServ Ltd', logo: 'FS',
    location: 'Mumbai', duration: '2 Months', stipend: '₹7,000/month',
    domain: 'Finance', skills: ['Excel', 'Tally', 'Financial Modeling'],
    deadline: '2024-10-25', type: 'Paid',
    desc: 'Assist the finance team with reporting, reconciliation, and financial analysis using Excel and Tally.',
    color: 'yellow'
  },
];

// ---- SCHOLARSHIPS DATA ----
const SCHOLARSHIPS = [
  {
    id: 1, title: 'National Merit Scholarship 2024', org: 'Ministry of Education', logo: 'ME',
    amount: '₹50,000/year', eligibility: '10th/12th with 85%+', deadline: '2024-11-30',
    category: 'Merit', domain: 'All Streams',
    desc: 'Awarded to students excelling academically with financial need. Open to all Indian students.',
    color: 'blue'
  },
  {
    id: 2, title: 'STEM Excellence Award', org: 'TechFoundation India', logo: 'TF',
    amount: '₹75,000', eligibility: 'B.Tech / B.Sc students', deadline: '2024-10-15',
    category: 'Merit', domain: 'Engineering/Science',
    desc: 'Supporting future innovators in STEM. Essay submission and academic transcript required.',
    color: 'purple'
  },
  {
    id: 3, title: 'Girls Empowerment Scholarship', org: 'EmpowerHer NGO', logo: 'EH',
    amount: '₹30,000', eligibility: 'Female students, any stream', deadline: '2024-11-10',
    category: 'Special Category', domain: 'All Streams',
    desc: 'Aimed at empowering female students by reducing financial barriers to higher education.',
    color: 'pink'
  },
  {
    id: 4, title: 'Sports & Culture Scholarship', org: 'Youth India Council', logo: 'YI',
    amount: '₹25,000', eligibility: 'State/National level athletes/artists', deadline: '2024-12-01',
    category: 'Sports/Arts', domain: 'All Streams',
    desc: 'For students who have excelled in sports or arts at a state or national level.',
    color: 'green'
  },
  {
    id: 5, title: 'Minority Community Aid', org: 'Waqf Board / NMMS', logo: 'WB',
    amount: '₹40,000/year', eligibility: 'Minority community students', deadline: '2024-10-31',
    category: 'Need-based', domain: 'All Streams',
    desc: 'Financial aid for students from minority communities pursuing higher education.',
    color: 'orange'
  },
  {
    id: 6, title: 'Research & Innovation Grant', org: 'IIT Alumni Network', logo: 'IA',
    amount: '₹1,00,000', eligibility: 'PG / PhD students with research project', deadline: '2024-11-20',
    category: 'Research', domain: 'Science & Technology',
    desc: 'Supports postgraduate students engaged in innovative research with high societal impact.',
    color: 'indigo'
  },
];

// ---- PLACEMENTS DATA ----
const PLACEMENTS = [
  {
    id: 1, title: 'Software Development Engineer', company: 'Infosys', logo: 'IS',
    location: 'Pune / Bangalore', package: '₹6.5 LPA', experience: 'Fresher',
    domain: 'Technology', skills: ['Java', 'DSA', 'Problem Solving', 'SQL'],
    deadline: '2024-10-31', type: 'Full-Time',
    desc: 'Join Infosys as an SDE and work on cutting-edge enterprise solutions for global clients.',
    color: 'blue'
  },
  {
    id: 2, title: 'Data Analyst', company: 'Flipkart', logo: 'FK',
    location: 'Bangalore', package: '₹9 LPA', experience: 'Fresher',
    domain: 'Data', skills: ['SQL', 'Python', 'Excel', 'Tableau'],
    deadline: '2024-11-10', type: 'Full-Time',
    desc: 'Analyze e-commerce data to derive actionable business insights. Work with large-scale datasets.',
    color: 'yellow'
  },
  {
    id: 3, title: 'Product Manager Trainee', company: 'Paytm', logo: 'PT',
    location: 'Noida', package: '₹7 LPA', experience: 'Fresher',
    domain: 'Product', skills: ['Analytical Thinking', 'Excel', 'Communication', 'Agile'],
    deadline: '2024-11-05', type: 'Full-Time',
    desc: 'Assist product managers in defining product roadmaps, running sprints and analyzing user data.',
    color: 'indigo'
  },
  {
    id: 4, title: 'HR Executive', company: 'HDFC Bank', logo: 'HB',
    location: 'Mumbai', package: '₹5.5 LPA', experience: 'Fresher',
    domain: 'HR', skills: ['Communication', 'MS Office', 'Recruiting', 'HRMS'],
    deadline: '2024-10-20', type: 'Full-Time',
    desc: 'Manage recruitment, onboarding, and employee relations for one of India\'s top banks.',
    color: 'green'
  },
  {
    id: 5, title: 'UI Developer', company: 'Wipro', logo: 'WP',
    location: 'Remote / Hyderabad', package: '₹6 LPA', experience: 'Fresher',
    domain: 'Technology', skills: ['React', 'CSS', 'JavaScript', 'Git'],
    deadline: '2024-11-25', type: 'Full-Time',
    desc: 'Build pixel-perfect, responsive UIs for enterprise clients using React and modern CSS.',
    color: 'purple'
  },
  {
    id: 6, title: 'Digital Marketing Executive', company: 'Zomato', logo: 'ZM',
    location: 'Gurugram', package: '₹5 LPA', experience: 'Fresher',
    domain: 'Marketing', skills: ['SEO', 'Google Ads', 'Social Media', 'Analytics'],
    deadline: '2024-11-15', type: 'Full-Time',
    desc: 'Drive brand campaigns across digital channels for Zomato\'s food delivery and dining platforms.',
    color: 'red'
  },
];

// ---- SKILL ASSESSMENTS ----
const ASSESSMENTS = [
  {
    id: 'python', title: 'Python Basics', icon: 'fab fa-python', color: 'blue',
    questions: 5, time: '10 mins', level: 'Beginner', badge: '🐍',
    quizzes: [
      { q: 'What is the output of print(2**3)?', options: ['6','8','9','None'], ans: 1 },
      { q: 'Which keyword is used to define a function in Python?', options: ['function','def','func','define'], ans: 1 },
      { q: 'What data type is the result of 5/2 in Python 3?', options: ['int','float','str','bool'], ans: 1 },
      { q: 'Which of these is a mutable data type?', options: ['Tuple','String','List','Int'], ans: 2 },
      { q: 'What does len([1,2,3]) return?', options: ['2','3','4','Error'], ans: 1 },
    ]
  },
  {
    id: 'html-css', title: 'HTML & CSS', icon: 'fab fa-html5', color: 'orange',
    questions: 5, time: '8 mins', level: 'Beginner', badge: '🌐',
    quizzes: [
      { q: 'Which tag creates a hyperlink?', options: ['<link>','<a>','<href>','<url>'], ans: 1 },
      { q: 'CSS stands for?', options: ['Computer Style Sheets','Creative Style Sheets','Cascading Style Sheets','Colorful Style Sheets'], ans: 2 },
      { q: 'Which HTML attribute specifies an alternate text for an image?', options: ['title','src','alt','href'], ans: 2 },
      { q: 'How do you select elements with class "box" in CSS?', options: ['#box','.box','box','*box'], ans: 1 },
      { q: 'What does the <br> tag do?', options: ['Bold text','Line break','Background color','Border'], ans: 1 },
    ]
  },
  {
    id: 'aptitude', title: 'Aptitude & Reasoning', icon: 'fas fa-calculator', color: 'purple',
    questions: 5, time: '12 mins', level: 'Intermediate', badge: '🧠',
    quizzes: [
      { q: 'A train travels 60 km in 1 hour. How far in 2.5 hours?', options: ['120 km','150 km','130 km','100 km'], ans: 1 },
      { q: 'What comes next: 2, 4, 8, 16, __?', options: ['20','24','32','30'], ans: 2 },
      { q: 'If MANGO = 14, what is APPLE?', options: ['15','16','14','17'], ans: 0 },
      { q: 'A person buys for ₹100, sells for ₹120. Profit %?', options: ['10%','15%','20%','25%'], ans: 2 },
      { q: 'Which is the odd one out: Circle, Square, Triangle, Cylinder?', options: ['Circle','Square','Triangle','Cylinder'], ans: 3 },
    ]
  },
  {
    id: 'communication', title: 'Communication Skills', icon: 'fas fa-comments', color: 'green',
    questions: 5, time: '10 mins', level: 'Beginner', badge: '💬',
    quizzes: [
      { q: 'Which of these is the best way to start a formal email?', options: ['Hey!','Dear Sir/Madam','Yo!','Hello Friend'], ans: 1 },
      { q: 'Active listening involves?', options: ['Talking more','Interrupting','Paying full attention','Checking your phone'], ans: 2 },
      { q: 'What is the purpose of an executive summary?', options: ['Tell a story','Summarize key points briefly','Give personal opinion','Entertain the reader'], ans: 1 },
      { q: '"I am good" is a reply to?', options: ['How are you?','What time is it?','Where are you?','Goodbye'], ans: 0 },
      { q: 'Non-verbal communication includes?', options: ['Writing','Body language','Speaking','Typing'], ans: 1 },
    ]
  },
  {
    id: 'sql', title: 'SQL & Databases', icon: 'fas fa-database', color: 'indigo',
    questions: 5, time: '12 mins', level: 'Intermediate', badge: '🗄️',
    quizzes: [
      { q: 'Which SQL clause filters records?', options: ['ORDER BY','GROUP BY','WHERE','SELECT'], ans: 2 },
      { q: 'What does PRIMARY KEY do?', options: ['Sorts data','Uniquely identifies rows','Joins tables','Filters duplicates'], ans: 1 },
      { q: 'Which JOIN returns all records from both tables?', options: ['INNER JOIN','LEFT JOIN','RIGHT JOIN','FULL OUTER JOIN'], ans: 3 },
      { q: 'SQL stands for?', options: ['Structured Query Language','Simple Query Logic','Stored Queue Language','Standard Query Layer'], ans: 0 },
      { q: 'Which function counts the number of rows?', options: ['SUM()','AVG()','COUNT()','MAX()'], ans: 2 },
    ]
  },
];

// ---- COMPANY DUMMY POSTS ----
const COMPANY_POSTS = [
  { id: 1, type: 'Internship', title: 'React Developer Intern', status: 'Active', applications: 24, deadline: '2024-10-30' },
  { id: 2, type: 'Placement', title: 'Full Stack Developer', status: 'Active', applications: 56, deadline: '2024-11-15' },
  { id: 3, type: 'Scholarship', title: 'Tech Excellence Award', status: 'Closed', applications: 120, deadline: '2024-09-30' },
];

// ---- UTILITIES ----
function getUser() {
  return JSON.parse(localStorage.getItem('optiskill_user') || '{}');
}
function requireAuth(role) {
  const user = getUser();
  if (!user.email) { window.location.href = 'index.html'; return null; }
  if (role && user.role !== role) { window.location.href = role === 'company' ? 'company-dashboard.html' : 'dashboard.html'; return null; }
  return user;
}
function logout() {
  localStorage.removeItem('optiskill_user');
  window.location.href = 'index.html';
}
function getApplied() {
  return JSON.parse(localStorage.getItem('optiskill_applied') || '[]');
}
function applyTo(id, type) {
  const applied = getApplied();
  const key = type + '-' + id;
  if (!applied.includes(key)) applied.push(key);
  localStorage.setItem('optiskill_applied', JSON.stringify(applied));
}
function isApplied(id, type) {
  return getApplied().includes(type + '-' + id);
}

const COLOR_MAP = {
  blue:   { bg: 'bg-blue-100',   text: 'text-blue-700',   badge: 'bg-blue-50 text-blue-600',   btn: 'bg-blue-600 hover:bg-blue-700' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-700', badge: 'bg-purple-50 text-purple-600', btn: 'bg-purple-600 hover:bg-purple-700' },
  green:  { bg: 'bg-green-100',  text: 'text-green-700',  badge: 'bg-green-50 text-green-600',  btn: 'bg-green-600 hover:bg-green-700' },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-700', badge: 'bg-yellow-50 text-yellow-600', btn: 'bg-yellow-500 hover:bg-yellow-600' },
  pink:   { bg: 'bg-pink-100',   text: 'text-pink-700',   badge: 'bg-pink-50 text-pink-600',    btn: 'bg-pink-600 hover:bg-pink-700' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', badge: 'bg-indigo-50 text-indigo-600', btn: 'bg-indigo-600 hover:bg-indigo-700' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-700', badge: 'bg-orange-50 text-orange-600', btn: 'bg-orange-500 hover:bg-orange-600' },
  red:    { bg: 'bg-red-100',    text: 'text-red-700',    badge: 'bg-red-50 text-red-600',      btn: 'bg-red-600 hover:bg-red-700' },
};

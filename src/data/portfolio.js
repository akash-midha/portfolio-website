export const site = {
  name: 'Akash Midha',
  tagline: 'Software Developer',
  siteTitle: 'Akash Midha | Portfolio',
  email: 'akashmidha24@gmail.com',
  phone: '+91-8130408750',
  location: 'Delhi, India',
  resumeUrl: '#',
  avatarImage: '/personalisedImages/AkashAvvatar.png',
  aboutPhoto: '/personalisedImages/Akash_Midha_Photo.jpg',
  logoImage: '/personalisedLogo/AmLogo.png',
  heroSubline: 'NSUT Delhi Graduate · Batch of 2023',
  rotatingTaglines: [
    'Software Developer',
    'Frontend Developer',
    'Mobile Application Developer',
    'Flutter Developer',
  ],
  bio: `Hi, I'm a graduate from Netaji Subhas University of Technology (NSUT) and a Software Developer at Amdocs. I design and build scalable web applications using React, Redux, JavaScript, and TypeScript, and develop cross-platform mobile apps with Flutter. I focus on accessible UI, performance optimization, and maintainable architecture with robust state management. With a strong foundation in data structures and algorithms, I enjoy solving complex problems and turning ideas into reliable, user-centric products.`,
  contactIntro: 'Thank you for visiting my personal portfolio. Connect with me over socials.',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const researchPapers = [
  {
    id: 1,
    title: 'Preventing Photovoltaic Curtailment in India: A Brief Analysis',
    venue: 'Digital Communication and Soft Computing Approaches (ISSETA 2023), Springer Nature Singapore',
    url: 'https://link.springer.com/chapter/10.1007/978-981-99-8886-0_19',
  },
  {
    id: 2,
    title: 'Towards Achieving Net Zero Emissions in India by 2070',
    venue: 'Renewable Power for Sustainable Growth',
    publisher: 'Springer Nature Singapore',
    url: 'https://www.springerprofessional.de/en/towards-achieving-net-zero-emissions-in-india-by-2070/26586858',
  },
];

export const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/akashmidha', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/akash-midha', icon: 'github' },
  { name: 'Instagram', url: 'https://www.instagram.com/aakash_midha/', icon: 'instagram' },
];

export const skillsByCategory = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Dart', 'C++'],
  },
  {
    title: 'Frameworks / Libraries',
    items: ['React', 'Redux', 'Flutter', 'BLoc', 'Tailwind CSS', 'Bootstrap', 'Material UI'],
  },
  {
    title: 'Web Development',
    items: ['HTML', 'CSS', 'JS (ES6+)', 'RESTful APIs', 'React', 'Accessible UI'],
  },
  {
    title: 'Mobile Development',
    items: ['Cross-platform Mobile Apps (Flutter)', 'Android (Kotlin) & iOS (Swift) Integration'],
  },
  {
    title: 'Developer Tools',
    items: ['VS Code', 'Git', 'Bitbucket', 'Android Studio', 'Xcode', 'Postman'],
  },
  {
    title: 'Relevant Coursework',
    items: [
      'Data Structures and Algorithms (DSA)',
      'Operating Systems',
      'Database Management System (DBMS)',
      'Computer Networks',
      'Object-Oriented Programming (OOPs)',
    ],
  },
];

export const education = [
  {
    title: 'Bachelor of Technology in Electrical Engineering',
    institution: 'Netaji Subhas University of Technology (NSUT, formerly NSIT)',
    duration: '—',
    status: 'Completed',
    cgpa: 'CGPA 7.99',
    image: '/personalisedImages/nsut.png',
  },
  {
    title: 'Class 12',
    institution: 'Central Board of Secondary Education (CBSE)',
    duration: '—',
    status: 'Completed',
    cgpa: '92%',
    image: '/personalisedImages/cbse.png',
  },
  {
    title: 'Class 10',
    institution: 'CBSE',
    duration: '—',
    status: 'Completed',
    cgpa: 'CGPA 10.00',
    image: '/personalisedImages/cbse.png',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Shoppe',
    description: 'E-commerce website with products, cart, and checkout. Redux for state management, Tailwind CSS for responsive UI.',
    image: '/personalisedImages/shopee.png',
    link: 'https://shopee-lime.vercel.app/',
    tags: ['React', 'Redux', 'JavaScript', 'TailwindCSS'],
  },
  {
    id: 2,
    title: 'Shopigram',
    description: 'Cross-platform e-commerce mobile app for Android and iOS. Home, Product, Cart, Favourites, and Profile screens.',
    image: '/personalisedImages/shopigram.png',
    link: '#',
    tags: ['Flutter', 'BLoc', 'Dart'],
  },
];

// Most recent first (top of timeline)
export const experience = [
  {
    title: 'Amdocs',
    role: 'Software Developer',
    location: 'Gurugram, India',
    duration: 'July 2025 – Present',
    side: 'left',
  },
  {
    title: 'Amdocs',
    role: 'Associate Software Developer',
    location: 'Gurugram, India',
    duration: 'Aug 2023 – June 2025',
    side: 'right',
  },
];

export const achievements = [
  '500+ DSA problems on LeetCode, GeeksforGeeks, HackerRank.',
  'Two research papers published in Springer Nature Singapore (ISSETA 2023, ICRP 2023).',
  '10.00 CGPA in Class 10, 92% in Class 12.',
  'Delegate & Youth Parliamentarian, Delhi Legislative Assembly.',
  'Active member in NSUT coding and debugging societies.',
];

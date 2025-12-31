// Modern data models for RWUA website

export interface SuccessStory {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  image: string;
  date: string;
  tags: string[];
}

export interface Vacancy {
  id: string;
  position: string;
  description: string;
  department: string;
  deadline: string;
  location: string;
  tags: string[];
  image?: string;
  status: 'open' | 'closed';
}

// Success Stories Data
export const successStories: SuccessStory[] = [
  {
    id: '1',
    title: 'सफलताको कथा — दलित समुदायमा परिवर्तन',
    description: 'सर्लाही जिल्ला ईश्वरपुर नगरपालिकामा अवस्थित सृजनशिल महिला सचेतना केन्द्रले मुसहर समुदायको जीवनमा ल्याएको सकारात्मक परिवर्तनको कथा। शिक्षा र चेतनाको माध्यमबाट समुदायिक विकासको यात्रा।',
    category: 'Community Development',
    author: 'RWUA Nepal',
    image: '/images/success1.jpg',
    date: '2024-03-15',
    tags: ['community', 'education', 'empowerment', 'dalit']
  },
  {
    id: '2',
    title: 'Women Empowerment Success Story',
    description: 'A successful implementation of programs aimed at making rural women economically self-reliant. Improvement in women\'s living standards through skill development and entrepreneurship.',
    category: 'Women Empowerment',
    author: 'RWUA Nepal',
    image: '/images/success2.jpg',
    date: '2024-02-28',
    tags: ['women', 'entrepreneurship', 'skills', 'economic']
  },
  {
    id: '3',
    title: 'शिक्षा क्षेत्रमा उल्लेखनीय प्रगति',
    description: 'बालबालिकाहरूको शिक्षामा पहुँच बढाउने र गुणस्तरीय शिक्षा प्रदान गर्ने दिशामा गरिएका प्रयासहरूको सफल परिणाम। विद्यालय छाड्ने दरमा उल्लेखनीय कमी।',
    category: 'Education',
    author: 'RWUA Nepal',
    image: '/images/success1.jpg',
    date: '2024-01-20',
    tags: ['education', 'children', 'literacy', 'development']
  },
  {
    id: '4',
    title: 'Healthcare Service Improvement',
    description: 'Positive impact of efforts made to increase access to basic health services in rural areas and reduce maternal and child mortality rates.',
    category: 'Health',
    author: 'RWUA Nepal',
    image: '/images/success2.jpg',
    date: '2023-12-10',
    tags: ['health', 'maternal', 'rural', 'healthcare']
  }
];

// Vacancies Data
export const vacancies: Vacancy[] = [
  {
    id: '1',
    position: 'Program Manager - Community Development',
    description: 'Lead community development initiatives in rural areas. Responsible for program planning, implementation, and monitoring.',
    department: 'Programs',
    deadline: '2025-06-15',
    location: 'Haripur, Nepal',
    tags: ['management', 'community', 'development', 'leadership'],
    image: '/images/vacancy1.jpeg',
    status: 'open'
  },
  {
    id: '2',
    position: 'Finance and Admin Coordinator',
    description: 'Manage financial operations and administrative functions. Oversee budget planning and financial reporting.',
    department: 'Finance',
    deadline: '2025-05-28',
    location: 'Head Office, Nepal',
    tags: ['finance', 'administration', 'budgeting', 'compliance'],
    image: '/images/vacancy2.jpeg',
    status: 'open'
  },
  {
    id: '3',
    position: 'Monitoring & Evaluation Officer',
    description: 'Design and implement M&E frameworks for programs. Conduct regular monitoring visits and prepare evaluation reports.',
    department: 'M&E',
    deadline: '2025-07-20',
    location: 'Regional Office',
    tags: ['monitoring', 'evaluation', 'reporting', 'quality'],
    image: '/images/vacancy1.jpeg',
    status: 'open'
  },
  {
    id: '4',
    position: 'Project Coordinator - Education',
    description: 'Coordinate education and literacy programs in rural communities. Manage project activities and liaise with schools.',
    department: 'Programs',
    deadline: '2025-06-25',
    location: 'Sarlahi District',
    tags: ['education', 'coordination', 'literacy', 'community'],
    image: '/images/vacancy3.jpg',
    status: 'open'
  },
  {
    id: '5',
    position: 'Communications Specialist',
    description: 'Develop communication strategies and manage public relations. Create content for social media and publications.',
    department: 'Communications',
    deadline: '2024-12-15',
    location: 'Head Office, Nepal',
    tags: ['communications', 'social media', 'content', 'public relations'],
    image: '/images/vacancy2.jpeg',
    status: 'closed'
  },
  {
    id: '6',
    position: 'Field Operations Manager',
    description: 'Oversee field operations and coordinate with local communities. Manage field staff and ensure program quality.',
    department: 'Field Operations',
    deadline: '2024-11-30',
    location: 'Multiple Districts',
    tags: ['field operations', 'management', 'community', 'coordination'],
    image: '/images/vacancy1.jpeg',
    status: 'closed'
  },
  {
    id: '7',
    position: 'Senior Finance Officer',
    description: 'Handle complex financial transactions and donor reporting. Ensure compliance with financial regulations.',
    department: 'Finance',
    deadline: '2024-10-20',
    location: 'Head Office, Nepal',
    tags: ['finance', 'donor reporting', 'compliance', 'senior level'],
    image: '/images/vacancy3.jpg',
    status: 'closed'
  }
];

// Filter categories
export const storyCategories = [
  'All',
  'Community Development',
  'Women Empowerment',
  'Education',
  'Health'
];

export const vacancyDepartments = [
  'All',
  'Open Positions',
  'Closed Positions',
  'Programs',
  'Finance',
  'Field Operations',
  'M&E',
  'Communications'
];
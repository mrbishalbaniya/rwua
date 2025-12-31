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

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  image: string;
  date: string;
  tags: string[];
  excerpt: string;
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

// News Articles Data
export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'हरिपुरका बिपन्न घरपरिवारलाई न्यानो कम्बल वितरण कार्यक्रम',
    excerpt: 'सर्लाहीको हरिपुर नगरपालिकामा सिमान्तकृत दलित तथा मुसहर समुदायलाई लक्षित गरी न्यानो कम्बल वितरण कार्यक्रम सम्पन्न भएको छ।',
    description: 'सर्लाहीको हरिपुर नगरपालिकामा सिमान्तकृत दलित तथा मुसहर समुदायलाई लक्षित गरी न्यानो कम्बल वितरण कार्यक्रम सम्पन्न भएको छ। यस कार्यक्रमले जाडो मौसममा कमजोर आर्थिक अवस्था भएका परिवारहरूलाई राहत प्रदान गरेको छ। कार्यक्रममा स्थानीय सरकार र समुदायिक संस्थाहरूको सहयोग रहेको थियो।\n\nयो पहल समुदायिक एकताको उदाहरण हो र यसले सामाजिक न्यायको दिशामा महत्वपूर्ण योगदान पुर्याएको छ। कार्यक्रमले ५०० भन्दा बढी परिवारहरूलाई फाइदा पुर्याएको छ।',
    category: 'Community Support',
    author: 'RWUA Nepal',
    image: 'https://rwua.com.np/wp-content/uploads/2025/12/blimket-780x470-1.png',
    date: '2024-12-15',
    tags: ['community', 'support', 'winter', 'relief']
  },
  {
    id: '2',
    title: 'बालक्लब गठन तथा बालबालिकाको अधिकार',
    excerpt: 'सर्लाहीमा विद्यालयको पहुँचमा पुग्न नसकेका २० जना अपाङ्ग बालबालिकालाई घरमै शिक्षा प्रदान हुने भएको छ।',
    description: 'सर्लाहीमा विद्यालयको पहुँचमा पुग्न नसकेका २० जना अपाङ्ग बालबालिकालाई घरमै शिक्षा प्रदान हुने भएको छ। यो पहल बालबालिकाको शिक्षाको अधिकार सुनिश्चित गर्ने दिशामा महत्वपूर्ण कदम हो।\n\nबालक्लब गठनको माध्यमबाट बालबालिकाहरूको अधिकार संरक्षण र सचेतना अभिवृद्धि गर्ने कार्यक्रम सञ्चालन गरिएको छ। यसले समुदायमा बालअधिकारको महत्वलाई उजागर गरेको छ।',
    category: 'Child Rights',
    author: 'RWUA Nepal',
    image: 'https://rwua.com.np/wp-content/uploads/2025/02/shared-image.jpeg',
    date: '2024-11-28',
    tags: ['children', 'rights', 'education', 'disability']
  },
  {
    id: '3',
    title: 'न्यानो कम्मल बितरण कार्यक्रम',
    excerpt: 'Save The Children संस्थाको सहयोगमा न्यानो कम्बल वितरण कार्यक्रम सम्पन्न भएको छ।',
    description: 'Save The Children संस्थाको सहयोगमा न्यानो कम्बल वितरण कार्यक्रम सम्पन्न भएको छ। यो कार्यक्रमले जाडो मौसममा आवश्यकतामा परेका परिवारहरूलाई तत्काल राहत प्रदान गरेको छ।\n\nकार्यक्रममा विशेष गरी बालबालिका र वृद्धवृद्धाहरूलाई प्राथमिकता दिइएको थियो। यसले समुदायिक सहयोगको भावनालाई बलियो बनाएको छ।',
    category: 'Winter Relief',
    author: 'RWUA Nepal',
    image: 'https://rwua.com.np/wp-content/uploads/2020/01/13.jpg',
    date: '2024-11-10',
    tags: ['winter', 'relief', 'partnership', 'community']
  },
  {
    id: '4',
    title: 'समावेशी तथा दिगो ग्रामीण खानेपानी सुविधा कार्यक्रम',
    excerpt: 'स्वच्छ खानेपानी पहुँचका लागि सञ्चालित कार्यक्रमका गतिविधिहरू र समुदायिक सहभागिता।',
    description: 'स्वच्छ खानेपानी पहुँचका लागि सञ्चालित कार्यक्रमका गतिविधिहरू र समुदायिक सहभागिता। यो कार्यक्रमले ग्रामीण क्षेत्रमा खानेपानीको पहुँच बढाउने र जल स्रोतको दिगो व्यवस्थापन गर्ने लक्ष्य राखेको छ।\n\nकार्यक्रमले समुदायिक सहभागितालाई प्राथमिकता दिएको छ र स्थानीय जनताको क्षमता निर्माणमा जोड दिएको छ। यसले दीर्घकालीन समाधान प्रदान गर्ने अपेक्षा गरिएको छ।',
    category: 'Water & Sanitation',
    author: 'RWUA Nepal',
    image: 'https://rwua.com.np/wp-content/uploads/2021/04/11.jpg',
    date: '2024-10-15',
    tags: ['water', 'sanitation', 'rural', 'sustainability']
  },
  {
    id: '5',
    title: 'ग्रामिण नारी उत्थान संघको २९ औं साधारण सभा',
    excerpt: 'ग्रामीण महिलाहरूको सशक्तिकरणका लागि आयोजित वार्षिक साधारण सभाको मुख्य बिन्दुहरू।',
    description: 'ग्रामीण महिलाहरूको सशक्तिकरणका लागि आयोजित वार्षिक साधारण सभाको मुख्य बिन्दुहरू। सभामा विगत वर्षका उपलब्धिहरूको समीक्षा र आगामी योजनाहरूको छलफल गरिएको थियो।\n\nसभाले महिला सशक्तिकरणका क्षेत्रमा संस्थाको भूमिकालाई थप प्रभावकारी बनाउने दिशामा महत्वपूर्ण निर्णयहरू गरेको छ। यसले समुदायिक विकासमा महिलाहरूको नेतृत्वलाई बलियो बनाउने अपेक्षा गरिएको छ।',
    category: 'General Assembly',
    author: 'RWUA Nepal',
    image: 'https://rwua.com.np/wp-content/uploads/2021/10/1.jpg',
    date: '2024-09-20',
    tags: ['assembly', 'women', 'empowerment', 'leadership']
  },
  {
    id: '6',
    title: 'बालबालिकाको अधिकार संरक्षण कार्यक्रम',
    excerpt: 'बालबालिकाको अधिकार संरक्षणका लागि बालक्लब गठन र सचेतना कार्यक्रमहरू।',
    description: 'बालबालिकाको अधिकार संरक्षणका लागि बालक्लब गठन र सचेतना कार्यक्रमहरू। यो कार्यक्रमले बालबालिकाहरूको मौलिक अधिकारहरूको संरक्षण र प्रवर्धनमा महत्वपूर्ण भूमिका खेलेको छ।\n\nकार्यक्रमले समुदायमा बालअधिकारको चेतना फैलाउने र बालबालिकाहरूलाई सुरक्षित वातावरण प्रदान गर्ने दिशामा काम गरेको छ। यसले भविष्यमा बलियो समाज निर्माणमा योगदान पुर्याउने अपेक्षा गरिएको छ।',
    category: 'Child Rights',
    author: 'RWUA Nepal',
    image: 'https://rwua.com.np/wp-content/uploads/2025/02/shared-image.jpeg',
    date: '2024-08-25',
    tags: ['children', 'rights', 'protection', 'awareness']
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

export const newsCategories = [
  'All',
  'Community Support',
  'Child Rights',
  'Winter Relief',
  'Water & Sanitation',
  'General Assembly'
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
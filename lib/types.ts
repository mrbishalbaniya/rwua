
export interface ImpactStory {
  id: string;
  name: string;
  location: string;
  content: string;
  imageUrl: string;
  category: 'Entrepreneurship' | 'Education' | 'Leadership' | 'Agriculture';
}

export interface ProjectLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  impactCount: number;
  description: string;
}

export interface ImpactDataPoint {
  year: string;
  womenReached: number;
  projectsCompleted: number;
}

// Added NewsUpdate interface to resolve export error in constants.tsx
export interface NewsUpdate {
  id: string;
  date: string;
  category: string;
  title: string;
  content: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}

// Search types
export interface SearchBoxProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
  debounceMs?: number;
}

// Story types
export interface StoryCardProps {
  story: {
    id: string;
    title: string;
    description: string;
    category: string;
    author: string;
    image: string;
    date: string;
    tags: string[];
  };
  className?: string;
}

// Vacancy types
export interface VacancyCardProps {
  vacancy: {
    id: string;
    position: string;
    description: string;
    department: string;
    deadline: string;
    location: string;
    tags: string[];
    image?: string;
    status: 'open' | 'closed';
  };
  className?: string;
}

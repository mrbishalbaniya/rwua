// Core data models for RWUA Nepal website clone

export interface Story {
  id: string;
  title: string; // Nepali title
  description: string; // Full Nepali content
  image: string; // Actual image from website
  date: string; // Publication date
  author?: string; // Story author/source
  category?: string; // Story category
}

export interface Vacancy {
  id: string;
  title: string; // Job title (English/Nepali)
  description: string; // Job description
  image: string; // Vacancy image (reused as per original site)
  deadline?: string; // Application deadline
  requirements?: string[]; // Job requirements
  location?: string; // Job location
  organization: string; // RWUA Nepal
  contactEmail?: string; // Application email
}

export interface ContactInfo {
  address: string; // Nepal address
  phone: string; // Nepal phone numbers
  email: string; // RWUA Nepal email
  workingHours: string; // Office hours
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    website?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SearchSidebarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  title?: string;
}

export interface SearchBoxProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  debounceMs?: number;
}

export interface StoryCardProps {
  story: Story;
  className?: string;
}

export interface VacancyCardProps {
  vacancy: Vacancy;
  className?: string;
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}
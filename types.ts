export type ViewState = 'home' | 'ia' | 'video';

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface CourseDetails {
  id: string;
  title: string;
  description: string;
  price: number;
  schedule: string;
  topics: string[];
}

export interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  course: 'ia' | 'video' | 'both';
  selectedDates?: string;
}
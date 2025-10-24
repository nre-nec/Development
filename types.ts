
export type Language = 'ar' | 'en';

export interface Project {
  icon: string;
  name: string;
  description: string;
  buttonText: string;
  link: string;
}

export interface Program {
  image: string;
  title: string;
}

export interface Report {
  title: string;
  buttonText: string;
  link: string;
}

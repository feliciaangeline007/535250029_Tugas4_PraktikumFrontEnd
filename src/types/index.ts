export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  category: string;
  features: string[];
  deliverables: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  priceEstimate?: string;
  timeline?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  avatarUrl: string;
  linkedin?: string;
  github?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CompanyStat {
  value: string;
  label: string;
  description: string;
}

export interface CompanyValue {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  content: string;
  avatarUrl: string;
  rating: number;
}

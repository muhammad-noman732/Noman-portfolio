import type { StaticImageData } from "next/image";

export interface Experience {
  company: string;
  companyImage?: StaticImageData;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
  location?: string;
  techStack?: string[];
  current?: boolean;
}

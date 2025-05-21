export type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
  github?: string;
};

export type Skill = {
  name: string;
  category?: "frontend" | "backend" | "design" | "tools";
  level?: number;
};

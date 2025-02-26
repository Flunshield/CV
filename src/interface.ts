export interface Project {
    id: number;
    title: string;
    commentaire: string;
    description: string;
    technologies: string[];
    githubLink: string;
    demoLink: string;
}

export interface ExperienceInterface {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    logo?: string;
    siteWeb?: string;
}

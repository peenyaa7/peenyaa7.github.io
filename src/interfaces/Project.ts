
/**
 * Representa una entrada de proyecto.
 */
export interface Project {
    title: string;
    description: string;
    githubUrl?: string;
    demoUrl?: string;
    tags: string[];
    thumbnail: string;
    status: ProjectStatus;
}

export enum ProjectStatus {
    IN_PROGRESS,
    FINISHED
}
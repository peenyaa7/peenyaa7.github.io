
/**
 * Representa una entrada de proyecto.
 */
export interface Project {
    titleI18n: string;
    descriptionI18n: string;
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
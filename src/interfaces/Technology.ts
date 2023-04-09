
/**
 * Representa una entrada de tecnología.
 */
export interface Technology {
    name: string; // The name of the technology
    icon: string; // The icon of the technology
    type: TechnologyType; // The type of the tecnology 
}

export enum TechnologyType {
    FRONTEND,
    BACKEND,
    DATABASE,
    DEVOPS,
    TOOL,
    OTHER
}
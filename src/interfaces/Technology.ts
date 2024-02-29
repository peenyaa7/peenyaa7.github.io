
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

// Enum to name
export const TECHNOLOGY_TYPES: { key: TechnologyType, value: string }[] = [
    { key: TechnologyType.FRONTEND, value: 'Frontend 🎨' },
    { key: TechnologyType.BACKEND, value: 'Backend ⚙' },
    { key: TechnologyType.DATABASE, value: 'Base de datos 📚' },
    { key: TechnologyType.DEVOPS, value: 'DevOps 🚀' },
    { key: TechnologyType.TOOL, value: 'Herramientas 🛠' },
    { key: TechnologyType.OTHER, value: 'Extra 😎' },
]
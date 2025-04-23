/**
 * Representa una entrada de experiencia en educación.
 */
export interface EducationExperience {
    titleI18n: string; // The title of the work experience
    startDate: Date; // First month and year
    endDate?: Date; // Last mont and year (undefined = "present")
    forever: boolean; // If true, override start and end date
    institutionI18n?: string; // Institution
    pointsI18n: string[]; // Things that I do in that work
    paragraphsI18n: string[]; // Descriptions to add
}
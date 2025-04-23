/**
 * Representa una entrada de experiencia de trabajo.
 */
export interface WorkExperience {
    titleI18n: string; // The title of the work experience
    startDate: Date; // First month and year
    endDate?: Date; // Last mont and year (undefined = "present")
    company: string; // Company
    pointsI18n: string[]; // Things that I do in that work
}
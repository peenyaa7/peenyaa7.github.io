import { EducationExperience } from "../interfaces/EducationExperience";

export const EDUCATION_EXPERIENCES: EducationExperience[] = [

    {
        titleI18n: "experience.education.education4.title",
        startDate: new Date(),
        endDate: undefined, // present
        forever: true,
        institutionI18n: undefined,
        pointsI18n: [],
        paragraphsI18n: [
            "experience.education.education4.description1",
            "experience.education.education4.description2"
        ]
    },
    {
        titleI18n: "experience.education.education3.title",
        startDate: new Date("2018-09-01"),
        endDate: new Date("2022-06-01"),
        forever: false,
        institutionI18n: "experience.education.education3.where",
        pointsI18n: [
            "experience.education.education3.point1",
            "experience.education.education3.point2",
            "experience.education.education3.point3"
        ],
        paragraphsI18n: []
    },
    {
        titleI18n: "experience.education.education2.title",
        startDate: new Date("2018-04-01"),
        endDate: new Date("2018-06-01"),
        forever: false,
        institutionI18n: "experience.education.education2.where",
        pointsI18n: [],
        paragraphsI18n: []
    },
    {
        titleI18n: "experience.education.education1.title",
        startDate: new Date("2016-09-01"),
        endDate: new Date("2018-06-01"),
        forever: false,
        institutionI18n: "experience.education.education1.where",
        pointsI18n: [
            "experience.education.education1.point1",
            "experience.education.education1.point2",
            "experience.education.education1.point3",
            "experience.education.education1.point4"
        ],
        paragraphsI18n: [
            "experience.education.education1.description1"
        ]
    },


]
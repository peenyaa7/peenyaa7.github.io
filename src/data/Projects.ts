import { Project, ProjectStatus } from "../interfaces/Project";


export const PROJECTS: Project[] = [
    {
        titleI18n: "projects.project1.title",
        descriptionI18n: "projects.project1.description",
        urls: {
            github: "https://github.com/peenyaa7/SofleRGB",
        },
        tags: ["QMK", "C++", "Soldering", "Hardware"],
        thumbnail: "assets/img/projects/project1-thumbnail.webp",
        status: ProjectStatus.FINISHED
    },
    {
        titleI18n: "projects.project2.title",
        descriptionI18n: "projects.project2.description",
        urls: {
            github: "https://github.com/peenyaa7/spring-react-web-sockets",
        },
        tags: ["Spring Boot", "React", "Web Sockets", "STOMP", "SockJS", "Docker"],
        thumbnail: "assets/img/projects/project2-thumbnail.gif",
        status: ProjectStatus.FINISHED
    },
    {
        titleI18n: "projects.project3.title",
        descriptionI18n: "projects.project3.description",
        urls: {
            github: "https://github.com/peenyaa7/PreguntonicBackend",
            demo: "https://preguntonic-test-1.netlify.app/home",
            documentation: "https://peenyaa.dev/PreguntonicDocs/",
        },
        tags: ["Spring Boot", "Angular", "Web Sockets", "STOMP", "SockJS", "Docker", "MKDocs"],
        thumbnail: "assets/img/projects/project3-thumbnail.png",
        status: ProjectStatus.FINISHED
    }
];
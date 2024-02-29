import { Project, ProjectStatus } from "../interfaces/Project";


export const PROJECTS: Project[] = [
    {
        titleI18n: "projects.project1.title",
        descriptionI18n: "projects.project1.description",
        githubUrl: "https://github.com/peenyaa7/SofleRGB",
        demoUrl: undefined,
        tags: ["QMK", "C++", "Soldering", "Hardware"],
        thumbnail: "assets/img/projects/project1-thumbnail.webp",
        status: ProjectStatus.FINISHED
    },
    {
        titleI18n: "projects.project2.title",
        descriptionI18n: "projects.project2.description",
        githubUrl: "https://github.com/peenyaa7/spring-react-web-sockets",
        demoUrl: undefined,
        tags: ["Spring Boot", "React", "Web Sockets", "STOMP", "SockJS", "Docker"],
        thumbnail: "assets/img/projects/project2-thumbnail.gif",
        status: ProjectStatus.FINISHED
    }
];
import { Project, ProjectStatus } from "../interfaces/Project";


export const PROJECTS: Project[] = [
    {
        title: "Sofle Keyboard",
        description: "Un teclado dividido con un diseño ergonómico y un aspecto minimalista.",
        githubUrl: "https://github.com/peenyaa7/SofleRGB",
        demoUrl: undefined,
        tags: ["QMK", "C++", "Soldering", "Hardware"],
        thumbnail: "https://github.com/peenyaa7/SofleRGBv2.1/blob/ce4d3267b12f56b52e69c7d077596c3719376c48/imgs/Header.jpg?raw=true",
        status: ProjectStatus.FINISHED
    }
];
import React from 'react'
import { ProjectCard } from './ProjectCard'
import { PROJECTS } from '../../data/MyProjects'

export const ProjectsSection = () => {
    return (
        <section id="projects" className="portfolio section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Proyectos</h2>
                    <p>Todas esas locas ideas que acaban siendo realidad</p>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                    {
                        PROJECTS.map((project, index) => {
                            return (
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <ProjectCard project={project} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

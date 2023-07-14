import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Project, ProjectStatus } from '../../interfaces/Project';

interface Props {
    project: Project
}

export const ProjectCard = ({ project }: Props) => {

    const [mouseEnter, setMouseEnter] = useState(false);

    return (
        <Card >
            <Card.Img
                variant='top'
                src={project.thumbnail}
                onMouseEnter={() => setMouseEnter(true)}
                onMouseLeave={() => setMouseEnter(false)}
                style={{
                    opacity: mouseEnter ? 0.8 : 1,
                    transition: 'opacity 200ms ease-out'
                }}
                
            />
            <Card.Body>
                <Card.Title>
                    {project.title}&nbsp;
                    {project.status === ProjectStatus.FINISHED && <><i className='bx bx-check-circle text-success'></i></>}
                    {project.status === ProjectStatus.IN_PROGRESS && <><i className='bx bx-time text-warning'></i></>}
                </Card.Title>
                <Card.Text>{project.description}</Card.Text>
                
                {/* TAGS */}
                <div className='d-flex flex-wrap'>
                    {
                        project.tags.map((tag, index) => {
                            return (
                                <span
                                    key={index}
                                    style={{
                                        padding: '2px 5px',
                                        marginRight: '8px',
                                        marginBottom: '20px',
                                        borderRadius: '5px',
                                        backgroundColor: '#e6e6e6',
                                        fontSize: '12px',
                                    }}
                                >{tag}</span>
                            )
                        })
                    }
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>

                    {
                        project.githubUrl &&
                        <a
                            href={project.githubUrl}
                            style={{
                                border: '1px solid #e6e6e6',
                                background: 'none',
                                outline: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                borderRadius: '5px',
                                padding: '5px 10px',
                                color: 'inherit',
                            }}
                        >
                            <i className='bx bxl-github'></i>
                            <span style={{
                                marginLeft: '5px',
                                fontSize: '14px',
                            }}>Github</span>
                        </a>
                    }
                    {
                        project.demoUrl &&
                        <a
                            href={project.demoUrl}
                            style={{
                                border: '1px solid #e6e6e6',
                                background: 'none',
                                outline: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                borderRadius: '5px',
                                marginLeft: '10px',
                                padding: '5px 10px',
                                color: 'inherit',
                            }}
                        >
                            <i className='bx bx-link-external'></i>
                            <span style={{
                                marginLeft: '5px',
                                fontSize: '14px',
                            }}>Demo</span>
                        </a>
                    }
                </div>

                
            </Card.Body>
            
        </Card>
    )
}

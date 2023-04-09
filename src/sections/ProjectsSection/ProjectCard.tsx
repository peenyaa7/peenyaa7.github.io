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
                <Button
                    variant='primary'
                    onClick={() => window.open(project.url, '_blank')}
                >Ver proyecto</Button>
            </Card.Body>
        </Card>
    )
}

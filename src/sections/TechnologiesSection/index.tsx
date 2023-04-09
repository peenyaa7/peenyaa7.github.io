import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faGears, faRocket, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faSquareCaretUp } from '@fortawesome/free-regular-svg-icons'
import { TechnologyView } from './TechnologyView'
import { TECNOLOGIES } from '../../data/MyTecnologies'
import './styles.css'
import { TechnologyType } from '../../interfaces/Technology'

export const TechnologiesSection = () => {

    const [backendTecnologies, setBackendTecnologies] = useState(TECNOLOGIES.filter(t => t.type === TechnologyType.BACKEND))
    const [frontendTecnologies, setFrontendTecnologies] = useState(TECNOLOGIES.filter(t => t.type === TechnologyType.FRONTEND))
    const [otherTecnologies, setOtherTecnologies] = useState(TECNOLOGIES.filter(t => t.type === TechnologyType.OTHER))

    return (
        <section id="skills" className="skills section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Tecnologías</h2>
                    <p>
                        Siempre he tenido curiosidad por aprender nuevas tecnologías y herramientas, por eso me gusta estar al día con las últimas novedades.
                        Estas son las principales tecnologías que he utilizado en mis proyectos:
                    </p>
                </div>

                <div className='row' data-aos="fade-up">

                    <div className="col-12 col-md-4">
                        <div className="card card-body">
                            <h3 className='text-center'>
                                <FontAwesomeIcon icon={faGears} size='1x' className='text-center' />
                                <span className='ms-2'>Backend</span>
                            </h3>

                            <hr/>

                            {
                                backendTecnologies.map(t => <TechnologyView key={t.name} tecnology={t} />)
                            }

                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card card-body">
                            <h3 className='text-center'>
                                <FontAwesomeIcon icon={faDesktop} size='1x' className='text-center' />
                                <span className='ms-2'>Frontend</span>
                            </h3>

                            <hr/>

                            {
                                frontendTecnologies.map(t => <TechnologyView key={t.name} tecnology={t} />)
                            }
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card card-body">
                            <h3 className='text-center'>
                                <FontAwesomeIcon icon={faRocket} size='1x' className='text-center' />
                                <span className='ms-2'>Tools</span>
                            </h3>

                            <hr/>

                            {
                                otherTecnologies.map(t => <TechnologyView key={t.name} tecnology={t} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

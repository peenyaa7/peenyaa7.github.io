import React, { useState } from 'react'
import { TechnologyView } from './TechnologyView'
import { TECNOLOGIES } from '../../data/MyTecnologies'
import './styles.css'
import { TechnologyType } from '../../interfaces/Technology'

export const TechnologiesSection = () => {

    const [ backendTecnologies ] = useState(TECNOLOGIES.filter(t => t.type === TechnologyType.BACKEND))
    const [ frontendTecnologies ] = useState(TECNOLOGIES.filter(t => t.type === TechnologyType.FRONTEND))
    const [ otherTecnologies ] = useState(TECNOLOGIES.filter(t => t.type === TechnologyType.OTHER))

    return (
        <section id="skills" className="skills section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Tecnologías</h2>
                </div>

                <div className="row">
                    <div className="col-md-4 col-12 right-divider">
                        <h3 className='text-center'>
                            <span className='ms-2 column-title'>Backend</span>
                        </h3>
                        <div className='column-content'>
                            { backendTecnologies.map(t => <TechnologyView key={t.name} tecnology={t} />) }
                        </div>
                    </div>
                    <div className="col-md-4 col-12 right-divider">
                        <h3 className='text-center'>
                            <span className='ms-2 column-title'>Frontend</span>
                        </h3>
                        <div className='column-content'>
                            { frontendTecnologies.map(t => <TechnologyView key={t.name} tecnology={t} />) }
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <h3 className='text-center'>
                            <span className='ms-2 column-title'>Tools</span>
                        </h3>
                        <div className='column-content'>
                            { otherTecnologies.map(t => <TechnologyView key={t.name} tecnology={t} />) }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

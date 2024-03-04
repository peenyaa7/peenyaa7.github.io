import { useState } from 'react'
import { Technology } from '../../interfaces/Technology'
import './TechnologyView.css'

interface Props {
    technology: Technology
}

export const TechnologyView = ({ technology }: Props) => {

    const [focus, setFocus] = useState(false);

    return (
        <span
            className='flex flex-col justify-center items-center pt-4'
            onMouseEnter={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
        >
            <img src={technology.icon} alt={technology.name} loading='lazy' id='icon' className={`${(technology.name === 'GitHub' || technology.name === 'Flask') && 'github'}`}
                style={{
                height: '80px',
                padding: '10px',
            }} />
            <span style={{
                // animation: 'fadeIn 1s',
                opacity: focus ? 1 : 0,
                transitionProperty: 'opacity',
                transitionDuration: '0.2s',
                marginTop: '-10px',
                marginBottom: '10px',
            }}>
                {technology.name}
            </span>
        </span>
    )
}


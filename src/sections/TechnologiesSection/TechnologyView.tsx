import React, { useState } from 'react'
import { Technology } from '../../interfaces/Technology'

interface Props {
    tecnology: Technology
}

export const TechnologyView = ({ tecnology }: Props) => {

    const [focus, setFocus] = useState(false);

    return (
        <span
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onMouseEnter={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
        >
            <img src={tecnology.icon} alt={tecnology.name} style={{
                height: '80px',
                padding: '10px',
            }} />
            <span style={{
                // animation: 'fadeIn 1s',
                opacity: focus ? 1 : 0,
                transitionProperty: 'opacity',
                transitionDuration: '0.2s',
            }}>
                {tecnology.name}
            </span>
        </span>
    )
}


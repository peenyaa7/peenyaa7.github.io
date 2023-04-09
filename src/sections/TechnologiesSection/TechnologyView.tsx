import React, { useState } from 'react'
import { Technology } from '../../interfaces/Technology'

interface Props {
    tecnology: Technology
}

export const TechnologyView = ({ tecnology }: Props) => {

    const [focus, setFocus] = useState(false);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            paddingRight: '20px',
            borderRadius: '10px',
            border: focus ? '1px solid #c4c4c4' : '1px solid #fff',
            transition: 'all 0.3s ease',
        }}
            onMouseEnter={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
        >
            <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <img src={tecnology.icon} alt={tecnology.name} style={{
                    height: '80px',
                    padding: '10px',
                }} />

            </div>
            <div style={{
                flex: 2,
                display: 'flex',
                justifyContent: 'right',
            }}>
                <h5>{tecnology.name}</h5>
            </div>
        </div>
    )
}


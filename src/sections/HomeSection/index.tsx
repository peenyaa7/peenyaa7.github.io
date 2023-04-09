import React from 'react'
import Typed from 'react-typed'
import 'react-typed/dist/animatedCursor.css'
import './styles.css'


export const HomeSection = () => {

    const strings = [
        'Programador',
        'Desarrollador',
        'Ingeniero',
        
    ]

    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center" >
            <div className="hero-container" data-aos="fade-in">
                <h1>Francisco Javier<br/>Peña Vela</h1>
                <p>Soy&nbsp;
                <Typed
                    strings={strings}
                    typeSpeed={100}
                    backSpeed={50}
                    backDelay={2000}
                    style={{
                        color: '#fff',
                        paddingBottom: '4px',
                        letterSpacing: 1,
                        borderBottom: '3px solid #149ddd'
                    }}
                    loop
                />

                </p>
            </div>
        </section>
    )
}

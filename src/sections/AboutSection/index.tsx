import React from 'react'
import './styles.css'
import { TechnologiesSection } from '../TechnologiesSection'

export const AboutSection = () => {
    return (
        <section id="about" className="about">
            <div className="container">

                <div className="section-title">
                    <h2>Sobre mi</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="assets/img/profile-img.jpg" className="img-fluid about-img" alt="Imagen de Peña" />
                        {/* <p className="fst-italic small p-2">
                            Me identifico como una persona <b>autodidacta</b> y <b>curiosa</b>, dos cualidades que me han llevado a aprender muchas cosas por mi cuenta.
                            Gran defensor del uso de <b>buenas prácticas</b> y de la <b>documentación</b>.
                        </p> */}
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Full Stack Software Engineer.</h3>
                        <div className="row">
                            <div className='about-desc'>

                                <p>Me identifico como una persona <b>autodidacta</b> y <b>curiosa</b>, que le gusta <b>aprender</b> cosas nuevas y <b>enseñar</b> a los demás.</p> 
                                <p>Soy un gran defensor del uso de <b>buenas prácticas</b> y de la <b>documentación</b>.</p>

                                <p>Tengo interés en el <u>desarrollo de software</u> (web, mobile, desktop, embedded, etc.), en la <u>arquitectura de software</u> y <u>metodologías de desarrollo</u>.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

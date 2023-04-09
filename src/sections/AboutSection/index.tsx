import React from 'react'
import './styles.css'

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
                        <p className="fst-italic small p-2">
                            Me identifico como una persona <b>autodidacta</b> y <b>curiosa</b>, dos cualidades que me han llevado a aprender muchas cosas por mi cuenta.
                            Soy un gran defensor del uso de <b>buenas prácticas</b> y de la <b>documentación</b>.
                        </p>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Full Stack Software Engineer.</h3>
                        <div className="row">
                            <div className='about-desc'>
                                <h5><i className="bi bi-chevron-right"></i> De donde vengo </h5>
                                
                                <span>
                                    Desde pequeño me ha gustado la tecnología y la informática, pero no fue hasta que terminé las prácticas del Ciclo Formativo de Grado Superior cuando me dí cuenta que quería dedicarme a la programación.
                                    A partir de ahí, terminé la carrera de Ingeniería Informática y me especialicé en el desarrollo de software sin dejar de aprender dia a dia.
                                </span>
                            </div>
                            <div className='mt-3 about-desc'>
                                <h5><i className="bi bi-chevron-right"></i> Hacia donde voy</h5>
                                <span>
                                    Mi objetivo principal es seguir aprendiendo y creciendo tanto profesional como personalmente.
                                    Me gustaría tener la oportunidad de trabajar en diversidad de proyectos y tecnologías, y así poder seguir aprendiendo y creciendo.
                                </span>
                            </div>
                            <div className='mt-3 about-desc'>
                                <h5><i className="bi bi-chevron-right"></i> Mis hobbys</h5>
                                <span>
                                    Aunque me encanta dedicar mi tiempo libre a aprender cosas nuevas, también me gusta dedicarle tiempo a mis hobbies.
                                    Me gustan mucho los animales, es por eso que siempre que puedo utilizo mi tiempo libre en estar con mis mascotas.
                                    También me gusta mucho la música y los podcasts, es algo que me ayuda a desconectar y a relajarme.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

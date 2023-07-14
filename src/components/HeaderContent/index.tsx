import React from 'react'

export const HeaderContent = () => {
    return (
        <div className="d-flex flex-column">

            <div className="profile">
                <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
                <h1 className="text-light">
                    <a href="#">Francisco Javier<br/>Peña Vela</a>
                </h1>
                <div className="social-links mt-3 text-center">
                    <a href="https://github.com/peenyaa7" className="github"><i className="bx bxl-github"></i></a>
                    <a href="https://www.linkedin.com/in/peenyaa7/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    <a href="mailto:peenyaa7@gmail.com" className="gmail"><i className="bx bxl-gmail"></i></a>
                </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
                <ul>
                    <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>Sobre mi</span></a></li>
                    <li><a href="#skills" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Tecnologías</span></a></li>
                    <li><a href="#projects" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Proyectos</span></a></li>
                </ul>
            </nav>{/* <!-- .nav-menu --> */}
        </div>
    )
}

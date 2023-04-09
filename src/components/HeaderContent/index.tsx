import React from 'react'

export const HeaderContent = () => {
    return (
        <div className="d-flex flex-column">

            <div className="profile">
                <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
                <h1 className="text-light">
                    <a href="index.html">Francisco Javier<br/>Peña Vela</a>
                </h1>
                <div className="social-links mt-3 text-center">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="gmail"><i className="bx bxl-gmail"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
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

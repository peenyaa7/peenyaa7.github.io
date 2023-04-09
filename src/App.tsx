import React from 'react';
import { FooterContent } from './components/FooterContent';
import { AboutSection } from './sections/AboutSection';
import { HeaderContent } from './components/HeaderContent';
import { HomeSection } from './sections/HomeSection';
import { TechnologiesSection } from './sections/TechnologiesSection';
import { ProjectsSection } from './sections/ProjectsSection';

function App() {
    return (<>
        {/* <!-- ======= Mobile nav toggle button ======= --> */}
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

        {/* HEADER */}
        <header id="header">
            <HeaderContent />
        </header>

        <HomeSection/>

        <main id="main">
            <AboutSection />
            <TechnologiesSection />
            <ProjectsSection />
        </main>{/* <!-- End #main --> */}

        <footer id="footer">
            <FooterContent />
        </footer>

        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    </>);
}

export default App;

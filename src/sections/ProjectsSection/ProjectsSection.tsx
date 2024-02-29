import { ProjectCard } from './ProjectCard'
import { PROJECTS } from '../../data/Projects'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Trans, useTranslation } from 'react-i18next';

export const ProjectsSection = () => {

    useTranslation();

    return (
        <section id='projects' className='section p-4 max-w-4xl mx-auto w-full scroll-mt-20'>

            <div className='flex items-center justify-center place-content-between sm:place-content-start mb-8'>
                <SectionTitle color='blue-orange-yellow'>
                    <Trans i18nKey='projects.title' />
                </SectionTitle>
            </div>

            <article>
                { PROJECTS.map((project) => <ProjectCard key={project.titleI18n} project={project} />) }
            </article>

        </section>
    )
}

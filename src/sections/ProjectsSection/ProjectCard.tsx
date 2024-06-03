import { Trans } from 'react-i18next';
import { Project } from '../../interfaces/Project';

interface Props {
    project: Project,
    disposition?: 'left' | 'right'
}

export const ProjectCard = ({ project, disposition = 'left' }: Props) => {

    return (

        <div className={`flex w-full p-4 gap-4 min-w-xl ${disposition === 'left' ? 'flex-col sm:flex-row' : 'flex-col-reverse sm:flex-row-reverse'}`}>

            {/* Browser */}
            <div className="flex-1 mockup-browser border bg-base-300 drop-shadow-2xl min-w-72 border-base-content">
                <div className='mockup-browser-toolbar flex place-content-between'>

                    {/* Github, Docs & Demo buttons */}
                    <div className='flex gap-2'>
                        {
                            project.urls.github &&
                            <a
                                className='btn btn-primary btn-xs hover:scale-110'
                                href={project.urls.github}
                                rel='noreferrer noopener nofollow'
                                target='_blank'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 496 512"><path fill='currentColor' d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                                <span className='inline sm:hidden md:inline'>Github</span>
                            </a>
                        }
                        {
                            project.urls.documentation &&
                            <a
                                className='btn btn-primary btn-xs hover:scale-110'
                                href={project.urls.documentation}
                                rel='noreferrer noopener nofollow'
                                target='_blank'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 384 512"><path fill='currentColor' d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                                <span className='inline sm:hidden md:inline'>Docs</span>
                            </a>
                        }
                        {
                            project.urls.demo &&
                            <a
                                className='btn btn-primary btn-xs hover:scale-110'
                                href={project.urls.demo}
                                rel='noreferrer noopener nofollow'
                                target='_blank'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={15} viewBox="0 0 512 512"><path fill='currentColor' d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                                <span className='inline sm:hidden md:inline'>Demo</span>
                            </a>
                        }
                    </div>

                </div>
                <figure>
                    <img src={project.thumbnail} alt={project.titleI18n} loading='lazy' className='bg-cover bg-center w-full' />
                </figure>
                <div className="p-4 sm:hidden">
                        <h2 className='text-3xl font-bold'><Trans i18nKey={project.titleI18n} /></h2>
                        <p><Trans i18nKey={project.descriptionI18n} /></p>

                        {/* Tags */}
                        <div className='flex flex-wrap gap-2 mt-2'>
                            {project.tags.map((tag) => <span key={tag} className="badge badge-neutral">{tag}</span>)}
                        </div>
                </div>
            </div>

            <div className={`hidden sm:block flex-1 ${disposition === 'left' ? 'text-left' : 'text-right'}`}>

                <h2 className='text-3xl font-bold'><Trans i18nKey={project.titleI18n} /></h2>
                <p><Trans i18nKey={project.descriptionI18n} /></p>

                {/* Tags */}
                <div className={`flex flex-wrap gap-2 mt-2 ${disposition === 'left' ? 'justify-start' : 'justify-end'}`}>
                    {project.tags.map((tag) => <span key={tag} className="badge badge-neutral">{tag}</span>)}
                </div>

            </div>
        </div>

    )

}

import { useState } from 'react'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { IconGraduationCap } from '../../icons/IconGraduationCap';
import { IconBriefcase } from '../../icons/IconBriefcase';
import { Trans, useTranslation } from 'react-i18next';

export const ExperienceSection = () => {

    const [selected, setSelected] = useState<"work" | "education">('work');
    useTranslation();

    return (
        <section id='experience' className='section p-4 max-w-4xl mx-auto w-full scroll-mt-20'>

            <div className='flex items-center justify-center place-content-between sm:place-content-start mb-8'>

                <SectionTitle color='cyan-purple-pink'>
                    <Trans i18nKey='experience.title' />
                </SectionTitle> 

                <label htmlFor='experience-changer' className='flex cursor-pointer ml-4 gap-2 items-center'>
                    <IconGraduationCap />
                    <input id='experience-changer' type='checkbox' className='toggle' checked={selected === 'work'} onChange={() => selected === 'work' ? setSelected('education') : setSelected('work')} aria-label='Cambiar entre experiencia laboral y formación académica' />
                    <IconBriefcase />
                </label>

            </div>

            {/* Timeline */}
            <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
                {
                    selected === 'work' ? (<>

                        {/* Work 1 */}
                        <li>
                            <div className="timeline-middle">
                                <IconBriefcase />
                            </div>
                            <div className="timeline-end mb-10">
                                <time className="font-mono"><Trans i18nKey='experience.work.work1.date' /></time>
                                <div className="text-lg font-black text-primary">
                                    <Trans i18nKey='experience.work.work1.title' />
                                    <span className="text-sm font-normal text-neutral-content"> | <Trans i18nKey='experience.work.work1.company' /></span>
                                </div>
                                <ul className='list-disc pl-5'>
                                    <li><Trans i18nKey='experience.work.work1.point1' /></li>
                                    <li><Trans i18nKey='experience.work.work1.point2' /></li>
                                    <li><Trans i18nKey='experience.work.work1.point3' /></li>
                                    <li><Trans i18nKey='experience.work.work1.point4' /></li>
                                    <li><Trans i18nKey='experience.work.work1.point5' /></li>
                                    <li><Trans i18nKey='experience.work.work1.point6' /></li>
                                    <li><Trans i18nKey='experience.work.work1.point7' /></li>
                                    <li><Trans i18nKey='experience.work.work1.point8' /></li>
                                </ul>
                            </div>
                            <hr className='bg-primary' />
                        </li>

                        {/* Work 2 */}
                        <li>
                            <hr className='bg-primary' />
                            <div className="timeline-middle">
                                <IconBriefcase />
                            </div>
                            <div className="timeline-end mb-10">
                                <time className="font-mono"><Trans i18nKey='experience.work.work2.date' /></time>
                                <div className="text-lg font-black text-primary">
                                    <Trans i18nKey='experience.work.work2.title' />
                                    <span className="text-sm font-normal text-neutral-content"> | <Trans i18nKey='experience.work.work2.company' /></span>
                                </div>
                                <ul className='list-disc pl-5'>
                                    <li><Trans i18nKey='experience.work.work2.point1' /></li>
                                    <li><Trans i18nKey='experience.work.work2.point2' /></li>
                                    <li><Trans i18nKey='experience.work.work2.point3' /></li>
                                </ul>
                            </div>
                        </li>

                    </>) : (<>

                        {/* Education 1 */}
                        <li>
                            <div className="timeline-middle">
                                <IconGraduationCap />
                            </div>
                            <div className="timeline-end mb-10">
                                <time className="font-mono flex items-center gap-2"> <span className="loading loading-infinity loading-md"></span> </time>
                                <div className="text-lg font-black text-primary">
                                    <Trans i18nKey='experience.education.education1.title' />
                                    
                                </div>
                                <p><Trans i18nKey='experience.education.education1.description1' /></p>
                                <p><Trans i18nKey='experience.education.education1.description2' /></p>
                            </div>
                            <hr className='bg-primary' />
                        </li>

                        {/* Education 2 */}
                        <li>
                            <hr className='bg-primary' />
                            <div className="timeline-middle">
                                <IconGraduationCap />
                            </div>
                            <div className="timeline-end mb-10">
                                <time className="font-mono"><Trans i18nKey='experience.education.education2.date' /></time>
                                <div className="text-lg font-black text-primary">
                                    <Trans i18nKey='experience.education.education2.title' />
                                    <span className="text-sm font-normal text-neutral-content"> | <Trans i18nKey='experience.education.education2.where' /></span>
                                </div>
                                <ul className='list-disc pl-5'>
                                    <li><Trans i18nKey='experience.education.education2.point1' /></li>
                                    <li><Trans i18nKey='experience.education.education2.point2' /></li>
                                    <li><Trans i18nKey='experience.education.education2.point3' /></li>
                                </ul>
                            </div>
                            <hr className='bg-primary' />
                        </li>

                        {/* Education 3 */}
                        <li>
                            <hr className='bg-primary' />
                            <div className="timeline-middle">
                                <IconGraduationCap />
                            </div>
                            <div className="timeline-end mb-10">
                                <time className="font-mono"><Trans i18nKey='experience.education.education3.date' /></time>
                                <div className="text-lg font-black text-primary">
                                    <Trans i18nKey='experience.education.education3.title' />
                                    <span className="text-sm font-normal text-neutral-content"> | <Trans i18nKey='experience.education.education3.where' /></span>
                                </div>
                            </div>
                            <hr className='bg-primary' />
                        </li>

                        {/* Education 4 */}
                        <li>
                            <hr className='bg-primary' />
                            <div className="timeline-middle">
                                <IconGraduationCap />
                            </div>
                            <div className="timeline-end mb-10">
                                <time className="font-mono"><Trans i18nKey='experience.education.education4.date' /></time>
                                <div className="text-lg font-black text-primary">
                                    <Trans i18nKey='experience.education.education4.title' />
                                    <span className="text-sm font-normal text-neutral-content"> | <Trans i18nKey='experience.education.education4.where' /></span>
                                </div>
                                <ul className='list-disc pl-5'>
                                    <li><Trans i18nKey='experience.education.education4.point1' /></li>
                                    <li><Trans i18nKey='experience.education.education4.point2' /></li>
                                    <li><Trans i18nKey='experience.education.education4.point3' /></li>
                                    <li><Trans i18nKey='experience.education.education4.point4' /></li>
                                </ul>
                                <p><Trans i18nKey='experience.education.education4.description' /></p>
                            </div>
                        </li>
                    </>)
                }
            </ul>

        </section>
    )
}

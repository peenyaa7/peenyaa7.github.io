import { useState } from 'react'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { IconGraduationCap } from '../../icons/IconGraduationCap';
import { IconBriefcase } from '../../icons/IconBriefcase';
import { Trans, useTranslation } from 'react-i18next';
import { WORK_EXPERIENCES } from '../../data/WorkExperiences';
import { EDUCATION_EXPERIENCES } from '../../data/EducationExperiences';
import ReactGA from 'react-ga4';
import i18n from '../../i18n/i18n';

export const ExperienceSection = () => {

    const [selected, setSelected] = useState<"work" | "education">('work');
    useTranslation();

    const capitalise = (text: string) => {
        return text.charAt(0).toUpperCase() + text.slice(1); 
    }

    return (
        <section id='experience' className='section p-4 max-w-4xl mx-auto w-full scroll-mt-20'>

            <div className='flex items-center justify-center place-content-between sm:place-content-start mb-8'>

                <SectionTitle color='cyan-purple-pink'>
                    <Trans i18nKey='experience.title' />
                </SectionTitle> 

                <label htmlFor='experience-changer' className='flex cursor-pointer ml-4 gap-2 items-center'>
                    <IconGraduationCap />
                    <input
                        id='experience-changer'
                        type='checkbox'
                        className='toggle'
                        checked={selected === 'work'}
                        onChange={() => {
                            selected === 'work' ? setSelected('education') : setSelected('work');
                            ReactGA.event({ category: 'Experience', action: 'Change', label: selected === 'work' ? 'Education' : 'Work' })
                        }}
                        aria-label='Cambiar entre experiencia laboral y formación académica'
                    />
                    <IconBriefcase />
                </label>

            </div>

            {/* Timeline */}
            <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
                {
                    selected === 'work' ? (<>

                        {
                            WORK_EXPERIENCES.map((workExperience, index) =>
                                <li key={workExperience.titleI18n}>
                                    <div className="timeline-middle">
                                        <IconBriefcase />
                                    </div>
                                    <div className="timeline-end mb-10">
                                        <time className="font-mono">{capitalise(Intl.DateTimeFormat(i18n.language, { month: 'long', year: 'numeric'}).format(workExperience.startDate))} - {workExperience.endDate ? capitalise(Intl.DateTimeFormat(i18n.language, { month: 'long', year: 'numeric'}).format(workExperience.endDate)) : <span className="loading loading-infinity loading-md pt-1"></span>}</time>
                                        <div className="text-lg font-black text-primary">
                                            <Trans i18nKey={workExperience.titleI18n} />
                                            <span className="text-sm font-normal text-neutral-content"> | <Trans i18nKey={workExperience.company} /></span>
                                        </div>
                                        <ul className='list-disc pl-5'>
                                            {workExperience.pointsI18n.map(pointI18n => 
                                                <li key={pointI18n}><Trans i18nKey={pointI18n} /></li>
                                            )}
                                        </ul>
                                    </div>
                                    {index != WORK_EXPERIENCES.length - 1 && <hr className='bg-primary' />}
                                </li>
                            )
                        }

                    </>) : (<>

                        {
                            EDUCATION_EXPERIENCES.map((educationExperience, index) =>       
                                <li key={educationExperience.titleI18n}>
                                    <div className="timeline-middle">
                                        <IconGraduationCap />
                                    </div>
                                    <div className="timeline-end mb-10">

                                        {
                                            educationExperience.forever ?
                                            <time className="font-mono flex items-center gap-2"> <span className="loading loading-infinity loading-md"></span> </time> :
                                            <time className="font-mono">{capitalise(Intl.DateTimeFormat(i18n.language, { month: 'long', year: 'numeric'}).format(educationExperience.startDate))} - {educationExperience.endDate ? capitalise(Intl.DateTimeFormat(i18n.language, { month: 'long', year: 'numeric'}).format(educationExperience.endDate)) : <span className="loading loading-infinity loading-md pt-1"></span>}</time>
                                        }


                                        <div className="text-lg font-black text-primary">
                                            <Trans i18nKey={educationExperience.titleI18n} />
                                            { educationExperience.institutionI18n &&
                                                <span className="text-sm font-normal text-neutral-content"> | <Trans i18nKey={educationExperience.institutionI18n} /></span>
                                            }
                                        </div>
                                        <ul className='list-disc pl-5'>
                                            {educationExperience.pointsI18n.map(pointI18n => 
                                                <li key={pointI18n}><Trans i18nKey={pointI18n} /></li>
                                            )}
                                        </ul>
                                        {educationExperience.paragraphsI18n.map(paragraphI18n =>
                                            <p key={paragraphI18n}><Trans i18nKey={paragraphI18n} /></p>
                                        )}
                                    </div>
                                    {index != EDUCATION_EXPERIENCES.length - 1 && <hr className='bg-primary'/>}
                                </li>
                            )
                        }
                    </>)
                }
            </ul>

        </section>
    )
}
import { useEffect, useRef, useState } from 'react'
import { TechnologyView } from './TechnologyView'
import { TECHNOLOGIES } from '../../data/Technologies'
import { TECHNOLOGY_TYPES, TechnologyType } from '../../interfaces/Technology'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { Trans, useTranslation } from 'react-i18next'

export const TechnologiesSection = () => {

    useTranslation();

    const [categoryHover, setCategoryHover] = useState<TechnologyType | undefined>(undefined);

    const hoverText = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (hoverText.current !== null) {
            hoverText.current.animate({ opacity: [0, 1] }, 500)
        }
    }, [categoryHover])

    return (
        <section id='skills' className='section p-4 max-w-4xl mx-auto w-full scroll-mt-20'>

            <div className='flex flex-col items-center justify-start mb-8 sm:flex-row sm:justify-between'>
                <SectionTitle color='red-blue'>
                    <Trans i18nKey='technologies.title' />
                </SectionTitle>


                <h2 ref={hoverText} className='text-2xl font-bold transition duration-300 ease-in-out text-center sm:text-right sm:w-1/2' >
                    {categoryHover !== undefined ? TECHNOLOGY_TYPES[categoryHover].value : 'Hover it!'}
                </h2>
            </div>

            <div className='grid grid-cols-3 sm:grid-cols-5 gap-4'>

                <div
                    className='order-1 sm:order-1 col-span-3 sm:col-span-3 grid grid-cols-subgrid rounded-box ring-primary ring-1 hover:ring-4 transition duration-300 ease-in-out'
                    onMouseEnter={() => setCategoryHover(TechnologyType.DEVOPS)} onMouseLeave={() => setCategoryHover(undefined)}
                >
                    {TECHNOLOGIES.filter(t => t.type === TechnologyType.DEVOPS).map(t => <TechnologyView key={t.name} technology={t} />)}
                </div>

                <div className='order-2 sm:order-2 col-span-3 sm:col-span-2 grid grid-cols-subgrid rounded-box ring-success ring-1 hover:ring-4 transition duration-300 ease-in-out'
                    onMouseEnter={() => setCategoryHover(TechnologyType.BACKEND)} onMouseLeave={() => setCategoryHover(undefined)}
                >
                    {TECHNOLOGIES.filter(t => t.type === TechnologyType.BACKEND).map(t => <TechnologyView key={t.name} technology={t} />)}
                </div>

                <div className='order-5 sm:order-3 col-span-2 sm:col-span-2 grid grid-cols-subgrid rounded-box ring-secondary ring-1 hover:ring-4 transition duration-300 ease-in-out'
                    onMouseEnter={() => setCategoryHover(TechnologyType.TOOL)} onMouseLeave={() => setCategoryHover(undefined)}
                >
                    {TECHNOLOGIES.filter(t => t.type === TechnologyType.TOOL).map(t => <TechnologyView key={t.name} technology={t} />)}
                </div>

                <div className='order-3 sm:order-4 col-span-3 sm:col-span-3 grid grid-cols-subgrid rounded-box ring-neutral-content ring-1 hover:ring-4 transition duration-300 ease-in-out'
                    onMouseEnter={() => setCategoryHover(TechnologyType.FRONTEND)} onMouseLeave={() => setCategoryHover(undefined)}
                >
                    {TECHNOLOGIES.filter(t => t.type === TechnologyType.FRONTEND).map(t => <TechnologyView key={t.name} technology={t} />)}
                </div>

                <div className='order-4 sm:order-5 col-span-3 sm:col-span-3 grid grid-cols-subgrid rounded-box ring-warning ring-1 hover:ring-4 transition duration-300 ease-in-out'
                    onMouseEnter={() => setCategoryHover(TechnologyType.DATABASE)} onMouseLeave={() => setCategoryHover(undefined)}
                >
                    {TECHNOLOGIES.filter(t => t.type === TechnologyType.DATABASE).map(t => <TechnologyView key={t.name} technology={t} />)}
                </div>

                <div className='order-6 sm:order-6 col-span-1 sm:col-span-2 grid grid-cols-subgrid rounded-box ring-info ring-1 hover:ring-4 transition duration-300 ease-in-out'
                    onMouseEnter={() => setCategoryHover(TechnologyType.OTHER)} onMouseLeave={() => setCategoryHover(undefined)}
                >
                    {TECHNOLOGIES.filter(t => t.type === TechnologyType.OTHER).map(t => <TechnologyView key={t.name} technology={t} />)}
                </div>

            </div>

        </section>
    )
}

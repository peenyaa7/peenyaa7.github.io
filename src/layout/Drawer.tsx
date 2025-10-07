import { HeroSection } from '../sections/HeroSection/HeroSection'
import { ExperienceSection } from '../sections/ExperienceSection/ExperienceSection'
import { ProjectsSection } from '../sections/ProjectsSection/ProjectsSection'
import { TechnologiesSection } from '../sections/TechnologiesSection/TechnologiesSection'
import { HeaderSection } from '../sections/HeaderSection/HeaderSection'
import { FooterSection } from '../sections/FooterSection/FooterSection'
import { Trans, useTranslation } from 'react-i18next'
import { IconRocket } from '../icons/IconRocket'
import { IconBriefcase } from '../icons/IconBriefcase'
import { IconNewspaper } from '../icons/IconNewspaper'
import { IconHandPeace } from '../icons/IconHandPeace'
import { useEffect } from 'react'
import { AnalyticsEvent, registryEvent } from '../services/AnalyticsService'

export const Drawer = () => {

    useTranslation();

    useEffect(() => {
        registryEvent(AnalyticsEvent.PageView);
    }, []);

    const toggleDrawer = () => {
        const checkbox = document.getElementById("drawer-toggler-button") as HTMLInputElement | null;
        if (checkbox)
            checkbox.checked = !checkbox.checked;
    }

    return (
        <div className='drawer drawer-end'>

            <input id="drawer-toggler-button" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col">

                <HeaderSection />
                <main>
                    <HeroSection />
                    <div className='divider' />
                    <ExperienceSection />
                    <div className='divider' />
                    <ProjectsSection />
                    <div className='divider' />
                    <TechnologiesSection />
                </main>
                <FooterSection />

            </div>
            <div className="drawer-side">
                <label htmlFor="drawer-toggler-button" aria-label="close sidebar" className="drawer-overlay"></label>

                <div className='flex flex-col min-h-full bg-base-200 pt-16'>
                    <ul className="menu flex-1 p-4 w-60 gap-2">
                        {/* Sidebar content here */}
                        <li>
                            <a href='#hero' onClick={() => toggleDrawer() } className='btn btn-outline btn-primary'>
                                <IconHandPeace />
                                <Trans i18nKey='hero.title' />
                            </a>
                        </li>
                        <li>
                            <a href='#projects' onClick={() => toggleDrawer() } className='btn btn-outline btn-primary'>
                                <IconRocket />
                                <Trans i18nKey='projects.title' />
                            </a>
                        </li>
                        <li>
                            <a href='#experience' onClick={() => toggleDrawer() } className='btn btn-outline btn-primary'>
                                <IconBriefcase />
                                <Trans i18nKey='experience.title' />
                            </a>
                        </li>
                        <li>
                            <a href='https://blog.peenyaa.dev' onClick={() => toggleDrawer() } className='btn btn-outline btn-accent'>
                                <IconNewspaper />
                                <Trans i18nKey='blog.title' />
                            </a>
                        </li>
                    </ul>
                    
                    <p className='text-center text-neutral-content pb-4'>
                        <Trans i18nKey='drawer.madeWithLove' /><a href='https://github.com/peenyaa7' className='link link-primary ml-1' target='_blank' rel='noreferrer noopener nofollow'>Peña</a>
                    </p>

                </div>

            </div>
        </div>
    )
}

import { Trans, useTranslation } from 'react-i18next'
import { IconGithub } from '../../icons/IconGithub';
import { IconLinkedIn } from '../../icons/IconLinkedIn';
import { IconGmail } from '../../icons/IconGmail';
import ReactGA from 'react-ga4';

export const HeroSection = () => {

    useTranslation();

    return (

        <section id='hero' className='hero min-h-screen max-w-4xl mx-auto'>

            <div className='hero-content text-center md:text-left flex flex-col md:flex-row gap-10'>

                {/* Swap Avatar */}

                <label className='swap swap-flip animate-ping animate-reverse animate-once md:animate-fade'>

                    {/* Hidden checkbox */}
                    <input
                        onClick={() => ReactGA.event({ category: 'Avatar', action: 'Click', label: 'Avatar Changer' })}
                        type='checkbox'
                        className='swap-checkbox'
                    />

                    <div className='avatar swap-off'>
                        <div className='w-48 md:w-60 rounded-full ring ring-primary'>
                            <img src="assets/img/avatar-1.webp" alt='Avatar de Francisco Javier Peña' />
                        </div>
                    </div>
                    <div className='avatar swap-on'>
                        <div className='w-48 md:w-60 rounded-full ring ring-primary'>
                            <img src="assets/img/avatar-2.webp" alt='Avatar funko pop de Francisco Javier Peña' />
                        </div>
                    </div>
                </label>


                <div className='flex flex-col'>

                    {/* Title */}
                    <p className='text-xs md:text-sm animate-fade animate-delay-1000'>Full Stack Software Engineer | Spring Boot & React</p>
                    <h1 className='text-4xl md:text-5xl animate-ease-in-out animate-duration-[1200ms] animate-fade-down font-bold text-center md:text-left'>Fco. Javier Peña</h1>

                    {/* Description */}
                    <p className='text-center md:text-left mt-4 flex-1 max-w-md animate-fade animate-delay-200'>
                        <Trans i18nKey='hero.description'  />
                    </p>

                    {/* Social media */}
                    <div className='flex justify-center md:justify-start space-x-4 mt-4'>
                        <a
                            onClick={() => ReactGA.event({ category: 'Social Media', action: 'Click', label: 'Github' })}
                            className='btn btn-sm md:btn-md btn-primary hover:scale-110 animate-fade animate-delay-700'
                            href='https://github.com/peenyaa7'
                            rel='noreferrer noopener nofollow'
                            target='_blank'
                        >
                            <IconGithub /> Github
                        </a>
                        <a
                            onClick={() => ReactGA.event({ category: 'Social Media', action: 'Click', label: 'LinkedIn' })}
                            className='btn btn-sm md:btn-md btn-primary hover:scale-110 animate-fade animate-delay-500'
                            href='https://www.linkedin.com/in/peenyaa7/'
                            rel='noreferrer noopener nofollow'
                            target='_blank'
                        >
                            <IconLinkedIn /> LinkedIn
                        </a>
                        <a
                            onClick={() => ReactGA.event({ category: 'Social Media', action: 'Click', label: 'Gmail' })}
                            className='btn btn-sm md:btn-md btn-primary hover:scale-110 animate-fade animate-delay-700'
                            href='mailto:peenyaa7@gmail.com'
                            rel='noreferrer noopener nofollow'
                            target='_blank'
                        >
                            <IconGmail /> Gmail
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

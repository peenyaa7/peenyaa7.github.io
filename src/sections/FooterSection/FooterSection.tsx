import { IconGithub } from '../../icons/IconGithub'
import { IconLinkedIn } from '../../icons/IconLinkedIn'
import { IconGmail } from '../../icons/IconGmail'

export const FooterSection = () => {
    return (
        <footer className="footer footer-center p-4 bg-neutral text-neutral-content mt-12">
            <aside className="flex items-center grid-flow-col p-2 gap-10">
                <a className='hover:scale-125 transition-transform' href='https://github.com/peenyaa7' target='_blank' aria-label='Enlace a mi perfil de Github' rel='noreferrer noopener nofollow'>
                    <IconGithub />
                </a>
                <a className='hover:scale-125 transition-transform' href='https://www.linkedin.com/in/peenyaa7/' target='_blank' aria-label='Enlace a mi perfil de LinkedIn' rel='noreferrer noopener nofollow'>
                    <IconLinkedIn />
                </a>
                <a className='hover:scale-125 transition-transform' href='mailto:peenyaa7@gmail.com' target='_blank' aria-label='Enlace a mi correo electrónico' rel='noreferrer noopener nofollow'>
                    <IconGmail />
                </a>
            </aside>
        </footer>
    )
}

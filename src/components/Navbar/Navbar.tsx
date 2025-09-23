import { Trans, useTranslation } from 'react-i18next';
import { LOCALES } from '../../i18n/i18n';
import { IconSun } from '../../icons/IconSun';
import { IconMoon } from '../../icons/IconMoon';
import ReactGA from 'react-ga4';

export const Navbar = () => {

    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }

    return (

        <div className="w-full navbar bg-base-300 fixed top-0 z-10 shadow-lg p-0 gap-1 px-2">

            <div className="flex-1 gap-1">
                {['P','E','Ñ','A'].map((letter) =>
                    <kbd key={letter} className='kbd'>{letter}</kbd>
                )}
            </div>

            <div className="flex-none hidden md:block">
                <ul className="menu menu-horizontal gap-1">

                    <li><a href='#projects' className="btn btn-ghost"><Trans i18nKey='projects.title' /></a></li>
                    <li><a href='#experience' className="btn btn-ghost"><Trans i18nKey='experience.title' /></a></li>
                    <li><a href='https://blog.peenyaa.dev' className="btn btn-ghost text-accent"><Trans i18nKey='blog.title' /></a></li>

                </ul>
            </div>

            {/* Theme */}
            <label htmlFor='theme-changer' className="flex-none btn btn-ghost swap swap-rotate">

                {/* this hidden checkbox controls the state */}
                <input
                    id='theme-changer'
                    type="checkbox"
                    className="theme-controller"
                    value="fantasy"
                    aria-label="Cambiar de tema visual"
                    onClick={() => ReactGA.event({ category: 'Theme', action: 'Click', label: 'Theme Changer' })}
                />

                <IconSun className='swap-off fill-current' />
                <IconMoon className='swap-on fill-current' />

            </label>

            {/* Language */}
            <div className='flex-none dropdown dropdown-end'>
                <div tabIndex={0} className="btn btn-ghost" role='button' aria-label="language">
                    <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path><path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path></svg>
                    <svg width="12px" height="12px" className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                </div>
                <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                    {
                        Object.keys(LOCALES).map(locale =>
                            <li
                                key={locale}
                                onClick={() => {
                                    changeLanguage(locale);
                                    ReactGA.event({ category: 'Language', action: 'Click', label: `Change Language to ${LOCALES[locale]}` });
                                    const element = document.activeElement;
                                    if (element && element instanceof HTMLElement) element.blur();
                                }}
                            >
                                <button className={`flex flex-row gap-2 items-center w-full p-2 ${i18n.language === locale && 'active'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={`${i18n.language !== locale && 'invisible'}`}>
                                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                                    </svg>
                                    <span>{LOCALES[locale]}</span>
                                </button>
                            </li>
                        )
                    }
                </ul>
            </div>

            {/* Open Sidebar Icon */}
            <div className="flex-none md:hidden">
                <label htmlFor="drawer-toggler-button" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>


        </div>

    )
}

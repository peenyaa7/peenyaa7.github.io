import { Trans, useTranslation } from 'react-i18next';
import { LOCALES } from '../../i18n/i18n';

export const Navbar = () => {

    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }

    return (

        <div className="w-full navbar bg-base-300 fixed top-0 z-10 shadow-lg p-0 gap-1 px-2">


            <div className="flex-1 gap-1">
                <kbd className='kbd'>P</kbd>
                <kbd className='kbd'>E</kbd>
                <kbd className='kbd'>Ñ</kbd>
                <kbd className='kbd'>A</kbd>
            </div>

            <div className="flex-none hidden md:block">
                <ul className="menu menu-horizontal gap-1">

                    <li><a href='#projects' className="btn btn-ghost"><Trans i18nKey='projects.title' /></a></li>
                    <li><a href='#experience' className="btn btn-ghost"><Trans i18nKey='experience.title' /></a></li>
                    {/* <li><a href='#' className="btn btn-ghost">Blog</a></li> */}

                </ul>


            </div>

            {/* Theme */}
            <label htmlFor='theme-changer' className="flex-none btn btn-ghost swap swap-rotate">

                {/* this hidden checkbox controls the state */}
                <input id='theme-changer' type="checkbox" className="theme-controller" value="fantasy" aria-label="Cambiar de tema visual" />

                {/* sun icon */}
                <svg className="swap-on fill-current" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                {/* moon icon */}
                <svg className="swap-off fill-current" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

            </label>

            {/* Language */}
            <div className='flex-none dropdown dropdown-end'>
                <div tabIndex={0} className="btn btn-ghost" aria-label="language">
                    <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path><path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path></svg>
                    <svg width="12px" height="12px" className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                </div>
                <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                    {
                        Object.keys(LOCALES).map(locale =>
                            <li key={locale} onClick={() => changeLanguage(locale)}>
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

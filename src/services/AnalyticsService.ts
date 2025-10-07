import ReactGA from 'react-ga4'

const GA4_ID = "G-NRQS4G8TGY";

export enum AnalyticsEvent {
    PageView = "page_view",
    GithubClick = "social_github",
    LinkedinClick = "social_linkedin",
    EmailClick = "contact_email",
    SectionToggleExperience = "section_toggle_to_experience",
    SectionToggleEducation = "section_toggle_to_education",
    AvatarClick = "avatar_click",
    ThemeDarkClick = "theme_change_to_dark",
    ThemeLightClick = "theme_change_to_light",
    LanguageEsToggle = "language_change_to_es",
    LanguageEnToggle = "language_change_to_en",
}

export const registryEvent = (event: AnalyticsEvent) => {
    switch (event) {
        case AnalyticsEvent.PageView:
            // page = "home" because we have only one page, this
            // param could be parametrized in the future
            ReactGA.send({ hitType: "pageview", page: "home" });
            break;

        case AnalyticsEvent.GithubClick:
            ReactGA.event("social_click", { platform: "github" });
            break;

        case AnalyticsEvent.LinkedinClick:
            ReactGA.event("social_click", { platform: "linkedin" });
            break;

        case AnalyticsEvent.EmailClick:
            ReactGA.event("contact_click", { method: "email" });
            break;

        case AnalyticsEvent.SectionToggleExperience:
            ReactGA.event("section_toggle", { selected_section: "experience" });
            break;

        case AnalyticsEvent.SectionToggleEducation:
            ReactGA.event("section_toggle", { selected_section: "education" });
            break;

        case AnalyticsEvent.AvatarClick:
            ReactGA.event("avatar_click", { element: "profile_picture" });
            break;

        case AnalyticsEvent.ThemeDarkClick:
            ReactGA.event("theme_change", { theme: "dark" });
            break;

        case AnalyticsEvent.ThemeLightClick:
            ReactGA.event("theme_change", { theme: "light" });
            break;

        case AnalyticsEvent.LanguageEsToggle:
            ReactGA.event("language_change", { language: "es" });
            break;

        case AnalyticsEvent.LanguageEnToggle:
            ReactGA.event("language_change", { language: "en" });
            break;

        default:
            console.warn(`[Analytics] Evento desconocido: ${event}`);
    }
}

export const initializeGoogleAnalytics = () => {
    ReactGA.initialize(GA4_ID);
}

    import { PageType } from "@/utils/types";

    export const page1: PageType = {
        logoText: "SiteGen",
        title: "Landing Page Generator",
        link: "/gensite/landing-page-generator",
        headline: "Landing Page Generator",
        description: "Use AI to generate Landing Pages in seconds",
        phone_number: "01123456789",
        bgColor: "#ffffff",
        textColor: "#000000",
        pages: [],
    }

    export const page2: PageType = {
        logoText: "SiteGen",
        title: "Website Generator",
        link: "/gensite/website-generator",
        headline: "Website Generator",
        description: "Use AI to generate Websites in seconds",
        phone_number: "01123456789",
        bgColor: "#ffffff",
        textColor: "#000000",
        pages: [],
    }

    export const home_page: PageType = {
        logoText: "SiteGen",
        title: "Home",
        link: "/gensite",
        headline: "Welcome to SiteGen",
        description: "Use AI to generate Websites and Landing Pages in seconds",
        phone_number: "01123456789",
        bgColor: "#ffffff",
        textColor: "#000000",
        pages: [page1, page2],
    }
    
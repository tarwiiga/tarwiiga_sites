import {PageType, SiteType} from "@/utils/types";

export const page1: PageType = {
    title: "Landing Page Generator",
    link: "/sitegen/landing-page-generator",
    headline: "Landing Page Generator",
    description: "Use AI to generate Landing Pages in seconds",
    phone_number: "01123456789",
}

export const page2: PageType = {
    title: "Website Generator",
    link: "/sitegen/website-generator",
    headline: "Website Generator",
    description: "Use AI to generate Websites in seconds",
    phone_number: "01123456789",
}

export const home_page: PageType = {
    title: "Home",
    link: "/sitegen",
    headline: "Welcome to SiteGen",
    description: "Use AI to generate Websites and Landing Pages in seconds",
    phone_number: "01123456789",
}

export const site: SiteType = {
    name: "SiteGen",
    domain: "sitegen",
    bg_color: "#ffffff",
    text_color: "#000000",
    home_page: home_page,
    page1: page1,
    page2: page2,
}
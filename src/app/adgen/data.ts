import {PageType, SiteType} from "@/utils/types";

export const page1: PageType = {
    title: "Google Ads",
    link: "/adgen/google-ads",
    headline: "Google Ads Generator",
    description: "Use AI to generate Google Ads in seconds",
    phone_number: "01123456789",
}

export const page2: PageType = {
    title: "Facebook Ads",
    link: "/adgen/facebook-ads",
    headline: "Facebook Ads Generator",
    description: "Use AI to generate Facebook Ads in seconds",
    phone_number: "01123456789",
}

export const home_page: PageType = {
    title: "Home",
    link: "/adgen",
    headline: "Welcome to AdGen",
    description: "Use AI to generate Google and Facebook Ads in seconds",
    phone_number: "01123456789",
}

export const site: SiteType = {
    name: "AdGen",
    domain: "adgen",
    url: "https://sites.tarwiiga.com/adgen",
    bg_color: "#ffffff",
    text_color: "#000000",
    home_page: home_page,
    page1: page1,
    page2: page2,
}

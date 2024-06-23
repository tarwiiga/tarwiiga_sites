import {PageType} from "@/utils/types";

export const page1: PageType = {
    logoText: "AdGen",
    title: "Google Ads",
    link: "/adgen/google-ads",
    headline: "Google Ads Generator",
    description: "Use AI to generate Google Ads in seconds",
    phone_number: "01123456789",
    bgColor: "#ffffff",
    textColor: "#000000",
    pages: [],
}

export const page2: PageType = {
    logoText: "AdGen",
    title: "Facebook Ads",
    link: "/adgen/facebook-ads",
    headline: "Facebook Ads Generator",
    description: "Use AI to generate Facebook Ads in seconds",
    phone_number: "01123456789",
    bgColor: "#ffffff",
    textColor: "#000000",
    pages: [],
}

export const home_page: PageType = {
    logoText: "AdGen",
    title: "Home",
    link: "/adgen",
    headline: "Welcome to AdGen",
    description: "Use AI to generate Google and Facebook Ads in seconds",
    phone_number: "01123456789",
    bgColor: "#ffffff",
    textColor: "#000000",
    pages: [page1, page2],
}

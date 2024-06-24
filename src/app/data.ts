import {PageType, SiteType} from "@/utils/types";

export const page1: PageType = {
    title: "Example 1",
    link: "/sitegen",
    headline: "",
    description: "",
    phone_number: "",
}

export const page2: PageType = {
    title: "Example 2",
    link: "/adgen",
    headline: "",
    description: "",
    phone_number: "",
}

export const home_page: PageType = {
    title: "Home",
    link: "/",
    headline: "Welcome to Tarwiiga Sites",
    description: "This website template is used by Tarwiiga SiteGen",
    phone_number: "",
}

export const site: SiteType = {
    name: "Tarwiiga Sites",
    domain: "",
    bg_color: "#ffffff",
    text_color: "#000000",
    home_page: home_page,
    page1: page1,
    page2: page2,
}

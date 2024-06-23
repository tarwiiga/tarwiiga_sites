import {PageType} from "@/utils/types";

export const page1: PageType = {
    logoText: "Tarwiiga Sites",
    title: "Example 1",
    link: "/sitegen",
    headline: "",
    description: "",
    phone_number: "",
    bgColor: "#ffffff",
    textColor: "#000000",
    pages: [],
}

export const page2: PageType = {
    logoText: "Tarwiiga Sites",
    title: "Example 2",
    link: "/adgen/",
    headline: "",
    description: "",
    phone_number: "",
    bgColor: "#ffffff",
    textColor: "#000000",
    pages: [],
}

export const home_page: PageType = {
    logoText: "Tarwiiga Sites",
    title: "Home",
    link: "/",
    headline: "Welcome to Tarwiiga Sites",
    description: "This website template is used by Tarwiiga SiteGen",
    phone_number: "",
    bgColor: "#ffffff",
    textColor: "#000000",
    pages: [page1, page2],
}

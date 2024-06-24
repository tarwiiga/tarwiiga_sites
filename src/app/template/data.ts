import {PageType, SiteType} from "@/utils/types";

export const page1: PageType = {
    title: "Page 1",
    link: "/template/page1",
    headline: "Template Page 1 Headline",
    description: "Template Page 1 Description",
    phone_number: "01123456789",
}

export const page2: PageType = {
    title: "Page 2",
    link: "/template/page2",
    headline: "Template Page 2 Headline",
    description: "Template Page 2 Description",
    phone_number: "01123456789",
}

export const home_page: PageType = {
    title: "Home",
    link: "/template",
    headline: "Template Home Headline",
    description: "Template Home Description",
    phone_number: "01123456789",
}

export const site: SiteType = {
    name: "Template",
    domain: "template",
    url: "https://sites.tarwiiga.com/template",
    bg_color: "#ffffff",
    text_color: "#000000",
    home_page: home_page,
    page1: page1,
    page2: page2,
}

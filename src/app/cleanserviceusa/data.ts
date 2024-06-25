
    import {PageType, SiteType} from "@/utils/types";

    export const page1: PageType = {
        title: "USA Services",
        link: "/cleanserviceusa/usa-services",
        headline: "Our USA Services",
        description: "We offer a wide range of cleaning services to meet your needs.",
        phone_number: "01234567890",
    }

    export const page2: PageType = {
        title: "USA Contact",
        link: "/cleanserviceusa/usa-contact",
        headline: "Contact in USA Today",
        description: "Get in touch with us today to schedule a cleaning.",
        phone_number: "01234567890",
    }

    export const home_page: PageType = {
        title: "Home",
        link: "/cleanserviceusa",
        headline: "Clean Service",
        description: "Get Your Home Sparkling Clean",
        phone_number: "01234567890",
    }

    export const site: SiteType = {
        name: "Clean Service USA",
        domain: "cleanserviceusa",
        bg_color: "#ffffff",
        text_color: "#000000",
        home_page: home_page,
        page1: page1,
        page2: page2,
    }
    

    import {PageType, SiteType} from "@/utils/types";

    export const page1: PageType = {
        title: "Our Services",
        link: "/acmaintainace/our-services",
        headline: "Comprehensive AC Maintenance Services",
        description: "Discover our range of services designed to keep your AC unit in optimal condition.",
        phone_number: "01234567890",
    }

    export const page2: PageType = {
        title: "Contact Us",
        link: "/acmaintainace/contact-us",
        headline: "Get in Touch",
        description: "Contact us today to schedule an appointment or inquire about our services.",
        phone_number: "01234567890",
    }

    export const home_page: PageType = {
        title: "Home",
        link: "/acmaintainace",
        headline: "Welcome to AC-Maintainace",
        description: "Keep Your AC Running Smoothly with Our Expert Maintenance Services",
        phone_number: "01234567890",
    }

    export const site: SiteType = {
        name: "ACMaintainace",
        domain: "acmaintainace",
        bg_color: "#ffffff",
        text_color: "#000000",
        home_page: home_page,
        page1: page1,
        page2: page2,
    }
    
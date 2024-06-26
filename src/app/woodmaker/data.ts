
    import {PageType, SiteType} from "@/utils/types";

    export const page1: PageType = {
        title: "Our Services",
        link: "/woodmaker/our-services",
        headline: "Expert Woodworking Services",
        description: "Discover the wide range of woodworking services we offer to meet your needs.",
        phone_number: "01234567890",
    }

    export const page2: PageType = {
        title: "Contact Us",
        link: "/woodmaker/contact-us",
        headline: "Let's Build Together",
        description: "Contact us today to discuss your woodworking project and get a free quote.",
        phone_number: "01234567890",
    }

    export const home_page: PageType = {
        title: "Home",
        link: "/woodmaker",
        headline: "Welcome to Wood Maker",
        description: "Custom Woodworking for Your Home and Business",
        phone_number: "01234567890",
    }

    export const site: SiteType = {
        name: "Wood Maker",
        domain: "woodmaker",
        bg_color: "#ffffff",
        text_color: "#000000",
        home_page: home_page,
        page1: page1,
        page2: page2,
    }
    
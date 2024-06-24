
    import { PageType } from "@/utils/types";

    export const page1: PageType = {
        logoText: "CleanSweep",
        title: "Our Services",
        link: "/cleansweep/services",
        headline: "Comprehensive Cleaning Solutions",
        description: "Offering a full range of cleaning services for homes and offices.",
        phone_number: "01234567890",
        bgColor: "#f7f7f7",
        textColor: "#000000",
        pages: [],
    }

    export const page2: PageType = {
        logoText: "CleanSweep",
        title: "Contact Us",
        link: "/cleansweep/contact",
        headline: "Get in Touch",
        description: "Contact us for all your cleaning needs.",
        phone_number: "01234567890",
        bgColor: "#ffffff",
        textColor: "#000000",
        pages: [],
    }

    export const home_page: PageType = {
        logoText: "CleanSweep",
        title: "Home",
        link: "/cleansweep",
        headline: "Welcome to CleanSweep",
        description: "Professional Home and Office Cleaning Services",
        phone_number: "01234567890",
        bgColor: "#ffffff",
        textColor: "#000000",
        pages: [page1, page2],
    }
    
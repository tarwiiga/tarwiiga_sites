
    import { PageType } from "@/utils/types";

    export const page1: PageType = {
        logoText: "AirCare",
        title: "Our Services",
        link: "/aircare/services",
        headline: "Comprehensive AC Services",
        description: "Offering a full range of air conditioning maintenance and repair services.",
        phone_number: "01234567890",
        bgColor: "#f0f8ff",
        textColor: "#000000",
        pages: [],
    }

    export const page2: PageType = {
        logoText: "AirCare",
        title: "About Us",
        link: "/aircare/about",
        headline: "About AirCare",
        description: "Learn more about our experienced team and commitment to customer satisfaction.",
        phone_number: "01234567890",
        bgColor: "#f0f8ff",
        textColor: "#000000",
        pages: [],
    }

    export const home_page: PageType = {
        logoText: "AirCare",
        title: "Home",
        link: "/aircare",
        headline: "Welcome to AirCare",
        description: "Expert Air Conditioning Maintenance and Repair Services",
        phone_number: "01234567890",
        bgColor: "#f0f8ff",
        textColor: "#000000",
        pages: [page1, page2],
    }
    
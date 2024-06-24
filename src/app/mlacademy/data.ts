
    import { PageType } from "@/utils/types";

    export const page1: PageType = {
        logoText: "MLAcademy",
        title: "Our Courses",
        link: "/mlacademy/courses",
        headline: "Comprehensive Machine Learning Courses",
        description: "Explore a wide range of courses to enhance your machine learning skills.",
        phone_number: "01234567890",
        bgColor: "#ffffff",
        textColor: "#000000",
        pages: [],
    }

    export const page2: PageType = {
        logoText: "MLAcademy",
        title: "Contact Us",
        link: "/mlacademy/contact",
        headline: "Get in Touch",
        description: "Contact us for more information about our machine learning courses.",
        phone_number: "01234567890",
        bgColor: "#e8f5e9",
        textColor: "#000000",
        pages: [],
    }

    export const home_page: PageType = {
        logoText: "MLAcademy",
        title: "Home",
        link: "/mlacademy",
        headline: "Welcome to ML Academy",
        description: "Master Machine Learning with Expert-led Courses",
        phone_number: "01234567890",
        bgColor: "#e8f5e9",
        textColor: "#000000",
        pages: [page1, page2],
    }
    
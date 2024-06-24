
    import { PageType } from "@/utils/types";

    export const page1: PageType = {
        logoText: "StageRight Repairs",
        title: "Our Services",
        link: "/stageright/services",
        headline: "From Dimmers to Drapes, We Fix It All",
        description: "Explore our range of theatre repair services designed to keep your show running smoothly.",
        phone_number: "01234567890",
        bgColor: "#8B4513",
        textColor: "#ffffff",
        pages: [],
    }

    export const page2: PageType = {
        logoText: "StageRight Repairs",
        title: "Contact Us",
        link: "/stageright/contact",
        headline: "Request a Consultation",
        description: "Don't let technical issues steal the show. Contact us today for a free quote.",
        phone_number: "01234567890",
        bgColor: "#000000",
        textColor: "#ffffff",
        pages: [],
    }

    export const home_page: PageType = {
        logoText: "StageRight Repairs",
        title: "Home",
        link: "/stageright",
        headline: "Curtain Call for Technical Troubles?",
        description: "We bring your theatre back to life. Lighting, sound, rigging - StageRight Repairs has you covered.",
        phone_number: "01234567890",
        bgColor: "#000000",
        textColor: "#ffffff",
        pages: [page1, page2],
    }
    
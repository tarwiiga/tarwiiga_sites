
    import { PageType } from "@/utils/types";

    export const page1: PageType = {
        logoText: "ClearView Window Repair",
        title: "Our Services",
        link: "/clearview/services",
        headline: "From Foggy Panes to Broken Glass, We Fix It All",
        description: "We offer a comprehensive range of window repair services, including: window pane replacement, seal repair, frame repair, and more. ",
        phone_number: "1-800-555-1212",
        bgColor: "#ffffff",
        textColor: "#222222",
        pages: [],
    }

    export const page2: PageType = {
        logoText: "ClearView Window Repair",
        title: "Contact Us",
        link: "/clearview/contact",
        headline: "Schedule Your Free Estimate Today!",
        description: "Don't wait to enjoy clear, energy-efficient windows. Contact us for a free, no-obligation estimate.",
        phone_number: "1-800-555-1212",
        bgColor: "#f2f2f2",
        textColor: "#222222",
        pages: [],
    }

    export const home_page: PageType = {
        logoText: "ClearView Window Repair",
        title: "Home",
        link: "/clearview",
        headline: "Let the Sunshine In!",
        description: "Expert window repair services to brighten your home and keep it energy efficient. Free estimates and fast, reliable service.",
        phone_number: "1-800-555-1212",
        bgColor: "#f2f2f2",
        textColor: "#222222",
        pages: [page1, page2],
    }
    
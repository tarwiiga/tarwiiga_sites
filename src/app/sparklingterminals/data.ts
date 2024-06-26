
    import {PageType, SiteType} from "@/utils/types";

    export const page1: PageType = {
        title: "Our Services",
        link: "/sparklingterminals/services",
        headline: "Beyond Sparkling: Customized Airport Cleaning Solutions",
        description: "From terminals to gates, we tailor our services to meet your airport's unique needs. Explore our comprehensive cleaning solutions.",
        phone_number: "1-800-555-1212",
    }

    export const page2: PageType = {
        title: "Contact Us",
        link: "/sparklingterminals/contact",
        headline: "Ready for a Cleaner Airport?",
        description: "Contact us to discuss your cleaning needs and receive a personalized quote.",
        phone_number: "1-800-555-1212",
    }

    export const home_page: PageType = {
        title: "Home",
        link: "/sparklingterminals",
        headline: "Sparkling Terminals: Your Gateway to Cleanliness",
        description: "First impressions matter.  We provide top-tier airport cleaning services so you can welcome travelers with confidence. Get a free quote today!",
        phone_number: "1-800-555-1212",
    }

    export const site: SiteType = {
        name: "SparklingTerminals",
        domain: "sparklingterminals",
        bg_color: "#ffffff",
        text_color: "#000000",
        home_page: home_page,
        page1: page1,
        page2: page2,
    }
    

    import {PageType, SiteType} from "@/utils/types";

    export const page1: PageType = {
        title: "Features",
        link: "/mirrormaker/features",
        headline: "Powerful Features",
        description: "Explore the amazing features that make Mirror Maker the ultimate tool for creating mirror effects.",
        phone_number: "01234567890",
    }

    export const page2: PageType = {
        title: "Pricing",
        link: "/mirrormaker/pricing",
        headline: "Affordable Pricing",
        description: "Choose from our flexible pricing plans to fit your budget and needs.",
        phone_number: "01234567890",
    }

    export const home_page: PageType = {
        title: "Home",
        link: "/mirrormaker",
        headline: "Mirror Maker",
        description: "Create stunning mirror effects for your photos and videos.",
        phone_number: "01234567890",
    }

    export const site: SiteType = {
        name: "Mirror Maker",
        domain: "mirrormaker",
        bg_color: "#ffffff",
        text_color: "#000000",
        home_page: home_page,
        page1: page1,
        page2: page2,
    }
    
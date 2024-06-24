
    import {PageType, SiteType} from "@/utils/types";

    export const page1: PageType = {
        title: "Our Services",
        link: "/sparklingclean/services",
        headline: "From Everyday Wear to Delicates, We Clean It All",
        description: "Dry cleaning, laundry, alterations, and more!  View our full range of services and get instant pricing.",
        phone_number: "1-800-555-CLEAN",
    }

    export const page2: PageType = {
        title: "Contact Us",
        link: "/sparklingclean/contact",
        headline: "Ready for Laundry Day Bliss?",
        description: "Schedule a pickup online or give us a call. We're here to answer all your questions.",
        phone_number: "1-800-555-CLEAN",
    }

    export const home_page: PageType = {
        title: "Home",
        link: "/sparklingclean",
        headline: "Sparkling Clean: Your Clothes' Best Friend",
        description: "Tired of laundry day blues? We make your clothes sparkle, so you don't have to.  Free pickup and delivery available!",
        phone_number: "1-800-555-CLEAN",
    }

    export const site: SiteType = {
        name: "SparklingClean",
        domain: "sparklingclean",
        bg_color: "#f2f2f2",
        text_color: "#333333",
        home_page: home_page,
        page1: page1,
        page2: page2,
    }
    
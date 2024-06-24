
    import { PageType } from "@/utils/types";

    export const page1: PageType = {
        logoText: "Sparkling Styles",
        title: "Our Services",
        link: "/sparklingstyles/services",
        headline: "From Everyday Wear to Delicates, We Clean it All",
        description: "Dry Cleaning, Laundry, Stain Removal, Alterations - We're your one-stop shop for all your garment care needs.",
        phone_number: "123-456-7890",
        bgColor: "#ffffff",
        textColor: "#333333",
        pages: [],
    }

    export const page2: PageType = {
        logoText: "Sparkling Styles",
        title: "Contact Us",
        link: "/sparklingstyles/contact",
        headline: "Ready for Your Clothes to Shine?",
        description: "Contact us today for a free quote and experience the Sparkling Styles difference!",
        phone_number: "123-456-7890",
        bgColor: "#f2f2f2",
        textColor: "#333333",
        pages: [],
    }

    export const home_page: PageType = {
        logoText: "Sparkling Styles",
        title: "Home",
        link: "/sparklingstyles",
        headline: "Giving Your Clothes the Sparkle They Deserve",
        description: "Tired of dull, lifeless clothes? Sparkling Styles offers premium cleaning services that breathe new life into your wardrobe.  Free pickup and delivery!",
        phone_number: "123-456-7890",
        bgColor: "#f2f2f2",
        textColor: "#333333",
        pages: [page1, page2],
    }
    
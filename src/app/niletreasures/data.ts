
    import { PageType } from "@/utils/types";

    export const page1: PageType = {
        logoText: "Nile Treasures",
        title: "Our Tours",
        link: "/niletreasures/tours",
        headline: "Crafted Journeys, Timeless Memories",
        description: "From luxurious Nile cruises to private guided tours, we offer an experience for every traveler.",
        phone_number: "+1-555-555-5555",
        bgColor: "#ffffff",
        textColor: "#000000",
        pages: [],
    }

    export const page2: PageType = {
        logoText: "Nile Treasures",
        title: "Contact Us",
        link: "/niletreasures/contact",
        headline: "Start Planning Your Nile Adventure",
        description: "Get in touch with our expert travel planners to create your dream Egypt journey.",
        phone_number: "+1-555-555-5555",
        bgColor: "#f0e68c",
        textColor: "#000000",
        pages: [],
    }

    export const home_page: PageType = {
        logoText: "Nile Treasures",
        title: "Home",
        link: "/niletreasures",
        headline: "Discover the Magic of the Nile",
        description: "Unforgettable Egypt Nile cruises and tours. Explore ancient wonders, vibrant culture, and breathtaking landscapes.",
        phone_number: "+1-555-555-5555",
        bgColor: "#f0e68c",
        textColor: "#000000",
        pages: [page1, page2],
    }
    
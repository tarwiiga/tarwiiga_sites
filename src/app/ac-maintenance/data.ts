
    import {PageType, SiteType} from "@/utils/types";

    export const page1: PageType = {
        title: "خدماتنا",
        link: "/ac-maintenance/services",
        headline: "خدماتنا المتنوعة",
        description: "نقدم مجموعة واسعة من خدمات صيانة وتنظيف مكيفات تناسب جميع الاحتياجات.",
        phone_number: "01234567890",
    }

    export const page2: PageType = {
        title: "اتصل بنا",
        link: "/ac-maintenance/contact",
        headline: "تواصل معنا",
        description: "لا تتردد في الاتصال بنا للحصول على مزيد من المعلومات حول خدماتنا.",
        phone_number: "01234567890",
    }

    export const home_page: PageType = {
        title: "الرئيسية",
        link: "/ac-maintenance",
        headline: "صيانة وتنظيف مكيفات",
        description: "نقدم أفضل خدمات صيانة وتنظيف مكيفات بافضل الاسعار",
        phone_number: "01234567890",
    }

    export const site: SiteType = {
        name: "صيانة وتنظيف مكيفات",
        domain: "ac-maintenance",
        bg_color: "#ffffff",
        text_color: "#000000",
        home_page: home_page,
        page1: page1,
        page2: page2,
    }
    
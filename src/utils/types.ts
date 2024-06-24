export type PageType = {
    title: string,
    link: string,
    headline: string,
    description: string,
    phone_number: string,
}

export type SiteType = {
    name: string,
    domain: string,
    url: string,
    bg_color: string,
    text_color: string,
    home_page: PageType,
    page1: PageType,
    page2: PageType,
}

import {PageType, SiteType} from "@/utils/types";

const Hero = ({site, page}: {site: SiteType, page: PageType}) => {

    return (
        <div
            className={`h-screen bg-[${site.bg_color}] text-[${site.text_color}] flex items-center justify-center pt-16 pb-16`}>
            <div className="text-center">
                <h1 className="text-4xl font-bold">{page.headline}</h1>
                <p className="mt-4 text-lg">{page.description}</p>
                {page.phone_number !== "" && (
                    <p className="mt-4 text-lg">Contact us: {page.phone_number}</p>
                )}
            </div>
        </div>
    );
};

export default Hero;


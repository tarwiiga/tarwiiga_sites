import {SiteType} from "@/utils/types";

const Footer = ({site}: {site: SiteType}) => {
  return (
    <footer className={`bg-${site.bg_color} text-[${site.text_color}] fixed w-full bottom-0 z-10`}>
      <div className="container mx-auto px-4 py-4 text-center">
        <p>Powered by Tarwiiga SiteGen</p>
      </div>
    </footer>
  );
};

export default Footer;


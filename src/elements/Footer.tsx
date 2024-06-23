import {PageType} from "@/utils/types";

const Footer = ({page}: {page: PageType}) => {
  return (
    <footer className={`bg-${page.bgColor} text-[${page.textColor}] fixed w-full bottom-0 z-10`}>
      <div className="container mx-auto px-4 py-4 text-center">
        <p>Powered by Tarwiiga SiteGen</p>
      </div>
    </footer>
  );
};

export default Footer;


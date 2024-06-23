'use client'
import {useState} from 'react';
import {PageType} from "@/utils/types";

interface HeaderProps {
    page: PageType;
    home_page: PageType;
    page1: PageType;
    page2: PageType;
}

const Header = (props: HeaderProps) => {

    const {page, home_page, page1, page2} = props

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`bg-[${page.bgColor}] text-[${page.textColor}] fixed w-full top-0 z-10`}>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <a href={home_page.link} className="text-xl font-bold">{page.logoText}</a>
                <nav className="hidden md:flex space-x-4">
                    {[page1, page2].map((page: PageType) => (
                        <a
                            key={page.title}
                            href={page.link}
                            className="hover:text-gray-600">
                            {page.title}
                        </a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <nav className="md:hidden bg-gray-200">
                    {[page1, page2].map((page: PageType) => (
                        <a
                            key={page.title}
                            href={page.link}
                            className="block px-4 py-2 hover:text-gray-600">
                            {page.title}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;

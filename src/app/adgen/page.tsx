import Header from "@/elements/Header";
import Hero from "@/elements/Hero";
import Footer from "@/elements/Footer";
import {site, home_page} from "./data";

export default function Home() {
    return (
        <div>
            <Header site={site}/>
            <Hero site={site} page={home_page}/>
            <Footer site={site}/>
        </div>
    );
}

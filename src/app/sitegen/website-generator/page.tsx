import Header from "@/elements/Header";
import Hero from "@/elements/Hero";
import Footer from "@/elements/Footer";
import {site, page1} from "../data";

export default function Home() {
  return (
      <div>
          <Header site={site}/>
          <Hero site={site} page={page1}/>
          <Footer site={site}/>
      </div>
  );
}

import Header from "@/elements/Header";
import Hero from "@/elements/Hero";
import Footer from "@/elements/Footer";
import {home_page, page1, page2} from "../data";

export default function Home() {
  return (
      <div>
          <Header page={page1} home_page={home_page} page1={page1} page2={page2}/>
          <Hero page={page1}/>
          <Footer page={page1}/>
      </div>
  );
}
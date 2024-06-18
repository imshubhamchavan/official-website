import { Hero } from "./components/Hero";
import {SectionTwo} from "./components/SectionTwo";
import {AboutSection} from "./components/AboutSection";
import {FavoriteProjects} from "./components/FavoriteProjects";


export default function Home() {
  return (
    <div className="max-w-7xl w-full px-4 md:px-8 mx-auto mt-8">
    <Hero/>
    <SectionTwo/>
    <AboutSection/>
    <FavoriteProjects/>
    
    </div>

  );
}

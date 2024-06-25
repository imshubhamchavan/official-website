import { Hero } from "./components/Hero";
import { SectionTwo } from "./components/SectionTwo";
import { AboutSection } from "./components/AboutSection";
import { FavoriteProjects } from "./components/FavoriteProjects";


export default function Home() {
  return (
    <div>
        <Hero />
        <AboutSection />
        <div className="w-full bg-black">
          <FavoriteProjects />
        </div>
        <SectionTwo />
    </div>
  );
}

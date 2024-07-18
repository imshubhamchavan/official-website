import { Hero } from "./components/Hero";
import { SectionTwo } from "./components/SectionTwo";
import { AboutSection } from "./components/AboutSection";
import { FavoriteProjects } from "./components/FavoriteProjects";
import { Skills } from "./components/skills";
import { SocialMedia } from "./components/SocialMedia";






export default function Home() {
  return (
    <div >
        <Hero />
        <Skills/>
        <div className="w-full bg-black">
          <FavoriteProjects />
        </div>
        <SocialMedia/>
    </div>
  );
}

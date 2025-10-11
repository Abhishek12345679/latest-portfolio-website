import { mondwest } from "../../assets/fonts";
import SkillsMarquee from "./components/skills-marquee";

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <div>
        <h1
          className={`text-[70px] ${mondwest.className} font-normal mb-12 leading-20 w-[50%] p-20`}
        >
          Design. Code. Strategy. Crafted into solutions.
        </h1>
      </div>
      <h2 className={`text-4xl ${mondwest.className}`}>Technologies We Use</h2>
      <SkillsMarquee />
    </div>
  );
}

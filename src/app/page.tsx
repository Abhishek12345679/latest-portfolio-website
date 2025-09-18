import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Skills</h1>
      <div className="skills-marquee-wrapper">
        <div className="skill-item item1">
          <Image src="/next.svg" width={100} height={100} alt="NextJS Logo" />
        </div>
        <div className="skill-item item2">
          <Image
            src="/tailwindcss-logotype.svg"
            width={120}
            height={120}
            alt="Tailwind Logo"
          />
        </div>
        <div className="skill-item item3">
          <Image
            src="/ts-lettermark-blue.svg"
            width={100}
            height={100}
            alt="Typescript Logo"
          />
        </div>
        <div className="skill-item item4">
          <Image
            src="/flutter.svg"
            width={100}
            height={100}
            alt="Flutter Logo"
          />
        </div>
        <div className="skill-item item5">
          <Image src="/react.svg" width={50} height={50} alt="React Logo" />
        </div>
        <div className="skill-item item6 flex-col">
          {/* <Image
            src="/react.svg"
            width={50}
            height={50}
            alt="React Native Logo"
          /> */}
          <p className="text-[#6187fb] text-bold font-sans">React Native</p>
        </div>
        <div className="skill-item item7">
          <Image
            src="/nodejsDark.svg"
            width={100}
            height={100}
            alt="NodeJS Logo"
          />
        </div>
        <div className="skill-item item8">
          <Image src="/aws.svg" width={70} height={70} alt="AWS Logo" />
        </div>
      </div>
    </div>
  );
}

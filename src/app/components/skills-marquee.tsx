import Image from "next/image";

export default function SkillsMarquee() {
  return (
    <div className="skills-marquee-wrapper">
      <div className="skill-item item1">
        <Image
          src="skill-logos/next.svg"
          width={100}
          height={100}
          alt="NextJS Logo"
        />
      </div>
      <div className="skill-item item2">
        <Image
          src="skill-logos/tailwindcss-logotype.svg"
          width={120}
          height={120}
          alt="Tailwind Logo"
        />
      </div>
      <div className="skill-item item3">
        <Image
          src="skill-logos/ts-lettermark-blue.svg"
          width={100}
          height={100}
          alt="Typescript Logo"
        />
      </div>
      <div className="skill-item item4">
        <Image
          src="skill-logos/flutter.svg"
          width={100}
          height={100}
          alt="Flutter Logo"
        />
      </div>
      <div className="skill-item item5">
        <Image
          src="skill-logos/react.svg"
          width={50}
          height={50}
          alt="React Logo"
        />
      </div>

      <div className="skill-item item6">
        <Image
          src="skill-logos/nodejsDark.svg"
          width={100}
          height={100}
          alt="NodeJS Logo"
        />
      </div>
      <div className="skill-item item7">
        <Image
          src="skill-logos/aws.svg"
          width={70}
          height={70}
          alt="AWS Logo"
        />
      </div>
    </div>
  );
}

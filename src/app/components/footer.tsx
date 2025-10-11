import Image from "next/image";
import { mondwest } from "../../../assets/fonts";

export default function Footer() {
  return (
    <footer className="flex mx-auto px-10 flex-col items-center mt-[100px] border-t-[#dde3dd] border-t">
      <div className="flex flex-col max-w-[640px] items-center mt-20">
        <h2
          className={`text-[70px] ${mondwest.className} font-normal mb-12 leading-20`}
        >
          Design. Code. Strategy. Crafted into solutions.
        </h2>
        <Image
          alt="North Bengal"
          width={300}
          height={173}
          src="/northbengal-postcard2.png"
        />
      </div>
      <div className="flex justify-between w-full text-xl mt-20 ">
        <ul className="flex flex-col gap-y-2">
          <h3 className="text-[14px]">contact</h3>
          <li>
            <a href="mailto:sah755147@gmail.com">Send us an email</a>
          </li>
          <li>
            <a href="tel:+919800388975">Call us @ +919800388975</a>
          </li>
        </ul>
        <div>
          <a href="https://maps.app.goo.gl/KkzMFh3tmEFdhZtr8">
            <h3 className="text-[14px]">location</h3>
            <p>Ethelbari, Alipurduar, 735204</p>
            <p>West Bengal, India</p>
          </a>
        </div>
      </div>
      <div className="w-full flex justify-between items-center text-sm text-gray-700 mt-4 mb-4">
        <p>Copyright © 2025 Abhishek Sah</p>
        <div className="flex">
          <a
            href="https://www.linkedin.com/in/abhisheksahdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-gray-200 hover:bg-secondary items-center justify-center flex"
          >
            <Image
              alt=""
              width={15}
              height={15}
              src="/social-icons/linkedin.svg"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

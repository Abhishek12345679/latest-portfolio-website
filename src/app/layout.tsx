"use client";

import "./globals.css";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";

import localFont from "next/font/local";
import Image from "next/image";
import HeaderLink from "./components/header-link";

const mondwest = localFont({
  src: [
    {
      path: "../../public/fonts/ppmondwest-regular.otf",
      style: "normal",
    },
  ],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

interface headerLink {
  to: string;
  label: string;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerLinks: headerLink[] = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Work",
      to: "/work",
    },
    {
      label: "About",
      to: "/about",
    },
    {
      label: "Contact",
      to: "/contact",
    },
  ];

  useEffect(() => {
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const circle = { x: 0, y: 0 };
    const speed = 0.25;

    if (document) {
      const circleCursor = document.querySelector(
        ".circle-cursor"
      ) as HTMLElement;

      window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      });

      const tick = () => {
        // to give that catching up to the arrow/cursor look

        circle.x += (mouse.x - circle.x) * speed;
        circle.y += (mouse.y - circle.y) * speed;

        const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

        circleCursor.style.transform = translateTransform;

        requestAnimationFrame(tick);
      };
      tick();
    }

    return () => window.removeEventListener("mousemove", () => {});
  }, []);

  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="circle-cursor"></div>

        <header className="flex p-4 justify-between">
          <div className={`flex-col text-[16px]`}>
            <Link href="/">
              <p className="font-semibold">SAH</p>
              <p>ABHISHEK</p>
            </Link>
          </div>
          <nav className="ml-4">
            <ul className="flex space-x-6">
              {headerLinks.map(({ label, to }) => (
                <HeaderLink label={label} to={to} />
              ))}
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
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
                className="w-9 h-9 rounded-full border border-gray-200 hover:bg-gray-400 items-center justify-center flex"
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
      </body>
    </html>
  );
}

"use client";

import "./globals.css";
import { useEffect } from "react";
import { Azeret_Mono } from "next/font/google";
import Link from "next/link";

const AzeretMono = Azeret_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mouse = { x: 0, y: 0 };
  const circle = { x: 0, y: 0 };
  const speed = 0.25;

  useEffect(() => {
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
    <html lang="en" className={AzeretMono.className}>
      <body>
        <div className="circle-cursor"></div>
        <header className="flex p-4 justify-between">
          <div className="flex-col">
            <p>GODLESS_COMPLEX</p>
          </div>
          <nav className="ml-4">
            <ul className="flex space-x-6">
              <li>
                <Link href="#">[Home]</Link>
              </li>
              <li>
                <Link href="#">[Work]</Link>
              </li>
              <li>
                <Link href="#">[About Me]</Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1Hr_Cm2ABd7nt6M9nddPJ5eDQ2KYvuMOl/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Resume]
                </a>
              </li>
              <li>
                <Link href="#">[Contact Us]</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}

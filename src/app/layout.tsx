"use client";

import "./globals.css";
import { useEffect } from "react";
import { Inter } from "next/font/google";

import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // to handle the circle following the mouse
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const circle = { x: 0, y: 0 };
    const speed = 0.27;

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
        <Header />
        <div className="circle-cursor"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}

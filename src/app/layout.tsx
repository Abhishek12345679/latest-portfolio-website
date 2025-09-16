import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhishek",
  description: "We can do it!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="flex p-4 justify-between">
          <div className="flex-col">
            <p className="font-bold font-sans">SAH</p>
            <p className="font-bold font-sans">ABHISHEK</p>
          </div>
          <nav className="ml-4">
            <ul className="flex space-x-6">
              <li>[ Home ]</li>
              <li>[ Work ]</li>
              <li>[ About Me ]</li>
              <li>[ Contact Us ]</li>
            </ul>
          </nav>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}

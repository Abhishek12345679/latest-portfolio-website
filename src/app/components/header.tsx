import Link from "next/link";
import HeaderLink from "./header-link";
import { ExternalLink } from "lucide-react";

interface headerLink {
  to: string;
  label: string;
}

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

export default function Header() {
  return (
    <header className="flex p-4 justify-between">
      <div className={`flex-col text-[16px]`}>
        <Link href="/">
          <p className="font-semibold">SAH</p>
          <p>ABHISHEK</p>
        </Link>
      </div>
      <nav className="ml-4">
        <ul className="flex space-x-6">
          {headerLinks.map(({ label, to }, index) => (
            <HeaderLink key={index} label={label} to={to} />
          ))}
          <li className="flex items-center">
            <a
              className="mr-1"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <ExternalLink size={14} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

"use client";

import LetterSwapPingPong from "@/components/fancy/text/letter-swap-pingpong-anim";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type HeaderLinkProps = {
  label: string;
  staggerFrom?: number | "center" | "first" | "last" | undefined;
  to: string;
};

export default function HeaderLink({
  label,
  staggerFrom = "first",
  to,
}: HeaderLinkProps) {
  const pathName = usePathname();

  const isActive = to === pathName || (pathName.startsWith(to) && to !== "/");

  return (
    <li>
      <Link href={to}>
        <LetterSwapPingPong
          label={label}
          staggerFrom={staggerFrom}
          reverse={false}
          className={
            isActive
              ? "font-bold hover:text-gray-600"
              : "font-normal hover:text-gray-600"
          }
        />
      </Link>
    </li>
  );
}

import LetterSwapPingPong from "@/components/fancy/text/letter-swap-pingpong-anim";
import Link from "next/link";

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
  return (
    <li>
      <Link href={to}>
        <LetterSwapPingPong
          label={label}
          staggerFrom={staggerFrom}
          reverse={false}
          className="font-normal hover:text-gray-600"
        />
      </Link>
    </li>
  );
}

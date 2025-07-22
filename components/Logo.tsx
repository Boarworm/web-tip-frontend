import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  color?: "dark" | "light";
  logoSrc?: string;
  title?: string;
  text?: string;
  showText?: boolean;
}

export default function Logo({
  className = "",
  color = "light",
  logoSrc = "/images/logo-light.svg",
  title = "WTT",
  text = "WTT",
  showText = true,
}: Props) {
  const textColorClass = color === "dark" ? "text-gray-900" : "text-white";

  return (
    <div className={cn("flex", className)}>
      <Link href="/" className="inline-flex items-center">
        <Image
          src={logoSrc}
          alt={title}
          title={title}
          width={46}
          height={46}
          className="w-[35px] md:w-[46px] h-auto"
          priority
        />
        {showText && (
          <span
            className={`relative ${textColorClass} leading-none font-light text-4xl ml-3 lg:text-5xl transition-colors duration-200`}
          >
            {text}
          </span>
        )}
      </Link>
    </div>
  );
}

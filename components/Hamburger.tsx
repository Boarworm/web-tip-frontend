import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface HamburgerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
  isOpen?: boolean;
}

const HamburgerButton = ({
  className,
  onClick,
  isOpen: controlledIsOpen,
  ...props
}: HamburgerButtonProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  // Use controlled state if provided, otherwise use internal state
  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleClick = () => {
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(!internalIsOpen);
    }
    onClick?.();
  };

  return (
    <button
      className={cn(
        "relative w-8 h-8 flex items-center justify-center cursor-pointer",
        className
      )}
      onClick={handleClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      {...props}
    >
      <div className="h-full w-full flex items-center justify-center">
        <div
          className={cn(
            "absolute transform transition duration-500 ease-in-out bg-white h-0.5 w-full",
            isOpen ? "rotate-45 translate-y-0" : "-translate-y-3"
          )}
        />
        <div
          className={cn(
            "absolute transform transition duration-500 ease-in-out bg-white h-0.5 w-full",
            isOpen ? "opacity-0" : "opacity-100"
          )}
        />
        <div
          className={cn(
            "absolute transform transition duration-500 ease-in-out bg-white h-0.5 w-full",
            isOpen ? "-rotate-45 translate-y-0" : "translate-y-3"
          )}
        />
      </div>
    </button>
  );
};

export default HamburgerButton;

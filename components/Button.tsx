import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonStyles = cva(
  "relative rounded-sm text-center cursor-pointer font-bold uppercase overflow-hidden transition-all duration-300 group",
  {
    variants: {
      variant: {
        default: "",
        gradient: "",
      },
      color: {
        light: "",
        dark: "",
      },
      size: {
        sm: "py-2 px-6 text-sm",
        md: "py-3 px-8 text-base",
        lg: "py-4 px-10 text-lg",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        color: "light",
        class: "bg-white text-brand-primary-500 hover:text-white",
      },
      {
        variant: "default",
        color: "dark",
        class: "bg-neutral-800 text-white hover:text-brand-primary-500",
      },
      {
        variant: "gradient",
        color: "light",
        class:
          "bg-gradient-to-r from-brand-primary-500 to-purple-600 text-white hover:text-white",
      },
      {
        variant: "gradient",
        color: "dark",
        class:
          "bg-gradient-to-r from-neutral-800 to-neutral-900 text-white hover:text-brand-primary-500",
      },
    ],
    defaultVariants: {
      variant: "default",
      color: "light",
      size: "md",
    },
  }
);

const backgroundStyles = cva(
  "absolute w-full h-0 z-10 top-1/2 left-1/2 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 rotate-45 group-hover:h-[250%] group-hover:opacity-100",
  {
    variants: {
      variant: {
        default: "",
        gradient: "",
      },
      color: {
        light: "",
        dark: "",
      },
    },
    compoundVariants: [
      { variant: "default", color: "light", class: "bg-brand-primary-500" },
      { variant: "default", color: "dark", class: "bg-white" },
      {
        variant: "gradient",
        color: "light",
        class: "bg-gradient-to-r from-purple-600 to-brand-primary-500",
      },
      {
        variant: "gradient",
        color: "dark",
        class: "bg-gradient-to-r from-neutral-900 to-neutral-800",
      },
    ],
    defaultVariants: {
      variant: "default",
      color: "light",
    },
  }
);

interface Props {
  variant?: "default" | "gradient";
  color?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  as?: React.ElementType;
  children?: React.ReactNode;
  href?: string;
  [key: string]: any;
}

const Button: React.FC<Props> = ({
  as: Tag = "button",
  variant,
  color,
  size,
  className,
  children,
  href,
  ...props
}) => {
  if (href) {
    Tag = Link;
  }

  return (
    <Tag
      className={cn(buttonStyles({ variant, color, size }), className)}
      href={href}
      {...props}
    >
      <span className="relative z-20 transition-colors duration-300">
        {children}
      </span>
      <span className={cn(backgroundStyles({ variant, color }))} />
    </Tag>
  );
};

export default Button;

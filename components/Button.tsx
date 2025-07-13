import { cva, VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonStyles = cva(
  "relative cursor-pointer font-bold uppercase overflow-hidden border-2 transition-all duration-300 group",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        filled: "bg-white text-brand-primary-500 border-white",
        outline: "bg-transparent border-white text-white",
      },
      size: {
        sm: "py-2 px-6 text-sm",
        md: "py-3 px-8 text-base",
        lg: "py-4 px-10 text-lg",
      },
      color: {
        white: "border-white text-white",
        primary: "border-brand-primary-500 text-brand-primary-500",
        dark: "border-neutral-800 text-neutral-800",
      },
    },
    compoundVariants: [
      { variant: "outline", color: "white", class: "border-white text-white hover:text-brand-primary-500" },
      {
        variant: "outline",
        color: "primary",
        class: "border-brand-primary-500 text-brand-primary-500 hover:text-white"
      },
      { variant: "outline", color: "dark", class: "border-neutral-800 text-neutral-800 hover:text-white" },
      { variant: "filled", color: "white", class: "bg-white text-brand-primary-500 border-white" },
      { variant: "filled", color: "primary", class: "bg-brand-primary-500 text-white border-brand-primary-500" },
      { variant: "filled", color: "dark", class: "bg-neutral-800 text-white border-neutral-800" },
    ],
    defaultVariants: {
      variant: "outline",
      size: "md",
      color: "white",
    },
  }
)

const backgroundStyles = cva(
  "absolute w-full h-0 z-10 top-1/2 left-1/2 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 rotate-45 group-hover:h-[250%] group-hover:opacity-100",
  {
    variants: {
      variant: {
        default: "bg-white",
        filled: "bg-brand-primary-500",
        outline: "bg-white",
      },
      color: {
        white: "bg-white",
        primary: "bg-brand-primary-500",
        dark: "bg-neutral-800",
      },
    },
    compoundVariants: [
      { variant: "outline", color: "white", class: "bg-white" },
      { variant: "outline", color: "primary", class: "bg-brand-primary-500" },
      { variant: "outline", color: "dark", class: "bg-neutral-800" },
    ],
    defaultVariants: {
      variant: "outline",
      color: "white",
    },
  }
)

type ButtonProps = {
  as?: React.ElementType;
  className?: string;
} & VariantProps<typeof buttonStyles> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (
  {
    as: Tag = "button",
    variant,
    color,
    size,
    className,
    children,
    ...props
  }) => {
  return (
    <Tag
      className={cn(buttonStyles({ variant, color, size }), className)}
      {...props}
    >
      <span className="relative z-20 transition-colors duration-300">{children}</span>
      <span className={cn(backgroundStyles({ variant, color }))}/>
    </Tag>
  )
}

export default Button

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingStyles = cva("font-sans font-bold leading-tight", {
  variants: {
    variant: {
      default: "",
      gradient: "bg-clip-text !text-transparent bg-gradient-to-b",
    },
    size: {
      h1: "text-4xl md:text-7xl",
      h2: "text-3xl md:text-6xl",
      h3: "text-2xl md:text-5xl",
      h4: "text-xl md:text-4xl",
      h5: "text-lg md:text-3xl",
      h6: "text-md md:text-2xl",
    },
    color: {
      dark: "text-neutral",
      light: "text-white",
      primary: "text-brand-primary-500",
    },
  },
  compoundVariants: [
    {
      variant: "gradient",
      color: "dark",
      class: "from-neutral-900 to-neutral-700",
    },
    {
      variant: "gradient",
      color: "light",
      class: "from-neutral-100 to-neutral-300",
    },
    {
      variant: "gradient",
      color: "primary",
      class: "from-brand-primary-700 to-brand-primary-500",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "h1",
    color: "dark",
  },
});

type HeadingProps = {
  as?: React.ElementType;
  className?: string;
} & VariantProps<typeof headingStyles> &
  React.HTMLAttributes<HTMLElement>;

const Heading: React.FC<HeadingProps> = ({
  as: Tag = "h2",
  variant,
  color,
  size,
  className,
  children,
  ...props
}) => {
  return (
    <Tag
      className={cn(headingStyles({ variant, color, size }), className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;

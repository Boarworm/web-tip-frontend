import React from "react";
import { cn } from "@/lib/utils";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";

interface HeadingProps {
    tag?: Tag;
    variant?: "default";
    color?: "dark" | "light" | "primary";
    size?: Tag;
    text: string;
    attributes?: Record<string, string>;
    cssClasses?: string;
}

const variants = {
    default: {
        baseBlockClasses: "font-secondary leading-tight",
        colors: {
            dark: { colorBlockClasses: "text-neutral-darker" },
            light: { colorBlockClasses: "text-white" },
            primary: { colorBlockClasses: "text-primary" },
        },
        sizes: {
            h1: { sizeBlockClasses: "text-h1 lg:text-h1-lg xl:text-h1-xl" },
            h2: { sizeBlockClasses: "text-h2 lg:text-h2-lg xl:text-h2-xl" },
            h3: { sizeBlockClasses: "text-h3 lg:text-h3-lg xl:text-h3-xl" },
            h4: { sizeBlockClasses: "text-h4 lg:text-h4-lg xl:text-h4-xl" },
            h5: { sizeBlockClasses: "text-h5 lg:text-h5-lg xl:text-h5-xl" },
            h6: { sizeBlockClasses: "text-h6 lg:text-h6-lg xl:text-h6-xl" },
        },
    },
};

const Heading: React.FC<HeadingProps> = ({
                                             tag = "div",
                                             variant = "default",
                                             color = "dark",
                                             size = "h2",
                                             text,
                                             cssClasses = "",
                                             attributes = {},
                                         }) => {
    const Tag = tag;


    return (
        <Tag
            data-block="Heading"
            {...attributes}
        >
            {text}
        </Tag>
    );
};

export default Heading;

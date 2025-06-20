import React, {ReactNode, MouseEventHandler} from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (
    {
        children,
        onClick,
        className = "",
        type = "button",
        disabled = false,
    }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`relative inline-flex h-12 overflow-hidden rounded-sm p-0.5 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${
                disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            } ${className}`}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
            <span className="inline-flex h-full w-full items-center justify-center bg-slate-950 px-6 py-2 text-md font-bold text-white backdrop-blur-3xl select-none">
        {children}
      </span>
        </button>
    );
};

export default Button;

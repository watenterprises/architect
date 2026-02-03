import { cn } from "@/lib/utils";
import React from "react";
import { LinkProps } from "next/link";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg";
    href?: string;
    className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
        const variants = {
            primary: "bg-charcoal-900 text-white hover:bg-stone-700 active:bg-stone-800",
            outline: "border border-charcoal-200 text-charcoal-900 hover:bg-stone-50 hover:border-charcoal-400",
            ghost: "text-charcoal-900 hover:bg-stone-100",
            link: "text-charcoal-900 underline-offset-4 hover:underline p-0 h-auto",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        const styles = cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-none transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-charcoal-900 disabled:pointer-events-none disabled:opacity-50 font-medium tracking-wide",
            variants[variant],
            variant !== "link" && sizes[size],
            className
        );

        if (href) {
            return (
                <Link href={href} className={styles}>
                    {children}
                </Link>
            );
        }

        return (
            <button className={styles} ref={ref} {...props}>
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };

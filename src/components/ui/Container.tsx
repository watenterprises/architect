import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string; // Explicitly allow className to override or extend styles
}

export function Container({ children, className, ...props }: ContainerProps) {
    return (
        <div
            className={cn(
                "max-w-[1400px] mx-auto px-6 md:px-12 w-full",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

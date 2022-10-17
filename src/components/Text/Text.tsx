import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Text({ size = "md", children, asChild, className }: TextProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx(
        "text-gray-100 font-sans",
        {
          "text-2xs lg:text-xs": size === "sm",
          "text-xs lg:text-sm": size === "md",
          "text-sm lg:text-md": size === "lg",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}

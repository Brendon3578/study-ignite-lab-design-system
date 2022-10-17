import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading({
  size = "md",
  children,
  asChild,
  className,
}: HeadingProps) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={clsx(
        "text-gray-100 font-sans font-bold",
        {
          "text-md lg:text-lg": size === "sm",
          "text-lg lg:text-xl": size === "md",
          "text-xl lg:text-2xl": size === "lg",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}

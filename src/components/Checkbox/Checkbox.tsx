import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

import { clsx } from "clsx";
import { ReactNode } from "react";

export interface CheckboxProps {
  children: ReactNode;
}

export function Checkbox({ children }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className="w-6 h-6 p-0.5 bg-gray-800 rounded">
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500"></Check>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

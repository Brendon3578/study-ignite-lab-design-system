import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className="w-5 h-5 lg:w-6 lg:h-6 p-0.5 bg-gray-800 rounded"
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check
          weight="bold"
          className="h-4 w-4 lg:h-5 lg:w-5 text-cyan-500"
        ></Check>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

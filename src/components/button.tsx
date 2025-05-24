import { Slot } from "@radix-ui/react-slot";
import { cn } from "~/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const Button = ({ children, className, disabled = false, asChild, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      type="button"
      className={cn(
        "inline-flex items-center justify-center border-4 border-black bg-pale-600 text-white text-xl",
        "px-6 py-3 sm:px-8 sm:py-4",
        "shadow-[inset_-0.4rem_-0.4rem_0_#1c1d30,inset_0.4rem_0.4rem_0_#444a71]",
        !disabled && "hover:border-gold-500 hover:text-gold-400",
        disabled && "cursor-not-allowed opacity-85",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};

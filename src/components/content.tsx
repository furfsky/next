import { cva } from "class-variance-authority";
import { cn } from "~/lib/utils";

const contentVariants = cva("ml-0 w-full px-4 py-8 md:ml-[40%] md:w-3/5 md:px-18 md:py-0", {
  variants: {
    layout: {
      regular: "pt-24",
      centered: "flex min-h-screen flex-col items-center justify-center",
    },
  },
  defaultVariants: {
    layout: "regular",
  },
});

type ContentProps = {
  children: React.ReactNode;
  layout?: "regular" | "centered";
  className?: string;
};

export const Content = ({ children, layout = "regular", className }: ContentProps) => (
  <section className={contentVariants({ layout, className })}>
    {layout === "regular" ? <div className={cn(layout === "regular" && "pt-24")}>{children}</div> : children}
  </section>
);

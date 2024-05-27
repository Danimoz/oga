
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/utils";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "oga-rounded-lg oga-border oga-bg-card oga-text-card-foreground oga-shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"
export { Card }
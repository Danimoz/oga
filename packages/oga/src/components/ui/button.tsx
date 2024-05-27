import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../utils/utils"

const buttonVariants = cva(
  "oga-inline-flex oga-items-center oga-justify-center oga-whitespace-nowrap oga-rounded-md oga-text-sm oga-font-medium oga-ring-offset-background oga-transition-colors focus-visible:oga-outline-none focus-visible:oga-ring-2 focus-visible:oga-ring-ring focus-visible:oga-ring-offset-2 disabled:oga-pointer-events-none disabled:oga-opacity-50",
  {
    variants: {
      variant: {
        default: "oga-bg-primary oga-text-primary-foreground hover:oga-bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "oga-border oga-border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary oga-underline-offset-4 hover:oga-underline",
      },
      size: {
        default: "oga-h-10 oga-px-4 oga-py-2",
        sm: "oga-h-9 oga-px-3",
        lg: "oga-h-11 oga-px-8",
        icon: "oga-h-10 oga-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
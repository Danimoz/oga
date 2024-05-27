import * as React from "react"

import { cn } from "../../utils/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "oga-flex oga-h-10 oga-w-full oga-rounded-md oga-border oga-border-input oga-bg-background oga-px-3 oga-py-2 oga-text-sm oga-ring-offset-background file:oga-border-0 file:oga-bg-transparent file:oga-text-sm file:oga-font-medium placeholder:oga-text-muted-foreground focus-visible:oga-outline-none focus-visible:oga-ring-2 focus-visible:oga-ring-ring focus-visible:oga-ring-offset-2 disabled:oga-cursor-not-allowed disabled:oga-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
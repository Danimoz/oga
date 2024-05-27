import * as React from "react"

import { cn } from "../../utils/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "oga-flex oga-min-h-[80px] oga-w-full oga-rounded-md oga-border oga-border-input oga-bg-background oga-px-3 oga-py-2 oga-text-sm oga-ring-offset-background placeholder:oga-text-muted-foreground focus-visible:oga-outline-none focus-visible:oga-ring-2 focus-visible:oga-ring-ring focus-visible:oga-ring-offset-2 disabled:oga-cursor-not-allowed disabled:oga-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }

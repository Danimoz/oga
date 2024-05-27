"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "../../utils/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "oga-fixed oga-inset-0 oga-z-50 oga-bg-black/80  data-[state=open]:oga-animate-in data-[state=closed]:oga-animate-out data-[state=closed]:oga-fade-out-0 data-[state=open]:oga-fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "oga-fixed oga-left-[50%] oga-top-[50%] oga-z-50 oga-grid oga-w-full oga-max-w-lg oga-translate-x-[-50%] oga-translate-y-[-50%] oga-gap-4 oga-border oga-bg-background oga-p-6 oga-shadow-lg oga-duration-200 data-[state=open]:oga-animate-in data-[state=closed]:oga-animate-out data-[state=closed]:oga-fade-out-0 data-[state=open]:oga-fade-in-0 data-[state=closed]:oga-zoom-out-95 data-[state=open]:oga-zoom-in-95 data-[state=closed]:oga-slide-out-to-left-1/2 data-[state=closed]:oga-slide-out-to-top-[48%] data-[state=open]:oga-slide-in-from-left-1/2 data-[state=open]:oga-slide-in-from-top-[48%] sm:oga-rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="oga-absolute oga-right-4 oga-top-4 oga-rounded-sm oga-opacity-70 oga-ring-offset-background oga-transition-opacity hover:oga-opacity-100 focus:oga-outline-none focus:oga-ring-2 focus:oga-ring-ring focus:oga-ring-offset-2 disabled:oga-pointer-events-none data-[state=open]:oga-bg-accent data-[state=open]:oga-text-muted-foreground">
        <X className="oga-h-4 oga-w-4" />
        <span className="oga-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "oga-flex oga-flex-col oga-space-y-1.5 oga-text-center sm:oga-text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "oga-flex oga-flex-col-reverse sm:oga-flex-row sm:oga-justify-end sm:oga-space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "oga-text-lg oga-font-semibold oga-leading-none oga-tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("oga-text-sm oga-text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80 cursor-pointer",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 cursor-pointer",
        outline: "text-foreground cursor-pointer",
        avaible: "border-transparent bg-green-600 hover:bg-green-800 cursor-pointer",
        unvaible: "border-transparent bg-red-600 hover:bg-red-800 cursor-pointer"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

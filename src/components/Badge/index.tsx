import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { Text } from "@/components"

export const BadgeVariants = cva("inline-flex items-center justify-center rounded-full", {
  variants: {
    variant: {
      primary: "bg-green-light",
      secondary: "bg-pink-light"
    },
    size: {
      sm: "py-0.5 px-2",
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "sm"
  }
})

export const BadgeTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-green-dark",
      secondary: "text-pink-dark"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})

interface BadgeProps extends ComponentProps<"div">, VariantProps<typeof BadgeVariants> {}

export default function Badge({ variant, size, className, children, ...props }: BadgeProps) {
  return (
    <div className={BadgeVariants({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold" className={BadgeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  )
}
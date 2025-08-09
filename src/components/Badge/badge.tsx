import { cva, cx, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { Skeleton, Text } from "@/components"

export const BadgeVariants = cva("inline-flex items-center justify-center rounded-full", {
  variants: {
    variant: {
      none: "",
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
      none: "",
      primary: "text-green-dark",
      secondary: "text-pink-dark"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})

export const BadgeSkeletonVariants = cva("", {
  variants: {
    size: {
      sm: "h-6 w-6"
    }
  },
  defaultVariants: {
    size: "sm"
  }
})

interface BadgeProps extends ComponentProps<"div">, VariantProps<typeof BadgeVariants> {
  loading?: boolean;
}

export default function Badge({ variant, size, className, children, loading, ...props }: BadgeProps) {

  if (loading) {
    return (
      <Skeleton rounded="full" className={cx(BadgeVariants({ variant: "none" }), BadgeSkeletonVariants({ size }), className)} />
    )
  }

  return (
    <div className={BadgeVariants({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold" className={BadgeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  )
}
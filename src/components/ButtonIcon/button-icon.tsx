import type { ComponentProps } from "react"
import { Icon, Skeleton } from ".."
import { cva, type VariantProps } from "class-variance-authority"

export const ButtonIconVariants = cva("inline-flex items-center justify-center cursor-pointer transition group", {
  variants: {
    variant: {
      none: "",
      primary: "bg-green-base hover:bg-green-dark",
      secondary: "bg-gray-200 hover:bg-pink-base",
      tertiary: "bg-transparent hover:bg-gray-200"
    },
    size: {
      sm: "w-6 h-6 rounded"
    },
    disabled: {
      true: "opacity-50 pointer-events-none"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
    disabled: false
  }
})

export const buttonIconIconVariants = cva("transition", {
  variants: {
    variant: {
      none: "",
      primary: "fill-white",
      secondary: "fill-pink-base group-hover:fill-white",
      tertiary: "fill-gray-300 group-hover:fill-gray-400"
    },
    size: {
      sm: "w-4 h-4"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "sm"
  }
})

interface ButtonIconProps extends Omit<ComponentProps<"button">, "disabled" | "size">, VariantProps<typeof ButtonIconVariants> {
  icon: ComponentProps<typeof Icon>["svg"],
  loading?: boolean
}

export default function ButtonIcon({ variant, size, disabled, className, icon, loading, ...props }: ButtonIconProps) {

  if (loading) {
    return <Skeleton rounded="sm" className={ButtonIconVariants({ variant: "none", size, className })} />
  }

  return (
    <button className={ButtonIconVariants({ variant, size, disabled, className })} {...props}>
      <Icon svg={icon} className={buttonIconIconVariants({ variant, size })} />
    </button>
  )
}
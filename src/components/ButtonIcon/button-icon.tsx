import type { ComponentProps } from "react"
import { Icon, Skeleton } from ".."
import { cva, type VariantProps } from "class-variance-authority"
import SpinnerIcon from "@/assets/icons/spinner.svg?react"

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
    },
    handling: {
      true: "pointer-events-none"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
    disabled: false,
    handling: false
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
  loading?: boolean,
  handling?: boolean
}

export default function ButtonIcon({ variant, size, disabled, className, icon, loading, handling, ...props }: ButtonIconProps) {

  if (loading) {
    return <Skeleton rounded="sm" className={ButtonIconVariants({ variant: "none", size, className })} />
  }

  return (
    <button className={ButtonIconVariants({ variant, size, disabled, className, handling })} {...props}>
      <Icon svg={handling ? SpinnerIcon : icon}
        animate={handling}
        className={buttonIconIconVariants({ variant, size })}
      />
    </button>
  )
}
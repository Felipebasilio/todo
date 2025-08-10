import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { Icon, Text } from "@/components"
import SpinnerIcon from "@/assets/icons/spinner.svg?react"

export const ButtonVariants = cva(`
  flex items-center justify-center 
  cursor-pointer transition-all 
  rounded-lg group gap-2`, {
  variants: {
    variant: {
      primary: "bg-green-200 hover:bg-pink-light"
    },
    size: {
      md: "h-14 py-4 px-5",
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
    size: "md",
    disabled: false,
    handling: false
  }
})

export const ButtonTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-400"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})

export const ButtonIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-pink-base"
    },
    size: {
      md: "w-5 h-5"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
})

interface ButtonProps extends Omit<ComponentProps<"button">, "disabled" | "size">, VariantProps<typeof ButtonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"],
  handling?: boolean
}

export default function Button({ variant, size, disabled, className, children, icon, handling, ...props }: ButtonProps) {
  return (
    <button className={ButtonVariants({ variant, size, disabled, className, handling })} {...props}>
      {icon && <Icon svg={handling ? SpinnerIcon : icon}
        animate={handling}
        className={ButtonIconVariants({ variant, size })}
      />}
      <Text variant="body-md-bold" className={ButtonTextVariants({ variant })}>{children}</Text>
    </button>
  )
}
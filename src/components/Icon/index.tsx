import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

export const IconVariants = cva("", {
  variants: {
    animate: {
      true: "animate-spin",
      false: ""
    }
  },
  defaultVariants: {
    animate: false
  }
})

interface IconProps extends ComponentProps<"svg">, VariantProps<typeof IconVariants> {
  svg: React.FC<ComponentProps<"svg">>
}

export default function Icon({ svg: SvgComponent, animate, className, ...props }: IconProps) {
  return (
    <SvgComponent {...props} className={IconVariants({ animate, className })} />
  )
}
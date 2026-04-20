import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const buttonVariants = cva('al-btn', {
  variants: {
    variant: {
      primary: 'al-btn-primary',
      secondary: 'al-btn-secondary',
      ghost: 'al-btn-ghost',
      danger: 'al-btn-danger',
    },
    size: {
      sm: 'al-btn-sm',
      md: '',
      lg: 'al-btn-lg',
    },
  },
  defaultVariants: {
    variant: 'secondary',
    size: 'md',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }

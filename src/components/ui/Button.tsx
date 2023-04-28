import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva('inline-flex items-center justify-center rounded-[70px] text-xl uppercase font-semibold transition-colors', {
    variants: {
        variant: {
            default: 'bg-[#8181D6] text-white hover:bg-[#0C0E3F] hover:ring-offset-2 hover:ring-1',
            nofill: 'text-white hover:bg-[#8181D6] ring-offset-2 ring-1 ring-[#86CFD0]',
            dark: 'bg-[#000000] text-white hover:bg-[#FFF] hover:text-black'
        },
        size: {
            default: 'h-[55px] px-8 py-2',
            md: 'h-[55px] px-7 py-2',
            sm: 'h-35px px-4 py-1'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, variant, size, ...props}, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        )
    }
)

Button.displayName = 'Button'

export { Button, buttonVariants };
import { HTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils';


const headingVariables = cva('text-white font-bold leading-tight tracking-tight', {
    variants: {
        size: {
            default: 'text-4xl mobile:text-[3.5rem] lg:text-6xl',
            // sm: 'text-2xl sm:text-3xl lg:tetx-4xl',
            lg: 'text-[2.5rem] md:text-5xl lg:text-6xl',
        },
    },
    defaultVariants: {
        size: 'default',
    },
})

interface LargeHeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariables> {}
 
const Heading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(({ className, size, children, ...props}, ref) => {
    return <h1
        ref={ref} 
        {...props} 
        className={cn(headingVariables({ size, className }))}>
            {children}
        </h1>
})

Heading.displayName = 'Heading'
 
export default Heading; 
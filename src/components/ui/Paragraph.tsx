import { HTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils';


const paragraphVariables = cva('max-w-prose text-white', {
    variants: {
        size: {
            default: 'text-base sm:text-lg',
            lg: 'text-base font-semibold sm:text-xl'
        },
    },
    defaultVariants: {
        size: 'default',
    },
})

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphVariables> {}
 
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({ className, size, children, ...props}, ref) => {
    return <p 
        ref={ref} 
        {...props} 
        className={cn(paragraphVariables({ size, className }))}>
            {children}
        </p>
})

Paragraph.displayName = 'Paragraph'
 
export default Paragraph;
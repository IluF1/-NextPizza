import { cva, VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

const TitleStyles = cva('', {
    variants: {
        intent: {
            h1: 'font-extrabold text-2xl',
            h2: 'font-bold text-xl',
            h3: [],
            h4: 'text-sm text-lg',
            h5: [],
            h6: 'text-gray text-sm',
        },
    },

    defaultVariants: {
        intent: 'h1',
    },
})

interface Props
    extends HTMLAttributes<HTMLElement>,
        VariantProps<typeof TitleStyles> {}

export const Title = ({ intent, className, children, ...props }: Props) => {
    const Tag = intent || 'h1'
    return (
        <Tag className={TitleStyles({ intent, className })} {...props}>
            {children}
        </Tag>
    )
}

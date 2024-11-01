import { cva, VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

const ButtonStyles = cva('w-full h-12', {
    variants: {
        intent: {
            default: 'border-orange rounded-xl pointer text-orange border-2',
            outline: '',
        },
    },
    defaultVariants: {
        intent: 'default',
    },
})

interface Props extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonStyles> {
    firstIcon?: string
}

export const Button = ({ children, onClick, intent, firstIcon, className, ...props }: Props) => {
    const buttonClass = `${ButtonStyles({ intent })} ${className ?? ''}`

    return (
        <button className={buttonClass} {...props}>
            {firstIcon && <Image src={firstIcon} alt='icon' className='absolute mt-1 ml-2' />}
            <span className={firstIcon ? '-mr-6' : ''}>{children}</span>
        </button>
    )
}

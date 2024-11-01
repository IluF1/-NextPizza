import { SearchIcon } from '@/app/assets/images'
import { cva, VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

const InputStyles = cva('w-full h-12 rounded-xl', {
    variants: {
        intent: {
            search: ['bg-blue text-gray pl-10'],
            input: ['border rounded-sl pl-4 h-10'],
        },
    },

    defaultVariants: {
        intent: 'input',
    },
})

interface Props extends HTMLAttributes<HTMLInputElement>, VariantProps<typeof InputStyles> {
    placeholder?: string
    value?: string
    type?: string
}

export const Input = ({ intent, onChange, type = 'text', placeholder, className, value, ...props }: Props) => {
    return (
        <div>
            {intent === 'search' && (
                <button className='absolute mt-4 ml-3'>
                    <Image src={SearchIcon} alt='search' />
                </button>
            )}
            <input placeholder={placeholder} value={value} type={type} onChange={onChange} className={InputStyles({ intent, className })} {...props} />
        </div>
    )
}

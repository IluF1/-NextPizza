import { SearchIcon } from '@/app/assets/images'
import { cva, VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

const InputStyles = cva('w-full h-12 border-none rounded-xl', {
    variants: {
        intent: {
            search: ['bg-blue', 'text-gray', 'pl-10'],
            input: [],
        },
    },

    defaultVariants: {
        intent: 'input',
    },
})

interface Props extends HTMLAttributes<HTMLInputElement>, VariantProps<typeof InputStyles> {
    placeholder?: string
    value?: string
}

export const Input = ({ intent, onChange, placeholder, className, value, ...props }: Props) => {
    return (
        <div>
            {intent === 'search' && (
                <button className='absolute mt-4 ml-3'>
                    <Image src={SearchIcon} alt='search' />
                </button>
            )}
            <input
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={InputStyles({ intent, className })}
                {...props}
            />
        </div>
    )
}

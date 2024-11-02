'use client'
import { PlusIcon } from '@/src/assets/images'
import { cva, VariantProps } from 'class-variance-authority'
import { HTMLAttributes, useState } from 'react'
import { Button } from './Button'
import { Title } from './Title'

const pizzaStyles = cva('w-72', {
    variants: {
        intent: {
            default: '',
        },
    },
    defaultVariants: {
        intent: 'default',
    },
})

interface Props extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof pizzaStyles> {
    name: string
    description: string
    price: number
    imageUrl: string
}

export const Pizza = ({ name, description, intent = 'default', className, price, imageUrl, ...props }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const maxWords = 15
    const getDescriptionPreview = (text: string) => {
        const words = text.split(' ')
        return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : text
    }

    return (
        <div className={pizzaStyles({ intent, className })} {...props}>
            <div className='bg-lightOrange w-full h-64 rounded-2xl'>
                <img src={imageUrl} alt={name} />
            </div>
            <Title className='mt-2'>{name}</Title>
            <Title intent='h6' className='w-full mt-2 text-wrap break-all'>
                {isExpanded ? description : getDescriptionPreview(description)}
            </Title>
            <div className='flex justify-between mt-4'>
                <Title>
                    <span className='text-base'>от</span> {price}$
                </Title>
                <div className='w-28'>
                    <Button intent='light' className='h-9' firstIcon={PlusIcon}>
                        Добавить
                    </Button>
                </div>
            </div>
        </div>
    )
}

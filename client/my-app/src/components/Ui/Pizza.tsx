'use client'
import { PlusIcon } from '@/src/assets/images'
import { cva, VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'react'
import { Ingredient } from '../Helpers/interfaces'
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
    ingredients: Ingredient[]
    price: number
    imageUrl: string
}

export const Pizza = ({ name, ingredients, intent, className, price, imageUrl, ...props }: Props) => {
    return (
        <div className={pizzaStyles({ intent, className })} {...props}>
            <div className='bg-lightOrange w-full h-64 rounded-2xl'>
                <img src={imageUrl} alt={name} className=' rounded-full w-full h-full' />
            </div>
            <Title className='mt-9'>{name}</Title>
            <div className=' flex'>
                {ingredients.map((ingredient) => (
                    <Title intent='h6' key={ingredient.id}>
                        {ingredient.name},
                    </Title>
                ))}
            </div>
            <div className='flex justify-between mt-4'>
                <Title>
                    <span className='text-base'>от</span> {price} ₽
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

'use client'
import { getPizzaByNameStore } from '@/src/store/getPizzaByNameStore'
import Link from 'next/link'
import { ChangeEvent, HTMLAttributes, useCallback, useState } from 'react'
import { formatPrice } from '../Helpers/formatPrice'
import { useSearchPizza } from '../Hooks/useSearchPizza'
import { Input } from './Input'
import { Title } from './Title'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const SearchComponent = ({ className, ...props }: Props) => {
    const [search, setSearch] = useState<string>('')
    const searchPizza = useSearchPizza(500)
    const [isActive, setIsActive] = useState<boolean>(false)
    const { pizza } = getPizzaByNameStore()

    const handleSearchChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value
            setSearch(value)
            searchPizza(value)
        },
        [searchPizza]
    )

    return (
        <div className={`block w-1000 relative ${className}`}>
            <div onClick={(e) => e.stopPropagation()} className='relative z-50'>
                <Input
                    placeholder='Поиск пиццы...'
                    intent='search'
                    value={search}
                    onChange={handleSearchChange}
                    onClick={() => setIsActive(true)}
                    type='search'
                />
                {pizza && isActive && (
                    <div className=' block absolute w-full mt-3 bg-white rounded-lg p-3'>
                        {pizza.map((item) => (
                            <Link href={`/product/${item.id}`} key={item.id}>
                                <div
                                    className=' h-9 cursor-pointer flex rounded-sm mb-1 hover:bg-lightOrange pb-2'
                                    onClick={() => setIsActive(false)}
                                >
                                    <img
                                        src={item.imgUrl}
                                        alt={item.name}
                                        className=' rounded-full w-6 h-6 mt-1 ml-1'
                                    />
                                    <Title intent='h3' className=' mt-1 ml-3'>
                                        {item.name}
                                    </Title>
                                    <Title intent='h6' className=' ml-5 mt-2'>
                                        {formatPrice(item.price)}
                                    </Title>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            {isActive && (
                <div
                    {...props}
                    onClick={() => setIsActive(false)}
                    className='fixed inset-0 z-10 bg-black bg-opacity-90'
                />
            )}
        </div>
    )
}

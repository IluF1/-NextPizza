'use client'
import { cva, VariantProps } from 'class-variance-authority'
import { HTMLAttributes, useState } from 'react'

const SelectCategoryMenuStyles = cva('rounded-2xl pl-4 pr-4', {
    variants: {
        intent: {
            default: 'font-bold font-normal hover:bg-white hover:text-orange hover:shadow-category transition-all duration-200',
            active: 'text-orange bg-white shadow-category',
        },
    },
    defaultVariants: {
        intent: 'default',
    },
})

interface Category {
    id: number
    title: string
}

interface Props extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof SelectCategoryMenuStyles> {
    categories: Category[]
    defaultCategoryId: number
}

export const SelectCategoryMenu = ({ categories, intent, defaultCategoryId, className, ...props }: Props) => {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>({
        id: defaultCategoryId,
        title: categories.find((c) => c.id === defaultCategoryId)?.title || '',
    })

    const handleCategoryClick = (category: Category) => {
        setSelectedCategory(category)
    }

    return (
        <div className='bg-blue h-14 flex justify-between p-1 rounded-2xl'>
            {categories.map((category) => (
                <button
                    key={category.id}
                    className={SelectCategoryMenuStyles({
                        intent: selectedCategory?.id === category.id ? 'active' : 'default',
                        className,
                    })}
                    onClick={() => handleCategoryClick(category)}
                    {...props}
                >
                    {category.title}
                </button>
            ))}
        </div>
    )
}

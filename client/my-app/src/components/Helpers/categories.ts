export interface Category {
    id: number
    title: string
    category: string
}

export const Categories: Category[] = [
    {
        id: 1,
        title: 'Все',
        category: 'all',
    },
    {
        id: 2,
        title: 'Мясные',
        category: 'meat',
    },
    {
        id: 3,
        title: 'Вегетарианские',
        category: 'vegan',
    },
    {
        id: 4,
        title: 'Острые',
        category: 'spicy',
    },
    {
        id: 5,
        title: 'Сладкие',
        category: 'sweet',
    },
    {
        id: 6,
        title: 'С курицей',
        category: 'with-meat',
    },
]

export interface Category {
    id: number
    title: string
    category: string
}

export const Categories: Category[] = [
    {
        id: 1,
        title: 'Все',
        category: 'ALL',
    },
    {
        id: 2,
        title: 'Мясные',
        category: 'MEAT',
    },
    {
        id: 3,
        title: 'Вегетарианские',
        category: 'VEGAN',
    },
    {
        id: 4,
        title: 'Острые',
        category: 'SPICY',
    },
    {
        id: 5,
        title: 'Сладкие',
        category: 'SWEET',
    },
    {
        id: 6,
        title: 'С курицей',
        category: 'WITH_MEAT',
    },
]

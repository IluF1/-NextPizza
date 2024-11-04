export interface Ingredient {
    id: number
    name: string
    price: number
}

export interface Pizza {
    id: number
    name: string
    ingredients: Ingredient[]
    price: number
    imgUrl: string
    category: string
}

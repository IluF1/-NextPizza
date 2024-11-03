import { create } from 'zustand'
import { instance } from '../components/Helpers/instance'
import { Ingredient } from '../components/Helpers/interfaces'

interface Pizza {
    id: number
    name: string
    ingredients: Ingredient[]
    price: number
    imgUrl: string
    category: string
}

interface UseGetPizzasStore {
    pizzas: Pizza[]
    loading: boolean
    getAllPizzas: (category: string) => Promise<void>
}

export const useGetPizzasStore = create<UseGetPizzasStore>((set) => ({
    pizzas: [],
    loading: true,
    getAllPizzas: async (category: string) => {
        try {
            const response = await instance.post('/getAllPizzas', {
                category: category,
            })
            set({ pizzas: response.data, loading: false })
        } catch (error) {
            console.error(error)
        }
    },
}))

import { create } from 'zustand'
import { instance } from '../components/Helpers/instance'

interface Pizza {
    id: number
    name: string
    description: string
    price: number
    imgUrl: string
    category: string
}

interface UseGetPizzasStore {
    pizzas: Pizza[]
    getAllPizzas: (category: string) => Promise<void>
}

export const useGetPizzasStore = create<UseGetPizzasStore>((set) => ({
    pizzas: [],
    getAllPizzas: async (category: string) => {
        try {
            const response = await instance.post('/pizza/getAllPizzas', { category: category || 'all' })
            set({ pizzas: response.data })
        } catch (error) {
            console.error(error)
        }
    },
}))

import { create } from 'zustand'
import { instance } from '../components/Helpers/instance'
import { Pizza } from '../components/Helpers/interfaces'

interface GetPizzasStore {
    pizzas: Pizza[]
    loading: boolean
    getAllPizzas: (category: string) => Promise<void>
}

export const getPizzasStore = create<GetPizzasStore>((set) => ({
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

import { create } from 'zustand'
import { instance } from '../components/Helpers/instance'
import { Pizza } from '../components/Helpers/interfaces'

interface getPizzaById {
    pizza: Pizza
    loading: boolean
    getPizzById: (id: number) => Promise<void>
}

export const getPizzaById = create<getPizzaById>((set) => ({
    pizza: {
        name: '',
        id: 0,
        price: 0,
        category: '',
        imgUrl: '',
        ingredients: [],
    },
    loading: true,
    getPizzById: async (id: number) => {
        try {
            const response = await instance.post('/getPizzaById', {
                id: id,
            })

            set({ pizza: response.data, loading: false })
        } catch (err) {
            console.error(err)
        }
    },
}))

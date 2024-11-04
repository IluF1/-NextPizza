import { create } from 'zustand'
import { instance } from '../components/Helpers/instance'

interface Pizza {
    name: string
    id: number
    price: number
    imgUrl: string
}

interface GetPizzaByNameStore {
    pizza: Pizza[]
    loading: boolean
    getPizzaByName: (name: string) => Promise<void>
}

export const getPizzaByNameStore = create<GetPizzaByNameStore>((set) => ({
    pizza: [],
    loading: true,
    getPizzaByName: async (name: string) => {
        if (name.length >= 1) {
            const response = await instance.post('/getPizzaByName', {
                name: name,
            })
            set({ loading: false, pizza: response.data })
        } else {
            return
        }
    },
}))

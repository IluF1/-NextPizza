'use client'
import { getPizzaByNameStore } from '@/src/store/getPizzaByNameStore'
import { useCallback, useRef } from 'react'

interface UseDebounceProps {
    callback: (value: string) => void
    delay: number
}

const useDebounce = ({ callback, delay }: UseDebounceProps) => {
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

    const debouncedCallback = useCallback(
        (value: string) => {
            if (timer.current) {
                clearTimeout(timer.current)
            }

            timer.current = setTimeout(() => {
                callback(value)
            }, delay)
        },
        [callback, delay]
    )

    return debouncedCallback
}

export const useSearchPizza = (delay: number) => {
    const { getPizzaByName } = getPizzaByNameStore.getState()

    const searchPizza = useDebounce({
        callback: async (value: string) => {
            if (value.trim()) {
                await getPizzaByName(value)
            }
        },
        delay,
    })

    return searchPizza
}

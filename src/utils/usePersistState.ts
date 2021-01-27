import { useState, useEffect } from 'react'

export default function usePersistState(key: string, initialState: any) {

    const [theme, setTheme] = useState(() => {
        const storeTheme = localStorage.getItem(key)
        if (storeTheme) {
            return JSON.parse(storeTheme)
        } else {
            return initialState
        }
    })

    useEffect(() => {

        localStorage.setItem(key, JSON.stringify(theme))

    }, [key, theme, setTheme])

    return [theme, setTheme]
}
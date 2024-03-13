import { useCallback } from 'react'

export default function useLocalStorage() {
    const storage = window.localStorage

    const add = (key, item) => {
        if (item instanceof Map)
            item = { map: Object.fromEntries(item) }
        storage.setItem(key, JSON.stringify(item))
    }
    const get = (key) => {
        const item = JSON.parse(storage.getItem(key))
        if (item.map)
            return new Map(item.map)
        return item
    }
    const remove = (key) => storage.removeItem(key)
    const delete_all = () => {
        const prompt = "You are about to delete your entire game history, including settings and permissions. Are you sure you would like to proceed?"
        const callback = useCallback((permission) => {
            if (permission) { storage.clear() }
        }, [storage])
        return {
            prompt,
            callback
        }
    }

    return { add, get, remove, delete_all }
}
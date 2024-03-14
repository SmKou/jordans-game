import { useCallback } from 'react'

export default function useLocalStorage() {
    const storage = window.localStorage

    const add = useCallback(
        (key, item) => {
            if (item instanceof Map)
                item = { map: Object.fromEntries(item) }
            else if (item instanceof Function)
                item = { func: item.toString() }
            storage.setItem(key, JSON.stringify(item))
        },
        [storage]
    )

    const get = useCallback(
        (key) => {
            const item = JSON.parse(storage.getItem(key))
            if (item.map)
                return new Map(item.map)
            else if (item.func)
                return eval("(" + item.func + ")")
            return item
        },
        [storage]
    )

    const remove = useCallback(
        (key) => storage.removeItem(key),
        [storage]
    )

    const delete_all = useCallback(
        () => {
            const prompt = "You are about to delete your entire game history, including settings and permissions. Are you sure you would like to proceed?"
            const callback = (permission) => {
                if (permission) { storage.clear() }
            }
            return { prompt, callback }
        },
        [storage]
    )

    return { add, get, remove, delete_all }
}

export function useLocalStorageData() {
    const storage = window.localStorage

    const add = useCallback(
        (key, item) => {},
        [storage]
    )

}
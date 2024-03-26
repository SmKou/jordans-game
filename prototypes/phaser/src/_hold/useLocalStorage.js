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
    const storage = useLocalStorage()
    const data_stored = storage.get('data-stored')

    const add = useCallback(
        (key, item) => {
            
        },
        [storage]
    )
}

/*
import { useCallback, useMemo } from 'react'

export default function useLocalStorage() {
    const storage = window.localStorage

    const storageUtils = useMemo(
        () => ({
            add(key, item) {
                if (item instanceof Map)
                    item = { map: Object.fromEntries(item) }
                else if (item instanceof Function)
                    item = { fn: item.toString() }
                storage.setItem(key, JSON.stringify(item))
            },
            addData(key, item) {
                
            },
            get(key) {
                const item = JSON.parse(storage.getItem(key))
                if (!item) return null;
                if (item.map)
                    return new Map(item.map)
                if (item.fn)
                    return eval("(" + item.fn + ")")
                return item
            },
            remove(key) {
                storage.removeItem(key)
            },
            clear() {
                const prompt = "You are about to erase your entire game. Are you sure you would like to proceed?"
                const callback = useCallback(
                    (permission) => storage.clear(),
                    [storage]
                )
                return { prompt, callback }
            }
        }),
        [storage]
    )

    return { ...storageUtils }
}
*/
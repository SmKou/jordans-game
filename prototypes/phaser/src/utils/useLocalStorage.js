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
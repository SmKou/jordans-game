import { useCallback, useEffect, useRef } from "react"
import useGame from "./useGame"

export default function useKeyActions(keyMap, enabledWhenPaused = false) {
    const map = useRef(keyMap)
    const { paused } = useGame() || {}
    map.current = keyMap
    const handleKey = useCallback(
        (event) => {
            if (paused && !enabledWhenPaused) return;
            Object.entries(map.current).forEach(([key, handler]) => {
                if (key === event.key)
                    handler(event)
            })
        },
        [paused, enabledWhenPaused]
    )
    useEffect(() => {
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [handleKey])
}
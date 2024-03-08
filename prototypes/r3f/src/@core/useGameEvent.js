import { useRef, useEffect } from "react"
import useGame from "./useGame"

export default function useGameEvent(eventName, callback, deps) {
    const callbackRef = useRef()
    const { subscribe } = useGame()
    callbackRef.current = callback
    useEffect(() => {
        return subscribe(eventName, callbackRef.current)
    }, [subscribe, eventName, ...deps])
}
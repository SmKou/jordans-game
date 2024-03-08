import { useCallback } from "react"
import useGameObject from './useGameObject'
import useMapSnapshot from './useMapSnapshot'

export default function usePathfinding() {
    const { transform } = useGameObject() || {}
    const createMap = useMapSnapshot()
    return useCallback(
        ({ from = transform, to }) => findPath({ 
            from, 
            to, 
            map: createMap(to) 
        }),
        [createMap, transform]
    )
}
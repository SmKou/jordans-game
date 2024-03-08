import { useCallback } from "react"
import useGame from './useGame'
import useGameObject from './useGameObject'

export default function useCollisionTest({ sight = false, hit = false }) {
    const { findGameObjectsByXY } = useGame()
    const { id } = useGameObject() || {}
    return useCallback(
        (position) => {
            const { x, y } = position
            const gameObjectsAtXY = findGameObjectsByXY(x, y)
            if (!gameObjectsAtXY.length)
                return false
            return gameObjectsAtXY.every(gameObj => {
                if (gameObj.id === id)
                    return true
                const collider = gameObj.getComponent('Collider')
                if (sight) 
                    return (gameObj.layer == null
                        || (gameObj.layer !== 'wall' && gameObj.layer !== 'obstacle')
                        || (collider && collider.walkable))
                if (hit)
                    return (gameObj.layer == null
                        || (gameObj.layer !== 'wall' 
                            && gameObj.layer !== 'visible-wall' 
                            && gameObj.layer !== 'obstacle')
                        || (collider && collider.walkable)
                    )
                return !collider || collider.walkable
            })
        },
        [id, findGameObjectsByXY, sight, hit]
    )
}
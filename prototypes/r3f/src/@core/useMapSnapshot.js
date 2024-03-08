import { useCallback } from 'react'
import useGame from './useGame'
import useInteractableTest from './useInteractableTest'
import useCollisionTest from './useCollisionTest'

export const WALKABLE = 0
export const BLOCKED = 1

export default function useMapSnapshot() {
    const { mapSize } = useGame()
    const testCollision = useCollisionTest()
    const testInteractable = useInteractableTest()
    return useCallback(
        (destination) => {
            const [mapWidth, mapHeight] = mapSize
            const snapshot = [[]]
            for (let y = 0; y < mapHeight; ++y) {
                snapshot[y] = snapshot[y] || []
                for (let x = 0; x < mapWidth; ++x) {
                    snapshot[y][x] = testCollision({ x, y})
                        ? WALKABLE
                        : BLOCKED
                    if (destination != null) {
                        if (x === destination.x && y === destination.y) {
                            snapshot[y][x] = testInteractable({ x, y })
                                ? WALKABLE
                                : snapshot[y][x]
                        }
                    }
                }
            }
            return snapshot
        },
        [testCollision, testInteractable, mapSize]
    )
}
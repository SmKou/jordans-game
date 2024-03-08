import { useCallback } from 'react'
import tileUtils from '../utils/tileUtils'

export default function useCircleOfSight() {
    const testSight = useCollisionTest({ sight: true })
    return useCallback(
        (origin, range) => {
            const center = tileUtils(origin)
            const ring = center.rangeNeighbors(range)
            const visibleTiles = new Set([center.toString()])
            for (const ringTile of ring) {
                const line = center.lineTo(ringTile).slice(1)
                for (const tile of line) {
                    visibleTiles.add(tile.toString())
                    if (!testSight(tile)) break;
                }
            }
            return Array.from(visibleTiles.values()).map(str => tileUtils().fromString(str))
        },
        [testSight]
    )
}
import { useCallback } from "react"
// import useGameObject from './useGameObject'
import useCollisionTest from './useCollisionTest'
import tileUtils from '../utils/tileUtils'

export default function useSightTest(options = { sight: true }) {
    const test = useCollisionTest(options)
    // const { transform } = useGameObject() || {}
    const transform = options.origin?.transform
    return useCallback(
        (targetObjectOrPosition, range) => {
            const target = targetObjectOrPosition.transform || targetObjectOrPosition
            const base = tileUtils(transform)
            if (base.distance(target) > range)
                return false
            const line = base.lineTo(target).slice(1, -1)
            for (const tile of line)
                if (!test(tile))
                    return false
            return true
        },
        [test, transform]
    )
}
import { useCallback, useContext } from 'react'

import { AssetLoaderContext } from ''

function useAsset(urlOrObj) {
    const assets = useContext(AssetLoaderContext)
    try {
        const url = typeof urlOrObj === 'string' ? urlOrObj : urlOrObj.src
        if (Array.isArray(url))
            url = url[0]
        return assets.current[url]
    }
    catch {
        return null
    }
}

function useCircleOfSight() {
    const testSight = useCollisionTest({ sight: true })
    return useCallback(
        (origin, range) => {
            const center = tileUtils(origin)
        }
    )
}

export default {
    useAsset,
    useCircleOfSight
}
import { useMemo } from 'react'
import useGame from './useGame'

export default function TileMap({ data, resolver, defineMapSize = false}) {
    const { setMapSize, publish } = useGame()
    const mapData = useMemo(() => data.slice().reverse(), [data])
    useEffect(() => {
        publish('tile-map-update')
    }, [mapData, publish])
    useEffect(() => {
        if (defineMapSize && mapData.length) {
            const sizeX = mapData[0].length
            const sizeY = mapData.length
            setMapSize([sizeX, sizeY])
        }
    }, [mapData, defineMapSize, setMapSize])
    if (!resolver) return null
    return (
        <>{mapData.map((row, y) => row.map((type, x) => resolver(type, x, y)))}</>
    )
}
import { useEffect, useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { createPubSub } from './utils/createPubSub'

export const GameContext = React.createContext(null)

const styles = {
    root: {
        position: 'relative',
        userSelect: 'none',
        width: '100%',
        height: '100%'
    }
}

export default function Game({
    movementDuration = 250,
    cameraZoom = 64,
    children
}) {
    const [paused, setPaused] = useState(false)
    const [mapSize, setMapSize] = useState(() => [1,1])
    const [registryById] = useState(() => new Map())
    const [registryByName] = useState(() => new Map())
    const [registryByXY] = useState(() => new Map())
    const [registryByLayer] = useState(() => new Map())
    const [pubSub] = useState(() => createPubSub())
    const [gameStore] = useState(() => new Map())

    const storeUtils = useMemo(
        () => ({
            setGameState(key, value) { gameStore.set(key, value) },
            getGameState(key) { return gameStore.get(key) }
        }),
        [gameStore]
    )

    useEffect(() => pubSub.subscribe('scene-exit', () => {
        registryById.clear()
        registryByName.clear()
        registryByXY.clear()
        registryByLayer.clear()
    }), [pubSub, registryById, registryByLayer, registryByName, registryByXY])

    const registryUtils = useMemo(
        () => ({
            registerGameObject(identifier, ref) {
                registryById.set(identifier, ref)
                registryByName.set(ref.name, ref)
                const { transform } = ref
                const xy = `${transform.x},${transform.y}`
                const xyList = registryByXY.get(xy) || []
                xyList.push(ref)
                registryByXY.set(xy, xyList)
                const layerList = registryByLayer.get(ref.layer) || []
                layerList.push(ref)
                registryByLayer.set(ref.layer, layerList)
            },
            unregisterGameObject(identifier, ref) {
                registryById.delete(identifier)
                registryByName.delete(ref.name)
                const { transform } = ref
                const xy = `${transform.x},${transform.y}`
                const xyList = registryByXY.get(xy)
                xyList?.splice(xyList.indexOf(ref), 1)
                const layerList = registryByLayer.get(ref.layer)
                layerList?.splice(layerList.indexOf(ref), 1)
            },
            findGameObjectById(id) { return registryById.get(id) },
            findGameObjectByName(name) { return registryByName.get(name) },
            findGameObjectsByXY(x, y) { 
                return registryByXY.get(`${x},${y}`)?.filter(gobj => !gobj.disbaled) || []
            },
            findGameObjectByLayer(layer) {
                return registryByLayer.get(layer)?.filter(gobj => !gobj.disabled) || []
            }
        })
    )

    const contextValue = {
        settings: {
            movementDuration,
            cameraZoom
        },
        paused,
        setPaused,
        mapSize,
        setMapSize,
        ...storeUtils,
        ...registryUtils,
        ...pubSub
    }

    return (
        <div style={styles.root}>
            <Canvas
                camera = {{
                    position: [0, 0, 32],
                    zoom: cameraZoom,
                    near: 0.1,
                    far: 64
                }}
                orthographic
                noEvents
                g12
                g1={{ antialias: false }}
                onContextMenu={e => e.preventDefault()}
            >
                <GameContext.Provider value={contextValue}>
                    {children}
                </GameContext.Provider>
            </Canvas>
        </div>
    )
}
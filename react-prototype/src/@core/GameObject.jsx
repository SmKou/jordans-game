import { useCallback, useLayoutEffect, useMemo } from 'react'
import {
    useForceUpdate,
    useGame,
    useGameObject,
    useGameObjectStore,
    useStateFromProp
} from './helpers'
import { createPubSub } from './utils'

export const GameObjectContext = React.createContext(null)

function Persistence() {
    const { getRef } = useGameObject()
    useGameObjectStore(
        '_gameObject',
        () => {
            const self = getRef()
            return {
                x: self.transform.x,
                y: self.transform.y,
                disabled: self.disabled
            }
        },
        stored => {
            const self = getRef()
            self.setDisabled(stored.disabled)
        }
    )
    return null
}

export default function GameObject({
    name,
    displayName,
    layer,
    children,
    disabled: initialDisabled = false,
    persisted = false,
    ...props
}) {
    const identifier = useRef(Symbol('GameObject'))
    const node = useRef(null)
    const [registry] = useState(() => new Map())
    const [pubSub] = useState(() => createPubSub())
    const [x, setX] = useStateFromProp(props.x || 0)
    const [y, setY] = useStateFromProp(props.y || 0)
    const [disabled, setDisabled] = useState(initialDisabled)
    const { registerGameObject, unregisterGameObject } = useGame()
    const forceUpdate = useForceUpdate()

    const registryUtils = useMemo(
        () => ({
            registerComponent(id, api) { registry.set(id, api) },
            unregisterComponent(id) { registry.delete(id) },
            getComponent(id) { return registry.get(id) }
        }),
        [registry]
    )

    const transform = useMemo(
        () => ({ x, y, setX, setY }),
        [x, y, setX, setY]
    )

    const gameObjectRef = useMemo(
        () => ({
            id: identifier.current,
            name, displayName,
            layer, transform,
            getComponent: registryUtils.getComponent,
            disabled, setDisabled,
            subscribe: pubSub.subscribe
        }),
        [name, displayName, layer, transform, registryUtils, disabled, pubSub]
    )

    const getRef = useCallback(() => gameObjectRef, [gameObjectRef])

    useLayoutEffect(() => {
        const id = identifier.current
        registerGameObject(id, gameObjectRef)
        return () => unregisterGameObject(id, gameObjectRef)
    }, [registerGameObject, unregisterGameObject, gameObjectRef])

    const contextValue = {
        id: identifier.current,
        name, transform, forceUpdate,
        nodeRef: node, getRef,
        ...pubSub,
        ...registryUtils
    }

    let offsetZ = 0
    switch (layer) {
        case 'ground':
            offsetZ = -1
            break
        case 'ground-decal':
            offsetZ = 0.1
            break
        case 'obstacle':
            offsetZ = 0.2
            break
        case 'item':
            offsetZ = 0.3
            break
        case 'character':
            offsetZ = 0.5
            break
        case 'fx':
            offsetZ = 4
            break
    }

    return (
        <GameObjectContext.Provider value={contextValue}>
            {persisted && <Persistence />}
            <group ref={node} position={[x, y, (-y + offsetZ) / 100]}>
                {!disabled && children}
            </group>
        </GameObjectContext.Provider>
    )
}
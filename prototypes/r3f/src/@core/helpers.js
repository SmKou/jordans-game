import React, { 
    useCallback, 
    useContext, 
    useEffect, 
    useLayoutEffect, 
    useRef, 
    useState 
} from 'react'
import { useFrame } from '@react-three/fiber'
import { AssetLoaderContext } from './AssetLoader'
import { GameContext } from './Game'
import { GameObjectContext } from './GameObject'
import { tileUtils } from './utils'

export const StoreContext = React.createContext(null)
export const WALKABLE = 0
export const BLOCKED = 1

function useComponentRegistry(name, api) {
    const { registerComponent, unregisterComponent } = useGameObject()
    useLayoutEffect(() => {
        registerComponent(name, api)
    })
    useLayoutEffect(() => {
        return () => unregisterComponent(name)
    }, [unregisterComponent, name])
    return api
}

function useForceUpdate() {
    const [, setState] = useState({})
    return useCallback(() => setState({}), [])
}

function useGame() {
    return useContext(GameContext)
}

function useGameEvent(eventName, callback, deps) {
    const callbackRef = useRef()
    const { subscribe } = useGame()
    callbackRef.current = callback
    useEffect(() => {
        return subscribe(eventName, callbackRef.current)
    }, [subscribe, eventName, ...deps])
}

function useGameLoop(callback, condition = true) {
    const { paused } = useGame()
    const { getRef } = useGameObject() || {}
    const active = useRef(false)
    const callbackRef = useRef()
    callbackRef.current = callback
    active.current = !paused && condition
    if (getRef && getRef().disabled)
        active.current = false
    useFrame(({ clock }) => {
        const time = clock.oldTime
        if (active.current)
            callback(time)
    })
    return active.current
}

function useGameObject() {
    return useContext(GameObjectContext)
}

function useGameObjectEvent(eventName, callback, deps) {
    const callbackRef = useRef()
    const { subscribe } = useGameObject()
    callbackRef.current = callback
    useEffect(() => {
        return subscribe(eventName, callbackRef.current)
    }, [subscribe, eventName, ...deps])
}

function useGameObjectStore(key, write, read) {
    const { name, forceUpdate } = useGameObject()
    const { getState, setState } = useContext(StoreContext)
    const writeCallback = useRef(null)
    writeCallback.current = write
    const readCallback = useRef(null)
    readCallback.current = read
    useGameEvent(
        'scene-init',
        () => {
            if (!readCallback.current) return;
            if (!name) {
                console.error('Attempting to use GameObject store without a name.')
                return;
            }
            const stored = getState(`${name}.${key}`)
            if (stored != null) {
                readCallback.current(stored)
                waitForMs(0).then(forceUpdate)
            }
        },
        [key, name]
    )
    const save = useCallback(async () => {
        if (!name) return;
        setState(`${name}.${key}`, writeCallback.current())
    }, [key, name, setState])
    useGameEvent('scene-exit', save, [save])
    useGameEvent('save-game', save, [save])
    return getState(`${name}.${key}`)
}

function useGameObjectStoreValue(key) {
    const { name } = useGameObject()
    const { getState } = useContext(StoreContext)
    if (!name) {
        console.error('Attempting to use GameObject store without a name.')
        return;
    }
    const stored = getState(`${name}.${key}`)
    return stored
}

function GameStoreProvider({ children }) {
    const { getGameState, setGameState } = useGame()
    const contextValue = {
        getState: getGameState,
        setState: setGameState
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

function SceneStoreProvider({ children }) {
    const { getSceneState, setSceneState } = useSceneManager()
    const contextValue = {
        getState: getSceneState,
        setState: setSceneState
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

function useInteractableTest() {
    const { findGameObjectsByXY } = useGame()
    const { id } = useGameObject() || {}
    return useCallback(
        (position) => {
            const { x, y } = position
            return findGameObjectsByXY(x, y).some(gameobj => {
                if (gameObj.id === id)
                    return false
                const interactable = gameObj.getComponent('Interactable')
                return !!interactable
            })
        },
        [id, findGameObjectsByXY]
    )
}

function useInteraction(callback) {
    useGameObjectEvent('interaction', callback, [callback])
}

function useKeyActions(keyMap, enabledWhenPaused = false) {
    const map = useRef(keyMap)
    const { paused } = useGame() || {}
    map.current = keyMap
    const handleKey = useCallback(
        (event) => {
            if (paused && !enabledWhenPaused) return;
            Object.entries(map.current).forEach(([key, handler]) => {
                if (key === event.key)
                    handler(event)
            })
        },
        [paused, enabledWhenPaused]
    )
    useEffect(() => {
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [handleKey])
}

function useKeyPress(key) {
    const { paused } = useGame()
    const [isDown, set] = useState(false)
    const keys = Array.isArray(key) ? key : [key]
    const handleKeyDown = useCallback(
        (event) => {
            if (paused) return;
            if (!isDown && keys.includes(event.key))
                set(true)
        },
        [...keys, isDown, paused]
    )
    const handleKeyUp = useCallback(
        (event) => {
            if (isDown && keys.includes(event.key))
                set(false)
        },
        [...keys, isDown]
    )
    const handleWindowBlur = useCallback(() => { set(false) }, [])
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
        window.addEventListener('blur', handleWindowBlur)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
            window.removeEventListener('blur', handleWindowBlur)
        }
    }, [handleKeyDown, handleKeyUp, handleWindowBlur])
    return isDown
}

function useStateFromProp(prop) {
    const [state, setState] = useState(prop)
    const initial = useRef(true)
    useEffect(() => {
        if (!initial.current)
            setState(prop)
        initial.current = false
    }, [prop])
    return [state, setState]
}

function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight])
    useEffect(() => {
        function handleResize() {
            setSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    })
}

export default {
    useAsset,
    useCircleOfSight,
    useCollisionTest,
    useComponentRegistry,
    useForceUpdate,
    useGame,
    useGameEvent,
    useGameLoop,
    useGameObject,
    useGameObjectEvent,
    useGameObjectStore,
    useGameObjectStoreValue,
    GameStoreProvider,
    SceneStoreProvider,
    useInteractableTest,
    useInteraction,
    useKeyActions,
    useKeyPress,
    useMapSnapshot,
    usePathfinding,
    usePointer,
    usePointerClick,
    useSceneManager,
    useSightTest,
    useStateFromProp,
    useWindowSize
}
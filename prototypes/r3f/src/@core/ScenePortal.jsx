import { useThree } from '@react-three/fiber'
import useGame from './useGame'
import useGameObject from './useGameObject'
import useGameEvent from './useGameEvent'
import useComponentRegistry from './useComponentRegistry'
import useInteraction from './useInteraction'

const targetPortalKey = Symbol('targetPortalKey')
const portedGameObjectKey = Symbol('portedGameObjectKey')

export default function ScenePortal({ 
    name, 
    target: targetProp, 
    enterDirection = [0, 0], 
    controlled = false, 
    onEnter, 
    onLeave 
}) {
    const { findGameObjectByName, setGameState, getGameState } = useGame()
    const { transform } = useGameObject()
    const { setScene } = useSceneManager()
    const { camera } = useThree()
    const [enterX, enterY] = enterDirection

    const api = useComponentRegistry('ScenePortal', {
        name,
        target: targetProp,
        port(target = targetProp) {
            const [targetScene, targetPortal] = target.split('/')
            setGameState(targetPortalKey, targetPortal)
            setGameState(portedGameObjectKey, 'player')
            onEnter?.()
            setScene(targetScene)
        }
    })

    useInteraction(async ref => {
        if (controlled) return;
        if (ref.name !== 'player') return;
        api.port()
    })

    useGameEvent('scene-init', () => {
        const targetName = getGameState(targetPortalKey)
        if (targetName !== name) return;
        const portedKey = getGameState(portedGameObjectKey)
        const portedObj = findGameObjectByName(portedKey)
        portedObj.transform.setX(transform.x)
        portedObj.transform.setY(transform.y)
        camera.position.setX(nodeRef.current.position.x)
        camera.position.setY(nodeRef.current.position.y)
    }, [name, transform])

    useGameEvent('scene-ready', () => {
        const targetName = getGameState(targetPortalKey)
        if (targetName !== name) return;
        if (!enterX && !enterY) return;
        const portedKey = getGameState(portedGameObjectKey)
        const portedObj = findGameObjectByName(portedKey)
        if (!portedObj) return;
        onLeave?.()
        portedObj.getComponent('Movable').move({ x: transform.x + enterX, y: transform.y + enterY })
        setGameState(targetPortalKey, null)
        setGameState(portedGameObjectKey, null)
    }, [name, enterX, enterY, transform])

    return null
}
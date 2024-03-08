import { useThree } from '@react-three/fiber'
import useGame from './useGame'
import useGameObject from './useGameObject'

const targetPortalKey = Symbol('targetPortalKey')
const portedGameObjectKey = Symbol('portedGameObjectKey')

export default function ScenePortal({ 
    name, 
    target, 
    enterDirection = [0, 0], 
    controlled = false, 
    onEnter, 
    onLeave 
}) {
    const { findGameObjectByName, setGameState, getGameState } = useGame()
    const { transform } = useGameObject()
    const { setScene } = useSceneManager()
    const { camera } = useThree()
}
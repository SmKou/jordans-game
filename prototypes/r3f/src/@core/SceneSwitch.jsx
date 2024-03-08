import Collider from './Collider'
import useGameObjectEvent from './useGameObjectEvent'
import useSceneManager from './useSceneManager'

export default function SceneSwitch({ targetScene }) {
    const { setScene } = useSceneManager()
    useGameObjectEvent('trigger', () => setScene(targetScene))
    return <Collider isTrigger />
}
import { useRef, useMemo, useState } from "react"
import useGame from "./useGame"
import waitForMs from './utils/waitForMs'

export const SceneManagerContext = React.createContext(null)

export default function SceneManager({ defaultScene, children }) {
    const { publish } = useGame()
    const [initialScene, initialLevel = 0] = defaultScene.split(':')
    const [currentScene, setScene] = useState(initialScene)
    const prevLevel = useRef(-1)
    const currentLevel = useRef(Number(initialLevel))
    const sceneStore = useRef(new Map())
    const api = useMemo(
        () => ({
            currentScene,
            prevLevel: prevLevel.current,
            currentLevel: currentLevel.current,
            async setScene(nextScene) {
                let [targetScene, targetLevel = 0] = nextScene.split(':')
                targetLevel = Number(targetLevel)
                if (currentScene !== targetScene) {
                    if (currentScene !== '') {
                        await publish('scene-pre-exit', currentScene)
                        await publish('scene-exit', currentScene)
                        setScene('')
                        await waitForMs(100)
                    }
                    prevLevel.current = -1
                    currentLevel.current = targetLevel
                    setScene(targetScene)
                }
                else if (currentLevel.current !== targetLevel)
                    api.setLevel(targetLevel)
            },
            async setLevel(level) {
                if (level !== currentLevel.current) {
                    prevLevel.current = currentLevel.current
                    currentLevel.current = level
                    await api.resetScene()
                }
            },
            async resetScene() {
                const prevScene = currentScene
                const formerCurrentLevel = currentLevel.current
                const formerPrevLevel = prevLevel.current
                await api.setScene('')
                await waitForMs(100)
                prevLevel.current = formerPrevLevel
                currentLevel.current = formerCurrentLevel
                setScene(prevScene)
            },
            setSceneState(key, value) {
                sceneStore.current.set(`${currentScene}.${key}`, value)
            },
            getSceneState(key) {
                return sceneStore.current.get(`${this.currentScene}.${key}`)
            }
        }),
        [currentScene, currentLevel, publish]
    )
    
    return (
        <SceneManager.Provider value={api}>
            <SceneStoreProvider>
                {children}
            </SceneStoreProvider>
        </SceneManager.Provider>
    )
}
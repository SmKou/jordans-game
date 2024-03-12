import { useState } from 'react';
import { useGameStore } from './utils/store'
import { 
    setUserAgent,
    setTouchEnabledIsMobile,
    game_states as GameStates
} from './utils/useStore';
import StartMenu from './containers/StartMenu'
import GameMenu from './containers/GameMenu'
import GameScene from './containers/GameScene'
import Inventory from './containers/Inventory'

function App () {
    const hasHydrated = useGameStore(state => state._hasHydrated)
    useEffect(() => {
        if (!hasHydrated) return;
        setUserAgent()
        setTouchEnabledIsMobile()
    }, [hasHydrated])
    
    const [gameState, setGameState] = useState(GameStates.StartMenu)
    const currentState = () => {
        switch (gameState) {
            case GameStates.StartMenu:
                return <StartMenu setGameState={setGameState}></StartMenu>
            case GameStates.GameMenu:
                return <GameMenu setGameState={setGameState}></GameMenu>
            case GameStates.GameScene:
                return <GameScene setGameState={setGameState}></GameScene>
            case GameStates.Inventory:
                return <Inventory setGameState={setGameState}></Inventory>
        }
    }
    const [component, setComponent] = useState(currentState())
    useEffect(() => setComponent(currentState()), [gameState])

    return (
        <main id="app">{component}</main>
    )
}

export default App

import { HTML } from '@react-three/drei'
import { AssetLoaderProvider } from './AssetLoader'
import { GameContext } from './Game'
import useGame from './useGame'

export default function GameUI({ children }) {
    const gameContextValue = useGame()
    return (
        <HTML eps={1} zIndexRange={[0, 0]}>
            <GameContext.Provider value={gameContextValue}>
                <AssetLoaderProvider>{children}</AssetLoaderProvider>
            </GameContext.Provider>
        </HTML>
    )
}
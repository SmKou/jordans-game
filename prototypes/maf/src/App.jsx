import { useLocalStorage } from '@uidotdev/usehooks'
import { Box } from '@mui/material'
import { GameStateValues } from './values'
import './main.css'

import StartMenu from './containers/StartMenu'
import Opening from './containers/Opening'
import Introduction from './containers/Introduction'
import Init from './containers/Init'
import Battle from './containers/Battle'
import Game from './containers/Game'

const Switcher = ({ game_state, setGameState }) => {
    switch (game_state) {
        case GameStateValues.START:
            return <StartMenu setGameState={setGameState} />
        case GameStateValues.OPENING:
            return <Opening setGameState={setGameState} />
        case GameStateValues.INTRO:
            return <Introduction setGameState={setGameState} />
        case GameStateValues.INIT:
            return <Init setGameState={setGameState} />
        case GameStateValues.BATTLE:
            return <Battle setGameState={setGameState} />
        case GameStateValues.GAME:
            return <Game setGameState={setGameState} />
    }
}

function App() {
    const [game_state, setGameState] = useLocalStorage('game_state', GameStateValues.START)

    return (
        <Box width="100vw" height="100vh" padding="0">
            <Switcher game_state={game_state} setGameState={setGameState} />
        </Box>
    )
}

export default App
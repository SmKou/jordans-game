import React, { useEffect, useState } from 'react'
import { GameStateValues } from './utils/useGameStorage'
import { Box } from '@mui/material'
import StartMenu from './containers/StartMenu'

function App() {

    const [game_state, setGameState] = useState(GameStateValues.StartMenu)
    const currentState = () => {
        switch (game_state) {
            case GameStateValues.StartMenu:
                return <StartMenu setGameState={setGameState}></StartMenu>
        }
    }
    const [component, setComponent] = useState(currentState())
    useEffect(() => setComponent(currentState()), [game_state])

    return (
        <Box id="app"
            width="100vw"
            height="100vh"
            padding="0"
            backgroundColor="#111"
        >{component}</Box>
    )
}

export default App

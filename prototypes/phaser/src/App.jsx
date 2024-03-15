import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import useLocalStorage from './utils/useLocalStorage'
import useDeviceType from './utils/useDeviceType'
import StartMenu from './containers/StartMenu'
import Dream from './containers/Dream'

const GameStateValues = {
    START: 'start-menu',
    DREAM: 'dream',
    GAME: 'game-scene',
    BAG: 'inventory'
}

function App() {
    const storage = useLocalStorage()
    const { touch_enabled, is_mobile } = useDeviceType()
    const [game_state, setGameState] = useState(GameStateValues.START)
    const getScene = () => {
        switch (game_state) {
            case GameStateValues.START:
                return <StartMenu setGameState={setGameState} />
            case GameStateValues.DREAM:
                return <Dream setGameState={setGameState} />
        }
    }

    const [device_orientation, setDeviceOrientation] = useState(window.innerWidth > window.innerHeight) // true: landscape
    const [user_orients_right, setUserOrientsRight] = useState(true)
    const toggleUserOrientation = () => {
        const orient = !user_orients_right
        setUserOrientsRight(orient)
        storage.add('user_orientation_setting', orient)
    }

    return (
        <Box id="app"
            width="100vw"
            height="100vh"
            padding="0"
            backgroundColor="#111"
        >{getScene()}</Box>
    )
}

export default App

import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import useLocalStorage from './utils/useLocalStorage'
import useDeviceType from './utils/useDeviceType'

import { GameStateValues } from './data/values'

import UserInput from './components/UserInput'

import StartMenu from './containers/StartMenu'
import Dream from './containers/Dream'

function App() {
    const storage = useLocalStorage()
    const { touch_enabled, is_mobile } = useDeviceType()
    const [device_orientation, setDeviceOrientation] = useState(window.innerWidth > window.innerHeight) // true: landscape
    const [use_user_input, setUserInput] = useState(false)
    const [use_dialog, setDialog] = useState(false)
    const [use_keyboard, setKeyboard] = useState(false)
    const [game_state, setGameState] = useState(GameStateValues.START)
    const [user_orients_right, setUserOrientsRight] = useState(storage.get('user_orientation_setting') || true)
    const toggleUserOrientation = () => {
        const orient = !user_orients_right
        setUserOrientsRight(orient)
        storage.add('user_orientation_setting', orient)
    }

    const moveUp = () => {}
    const moveLeft = () => {}
    const moveRight = () => {}
    const moveDown = () => {}

    return (
        <Box id="app"
            width="100vw"
            height="100vh"
            padding="0"
            backgroundColor="#111"
        >
            { game_state === GameStateValues.DREAM ?  <Dream />
                : game_state === GameStateValues.GAME ? <></>
                : game_state === GameStateValues.BATTLE ? <></>
                : game_state === GameStateValues.BAG ? <></>
                : <StartMenu setGameState={setGameState} />
            }
            <UserInput 
                setGameState={setGameState} 
                use_dialog={use_dialog} 
                use_keyboard={use_keyboard} 
                data={{
                    moveUp,
                    moveLeft,
                    moveRight,
                    moveDown
                }} 
                ui={{ touch_enabled, is_mobile, orientation: device_orientation }} />
        </Box>
    )
}

export default App

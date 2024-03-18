import React, { useCallback, useState, useMemo } from 'react'
import { Box } from '@mui/material'
import { useLocalStorage, useOrientation } from '@uidotdev/usehooks'
import useDeviceType from './utils/useDeviceType'

import { GameStateValues } from './data/values'

import UserInput from './components/UserInput'

import StartMenu from './containers/StartMenu'
import Dream from './containers/Dream'
import GameScene from './containers/GameScene'
import BattleScene from './containers/BattleScene'
import Inventory from './containers/Inventory'

const State = ({ game_state, update, ui }) => {
    switch (game_state) {
        case GameStateValues.DREAM:
            return <Dream />
        case GameStateValues.GAME:
            return <GameScene update={update} />
        case GameStateValues.BATTLE:
            return <BattleScene update={update} ui={ui} />
        case GameStateValues.BAG:
            return <Inventory update={update} ui={ui} />
        default:
            return <StartMenu update={update} />
    }
}

function App() {
    const { touch_enabled, is_mobile } = useDeviceType()
    const device_orientation = useOrientation()
    const [game_state, setGameState] = useLocalStorage('game_state', GameStateValues.START)
    const updateGameState = useCallback(
        state => {
            setGameState(state)
            setUserInput(state !== GameStateValues.START && state !== GameStateValues.BAG)
        }
    )
    const [use_user_input, setUserInput] = useState(false)
    const [use_dialog, setDialog] = useState(false)
    const [use_keyboard, setKeyboard] = useState(false)
    const [user_orients_right, setUserOrientsRight] = useLocalStorage('user_orientation_setting', true)
    const toggleUserOrientation = () => {
        const orient = !user_orients_right
        setUserOrientsRight(orient)
        storage.add('user_orientation_setting', orient)
    }

    const moveUp = () => {}
    const moveLeft = () => {}
    const moveRight = () => {}
    const moveDown = () => {}

    const ui = useMemo(
        () => ({ touch_enabled, is_mobile, orientation: device_orientation }),
        [touch_enabled, is_mobile, device_orientation]
    )

    return (
        <Box id="app"
            width="100vw"
            height="100vh"
            padding="0"
            backgroundColor="#111"
        >
            <State 
                game_state={game_state} 
                update={updateGameState}
                ui={ui}
            />
            <UserInput 
                update={updateGameState}
                use_user_input={use_user_input}
                use_dialog={use_dialog} 
                use_keyboard={use_keyboard} 
                data={{
                    moveUp,
                    moveLeft,
                    moveRight,
                    moveDown
                }} 
                ui={ui} 
            />
        </Box>
    )
}

export default App

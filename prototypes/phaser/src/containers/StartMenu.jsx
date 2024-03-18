import { useState, useEffect } from 'react'
import { Container, Stack, Typography, ButtonGroup, Button } from '@mui/material'
import useLocalStorage from '../utils/useLocalStorage'
import { FontValues, GameStateValues } from '../data/values'
import '@fontsource/bangers'
import '@fontsource/sirin-stencil'
import '@fontsource/swanky-and-moo-moo'

function StartMenu({ setGameState }) {
    const storage = useLocalStorage()
    const [loaded, setLoaded] = useState(false)
    const [variant, setVariant] = useState("outlined")
    const [color, setColor] = useState("")
    const [disabled_style, setDisabledStyle] = useState({ color: 'gray', borderColor: 'gray' })

    useEffect(() => {
        const opening_scene_done = storage.get('opening_scene_done') || false
        const birth_scene_done = storage.get('birth_scene_done') || false
        const intro_scene_done = storage.get('intro_scene_done') || false
        setLoaded(opening_scene_done && birth_scene_done && intro_scene_done)
    }, [])

    useEffect(() => {
        setVariant("contained")
        setColor("success")
        setDisabledStyle({ color: 'white', borderColor: 'transparent' })
    }, [loaded])

    return (
        <Container maxWidth="md">
            <Stack height="100vh" justifyContent="center">
                <Typography 
                    variant="h1"
                    color="white"
                    fontFamily={FontValues.start.Bangers}
                    textAlign="center" 
                    gutterBottom
                >Jordan's Game</Typography>
                <Typography 
                    variant="h4"
                    color="#ccc"
                    fontFamily={FontValues.written}
                    textAlign="center"
                    paddingBottom="3rem"
                >Happy birthday, Jordan!</Typography>
                <ButtonGroup fullWidth aria-label="Start Game">
                    <Button
                        size="medium"
                        variant="contained"
                        color="success"
                        onClick={() => setGameState(GameStateValues.DREAM)}
                    >New Game</Button>
                    <Button
                        size="medium"
                        style={disabled_style}
                        variant={variant}
                        color={color}
                        disabled={!loaded}
                        onClick={() => setGameState(storage.get('game_state'))}
                    >Load Game</Button>
                </ButtonGroup>
            </Stack>
        </Container>
    )
}

export default StartMenu
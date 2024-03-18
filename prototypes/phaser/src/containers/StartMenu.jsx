import { useState, useEffect } from 'react'
import { Container, Stack, Typography, ButtonGroup, Button } from '@mui/material'
import useLocalStorage from '../utils/useLocalStorage'
import { FontValues, GameStateValues } from '../data/values'
import '@fontsource/bangers'
import '@fontsource/sirin-stencil'
import '@fontsource/swanky-and-moo-moo'

function StartMenu({ update }) {
    const storage = useLocalStorage()
    const [loaded, setLoaded] = useState(false)
    const [styles, setStyles] = useState({ color: "gray" })
    const [load_text, setLoadText] = useState("Loading")

    useEffect(() => {
        const opening_scene_done = storage.get('opening_scene_done') || false
        const birth_scene_done = storage.get('birth_scene_done') || false
        const intro_scene_done = storage.get('intro_scene_done') || false
        setLoaded(opening_scene_done && birth_scene_done && intro_scene_done)
    }, [])

    useEffect(() => {
        if (loaded) {
            setLoadText("Load Game")
            setStyles({ color: "white" })
        }
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
                <Stack mx="auto" direction="row" spacing={2}>
                    <Button
                        size="medium"
                        variant="contained"
                        color="success"
                        onClick={() => update(GameStateValues.DREAM)}
                    >New Game</Button>
                    <Button
                        size="medium"
                        style={styles}
                        variant="contained"
                        color="success"
                        disabled={!loaded}
                        onClick={() => update(storage.get('game_state') || GameStateValues.DREAM)}
                    >{load_text}</Button>
                </Stack>
            </Stack>
        </Container>
    )
}

export default StartMenu
import { useState, useEffect } from 'react'
import { Container, Stack, Typography, ButtonGroup, Button } from '@mui/material'
import { useLocalStorage } from '@uidotdev/usehooks'
import { FontValues, GameStateValues } from '../data/values'
import '@fontsource/bangers'
import '@fontsource/sirin-stencil'
import '@fontsource/swanky-and-moo-moo'

function StartMenu({ update }) {
    const [opening_scene_done] = useLocalStorage('opening_scene_done', false)
    const [intro_scene_done] = useLocalStorage('intro_scene_done', false)
    const [init_scene_done] = useLocalStorage('init_scene_done', false)
    const [game_state] = useLocalStorage('game_state', GameStateValues.DREAM)
    const [loaded, setLoaded] = useState(opening_scene_done && intro_scene_done && init_scene_done)
    const [styles, setStyles] = useState({ color: "gray" })
    const [load_text, setLoadText] = useState("Loading")

    useEffect(() => {
        setLoaded(opening_scene_done && intro_scene_done && init_scene_done)
    }, [opening_scene_done, intro_scene_done, init_scene_done])

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
                        onClick={() => update(game_state)}
                    >{load_text}</Button>
                </Stack>
            </Stack>
        </Container>
    )
}

export default StartMenu
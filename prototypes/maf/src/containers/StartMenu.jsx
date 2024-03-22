import { useState, useCallback, useEffect } from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'
import { v4 } from 'uuid'
import { Box, Container, Typography, Grid, Stack } from '@mui/material'
import { DialogText, Spacer, DirectionBtn, ActionBtn, DeleteDialog } from '../components/variants'
import { GameStateValues } from '../values'
import { start_styles, user_input_styles, gamepad_styles } from '../styles'
import '@fontsource/bangers'
import '@fontsource/swanky-and-moo-moo'

const dialog = "Happy birthday, Jordan!"
const options = ['new game', 'load game']
const ids = new Array(options.length).fill('').map(() => v4())

function StartMenu({ setGameState }) {
    const [opening_scene_done] = useLocalStorage('opening_scene_done', false)
    const [intro_scene_done] = useLocalStorage('intro_scene_done', false)
    const [init_scene_done] = useLocalStorage('init_scene_done', false)
    const [delete_history, setDeleteHistory] = useState(false)

    const [open_delete_dialog, setOpenDeleteDialog] = useState(false)
    const [is_animating_text, setIsAnimatingText] = useState(true)
    const [dialog_text, setDialogText] = useState('')
    const [selected_option, setSelectedOption] = useState(options[0])
    const [show_options, setShowOptions] = useState(false)

    useEffect(() => {
        if (!is_animating_text && dialog_text.length < dialog.length) {
            setDialogText(dialog)
            return;
        }

        if (dialog_text.length < dialog.length) {
            const timeoutid = setTimeout(() => setDialogText(prev => prev + dialog[prev.length]), 100)
            return () => clearTimeout(timeoutid)
        }
        else {
            setIsAnimatingText(false)
            const timeoutid = setTimeout(() => setShowOptions(true), 200)
            return () => clearTimeout(timeoutid)
        }
    }, [dialog_text])

    const move = useCallback(() => {
        const option = selected_option === options[0] ? options[1] : options[0]
        setSelectedOption(option)
    })

    const confirmAction = useCallback(() => {
        if (is_animating_text) {
            setIsAnimatingText(false)
            return;
        }

        switch (selected_option) {
            case options[0]: // new game
                if (init_scene_done) {
                    setOpenDeleteDialog(true)
                    return;
                }
                else if (intro_scene_done)
                    setGameState(GameStateValues.INIT)
                else if (opening_scene_done)
                    setGameState(GameStateValues.INTRO)
                else
                    setGameState(GameStateValues.OPENING)
                break
            case options[1]: // load game
                if (!init_scene_done)
                    setGameState(GameStateValues.INIT)
                else if (!intro_scene_done)
                    setGameState(GameStateValues.INTRO)
                else if (!opening_scene_done)
                    setGameState(GameStateValues.OPENING)
                break
        }
    })

    const cancelAction = useCallback(() => {
        if (is_animating_text) {
            setIsAnimatingText(false)
            return;
        }

        if (open_delete_dialog) {
            setOpenDeleteDialog(false)
            setDeleteHistory(false)
            return;
        }
    })

    return (
        <Container sx={start_styles}>
            {open_delete_dialog && <DeleteDialog deleteHistory={setDeleteHistory} />}
            <Typography 
                variant="h1"
                mx="auto"
                fontFamily="bangers, system-ui" 
                textAlign="center"
                color="white"
                gutterBottom
            >Jordan's Game</Typography>
            <Box display="grid" gridTemplateColumns="1fr 13.2rem" sx={user_input_styles}>
                <Box sx={{ p: 2, color: '#ddd' }}>
                    <Typography
                        variant="h3"
                        fontFamily="Swanky and Moo Moo, cursive"
                        gutterBottom
                    >{dialog_text}</Typography>
                    {show_options && 
                        <Stack width="100%" direction="row" justifyContent="space-evenly">
                            {options.map((option, i) => (
                                <DialogText key={ids[i]} text={option} color={option === selected_option} />
                            ))}
                        </Stack>
                    }
                </Box>
                <Box sx={gamepad_styles}>
                    <Grid container columns={3} mb="1.2rem" alignItems="center" justifyContent="center">
                        <Spacer />
                        <DirectionBtn action={move} text="UP" />
                        <Spacer />
                        <DirectionBtn action={move} text="LF" />
                        <Spacer />
                        <DirectionBtn action={move} text="RT" />
                        <Spacer />
                        <DirectionBtn action={move} text="DN" />
                        <Spacer />
                    </Grid>
                    <Stack direction="row">
                        <ActionBtn color="success" action={confirmAction} text="A" />
                        <ActionBtn color="error" action={cancelAction} text="B" />
                    </Stack>
                </Box>
            </Box>
        </Container>
    )
}

export default StartMenu
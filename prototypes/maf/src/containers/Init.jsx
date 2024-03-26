import { useState, useCallback } from "react"
import { Container, Box, Grid } from "@mui/material"
import { DialogText, Spacer, DirectionBtn, ActionBtn } from "../components/variants"
import { useLocalStorage } from "@uidotdev/usehooks"
import { start_styles, user_input_styles, gamepad_styles } from "../styles"

const dialog = [
    {
        text: "Many things change, not only time or nature. Is your name still ",
        fill: function() {
            const [player_init_name] = useLocalStorage('player_init_name', 'Luca')
            return this.text + player_init_name + "?"
        },
        callback: function(name) {
            window.localStorage.setItem('player_name', name)
        }
    }
]

function Init({ setGameState }) {
    const [init_scene_done, setInitSceneDone] = useLocalStorage('init_scene_done', false)

    const [show_options, setShowOptions] = useState(false)
    const [options, setOptions] = useState([])
    const [option_cols, setOptionCols] = useState(0)
    const [show_keyboard, setShowKeyboard] = useState(false)

    const [dialog_text, setDialogText] = useState('')

    const moveUp = useCallback(
        () => {

        }
    )

    const moveLeft = useCallback(
        () => {}
    )

    const moveRight = useCallback(
        () => {}
    )

    const moveDown = useCallback(
        () => {}
    )

    const confirmAction = useCallback(
        () => {}
    )
    const cancelAction = useCallback(
        () => {}
    )

    return (
        <Container sx={start_styles}>
            <Box display="grid" gridTemplateColumns="1fr 13.2rem" sx={user_input_styles}>
                <Box sx={{ p: 2, color: '#ddd' }}>
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
                        <DirectionBtn action={moveUp} text="UP" />
                        <Spacer />
                        <DirectionBtn action={moveLeft} text="LF" />
                        <Spacer />
                        <DirectionBtn action={moveRight} text="RT" />
                        <Spacer />
                        <DirectionBtn action={moveDown} text="DN" />
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

export default Init
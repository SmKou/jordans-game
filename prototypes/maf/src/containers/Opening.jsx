import { Box, Container } from "@mui/material"
import { useLocalStorage } from "@uidotdev/usehooks"
import { container_styles } from "../styles"

const dialog = [
    ""
]

function Opening({ setGameState }) {
    const [opening_scene_done, setOpeningSceneDone] = useLocalStorage('opening_scene_done', false)

    return (
        <Container sx={container_styles}>
            <Box display="flex"></Box>
        </Container>
    )
}

export default Opening
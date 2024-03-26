import { Container } from "@mui/material"
import { useLocalStorage } from "@uidotdev/usehooks"

function Introduction({ setGameState }) {
    const [intro_scene_done, setIntroSceneDone] = useLocalStorage('intro_scene_done', false)
    return (
        <Container></Container>
    )
}

export default Introduction
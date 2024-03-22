import { Container } from "@mui/material"
import { useLocalStorage } from "@uidotdev/usehooks"

function Init({ setGameState }) {
    const [init_scene_done, setInitSceneDone] = useLocalStorage('init_scene_done', false)
    return (
        <Container></Container>
    )
}

export default Init
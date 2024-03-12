import { useState } from 'react'
import { Typography, Button, ButtonGroup, useTheme } from '@mui/material'

export default function StartMenu({ setGameState }) {
    const theme = useTheme()
    const start_fonts = theme.typography.start
    const [startFont, setStartFont] = useState(start_fonts.optA)
    return (
        <article>
            <Typography variant="h1" style={startFont}>Jordan's Game</Typography>
            <Typography variant="" style={startFont}></Typography>
            <ButtonGroup orientation="vertical" aria-label="">
                <Button key="">New Game</Button>
                <Button key="">Load Game</Button>
                <Button key="">Options</Button>
            </ButtonGroup>
        </article>
    )
}
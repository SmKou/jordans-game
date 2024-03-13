import { useState } from 'react'
import { Container, Stack, Typography, ButtonGroup, Button } from '@mui/material'
import '@fontsource/bangers'
import '@fontsource/sirin-stencil'
import '@fontsource/swanky-and-moo-moo'
import { fontValues } from '../utils/useInputLayout'

function StartMenu() {
    const [variant, setVariant] = useState('outlined')
    const [newGameColor, setNewGameColor] = useState('warning')
    const [loadGameColor, setLoadGameColor] = useState('success')
    return (
        <Container maxWidth="md">
            <Stack height="100vh" justifyContent="center">
                <Typography 
                    variant="h1"
                    color="white"
                    fontFamily={fontValues.start.Bangers}
                    textAlign="center" 
                    gutterBottom
                >Jordan's Game</Typography>
                <Typography 
                    variant="h4"
                    color="#ccc"
                    fontFamily={fontValues.handwritten}
                    textAlign="center"
                    paddingBottom="3rem"
                >Happy birthday, Jordan!</Typography>
                <ButtonGroup fullWidth aria-label="Start Game">
                    <Button
                        size="medium"
                        variant={variant}
                        color={newGameColor}
                    >New Game</Button>
                    <Button
                        size="medium"
                        variant={variant}
                        color={loadGameColor}
                    >Load Game</Button>
                </ButtonGroup>
            </Stack>
        </Container>
    )
}

export default StartMenu
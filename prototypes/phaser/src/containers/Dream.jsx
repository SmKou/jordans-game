import { useState, useCallback, useEffect } from "react"
import { Box, Typography, Grid, Stack, Button } from "@mui/material"
import '@fontsource/monda'
import '@fontsource/mononoki'
import useLocalStorage from "../utils/useLocalStorage"

function Dream() {
    const storage = useLocalStorage()

    const dialog = [
        { character: "Lucas", text: "Are they a boy or a girl?" },
        { character: "Someboy", text: "I'm amazing!"}, 
        { 
            required: () => {
                setDialogBtns(['boy', 'girl'])
                return (ipt) => {
                    setProtagonistInitialGender(ipt)
                    switch (ipt) {
                        case 'boy':
                            setProtagonistInitialName("Luther")
                            break
                        case 'girl':
                            setProtagonistInitialName("Cassia")
                            break
                    }
                }
            },
            character: "Bruthilda",
            dialog: () => {
                const gender = storage.get('protagonist_initial_gender')
                return `A ${gender === 'M' ? 'boy' : 'girl'}, dear.`
            }
        }
    ]
    const [character_dialog, setCharacterDialog] = useState('')
    const [dialog_index, setDialogIndex] = useState(0)
    const [current_dialog, setCurrentDialog] = useState(dialog[0].text)
    const [dialog_btns, setDialogBtns] = useState([])
    const [protagonist_initial_gender, setProtagonistInitialGender] = useState('')
    const [protagonist_initial_name, setProtagonistInitialName] = useState('')
    const [deuteragonist_gender, setDeuteragonistGender] = useState('')
    const [antagonist_gender, setAntagonistGender] = useState('')

    useEffect(() => {
        if (character_dialog.length < dialog[dialog_index].text.length) {
            const timeoutid = setTimeout(() => setCharacterDialog(character_dialog => character_dialog + dialog[dialog_index].text[character_dialog.length]), 100)
            return () => clearTimeout(timeoutid)
        }
        else
            setDialogIndex(dialog_index + 1)
    }, [character_dialog])
    
}

export default Dream
import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { Box, Typography, Button, Grid, Stack } from '@mui/material'
import { useWindowSize } from '@uidotdev/usehooks'

const addDialog = ({ dialog }) => (
    <Typography
        color="white"
        fontFamily="Mononoki, monospace"
    ></Typography>
)

const addCharacterDialog = ({ name, dialog }) => (
    <Stack 
        direction="row" 
        spacing={{ xs: 2 }}
    >
        <Typography
            sx={{
                border: 1,
                borderRadius: '0.4rem',
                px: 2
            }}
            color="white"
            fontFamily="Monda, monospace"
        >{name}</Typography>
        {addDialog(dialog)}
    </Stack>
)

const Btn = ({ variant, color, xs, action, text }) => (
    <Button
        sx={{
            width: '3.6rem',
            height: '3.6rem',
            borderRadius: '0.6rem'
        }}
        variant={variant}
        color={color}
        xs={xs}
        onClick={action}
    >{text}</Button>
)

const KeyBtn = ({ xs, action, text }) => (
    <Btn variant="contained" color="secondary" xs={xs} action={action} text={text} />
)

const Spacer = () => (
    <Box sx={{ width: '3.8rem', height: '3.8rem' }} />
)

const DirectionBtn = ({ action, text }) => (
    <Btn variant="contained" color="secondary" xs={1} action={action} text={text} />
)

const ActionBtn = ({ color, action, text }) => (
    <Btn variant="outlined" color={color} action={action} text={text} />
)

function UserInput({ update, use_user_input, use_menu, use_dialog, use_keyboard, data, ui }) {
    if (!use_user_input) 
        return null;

    const height = useWindowSize().height

    const menu_ref = useRef()
    const [menu_height, setMenuHeight] = useState(0)
    const dialog_ref = useRef()
    const [dialog_width, setDialogWidth] = useState(0)
    const gamepad_ref = useRef()

    const { touch_enabled, is_mobile, orientation } = ui
    const [dialog_cols, setDialogCols] = useState(2)
    const [using_keys_pad, setUsingKeysPad] = useState(false)
    const [keys, setKeys] = useState([])
    const [key_xs, setKeyXS] = useState({})
    const [keyboard_cols, setKeyboardColumns] = useState(12)

    useLayoutEffect(() => {
        setDialogWidth(dialog_ref.current.offsetWidth)

        const gamepad_height = gamepad_ref.current.offsetHeight
        setMenuHeight(height - gamepad_height)
    }, [height])

    useEffect(() => {
        if (!touch_enabled || !use_keyboard) return;

        const keys_text = []
        const keys_xs = {}
        const cvt = n => String.fromCharCode('a'.charCodeAt(0) + n)

        if (dialog_width >= 749) {
            setKeyboardColumns(13)
            for (let i = 0; i < 26; ++i)
                keys_text.push(cvt(i))
            for (let i = 1; i <= 10; ++i)
                keys_text.push(String(i % 10))
            keys_text.push('SHIFT')
            keys_xs.SHIFT = 1.5
            keys_text.push('SPACE')
            keys_xs.SPACE = 1.5
        }
        else if (dialog_width >= 576) {
            setKeyboardColumns(10)
            for (let i = 1; i <= 10; ++i)
                keys_text.push(String(i % 10))
            for (let i = 0; i < 26; ++i) {
                if (i === 21) {
                    keys_text.push('SHIFT')
                    keys_xs.SHIFT = 2.5
                }
                const c = cvt(i)
                keys_text.push(c)
                if (i < 21) { keys_xs[c] = 1.4 }
            }
            keys_text.push('SPACE')
            keys_xs.SPACE = 2.5
        }
        else {
            setKeyboardColumns(3)
            setUsingKeysPad(true)
            const cvte = n => n < 26 ? cvt(n) : ''
            for (let i = 1; i < 10; ++i)
                for (let j = 0; j < 26; j += 3)
                    keys_text.push(`${i}: ${cvt(j)}${cvt(j + 1)}${cvte(j + 2)}`)
            keys_text.push('SHIFT')
            keys_text.push(String(0))
            keys_text.push('SPACE')
        }

        setKeys(keys_text)
        setKeyXS(keys_xs)
    }, [use_keyboard])

    return (
        <Box width="100%" height="100%">
            <Box ref={menu_ref}
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    height: menu_height
                }}
            >
                {use_menu && 
                    <Stack>
                        
                    </Stack>
                }
            </Box>
            <Box
                display="grid"
                gridTemplateColumns="1fr 13.2rem"
                sx={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    border: 1,
                    borderColor: use_dialog || use_keyboard ? 'white' : 'transparent'
                }}
            >
                <Box ref={dialog_ref}>
                    {use_keyboard && <>
                        <Box color="white" sx={{ width: '100%', height: '1rem' }}></Box>
                        <Grid columns={keyboard_cols}>
                            {keys.map(text => {
                                const xs = key_xs[text] || 1
                                return <KeyBtn 
                                    xs={xs}
                                    action={() => data.press(text)}  
                                    text={text}
                                />
                            })}
                        </Grid>
                    </>}
                    {use_dialog && <></>}
                </Box>
                <Box ref={gamepad_ref}
                    width="13.2rem"
                    display="flex"
                    flexDirection="column"
                    p="0.6rem"
                >
                    <Grid container columns={3} mb="1.2rem" alignItems="center" justifyContent="center">
                        <Spacer />
                        <DirectionBtn action={data.moveUp} text="UP" />
                        <Spacer />
                        <DirectionBtn action={data.moveLeft} text="LF" />
                        <Spacer />
                        <DirectionBtn action={data.moveRight} text="RT" />
                        <Spacer />
                        <DirectionBtn action={data.moveDown} text="DN" />
                        <Spacer />
                    </Grid>
                    <Stack direction="row">
                        <ActionBtn color="success" action={data.confirm} text="A" />
                        <ActionBtn color="error" action={data.cancel} text="B" />
                        <ActionBtn color="primary" action={data.menu} text="X" />
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default UserInput
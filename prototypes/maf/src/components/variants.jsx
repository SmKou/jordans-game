import { Box, Button, Typography, Dialog, DialogTitle, DialogContent, Stack } from '@mui/material'
import { yellow } from '@mui/material/colors'
import { useLocalStorage } from '@uidotdev/usehooks'
import '@fontsource/monda'
import '@fontsource/mononoki'

export const Btn = ({ variant, color, xs, action, text }) => (
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

export const KeyBtn = ({ xs, action, text }) => (
    <Btn variant="contained" color="secondary" xs={xs} action={action} text={text} />
)

export const DialogText = ({ text, color }) => {
    const [selected_font] = useLocalStorage('dialog_font', 'Mononoki')
    const font_color = color ? yellow[600] : 'default'
    return (
        <Typography fontFamily={selected_font + ', monospace'} color={font_color}>{text}</Typography>
    )
}

export const Spacer = () => (
    <Box sx={{ width: '3.8rem', height: '3.8rem' }} />
)

export const DirectionBtn = ({ action, text }) => (
    <Btn variant="contained" color="secondary" xs={1} action={action} text={text} />
)

export const ActionBtn = ({ color, action, text }) => (
    <Btn variant="outlined" color={color} action={action} text={text} />
)

export const DeleteDialog = ({ deleteHistory }) => (
    <Dialog>
        <DialogTitle>Delete Game Data</DialogTitle>
        <DialogContent>
            <DialogText 
                text="You are about to erase all of your game data. Are you sure you would like to proceed?"
                color={false}
            />
            <Stack direction="row">
                <Button onClick={() => {
                    deleteHistory(true)
                    window.localStorage.clear()
                }}>Yes</Button>
                <Button onClick={() => deleteHistory(false)}>No</Button>
            </Stack>
        </DialogContent>
    </Dialog>
)
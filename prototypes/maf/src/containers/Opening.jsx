import { useCallback, useRef, useState, useEffect, useLayoutEffect } from "react"
import { Box, Container, Grid, Stack } from "@mui/material"
import { useLocalStorage, useOrientation, useWindowSize } from "@uidotdev/usehooks"
import { v4 } from "uuid"
import { Spacer, DirectionBtn, ActionBtn, DialogText } from "../components/variants"
import { gamepad_styles, styleContainer, styleUserInput } from "../styles"

import apocalypse from '../assets/apocalypse.jpg'
import xilen from '../assets/xilen_portrait.png'
import brigon from '../assets/brigon_portrait.png'
import krissix from '../assets/krissix_portrait.png'
import astel from '../assets/astel_portrait.png'
import jormon from '../assets/jormon_portrait.png'
import zekiu from '../assets/zekiu_portrait.png'

const portraits = [apocalypse, xilen, brigon, krissix, astel, jormon, zekiu]

const dialog = [
    [
        "Once, there was a time that creatures known as pokemon and humans roamed the lands. They lived together in harmony until the greed and complacency of humanity nearly wiped out all the pokemon, replacing them with machines, and in time, the hatred of the humans nearly drove them to their own extinction. Few specimens remained. Among the machines were six creations, the Orgs, the last hope of the humans that could see that world was dying and hoped for the continuation of life. When great disaster befell the world, the Orgs were unleashed. They saved as many of the remaining humans and pokemon that they could, but they could not make the world livable once more. The world outside was left to the machines led by the Orgs.",
        { 
            src: apocalypse,
            credit: 'camiladenleschi',
            origin: 'https://pixabay.com/illustrations/apocalypse-post-apocalyptic-1325398/'
        }
    ]
    ,
    ["Xilen", { src: xilen }],
    ["Brigon", { src: brigon }],
    ["Krissix", { src: krissix }],
    ["Astel", { src: astel }],
    ["Jormon", { src: jormon }],
    ["Zekiu", { src: zekiu }],
    [
        "In an augmented reality, the Orgs created the forests, grasses, oceans, and weather. In the world outside, the machines thrived and evolved. Peum replaced humans, Geo replaced pokemon, and the Fig protected and managed reality. For centuries, all was well."
    ],
    ["Until the Orgs disappeared."],
    ["Since their disappearance, the augmented reality has begun to fail. The days are numbered, so enjoy them while they last."]
]
const dialog_ids = new Array(dialog.length).fill('').map(() => v4())

function Opening({ setGameState }) {
    const [opening_scene_done, setOpeningSceneDone] = useLocalStorage('opening_scene_done', false)
    const height = useWindowSize().height
    const orientation = useOrientation().type

    const img_ref = useRef()
    const [portraits_height, setPortraitsHeight] = useState(0)
    const [portrait_idx, setPortraitIdx] = useState(0)
    const [img_width, setImgWidth] = useState("")
    const [img_height, setImgHeight] = useState("")
    
    const user_input_ref = useRef()

    const [is_animating_text, setIsAnimatingText] = useState(false)
    const [dialogs, setDialogs] = useState([])
    const [dialog_idx, setDialogIdx] = useState(0)
    const [dialog_text, setDialogText] = useState('')

    useLayoutEffect(
        () => {
            const rem_height = height - user_input_ref.current.offsetHeight
            setPortraitsHeight(rem_height)

            const is_portrait = orientation.includes('portrait')
            if (is_portrait) {
                setImgWidth("100%")
                setImgHeight("auto")
            }
            else {
                setImgWidth("auto")
                setImgHeight("100%")
            }
        }
    )

    useEffect(() => {
        if (!is_animating_text && dialog_text.length < dialog.length) {
            setDialogText(dialog)
            return;
        }

        if (!dialog_text) {
            setDialogs(prev => prev.concat(dialog_text))
        }

        if (dialog_text.length < dialog[dialog_idx].length) {
            
        }
    }, [dialog_text])

    const confirmAction = useCallback(() => {
        if (is_animating_text) {
            setIsAnimatingText(false)
            return;
        }
    })

    const cancelAction = useCallback(() => {})

    return (
        <Container p={0} sx={styleContainer(true)}>
            <Box 
                width="100%" height={portraits_height}
                display="flex" justifyContent="center" alignItems="center"
            >
                <img ref={img_ref} 
                    width={img_width} height={img_height}
                    margin="auto" 
                    src={portraits[portrait_idx]} 
                />
            </Box>
            <Box ref={user_input_ref} 
                display="grid" 
                gridTemplateColumns="1fr 13.2rem" 
                sx={styleUserInput(true)}
            >
                <Box sx={{ p: 2, color: '#ddd' }}>
                    {dialogs.map((dialog, i) => (
                        <DialogText 
                            key={dialog_ids[i]} 
                            text={dialog} 
                            color={i === dialog.length - 1 ? 'active' : 'default'} 
                        />
                    ))}
                </Box>
                <Box sx={gamepad_styles}>
                    <Grid container columns={3} mb="1.2rem" alignItems="center" justifyContent="center">
                        <Spacer />
                        <DirectionBtn disabled text="UP" />
                        <Spacer />
                        <DirectionBtn disabled text="LF" />
                        <Spacer />
                        <DirectionBtn disabled text="RT" />
                        <Spacer />
                        <DirectionBtn disabled text="DN" />
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

export default Opening
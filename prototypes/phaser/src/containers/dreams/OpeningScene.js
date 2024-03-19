/*  Opening Scene
    - Introduction to orgs

    Variables:
    opening_scene_done
*/

import AstelPortait from '../../assets/astel_portrait.png'
import BrigonPortrait from '../../assets/brigon_portrait.png'
import KrissixPortrait from '../../krissix_portrait.png'
import XilenPortrait from '../../xilen_portrait.png'
import ZekiuPortrait from '../../zekiu_portrait.png'

export default function OpeningScene() {
    const [opening_scene_done, setOpeningSceneDone] = useLocalStorage('opening_scene_done', false)
    const [last_line_dialog, setLastLineDialog] = useLocalStorage('last_line_dialog', '')

    const dialog = [
        "There are many stories of the beginning. No one knows which story is the right story, but for a very long time, it did not matter. Because the orgs still lived.",
    ]
}
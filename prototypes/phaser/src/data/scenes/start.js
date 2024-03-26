import { useLocalStorage } from '@uidotdev/usehooks'
import { GameStateValues } from '../values'

export const start = {
    load: () => {
        const opening_scene_done = useLocalStorage('opening_scene_done', false)
        const intro_scene_done = useLocalStorage('intro_scene_done', false)
        const init_scene_done = useLocalStorage('init_scene_done', false)
        if (opening_scene_done && intro_scene_done && init_scene_done)
            return {
                options: ['new game']
            }
        return 
    },
    dialog: {
        options: ['new game', 'load game'],
        callbacks: [
            (load) => {
                if (load()) {
                    return {
                        dialog: "You are about to erase your last game. Are you sure you would like to proceed?",
                        callback: (resp) => {
                            if (resp) {
                                window.localStorage.clear()
                                return { game_state: GameStateValues.DREAM }
                            }
                            else return { game_state: GameStateValues.START }
                        }
                    }
                }
                return { game_state: GameStateValues.DREAM }
            },
            (load) => {
                if (opening_scene_done && intro_scene_done && init_scene_done)
                    return { game_state: GameStateValues.START }
                return {
                    game_state: GameStateValues.DREAM,
                    scene: 'opening_scene'
                }
            }
        ]
    }
}
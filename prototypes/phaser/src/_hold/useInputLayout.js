import { useState } from 'react'
import useLocalStorage from './useLocalStorage'

export const fontValues = {
    start: {
        Bangers: 'Bangers, system-ui',
        SirinStencil: 'Sirin Stencil, system-ui'
    },
    dialog: {
        Monda: 'Monda, monospace',
        Mononoki: 'Mononoki, monospace'
    },
    handwritten: 'Swanky and Moo Moo, cursive'
}

export default function useInputLayout() {
    const storage = useLocalStorage()

    const [user_orients_right, setUserOrientsRight] = useState(storage.get('user_orientation_setting') || true)
    const toggleUserOrientation = () => {
        setUserOrientsRight(!user_orients_right)
        storage.add('user_orientation_setting', !user_orients_right)
    }

    const [device_orientation, setDeviceOrientation] = useState(touch_enabled ? 'portrait' : 'landscape')
    const resetOrientation = useCallback(
        () => {
            const width = window.innerWidth
            const height = window.innerHeight
            const orientation = width > height ? 'landscape' : 'portrait'
            if (device_orientation !== orientation)
                setDeviceOrientation(orientation)
        },
        [device_orientation, setDeviceOrientation]
    )

    return { 
        touch_enabled, 
        is_mobile, 
        user_orients_right, 
        toggleUserOrientation, 
        device_orientation, 
        resetOrientation
    }
}
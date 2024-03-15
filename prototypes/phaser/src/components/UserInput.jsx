import useDeviceType from '../utils/useDeviceType'

function UserInput() {
    const { touch_enabled, is_mobile } = useDeviceType()
    /* Screen keyboard or Native keyboard (desktop) */
    /* Gamepad and ABC: Confirm Cancel Menu */
}

export default UserInput
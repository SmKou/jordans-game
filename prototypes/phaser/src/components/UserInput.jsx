import { useState } from "react"

function UserInput() {
    
    const [useKeyboard, setUseKeyboard] = useState(true)
    const [useDPad, setUseDPad] = useState(true)
    const [usePlayBtns, setUsePlayBtns] = useState(true)

    const userInput = useRef()

    return (
        <footer ref="userInput">

        </footer>
    )
}

export default UserInput
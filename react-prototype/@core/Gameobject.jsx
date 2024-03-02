import React, {} from 'react'

export const GameObjectContext = React.createContext(null)

function Persistence() {
    const { getRef } = useGameObject()
    useGameObjectStore(
        '_gameObject',
        () => {
            const self = getRef()
            return {
                x: self.transform.x,
                y: self.transform.y,
                disabled: self.disabled
            }
        },
        stored => {
            const self = getRef()
            self.setDisabled(stored.disabled)
        }
    )
    return null
}

export default function GameObject({
    name,
    displayName,
    layer,
    children,
    initialDisabled = false,
    persisted = false,
    ...props
}) {
    const identifier = useRef(Symbol('GameObject'))
    const node = useRef(null)
}
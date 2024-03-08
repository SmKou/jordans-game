import { HTML } from '@react-three/drei'
import { useGame } from './helpers'
import { useEffect } from 'react'

export default function HtmlOverlay({ children, ...props }) {
    const { paused } = useGame()
    const node = useRef()
    useEffect(() => {
        if (node.current?.parentElement) {
            node.current.parentElement.style.pointerEvents = 'none'
            node.current.parentElement.style.whiteSpace = 'nowrap'
        }
    })
    if (paused) return null
    return (
        <HTML ref={node} zIndexRange={[0, 0]} eps={0.1} {...props}>
            {children}
        </HTML>
    )
}
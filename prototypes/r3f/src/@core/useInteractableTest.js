import { useCallback } from "react";
import useGame from "./useGame";
import useGameObject from "./useGameObject";

export default function useInteractableTest() {
    const { findGameObjectsByXY } = useGame()
    const { id } = useGameObject() || {}
    return useCallback(
        (position) => {
            const { x, y } = position
            return findGameObjectsByXY(x, y)
            .some(gameObj => {
                if (gameObj.id === id)
                    return false
                const interactable = gameObj.getComponent('Interactable')
                return !!interactable
            })
        },
        [id, findGameObjectsByXY]
    )
}
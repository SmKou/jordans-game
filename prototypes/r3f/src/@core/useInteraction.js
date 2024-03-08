import useGameObjectEvent from './useGameObjectEvent'

export default function useInteraction(callback) {
    useGameObjectEvent('interaction', callback, [callback])
}
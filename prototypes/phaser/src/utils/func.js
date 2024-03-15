export function random(mean = 0, std = 1) {
    const u = Math.random()
    const v = Math.random()
    const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
    return z * std + mean
}

const hasRareAbility = () => Math.abs(random()) > 1
const hasSuperRareAbility = () => Math.abs(random()) > 2

/* Abilities */

export const doppelganger = (move) => {}
export const impostor = (move) => {}
export const limber = (move) => {}

/* Moves */


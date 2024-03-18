
const STAB = (origin, move) => origin.type === move.type ? 2 : 1
const SETAB = (origin, env) => origin.type === env.type ? 1.5 : 1

/* https://mika-s.github.io/javascript/random/normal-distributed/2019/05/15/generating-normally-distributed-random-numbers-in-javascript.html */
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


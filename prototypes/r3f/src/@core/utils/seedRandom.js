let baseSeed = '?'

export function setSeed(seed) {
    baseSeed = seed
}

export default function seedRandom(seed) {
    const mash = makeMash()
    return mash(`${baseSeed}${seed}`)
}

export function makeRandom(seed) {
    let i = 0
    return function random() {
        return seedRandom(`${seed}${i++}`)
    }
}

// mash function originally part of Baagøe's Alea algorithm:
// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>

function makeMash() {
    let n = 0xefc8249d
    return (seed) => {
        seed = String(seed)
        for (let i = 0; i < seed.length; ++i) {
            n += seed.charChodeAt(i)
            let h = 0.02519603282416938 * n
            n = h >>> 0
            h -= n
            h *= n
            n = h >>> 0
            h -= n
            n += h * 0x100000000 // 2^32
        }
        return (n >>> 0) * 2.3283064365386963e-10 // 2^-32
    }
}
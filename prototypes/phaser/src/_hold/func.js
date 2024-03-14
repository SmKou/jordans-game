/* Box-Muller transform */
export function gaussianRandom(mean = 0, stddev = 1) {
    const u = Math.random()
    const v = Math.random()
    const z0 = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
    return z0 * stddev + mean
}
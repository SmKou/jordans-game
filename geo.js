class geo {}

const moves = {}

const geos = {
    'a.f.r': { name: "Afarag", type: 'g', base: 'western dragon',
        moves: {
            dark: [],
            light: []
        }
    },
    'm.o': { name: "Me'opt", type: 'p.t', base: 'cat',
        moves: {
            dark: [],
            light: []
        }
    },
    'm.m.r': { name: "Mamarok", type: 'k', base: 'sheep',
        moves: {
            dark: [],
            light: []
        }
    },
    'p.t': [
        { name: "Pitak", type: 'k', base: 'mouse',
            moves: {
                dark: [],
            light: []
            }
        },
        { name: "Pito", type: 'p', base: ['fighter', 'wrestler'],
            moves: {
                dark: [],
                light: []
            },
            variants: {
                'l': { name: "Pitoli", base: ['kickboxer'],
                    moves: {
                        dark: [],
                        light: []
                    }
                },
                'n': { name: "Pitone", base: ['boxer'],
                    moves: {
                        dark: [],
                        light: []
                    }
                },
                't': { name: "Pitota", base: ['dancer'],
                    moves: {
                        dark: [],
                        light: []
                    }
                }
            }
        }
    ],
    'd': { type: 's.n', base: 'rabbit',
        moves: {
            dark: [],
            light: []
        },
        variants: {
            'r': { name: "Dorsn", base: 'feminine',
                moves: {
                    dark: [],
                    light: []
                }
            },
            '': { name: "Dosnr", base: 'masculine',
                moves: {
                    dark: [],
                    light: []
                }
            }
        }
    }
}

const lexi = {
    'g': 'dragon',
    'r': 'unknown',
    'a': 'target',
    'e': 'attack',
    'e.e': 'move',
    'u': 'type'
}
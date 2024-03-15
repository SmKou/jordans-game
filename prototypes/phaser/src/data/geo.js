export const GeoTypes = {
    DRAGON: 'dragon',
    ELECTRIC: 'electric',
    FIRE: 'fire',
    FORCE: 'force',
    GHOST: 'ghost',
    GRASS: 'grass',
    GROUND: 'ground',
    ICE: 'ice',
    POISON: 'poison',
    PSYCHIC: 'psychic',
    ROCK: 'rock',
    WATER: 'water',
    NORMAL: 'normal'
}

export const GeoModes = {
    STANDARD: 'standard',
    SHINY: 'shiny',
    SWEET: 'sweet'
}

export const GeoClasses = { DARK: 'dark', LIGHT: 'light' }

const Geos = {
    "matodipt": {
        name: "matodipt",
        type: GeoTypes.NORMAL,
        description: "",
        anims: {},
        abilities: [
            {
                name: "limber",
                description: "Prevent paralysis."
            },
            { 
                name: "impostor", 
                description: "Transform itself and gain the abilities and moves of a visible target.",
            },
            {
                name: "doppelganger",
                description: "Counter psychic abilities that might identify an impostor."
            }
        ],
        moves: {
            dark: [ [], [], [], [], [], [] ],
            light: [ [], [], [], [], [], [] ],
        }
    },
    "me'opt": {
        name: "me'opt",
        type: GeoTypes.NORMAL,
        description: "",
        anims: {},
        abilities: [
            { name: "", description: "" },
            { name: "", description: "" },
            { name: "", description: "" }
        ],
        moves: {
            dark: [ [], [], [], [], [], [] ],
            light: [ [], [], [], [], [], [] ],
        }
    },
    "gasen": {
        name: "gasen",
        type: GeoTypes.GHOST,
        description: "",
        anims: {},
        abilities: [
            { name: "", description: "" },
            { name: "", description: "" },
            { name: "", description: "" }
        ],
        moves: {
            dark: [ [], [], [], [], [], [] ],
            light: [ [], [], [], [], [], [] ],
        }
    },
    "basas": {
        name: "basas",
        type: GeoTypes.GRASS,
        description: "",
        anims: {},
        abilities: [
            { name: "", description: "" },
            { name: "", description: "" },
            { name: "", description: "" }
        ],
        moves: {
            dark: [ [], [], [], [], [], [] ],
            light: [ [], [], [], [], [], [] ],
        }
    },
    "tarif": {
        name: "tarif",
        type: GeoTypes.FIRE,
        description: "",
        anims: {},
        abilities: [
            { name: "", description: "" },
            { name: "", description: "" },
            { name: "", description: "" }
        ],
        moves: {
            dark: [ [], [], [], [], [], [] ],
            light: [ [], [], [], [], [], [] ],
        }
    },
    "siriz": {
        name: "siriz",
        type: GeoTypes.WATER,
        description: "",
        anims: {},
        abilities: [
            { name: "", description: "" },
            { name: "", description: "" },
            { name: "", description: "" }
        ],
        moves: {
            dark: [ [], [], [], [], [], [] ],
            light: [ [], [], [], [], [], [] ],
        }
    }
}
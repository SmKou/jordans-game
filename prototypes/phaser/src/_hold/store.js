import { useCallback, useMemo } from "react"
import { gaussianRandom } from "./func"

export const Geos = useMemo(
    () => {
        const hasRareAbility = (ability) => {
            const r = gaussianRandom()
            return Math.abs(r) > 1 ? ability : false
        }
        
        const hasSuperRareAbility = () => {
            const r = gaussianRandom()
            return Math.abs(r) > 2 ? ability : false
        }
        
        const hasAbility = (ability, rarity) => {
            switch (rarity) {
                case 'common':
                    return () => ability
                case 'rare':
                    return () => hasRareAbility(ability)
                case 'super':
                    return () => hasSuperRareAbility(ability)
            }
        }
        
        const geoAbility = (n1, d1, a1) => (n2, d2, a2) => (n3, d3, a3) => [
            { name: n1, description: d1, hasAbility: hasAbility(a1, 'common') },
            { name: n2, description: d2, hasAbility: hasAbility(a2, 'rare') },
            { name: n3, description: d3, hasAbility: hasAbility(a3, 'super') }
        ]
        
        const moves = (arr2d) => {
            const group = []
            for (const v of arr2d) {
                const [n, e, i, a, p, o] = v
                group.push({ 
                    name: n, 
                    effects: e, 
                    impact: i, 
                    accuracy: a, 
                    power: p, 
                    priority: o 
                })
            }
            return group
        }
        
        const geoMoves = (dark, light) => ({ dark: moves(dark) , light: moves(light) })
        
        const geoData = (species, type, description, anims, ability, moves) => ({ species, type, description, anims, ability, moves })
        
        return {
            "matodipt": geoData( "matodipt", Traits.types.NORMAL, 
                "", 
                {},
                geoAbility
                ("imposter", "Transform itself and gain the abilities of a visible target.", {})
                ("limber", "Prevents paralysis.", {})
                ("clone", "Transform itself and gain the abilities and moves of a visible target.", {}),
                geoMoves(
                    [
                        ["transform", (target) => {}, 100, 100, 10, 0],
                        []
                    ], // dark moves
                    [
                        ["transform", (target) => {}, 100, 100, 10, 0]
                    ] // light moves
                )
            ),
            "me'opt": {
                type: Traits.types.NORMAL,
                description: "",
                anims: {},
                ability: [
                    {
                        name: "pickup",
                        description: "Picks up items when it wanders.",
                        hasAbility: () => {}
                    }
                ]
            },
            "afarag": geoData( "afarag", Traits.types.DRAGON, "", {},
                geoAbility
                ("rivalry", "Deals more damage to a target of the same species or type.", {})
                ("unnerve", "Makes a target nervous and unable to accept items and their effects.", {})
                ("wave reaction", "Extends a move to attack a hidden or unreachable target.", {}),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "bameg": geoData( "bameg", Traits.types.DRAGON, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "darog": geoData( "darog", Traits,types.DRAGON, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "mamarok": geoData("mamarok", Traits.types.ELECTRIC, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "pitak": geoData("pitak", Traits.types.ELECTRIC, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "velok": geoData("velok", Traits.types.ELECTRIC, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
            "": geoData("", Traits.types, "", {},
                geoAbility()()(),
                geoMoves( [ [], [], [], [] ], [ [], [], [], [] ])
            ),
        }
    }
)

export const GeoStage = useCallback(
    (mode, geo) => {
        const geo_stage_naming = {
            [Traits.modes.STANDARD]: [
                (name) => 'u' + name,
                (name) => 'i' + name,
                (name) => 'ui' + name
            ],
            [Traits.modes.SHINY]: [
                (name) => 'a' + name,
                (name) => name + 'o',
                (name) => 'a' + name + 'o'
            ],
            [Traits.modes.SWEET]: [
                (name) => name + 'u',
                (name) => name + 'i',
                (name) => name + 'ui'
            ]
        }
        
        switch (mode) {
            case Traits.modes.STANDARD:
                return geo_stage_naming[Traits.modes.STANDARD][geo.stage](geo.species)
            case Traits.modes.SHINY:
                return geo_stage_naming[Traits.modes.SHINY][geo.stage][geo.species]
            case Traits.modes.SWEET:
                return geo_stage_naming[Traits.modes.SWEET][geo.stage][geo.species]
        }
    },
    [Traits]
)

export const Legendaries = {
    "rakkuvu": {},
    "zakkopu": {}
}

export const Peums = {}

export const Figs = {}
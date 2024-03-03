/* --------------------------------------------- MAP | TERRAIN */

class Terrain {
    constructor(objects = []) {
        this.objects = objects
    }
}

class Water extends Terrain {
    static type = 'water'
    static move = 'swim'

    constructor(deep_water = false) {
        super()
        this.depth = deep_water
    }
}

class Dirt extends Terrain {
    static type = 'dirt'
    static move = 'walk'

    constructor() {
        super()
    }
}

class Grass extends Terrain {
    static type = 'grass'
    static move = 'walk'

    constructor(tall_grass = false) {
        super()
        this.height = tall_grass
    }
}

class Pavement extends Terrain {
    static type = 'pavement'
    static move = 'walk'

    constructor() {
        super()
    }
}

/* Town or Route */
class Segment {
    static type = 'town'
    static type = 'walk'

    constructor(name) {
        this.name = name
        this.map = []
        this.buildings = []
        this.npc = {
            peum: {},
            fig: {}
        }
    }
}

/*  Building
    Addr: classifier
    Status: un|locked
    Contains rooms
*/
class Building {
    constructor(bottomLeftCorner, width, length, door) {
        this.pos = {
            x: bottomLeftCorner.x,
            y: bottomLeftCorner.y
        }
        this.dim = {
            w: width,
            l: length
        }
        this.door = door
    }
}

/*  Room
    Status: un|locked
    Contains items and furniture
    Permissions
*/
class Room {
    constructor() {}
}

class Door {
    constructor(status, offset) {
        this.status = status
        // true: unlocked, false: locked
        this.offset = offset
    }
}

/* ------------------------------------------------- CHARACTER */

class Character {
    constructor(name, creature, age, level, pos, dir = { x: 0, y: -1 }) {
        this.name = name
        this.id = name.toLowerCase()
        this.creature = creature
        this.age = age
        this.level = level
        this.pos = pos
        this.dir = dir

        this.hp = 100
        this.energy = 100
        this.stamina = 100
        this.spirit = 100 - age

        this.attack = 0
        this.defense = 0
        this.speed = 0
        this.evasion = 0

        this.rider = false
        this.mount = false
    }

    direction(dir, origin = false) {
        if (origin) {
        }
        else {
            if (dir.x === -1)
                return 'left'
            else if (dir.x === 1)
                return 'right'

            if (dir.y === -1)
                return 'up'
            else if (dir.y === 1)
                return 'down'
        }
    }

    turn(dir) {
        const d = direction(dir, this.dir)
        this.dir = dir
        return this.print('turned', d)
    }

    print(action, target) {
        return `${this.name} ${action} ${target}`
    }

    walk(dir) {
        if (this.dir !== dir)
            return this.turn(dir)
        this.pos.x += dir.x
        this.pos.y += dir.y
        if (this.rider)
            this.stamina -= 2
        else
            this.stamina -= 1
        return this.print('walked', direction(dir))
    }

    run(dir) {
        if (this.dir !== dir)
            return this.turn(dir)
        this.pos.x += dir.x * 2
        this.pox.y += dir.y * 2
        if (this.rider)
            this.stamina -= 3
        else
            this.stamina -= 2
        return this.print('ran', direction(dir))
    }

    swim(dir) {
        if (this.dir !== dir)
            return this.turn(dir)
        this.pos.x += dir.x
        this.pos.y += dir.y
        if (this.rider)
            this.stamina -= 3
        else
            this.stamina -= 2
        return this.print('swam', direction(dir))
    }

    ride(dir, run) {
        if (!this.mount) return;
        if (run)
            return this.mount.run(dir)
        else
            return this.mount.walk(dir)
    }
}

class Inventory {
    constructor() {
        this.items = {}
    }
}

class PeumInventory extends Inventory {
    constructor() {
        super()
        this.geos = {}
        this.food = {}
    }
}

class PlayerInventory extends PeumInventory {
    constructor() {
        super()
        this.map = {}
    }
}

/*
Mom
Prof. Leech (principal investigator)
Rival: Genie du Lamp
Friend: Jackie Skellington

Researcher:
Sub-investigator
Data coordinator
Regulatory coordinator
Research coordinator
Researcher [3]
Field expert: 

UTN worker:
Packager
Rider
Package Scanner
Cashier
*/
class Peum {
    constructor() {}
}

class Player extends Peum {
    constructor(pos) {
        this.pos = pos
    }
}

/*
Me'opt
Gasen
Matodipt

Tarif
Basas
Siriz

Legendaries
- 6 birds and dogs
- 6 (pokemon)
*/
class Geo {
    constructor() {
        this.loyalty = 0
        this.trust = 0
    }
}

/* 
Opt 
*/
class Fig {
    constructor() {}
}

/* -------------------------------------------- WORLD_MANAGER */

class Game {
    static speed = 1
    // Godot: speed of movement, move (change map location)

    constructor() {
        this.player = new Player({ x: 0, y: 0 })
    }
}

const Town = new Segment()
Town.buildings = [
    new Building({ x: 2, y: 3}, 3, 3, new Door(false, 1))
]
Town.map = [
    [
        new Grass(true),
        new Grass(true),
        new Grass(),
        new Water(),
        new Water(true)
    ],
    [
        new Grass(true),
        new Grass(),
        new Grass(),
        new Water(),
        new Water()
    ],
    [
        Town.buildings[0],
        new Dirt(),
        new Dirt()
    ],
    [
        Town.buildings[0],
        new Pavement(),
        new Pavement()
    ],
    [
        Town.buildings[0],
        new Pavement(),
        new Pavement()
    ]
]

Town.buildings[0]

/* ------------------------------------------------ UI | Text */

const syst = document.querySelector('.syst')
const time = document.querySelector('.time')
const ipt = document.querySelector('.ipt')

const init = (...args) => {
    const game_time = [0, 0, 0]

    const increment = () => {
        game_time[2] += 1
        if (game_time[2] === 60) {
            game_time[1] += 1
            game_time[2] = 0
        }

        if (game_time[1] === 60) {
            game_time[0] += 1
            game_time[1] = 0
        }

        if (game_time[0] === 24)
            game_time[0] = 0
    }

    const get_time = () => game_time

    const start = () => {
        for (const arg of args)
            arg(get_time())
        setTimeout(() => {
            increment()
            start()
        }, 166 + 2 / 3)
    }

    start()
}

const add_line = (text, isPlayer = false, isSpoken = false) => {
    const p = document.createElement('p')
    p.setAttribute('class', `${isPlayer ? 'player' : ''} ${isSpoken ? 'speech' : ''}`)
    p.append(document.createTextNode(text))
    syst.append(p)
}

const update = (gametime) => time.innerHTML = gametime.join(':')
init(update)

ipt.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
    }
})
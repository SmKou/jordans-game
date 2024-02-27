

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

/*  Inventory (bag)
    Contains map, geos, items, food
*/
class Inventory {
    constructor() {
        this.map = ''
        this.geos = {}
        this.items = {}
        this.food = {}
    }
}

class Character {
    constructor(name, home_addr, relation = '') {
        this.name = name
        this.addr = home_addr
        this.relation = relation

        this.task = ''
        this.pos = { x: 0, y: 0 }
        this.face = { x: 1, y: 0 }
        this.anim = false
        this.companion = new Array(2)
        
        this.inventory = new Inventory()
    }

    move(env_type, dir, run = false) {
        if (dir.x !== this.face.x || dir.y !== this.face.y) {
            this.face.x = dir.x
            this.face.y = dir.y
        }
        else {
            const speed = run && ['town', 'bldg', 'grass'].includes(env_type) ? 2 * state.speed : state.speed
            this.pos.x += dir.x * speed
            this.pos.y += dir.y * speed
        }

        let animation;
        switch (env_type) {
            case 'water':
                if (dir.x !== 0 || dir.y !== 0)
                    animation = 'swim'
                else
                    animation = 'float'
                break
            case 'town':
            case 'bldg':
            case 'grass':
                if (dir.x !== 0 || dir.y !== 0)
                    if (run)
                        animation = 'run'
                    else
                        animation = 'walk'
                else
                    if (objs.length && objs.includes('chair'))
                        animation = 'sit'
                    else
                        animation = 'stand'
        }

        switch (this.face.x) {
            case -1:
                this.anim = flip(anims[animation + '_side'])
                break
            case 1:
                this.anim = anims[animation + '_side']
                break
        }

        switch (this.face.y) {
            case -1:
                this.anim = anims[animation + '_up']
                break
            case 1:
                this.anim = anims[animation + '_down']
                break
        }
    }
}


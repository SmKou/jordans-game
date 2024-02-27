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

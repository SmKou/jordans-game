# Note

**Game**
```js
class Creature {
    constructor() {
        
    }


}

class Geo extends Creature {}
class Fig extends Creature {}
class Peum extends Creature {}

const eat = (food = '') => {
    if (!food || food.type !== 'food') return;
}

const geos_index = {
    
}
```

**Geos**
```js
const STATUS = {
    none: { 
        title: 'None',
        special_condition: false
    },
    burned: { 
        title: 'Burned',
        special_condition: false
    },
    confused: { 
        title: 'Confused',
        special_condition: false
    },
    frozen: { 
        title: 'Frozen',
        special_condition: false
    },
    infatuation: { 
        title: 'Infatuation',
        special_condition: false
    },
    paralyzed: { 
        title: 'Paralyzed',
        special_condition: false
    },
    poisoned: { 
        title: 'Poisoned',
        special_condition: false
    },
    sleep: { 
        title: 'Sleep',
        special_condition: false
    },
    badly_poisoned: {
        title: 'Badly Poisoned',
        special_condition: true
    },
    flinch: {
        title: 'Flinch',
        special_condition: true
    },
    leech: {
        title: 'Leeched',
        special_condition: true
    }
}

const TYPE = {
    dragon: { title: 'Dragon' },
    electric: { title: 'Electric' },
    fire: { title: 'Fire' },
    force: { title: 'Force' },
    ghost: { title: 'Ghost' },
    grass: { title: 'Grass' },
    ground: { title: 'Ground' },
    ice: { title: 'Ice' },
    poison: { title: 'Poison' },
    psychic: { title: 'Psychic' },
    rock: { title: 'Rock' },
    water: { title: 'Water' }
}

const EFFECTIVENESS = [
    { title: 'no effect', verb: 'had', bonus: 0 },
    { title: 'not very effective', verb: 'was', bonus: 0.5 },
    { title: '', verb: '', bonus: 1 },
    { title: 'super effective', verb: 'was', bonus: 2 }
]

/* Same Type Attack Bonus */
const STAB = (creature, move) => creature.type === move.type ? 2 : 1
const SETAB = (creature, env) => creature.type === env.type ? 1.5 : 1

class Creature {
    constructor(energy, hp, memo, attack, defense, speed, evasion, accuracy) {
        this.energy = energy
        this.hp = hp
        this.memo = memo
        this.attack = attack
        this.defense = defense
        this.speed = speed
        this.evasion = evasion
        this.accuracy = accuracy
        this.status = STATUS.none
    }

    attack() {

    }
}

class Geo extends Creature {}
class Fig extends Creature {}
class Peum extends Creature {}
```

## UI

```js
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
```

```css
* {
	box-sizing: border-box;
	-ms-overflow-style: none;
	scrollbar-width: none;
	scroll-behavior: smooth;
}

*::-webkit-scrollbar { display: none }

html { font-size: 62.5% }

body {
	position: relative;
	margin: 0;
	height: 100vh;
	overflow: hidden;
}

header {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 3.6rem;
	color: white;
	background: black;
	display: flex;
	align-items: center;
}

header h2 { 
	margin: 0;
	margin-left: 1.6rem;
	font-family: sans-serif;
}

main {
	position: absolute;
	top: 3.6rem;
	left: 0;
	width: 100%;
	height: calc(100% - 3.6rem);
	display: flex;
	align-items: center;
	justify-content: center;
}

.container {
	width: 100%;
	max-width: 42rem;
	height: 100%;
	max-height: 42rem;
	border: 0.1rem solid black;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
}

section {
	width: 100%;
	height: calc(100% - 2.4rem);
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	overflow-y: scroll;
}

section p {
	width: 70%;
	margin: 1.2rem;
	padding: 0.6rem;
	border: 0.6rem ridge #ddd;
	border-radius: 0.6rem;
	color: #eee;
	background: #222;
	font-family: 'sans-serif';
	font-size: 1.6rem;
}

p.player { align-self: flex-start }

p.speech {
	border-color: #222;
	color: #222;
	background: #eee;
}

.user {
	width: 100%;
	height: 2.4rem;
	display: grid;
	grid-template-columns: 8rem 1fr;
}

.time {
	border: 0.1rem solid black;
	border-top-width: 0.2rem;
	border-right-width: 0.2rem;
	font-size: 1.6rem;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
}

input {
	width: 100%;
	height: 100%;
	border-left: 0;
	border-right: 0;
	font-size: 1.6rem; 
}

```
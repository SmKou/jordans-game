class Character {
    constructor(name, creature, age, level) {
        this.name = name
        this.creature = creature
        this.age = age
        this.level = level

        this.hp = 100
        this.energy = 100
        this.stamina = 100
        this.spirit = 100 - age

        this.attack = 0
        this.defense = 0
        this.speed = 0
        this.evasion = 0
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
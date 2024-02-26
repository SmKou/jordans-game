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
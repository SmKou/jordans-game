/*  What are characters capable of?

    Speak
    - Statement
    - Answer
    - Follow
    - Lead
    - Bump
    Walk or run
    Swim
    Dive
    Ride
    Fly
    Fish
    Cut or break
    Activate item
    - Use
    - Give
    - Open or close
    Appeal (geo)
    Capture (geo)
    Release (geo)
    Battle or training

    Eat or charge
    Sleep (dream or save game)

    Attack (use move)
    Defend (react to move)

    Give (charge)
    Make (art | item)
    Buy (item)
    Sell (item)
*/

function init() {
    const global = {
        time: {
            stamp: [0, 0],
            HOUR: 0,
            MIN: 1,
            increment: function() {
                this.stamp[this.MIN] += 1
                if (this.stamp[this.MIN] === 60) {
                    this.stamp[this.HOUR] += 1
                    this.stamp[this.MIN] = 0
                }
                if (this.stamp[this.HOUR] === 24)
                    this.stamp[this.HOUR] = 0
            },
            get_time() {
                return `${this.stamp[this.HOUR]}:${this.stamp[this.MIN]}`
            }
        },
    }

    const start = () => {
        setTimeout(() => {
            global.increment()
            start()
        }, 10 * 1000)
    }

    return {
        get_time: global.time.get_time
    }
}



const map = [
    [ 
        { terrain: 'water' }, // 0,0
        { terrain: 'water' }, // 0,1
        { terrain: 'grass' }, // 0,2
        { terrain: 'grass' }, // 0,3
        { terrain: 'grass' }, // 0,4
    ],
    [
        { terrain: 'water' },
        { terrain: 'water' },
        { terrain: 'dirt' },
        { terrain: 'dirt' },
        { terrain: 'dirt' },
    ],
    [
        { terrain: 'town' },
        { terrain: 'town' },
        { terrain: 'bldg' },
        { terrain: 'bldg' },
        { terrain: 'bldg' },
    ],
    [
        { terrain: 'town' },
        { terrain: 'town' },
        { terrain: 'bldg' },
        { terrain: 'bldg' },
        { terrain: 'bldg' },
    ],
    [
        { terrain: 'town' },
        { terrain: 'town' },
        { terrain: 'bldg' },
        { terrain: 'bldg' },
        { terrain: 'bldg' },
    ]
]

const bldg = {
    corner: { x: 2, y: 5 }, // bottom left
    length: 3,
    width: 3,
    door: {
        pos: { x: 3, y: 3 },
        dir: { x: 0, y: 1 }
    }
}

const state = {
    speed: 16,
    step: 1,
    curr: { x: 2, y: 0 },
    objs: []
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
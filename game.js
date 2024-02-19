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
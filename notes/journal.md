# Journal

[2024 Mar. 14](#2024-3-14)
[2024 Mar. 13](#2024-3-13)
[2024 Feb. 29](#2024-2-29)
[2024 Feb. 27](#2024-2-27)
[2024 Feb. 26](#2024-2-26)
[2024 Feb. 25](#2024-2-25) - Opening and transition
[2024 Feb. 3](#2024-2-3) - Opening dialog
[2024 Feb. 1](#2024-2-1) - Geo bonding, traits, and battle
[2024 Jan. 31](#2024-1-31) - Index of cities and geos per route, lexicon for geo-fig language, character stats and traits, and notes on actions
[2024 Jan. 30](#2024-1-30) - Consideration of research, geo therapist, and mode preference

## 2024-3-14

How to avoid the leveling grind?

Battle + Craft => Experience

Experience =>
    impact++ per move 
    & accuracy++ per move

Geo evolution => power++ per move 
- ASAP advantage: gain attack and speed boost
- DG advantage: retain defenses and accuracy

Evolution is sudden and can be shocking. The consequences of evolving once possible is a lowering of a geo's defenses and accuracy, which must be recovered over time. Regardless of when a geo evolves, the additional boost in attack and speed they gain will also wear off over time. It is preferable to wait for a geo to be ready to evolve. In other words, cancel the evolution until the geo appeals to evolve.

Stats
- energy
- stamina (HP)
- attack: physical | effect-based
- defense: physical | effect-based
- accuracy
- speed
- evasion



## 2024-3-13

This whole time, because Jordan's Game is derived from Pokemon, I've been using it as the base model. However, I'm not sure it works anymore. If every geo is unique, what factors determine that they are unique?

Geos, figs, and peums have energy, stamina, and a life essence called memo. While geos can be dark (offensive) or light (defensive), figs and peums can use both dark and light moves. In battle, geos have three modes: standard, shiny and sweet. A standard geo has advances in strength and dealing damage, a shiny geo has advances in speed and evasion, while a sweet geo has advances in resilience, regaining stamina faster and nullifying type advantages. Memo manifests with types, namely dragon, force, lightning, water, ice, fire, poison, psychic, ghost, grass, ground, and rock. Every geo, except two, have one to two evolutions and evolve based on experience and team dynamics. _If a geo evolves as soon as it is able, it gains a new move, more power per move, and an ability, whereas if a geo evolves later, it gains the new move, does not gain the ability, and converts the experience gained since into its mode advantages._

_Need to test the battle system._

In the game, there are 6 pokemon, 6 legendaries, and 13 figs. For geos, there are 55 species. There should be something to distinguish the pokemon and geos from the figs and legendaries. Peums have a different system.

To make every geo, legendary, fig and pokemon unique...

**ActionEvent**: A datum containing the details of an action

### Storylines

Family reunion
- pokemon
- protagonist

Battle Master = Defeat every peum, fig, geo, and legendary
League Champion = Collect every badge and defeat every trainer of the league

Crafter
Trader
Messenger
Baker

### Game Settings

Text size
Text speed: { SLOW: 0.08, MED: 0.05, FAST: 0.03 }

Sound
Key bindings
Interface

### Dream

**Chosen One**
You are not a chosen one. Do you understand why?
INPUT => yes | no
- yes: INPUT => player_answers: why_chosen_one
A chosen one is not and does not become chosen because they are chosen by others or themselves. They become chosen when they choose the people, to stand for them and to stand with them, and most importantly, the people have all agreed. But not every chosen one is good. Being chosen has nothing to do with whether you or your intent is good or evil.
So will you be a chosen one?
INPUT => yes | no
- yes: If that is so, who are your people? Are you good or evil?

```js
const genders = {
    m: ['male', 'boy', 'man', 'men'],
    f: ['female', 'girl', 'woman', 'women'],
    n: ['neutral', 'kid', 'adult', 'neutrals'],
    i: ['intersexual', 'kid', 'adult', 'intersexuals']
}

// const find_gender = (gender) => {
//     for (const v of Object.keys(genders))
//         if (genders[v].includes(gender)) return v;
//     return ''
// }

// const quantify = (arr) => {
//     const diff = []
//     for (const v of arr)
//         if (!diff.includes(v)) { diff.push(v) }
//     return diff
// }

// const gender = (character) => {
//     if (Array.isArray(character)) {
//         if (!character.length) return '';
//         else if (character.length === 1) { character = character[0] }
//         else {
//             const c_genders = []
//             c_genders.push(find_gender(character[0].main_gender))
//             c_genders.push(find_gender(character[1].main_gender))
//             for (let i = 2; i < character.length; ++i)
//                 c_genders.push(find_gender(character[i].main_gender))
//             const allOneGender = quantify(c_genders)
//             const allOneAgeGroup = quantify(character.map(c => c.age_group))
//         }
//     }

//     const k = find_gender(character.main_gender)
// }

const scripts = {
    opening: [
        { lucas: {
            ipt: [],
            dialog: () => "Are they a boy or a girl?"
        }},
        { bruthilda: {
            ipt: ['player'],
            dialog: (player) => `A ${genders[player.init_gender][1]}, dear`
        }},
        { lucas: {
            ipt: [],
            dialog: () => "What do we name them?"
        }},
        { bruthilda: {
            ipt: ['player'],
            helper: (player) => {
                const name = player.init_gender === 'm' ? "Luther" : "Cassia"
                player.init_name = name
                return name
            },
            dialog: (player, name = this.helper(player)) => `${name}. ${name} is a good name, I think.`
        }},
        { lucas: {
            ipt: [],
            dialog: () => "Hm? What is it?"
        }},
        { bruthilda: {
            ipt: ['player'],
            dialog: (player) => `Nothing, love. ${player.init_name} will do.`
        }},
        { lucas: {
            ipt: [],
            dialog: () => "I agree. Did you hear about Skellington's kid? I bet our children will get along. Were they a boy or a girl?"
        }},
        { bruthilda: {
            ipt: ['deuteragonist'],
            dialog: (deuteragonist) => ``
        }}
    ]
}
```

## 2024-2-29

A survival monster-battling rpg, where a player collects charges and geos, that either opposes or assists trafficking of people, geos and materials.

Time in game: 2 hours of play = 1 day
- slow down game time when player battles or interacts
- Can never fully restore stamina except by sleeping
- Sleep => dream

**Story**

Gio|Vanya is a sixteen-year-old who heads out to become the Champion. On their way, they collect charges and geos, battling trainers, gym leaders, and either freedom fighters or corporate grunts.

Note: Moloch - pursuit of success, power, change, or a competitive advantage by sacrifice

### Characters

Properties
- Name
- Origin: Apt unit | House, Town
- Location: Coordinates - Town | Route
- Items
- Geos
- Routine: daily sequence of activities
- Objective: goal or task to complete
- Events 

### Geos

A geo is a creature with a personality determining its traits and preferences, a type determining its physical and magical abilities, and moves it can enact to survive or battle. Every geo has its own preference to either ascribe to dark or light attributes. Dark attributes enable attacks and protection, while light attributes enable defense and healing.

Appearance
- storage
- battle (front and back)
- research journal
- walk-run (front, back, left, right)

Properties
- Creature name
- Specimen name
- Flock
- Stats
  - Stamina
  - Moves (charges)
  - Mana (rest or hunger): 
    "impersonal supernatural power that can be transmitted or inherited" 
    (polynesian, melanesian, maori)
  - Fortitude
  - Constitution

How is a Geo created/born?
Do Geos share mana?


Naming
- standard: u-  i-  -
- shiny:    a-  -o  -
- sweet:    -u  -i  -

First stage: "young"
Second stage: "maturing"
Third stage: "matured"

If no second stage: skip reference

Geos are inspired by pokemon. There are 12 types:
1. Dragon [-g]
2. Electric [-k]
3. Fire [-f]
4. Force [-p]
5. Ghost [-n]
6. Grass [-s]
7. Ground [-m]
8. Ice [-tk]
9. Poison [-sn]
10. Pyschic [-v]
11. Rock [-k]
12. Water [-z]

**Dragon**
- Dratini -> Dragonair -> Dragonite                 : Darog
- Bagon -> Shelgon -> Salamence                     : Bameg
- Axew -> Fraxure -> Haxorus                        : Afarag

**Electric**
- Pichu -> Pikachu -> Raichu                        : Pitak (mouse)
- Voltorb -> Electrode                              : Velok (pokeball)
- Mareep -> Flaaffy -> Ampharos                     : Mamarok (sheep)
- Raikou (legendary)                                : Rakkuvu (tiger-dog | raijuu)

**Electric-Force**: Zapdos (legendary)              : Zakkopu (thunderbird)
- -dos 2
- Electhor

**Fire**
- Charmander -> Charmeleon -> Charizard             : Tarif (fire lizard)
- Moltres (legendary)                               : Moffenu (phoenix | bennu | huma-slavic firebird | vermillion bird / suzaku or heron)
  - tres 3
  - Sulfura
- Entei (legendary)                                 : Neffemtu (lion-dog | shishi)

**Fire-Force**: Torchic -> Combusken -> Blaziken    : Torzif (fire chicken)
**Fire-Psychic**: Ponyta -> Rapidash                : Paripaf (fire horse)
**Fire-Rock**: Growlithe -> Arcanine                : Garinaf (fire dog)

**Fire | Ice**
- Vulpix -> Ninetales                               : Valtkif (fire|ice fox)

**Force**
- Tyrogue -> Hitmonlee | Hitmonchan | Hitmontop     : Pito-lip|nep|tap (fighter)
- Mienfoo -> Mienshao                               : Minap (mustelid)
- Falinks                                           : Falip (chain)

**Ghost**
- Misdreavus -> Mismagius                           : Midan (ghost child)
- Shuppet -> Banette                                : Sunetan (ghost doll)
- Duskull -> Dusclops -> Dusknoir                   : Duson (grim reaper)

**Ghost-Ground**: Cubone -> Marowak                 : Karo'an (skull lizard)
**Ghost-Poison**: Gastly -> Haunter -> Gengar       : Gasen (ghost gas)

**Grass**
- Bulbasaur -> Ivysaur -> Venusaur                  : Basas (rafflesia frog)
- Oddish -> Gloom -> Vileplume                      : Vodelas (rafflesia)
- Bellsprout -> Weepinbell -> Victreebel            : Belins (pitcher plant)
- Tangela -> Tangrowth                              : Tans (vines)

**Grass-Water**: Lotad -> Lombre -> Ludicolo        : Lobelos (water lily)

**Ground**
- Diglett -> Dugtrio                                : Digom (mole)
- Phanpy -> Donphan                                 : Panim (elephant)
- Absol                                             : Basolam (bai ze | barghest)

**Ground-Rock**
- Geodude -> Graveler -> Golem                      : Gavekm (rock)
- Onix -> Steelix                                   : Sonikm (rock)
- Rhyhorn -> Rhydon                                 : Radom (crystal)

**Ice**
- Snorunt -> Glalie                                 : Sanolitk (yukinko | yuki-onna)
- Cryogonal                                         : Ragotk (snowflake)
- Snom -> Frosmoth                                  : Sanom(otk) (jewel caterpillar | arctic moth)

**Ice-Psychic**
- Jynx                                              : Gantk (ganguro | yuki-onna)
- Articuno (legendary)                              : Ratkizu (roc | simurgh | quetzal or magpie-jay)
  - -uno 1
  - Artikodin
  - One-hit KO (attack damage equal to target's HP, 30% accuracy, increase based on lower level and low HP), Sheer Cold, Mind Read (guaranteed hit for next attack)

**Poison**
- Ekans -> Arbok                                    : Kebosn (snake-cobra)
- Nidoran -> Nidorina -> Nidoqueen                  : Dorinisn -> Doranasn -> Dorsn (rabbit | al-mir'raj)
- Nidoran -> Nidorino -> Nidoking                   : Donirisn -> Donarasn -> Dosnr (rabbit)
- Zubat -> Golbat                                   : Bazosn (bat)
- Venonat -> Venomoth                               : Venosn (gnat-moth)
- Grimer -> Muk                                     : Gamasn (sludge)
- Koffing -> Weezing                                : Kafisn (naval mine | smog)
- Trubbish -> Garbodor                              : Tarubosn (trashbag)

**Poison-Water**: Tentacool -> Tentacruel           : Tezakosn (squid)

**Psychic**
- Abra -> Kadabra -> Alakazam                       : Kabaziv (fox)(edgar cayce -> uri geller -> harry houdini)
- Mime Jr. -> Mr. Mime                              : Mamiv (mime)
- Mewtwo                                            : Mutuv
- Mew                                               : Muv (house cat)

**Rock**
- Aerodactyl                                        : Dekatik (pteradactyl)
- Aron -> Lairon -> Aggron                          : Galarik (bulgasari | triceratops | theropod)
- Nacli -> Naclstack -> Garganacl                   : Nakik (salt crystal rock)

**Water**
- Squirtle -> Wartortle -> Blastoise                : Siriz (turtle)
- Staryu -> Starmie                                 : Saruz (starfish)
- Magikarp -> Gyarados                              : Garamiz (carp -> east dragon)
- Feebas -> Milotic                                 : Milofiz (oarfish)
- Sobble -> Drizzile -> Inteleon                    : Niteloz (chameleon)
- Suicine (legendary)                               : So'ezzu (leopard-dog | kirin)

**Normal**
- Meowth -> Persian                                 : Me'opt (maneki-neko | siamese cat | mountain cat)

**Pokemon**
- Brigon: Brian + dragon
- Krissix: Kristin + phoenix
- Xielen: Lennie + Xiezhi
- Zekiu: Zeke + Pixiu
- Astel: Stella + 
- [Lina]

### Inventory

Items:
- Running shoes
- Bicycle

Pack
- Map
- Food
- Stones (or charges)
- Geos

## 2024-2-27

**move**
walk in tall grass
fish in water
= encounter

dig in cave

**move into object:**

door
- locked: "Door is locked."
  - A: knock
  - B: unlock (use active geo)
- unlocked
  - [move]: enter
  - A: knock
  - B: "The door is already unlocked."


chair
- available: sit
- unavailable: "Seat is taken."

tree
- A: shake
  - [drop]: "[name] got [item(s)]."
  - none: "The tree is empty."
- B: cut (use active geo)

rock
- A: push
  - weight < attack: [move]
  - weight > attack: "Rock is too heavy to move."
- B: break (use active geo)

**activate (press A)**
peum
- question
- interact

appeal
capture
release

**battle**
- attack
- command

**craft | chore-work**
eg. Packing packages

### Inventory
Every peum has a gameboy device
- contacts
- map
- geo-fig index

Bag
- gameboy device
- geos
- items
- food

    Side pockets
    - wand
    - charges

### Game Menu
- keymappings
- sound and volume
- save game
  and dream

  WASD | ArrowUp ArrowLeft ArrowDown ArrowRight
  = player movement
  JK | DS
  = A: confirm (default action), B: cancel (use active geo)
  IO | EW
  = inventory, menu

## 2024-2-26

```js
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

```

When the player activates a character:
1. Check last activation
2. Assess current activity
3. Respond

_Check last activation_:
- Game timestamp
- Action
- Status of action

    Example: Player activates mom while baking
    - Game timestamp: 5 min ago
    - Action: Bake
    - Status of action: false

Player: activate
- door: knock | unlock | open
- peum: buy | sell | trade | lookup | what are you doing?
- geo: battle | appeal | capture

Care for a Geo:

Care for a Peum:

```js
/*  What are characters capable of?

    Speak
    - Statement
    - Answer
    - Follow
    - Lead
    - Bump
    Walk or run
    Swim
    [Dive]
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
    Battle | Train

    Eat or charge
    Sleep (dream or save game)

    Attack (use move)
    Defend (react to move)

    Give (charge)
    Craft (art | item)
    [Cook Clean Laundry...]
    Read
    Buy (item)
    Sell (item)
*/
```

## 2024-2-25

**Opening**
Father:     Are they a boy or a girl?
            INPUT: protagonist_gender
Mother:     A [protagonist_gender], dear.
Father:     What would you like to name them?
Mother:     [protagonist_gender ? 'Luther' : 'Cassia']
            is a good name, I believe.
Father:     What is it?
Mother:     Nothing, love. 
            [protagonist_gender ? 'Luther' : 'Cassia']
            will do.
Father:     Did you hear about Skellington's kid?
            I bet our children will get along.
            Were they a boy or girl?
            INPUT: deuteragonist_gender
Mother:     A [deuteragonist_gender], dear.
Father:     What was their name?
Mother:     Jackie. Jackie Skellington.
Father:     du Lamp also had a kid.
            May be a nuisance in the future.
            Just like their parents.
            Were they a boy or a girl?
            INPUT: antagonist_gender
Mother:     A [antagonist_gender], dear.
Father:     What was their name?
Mother:     You want to know?
Father:     Not really.
Mother:     Genie. Genie du Lamp.
Leech:      Luc! Luc! Emergency at the lab!
Father:     Speaking of nuisance.
Leech:      Congratulations on the baby!
Father:     Bruthilda.
Mother:     I'll be fine, dear. Go.
            Nice to see you, Prof. Leech.
Leech:      Ah thanks. Nice to see you--Bye!

*Transition**
Dream:      Many things change, not only time.
            What a funny thing to find acceptance, it's worth looking for it.
            So. Are you still a [protagonist_gender]?
            INPUT: yes | no: protagonist_second_gender
Dream:      What about your name?
            INPUT: <Luther> | <Cassia> | protagonist_second_name
Dream:      Don't expect things not to change.
            And not all things have answers.
            Here is a question with an answer though.
            Is this part of the story?
            My conversation with you, is this part of the story?
            INPUT: yes | no
Dream:      [
                yes:
                Technically, you are wrong and retrospectively, you could be right.
                I appreciate your consideration, thank you, and hope you will remember me.

                no:
                Technically, you are right and retrospectively, you could be wrong. Perhaps time will persuade you to remember me. If not, it's alright.
            ]
            I am the Dream and I welcome you to Jordan's Game.

_alternative_: player wakes up to gasen and me'opt chattering at them

_option 1_
            Oh. Do you hear them?
_description: chatter of geos_
???:
???:
Dream:      The geos your parents gave you,
            they are calling you.
            VIEW: Gasen and Me'opt
            SELECT Gasen
Dream:      This is a gasen.
            They were given to you by your mom.
            What did you name them?
            INPUT: gasen_name
            SELECT Me'opt
Dream:      This is a me'opt.
            They were given to you by your dad.
            What did you name them?
            INPUT: meopt_name
Dream:      Now. Wake up.

_option 2_
Player wakes up and addresses them as gasen and me'opt.
Prompt: Gasen's name
Prompt: Me'opt's name
_or_ player can change geo names whenever they want
_or_ mom asks player why they're not calling gasen and me'opt by name

```js
const player = {
    first_gender: '',
    second_gender: '',
    first_name: '',
    second_name: ''
}

const friend = {
    gender: '',
    name: '',
    surname: 'Skellington'
}

const rival = {
    gender: '',
    name: '',
    surname: 'du Lamp'
}

const set_name = (peum, name) => {
    const name_setting = peum.isPlayer ?
        peum.first_name ? 'second_name' : 'first_name'
        : 'name'
    peum[name_setting] = name
}

const set_gender = (peum, gender) => {
    const gender_setting = peum.isPlayer ?
        peum.first_gender ? 'second_gender' : 'first_gender'
        : 'gender'
    peum[gender_setting] = gender
}
```
**Note**: This script is only used in the beginning of the game.

## 2024-2-3

Father:
Are they a boy or a girl?
[Set player gender]

Mother:
A ___, dear.

Father:
What do we name them?
[Set player name][Default: Luther | Cassia]

Mother:
___ is a good name, I think.

Father:
Hm? What is it?

Mother:
Nothing, dear. ___ will do.

Father:
Did you hear about Skellington's kid? I bet our children will get along. Were they a boy or a girl?
[Set friend gender]

Mother:
A ___, dear.

Father:
What was their name?

Mother:
Jackie, Jackie Skellington.

Father:
Lamp also had a kid. May be a nuisance in the future. Were they a boy or a girl?
[Set rival gender]

Mother:
A ___, dear.

Father:
What was their name?

Mother:
Genie.

Leech: Luc! Luc! We have an emergency at the lab!

Father: 
Bruthilda.

Mother:
I'm fine, dear. Go. Nice to see you, Leech!

Leech: Nice to see you. Hurry up, Luc!

Transition: Darkness -> Bedroom
Player wakes up to find their me'opt calling at them.

### Notes

Forgot to add ditto.

Every geo has three evolutions, except for legendaries and 

## 2024-2-1

Geo bonding
- What causes a geo to like or obey a trainer?

At the end of an encounter, if a geo decides to appeal to the player, they will follow the player around. The player can have up to two geos following them at a time. The two can either be the player's own geo or an appealing geo. If a player does not claim a geo trying to appeal to them, the geo will either stop following them once they reach the next town or after the player's next battle, whichever is first.

If a geo is trying to appeal to a player when they enter another battle with a wild geo, the following geo will participate as part of the player's team and the player will have until the end of the battle to claim them. Note that if a geo is trying to appeal to a player, they will follow a player's command.

Geo
: standard, shiny, or sweet
: dark or light
: regular or legendary

Every geo has 5 moves they will know by their final evolution, which differ based on their preference of light or dark.
1. 3 moves
2. +1
3. +1
Standard: stronger (more damage)
Shiny: faster (higher speed and evasion, bonus on related defense and attack)
Sweet: more effective (heal more, recover faster, higher tolerance, overcome type disadvantages)

When does a geo evolve and what is the advantage between evolving earlier or later?
- cause:
  - team support: evolves to support team and battles
  - temple stone: forces evolution
- evolve when possible: gain move advantage based on level
  evolve later: gain variant advantage equal to levels skipped

Wild Geo battle (actions)
- train
- use item
- attack
- appeal
- capture
- run

Pe'um or Fig battle (actions)
- command
- attack
- use item
- surrender

Defense styles
- disable
- guard
- heal
- evade
- distract or disturb
- deflect

Attack styles
- impact
- quantity
- speed
- stealth

What can a geo do regarding their trainer?
- run
- follow
- lead
- support
- ignore
- speak

## 2024-1-31

Name of region: Saga Islands
League of Champions

Every city:
- market
- community center
- lab
- school

Undertown
- Essential industries: Tunnel network deliveries and travel
  - blocked off for player (require large geo)
- Secondary industries: Labwork

    - Me'opt
        Meowth -> Persian
        Maneki-neko (Japanese) | Siamese cat -> mountain cat
    - Matodipt
        Ditto
        Putty

Dragon [-g] city => B'kunawbida
- Based on: Bakunawa (Filipino) | Bida (West African: Soninke)
- Essential industries: Politics and labor
- Secondary industries: 
- Temple of the Lord: dragon charges

    - Afarag
        Axew -> Frazure -> Haxorus
        Theropod | Western dragon
    - Bameg
        Bagon -> Shelgon -> Salamence
        Butterfly metamorphosis | Pachycephalosaurus | Shen (Chinese)
    - Darog
        Dratini -> Dragonair -> Dragonite
        Sea serpent | Yeouiju (jewel => korean dragon)

Electric [-k] city => Thorfeld
- Based on: Thor (Norse) | Feldgeister (German)
- Essential industries: Power plant and charging factories
- Secondary industries: Light and fire shows, lights production
- Temple of Lightning: electric charges, Zakko (Lightning Man)

    - Mamarok
        Mareep -> Flaafy -> Ampharos
        Sheep
    - Pitak
        Pichu -> Pikachu -> Raichu
        Mouse | Rat king (German)
    - Velok
        Voltorb -> Electrode
        Battery | Gashapon toy | Apricorn (Pokemon)

    - Rakkuvu
        Raikou [legendary]
        Tiger-dog | Raijuu (Japanese)
    - Zakkopu
        Zapdos [legendary]
        Piasa (Thunderbird: American)

Fire [-f] city => Ifrinix
- Based on: Ifrit (Islamic) | Phoenix
- Essential industries: Smelting and metalwork
- Secondary industries: Metal sculpting, building, and refinement
- Temple of the Wildfire: fire charges, Moffe (Firethrower)

    - Garinaf
        Growlithe -> Arcanine
        Dog | Axehandle hound (American)
    - Paripaf
        Ponyta -> Rapidash
        Horse | Buraq (Islam / Persian)
    - Tarif
        Charmander -> Charmeleon -> Charizard
        Lizard
    - Torzif
        Torchic -> Combusken -> Blaziken
        Chicken | Basan (Japanese)

    - Valtkif
        Vulpix -> Ninetales
        Nine-tailed fox

    - Moffenu
        Moltres [legendary]
        Phoenix | Bennu | Huma/Slavic firebird | Vermillion bird/Suzaku | Heron
    - Neffemtu
        Entei [legendary]
        Shishi (Lion-dog: Chinese)

Ice [-t(k)] city => Aklutiloo
- Based on: Akhlut (Inuit)
- Essential industries: Food preservation
- Secondary industries: Clothing production, ice sculpting
- Temple of the Blizzard: ice charges, Gan (Ice Woman), Sanol (Snow elf)

    - Gantk
        Jynx
        Ganguro (Japanese trend) | Yuki-onna (Japanese)
    - Ragot(k)
        Cryogonal
        Snowflake
    - Sanolitk
        Snorunt -> Glalie
        Yukinko (Japanese)
    - Sanom-otk
        Snom -> Frosmoth
        Jewel caterpillar | Arctic moth

    - Valfit [ice]
        Vulpix -> Ninetales
        Nine-tailed fox

    - Ratkizu
        Articuno [legendary]
        Roc | Simurgh | Quetzal | Magpie-jay

Force [-p] city => Catpamet
- Based on: Cath Palug (Welsh) | Sekhmet (Ancient Egyptian)
- Essential industries: Battle arenas and labor
- Secondary industries: Training (grounds)
- Temple of the Storm: force charges

    - Falip
        Falinks
        Tiny warriors
    - Minap
        Mienfoo -> Mienshao
        Mustelid (weasel)

    - Pito
        Tyrogue
        Martial arts fighter
        -lip -> Hitmonlee
        -nep -> Hitmonchan
        -tap -> Hitmontop

Ghost [-n] city => Wanaveta
- Based on: Wanagi- (Lakota) | Vetala/Baital (Hindu)
- Essential industries: Burial grounds
- Secondary industries: Death totems, coffin making, and formal clothing
- Temple of the Dead: ghost charges, Duso (Grim Reaper)

    - Duson
        Duskull -> Dusclops -> Dusknoir
        Grim Reaper
    - Karo'an
        Cubone -> Marowak
        Ammit (Ancient egyptian)
    - Midan
        Misdreavus -> Mismagius
        The Ring (movie)
    - Sunetan
        Shuppet -> Banette
        Doll

Grass [-s] city => K'damadrake
- Based on: Kodama (Japanese) | Mandrake
- Essential industries: Farming, orchards and tree picking
- Secondary industries: Wine making and cooking, boxing
- Temple of the Quake: grass charges

    - Basas
        Bulbasaur -> Ivysaur -> Venusaur
        Rafflesia frog
    - Belins
        Bellsprout -> Weepinbell -> Victreebel
        Pitcher plant
    - Lobelos
        Lotad -> Lombre -> Ludicolo
        Water lily
    - Tans
        Tangela -> Tangrowth
        Vines
    - Vodelas
        Oddish -> Gloom -> Vileplume
        Rafflesia

Ground [-m] city => Oreawarf
- Based on: Oread (Greek) | Dwarf
- Essential industries: Mining, battery and wire production
- Secondary industries: Technology production
- Temple of the Avalanche: ground charges

    - Basolam
        Absol
        Bai ze (Chinese) | Barghest
    - Digom
        Diglett -> Dugtrio
        Mole
    - Panim
        Phanpy -> Donphan
        Elephant

    [-(s)km]

    - Gaveskm
        Geodude -> Graveler -> Golem
        Igneous rock
    - Radom
        Rhyhorn -> Rhydon
        Crystal
    - Sonikm
        Onix -> Steelix
        Sedimentary rock

Rock [-sk] city => Golemir
- Based on: Golem (Jewish)
- Essential industries: Drilling and mining
- Secondary industries: Rock sculpting, adhesives, and building
- Temple of the Meteor: rock charges, Afara (Basilisk)

    - Dekatisk
        Aerodactyl
        Pteradactyl
    - Galarisk
        Aron -> Lairon -> Aggron
        Bulgasari (Korean) | Triceratops | Theropod
    - Nakisk
        Nacli -> Naclstack -> Garganacl
        Salt crystal rock

Poison [-sn] city => Akrabur
- Based on: Scorpion man (Babylonian)
- Essential industries: Waste processing and disposal
- Secondary industries: Building and assembly, cleaning, and chemical testing
- Temple of the Smog: poison charges, Ezzo (Bomber)

    - Bazosn
        Zubat -> Golbat
        Bat
    - Gasen
        Gastly -> Haunter -> Gengar
        Gas / Air pollution
    - Gamasn
        Grimer -> Muk
        Sludge
    - Kafisn
        Koffing -> Weezing
        Naval mine | Smog
    - Kebosn
        Ekans -> Arbok
        Snake-cobra
    - Tarubosn
        Trubbish -> Garbodor
        Trashbag
    - Tezakosn
        Tentacool -> Tentacruel
        Squid
    - Venosn
        Venonat -> Venomoth
        Gnat-moth

    - Dorsn (fem.) | Dosnr (mas.)
        Nidoran -> Nidorina -> Nidoqueen | Nidoran -> Nidorino -> Nidoking
        Rabbit | Al-mir'raj

Psychic [-v] city => Onisand
- Based on: Oni (Japanese) | Sandman
- Essential industries: Communications
- Secondary industries: Education, training and forecasters
- Temple of the Lost: psychic charges, Mami (Jesterman)

    - Kabaziv
        Abra -> Kadabra -> Alakazam
        Fox | Edgar Cayce -> Uri Geller -> Harry Houdini
    - Mamitov
        Mime Jr -> Mr. Mime
        Mime

    - Muv -> Mutuv
        Mew -> Mewtwo
        House cat

Water [-z] city => Mermada
- Based on: Mermaid
- Essential industries: Shipping, diving, and fishing
- Secondary industries: Netting, boat-building, and ferrying
- Temple of the Flood: water charges, Fali (Chained Men)

    - Garamiz
        Magikarp -> Gyarados
        Carp -> East dragon
    - Milofiz
        Feebas -> Milotic
        Oarfish
    - Niteloz
        Sobble -> Drizzile -> Inteleon
        Chameleon
    - Saruz
        Staryu -> Starmie
        Starfish
    - Siriz
        Squirtle -> Wartortle -> Blastoise
        Turtle

    - So'ezzu
        Suicune [legendary]
        Leopard-dog | Kirin

### Lexicon

Pe'um: A person or humanoid.

Geo: A creature that transitions at will between a living totem and its mobile form. They do not require food or drink, and do not reproduce, instead subsisting on and so gathering around memo (m'm). They have battle stats, abilities, and traits. When they communicate, whether another geo, pe'um or fig, they can only pronounce single consonants and vowels. 

Fig: A being made purely of memo, a charged substance akin to spirit or magic. They often serve a function to nature and while they appear to both geos and pe'um, they rarely engage with them beyond their function. They speak the formal language of geos that geos cannot fully pronounce.

```
a
a'a
e
e'e
i
i'i
o
o'o
u       -u          type; legendary
u'u

b       [be]        
b'b
b'l(n)  [beli(n)]   pitcher plant, pitcher
b'm     [bame]      bipedal dragon, metamorphosis
b's     [basa]      frog
b'z     [bazo]      bat
d       [da]        
d'd
d'g     [digo]      mole
d'k't   [dekati]    winged reptile (pteradactyl)
d'r     [daro]      serpentine dragon
d's     [duso]      Grim Reaper, death
f       [fe]        fire; companion, retriever
f'f
f'l     [fali]      Chained Men, chainlink
f'r     [afara]     Basilisk, western dragon
g       [ga]        dragon;
g'g
g'l'r   [galari]    iron
g'm     [gama]      grime, sludge
g(n)    [ga(n)]     Ice Woman
g'r'm   [garami]    carp
g'r'n   [garina]    dog
g's     [gase]      gas, smoke
g'v     [gave]      igneous/porous rock
k       [ka]        electric;
k'k
k'b     [kebo]      snake-cobra
k'b'z   [kabazi]    fox
k'f     [kafi]      mine-explosive, smog-haze
k'r     [karo]      skull
l       [lo]        
l'b'l   [lobelo]    water lily
m       [mo]        ground;
m'm     [mami]      Jesterman, mirror, copycat
        [memo]      charge (or spirit)
m'd     [mida]      child
m'f     [mofe]      heron
m'f'f   [moffe]     Firethrower
m'l'f   [milofi]    oarfish
m'm't   [mamito]    Jesterman, mirror, copycat
m'm'r   [mamaro]    sheep
m'n     [mina]      weasel
m't     [mato]      shapeshifter
n       [ne]        ghost;
n'n
n'f(m)  [nefe(m)]   lion
n'k     [naki]      salt (crystal)
n't'l   [nitelo]    chameleon
p       [pa]        force;
p'p
p'n     [pani]      elephant
p'r'p   [paripa]    horse
p't     [pita]      mouse
        [pito]      fighter, wrestler
p't'l   [pitoli]    kickboxer
p't'n   [pitone]    boxer
p't't   [pitota]    (capoeira)
r       [ra]        
r'd     [rado]      crystal
r'g     [rago]      snow, snowflake
r'k'k   [rakku]     tiger-dog
r'n     [rona]      lizard
s       [so]        grass;
s's
s'k     []          rock;
s'n     []          poison;
        [sano]      wool, skins
        [soni]      sediment, sedimentary rock
s(l)    [so(l)]
s'n'l   [sanol]     Snow elf
s'n'm   [sanom]     moth
s'n't   [suneta]    doll
s'r     [saru]      starfish
        [siri]      turtle
s'z     [sez]       leopard
t       [ta]        ice;
t't     [tati]      line, chain
t'k     []          ice;
t(n)    [ta(n)]     vine
t'r     [tari]      chicken
t'r'b   [tarubo]    trash, trashbag
t'z'k   [tezako]    squid
v       [ve]        psychic;
v'v
v'd'l   [vodela]    rafflesia
v(l)    [va(l)]     
v'l     [velo]      battery, fruit
v'n     [veno]      gnat, fly
z       [zo]        water;
z'z     [ezzo]      Bomber
z'k     [zako]      
z'k'k   [zakko]     Lightning Man
```

### Character consideration

Memo can equate to life force. Once completely dispelled, a creature dies. Creatures retain memo longer than non-living things. If objectives...rather than objectives, ent years equate to memo left.

Ghost types can directly attack memo.

Stats:
- HP
- Charge | Hunger and thirst
- Power (sleep)
- Spirit => memo
- Attack
- Defense
- Speed
- Evasion
- Level

Dark geos: no defense or support moves
Light geos: no attack moves

Original pokemon:
- conversation: get information, make a trade, engage in battle

What do characters do?
- tend, gather and cook plants
- mix colors
- refine fibers for thread and rope
- mine ores and minerals
- do art: paint, dye, build
- buy and sell goods
- appeal and capture geos
- battle and train geos

What do characters have?
- clothing
- house
- geos
- family members

Special characters:
- Psychotherapist
- Geo linguist

### Notes

Every character has a routine and objectives. As they follow routines, they check if they have completed the first objective in their objectives. Once an objective has been reached, it is removed from their objectives. If a character has no more objectives, they die. Objectives equate to years. The older a character is, the less objectives they have.

Game loop:
- List every character in player area
- Update every character: character.do()
- Update player with input

Reactions:
- routine-based
- stats-based
- memory-based

Actions:
- speak
- walk
- run
- check
- activate
  - ent(fig, peum, geo): "What are you doing?"
  - nent(obj): use, open-close, knock, up-down

Micro-actions:
- identify
- scan
- spot

Processes:
- navigate
- battle
- seek geos
- make something
- read something

Ex. Lead player outside for geo battle
- Process components: path, walk, door
- Options: follow edges or next open space
- Options: check|navigate and move, move and check|navigate

Geos can speak
but can become inactive (totem form)

## 2024-1-30

Research indicates the collective results of either experiments and/or observations. If a player were to conduct research, they would need a manner of taking notes, otherwise they are likely to repeat themselves. So research is not a viable component of the game.

In the original game, Pokemon encourages the player to catch every pokemon to complete the pokedex with Prof. Oak, the instigator, being a researcher and supposedly using the player's results for research.

Therapist
eg. "Looks like you've got a stubborn geo. You will not be able to train them until they learn that winning is more important than their pride in winning. That means they need to suffer a devastating loss. I suggest going against a geo or peum you know you can't win against and lead your team to try their best. But be careful. If you wait for such an opponent, your geo will not associate winning and losing with the battle, they will associate it with you because you have not battled with them in a while."
Stubborn geo
- mem[battle: true, battle:true, battle:true,...]
- do not listen

Geos can choose their own moves to use
- prefer light: no attack moves
- prefer dark: no support or defense moves
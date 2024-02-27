const syst = document.querySelector('.syst')
const time = document.querySelector('.time')
const ipt = document.querySelector('.ipt')

const addLine = (text, isPlayer = false, isSpoken = false) => {
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

function init(...args) {
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
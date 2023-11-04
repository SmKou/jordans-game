import './style.css'
import init from './assets/render'

const game = init()
game.load()
game.run()

document.addEventListener('pointerdown', e => {
    const id = e.target.id
    const text = e.target.textContent

    if (id === 'pause')
        game.pause()
    
    switch (id) {
        case 'up':
            game.move({ dx: 0, dy: -1 })
            break
    }
})
document.addEventListener('pointerup', e => console.log(e))
document.addEventListener('keydown', e => console.log(e))
document.addEventListener('keyup', e => console.log(e))

window.onresize = () => game.resize()
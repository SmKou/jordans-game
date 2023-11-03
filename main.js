import './style.css'

const app = document.getElementById('app')
app.width = app.offsetWidth * 2
app.height = app.offsetHeight * 2

const width = app.width
const height = app.height

const tile = 36

const player = {
    pos: {
        x: width / 2,
        y: height / 2
    },
    move: []
}

const ctx = app.getContext('2d')

const draw = () => {
    ctx.reset()

    ctx.fillStyle = '#000'
    ctx.beginPath()
    ctx.moveTo(player.pos.x - tile / 2, player.pos.y + tile / 2)
    ctx.lineTo(player.pos.x, player.pos.y - tile)
    ctx.lineTo(player.pos.x + tile / 2, player.pos.y + tile / 2)
    ctx.closePath()
    ctx.fill()

    ctx.fillStyle = '#fff'
    ctx.strokeStyle = '#000'
    ctx.beginPath()
    ctx.arc(player.pos.x, player.pos.y - tile, tile / 2, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.stroke()
    ctx.fill()

    if (player.move.length) {
        const { dx, dy } = player.move.shift()
        player.pos.x += dx
        player.pos.y += dy
    }
}

document.getElementById('up').addEventListener('mousedown', () => {
    player.move.push({ dx: 0, dy: -tile / 2 })
    draw()
})
document.getElementById('down').addEventListener('mousedown', () => {
    if (player.pos.y + tile < height)
        player.pos.y += tile / 2
})
document.getElementById('left').addEventListener('mousedown', () => {
    if (player.pos.x - tile / 2 > 0)
        player.pos.x -= tile / 2
})
document.getElementById('right').addEventListener('mousedown', () => {
    if (player.pos.x + tile / 2 < width)
        player.pos.x += tile / 2
})

const drawing = requestAnimationFrame(draw)

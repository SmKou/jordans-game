const init = ({ width, height } = {}) => {
    let ctx, screen, player, running, isRunning, timeout;

    isRunning = true

    const move = function(params) { player.move.push({ 
        dx: params.dx * screen.tile, 
        dy: params.dy * screen.tile
    }) }

    const load = function() {
        const cvs = document.getElementById('app')
        cvs.width = cvs.offsetWidth * 2 || window.innerWidth
        cvs.height = cvs.offsetHeight * 2 || window.innerHeight

        if (!cvs.getContext)
            throw new Error('Browser does not support rendering')

        ctx = cvs.getContext('2d')
        screen = {
            width: cvs.width,
            height: cvs.height,
            block: 36,
            tile: 36 / 2
        }
        player = {
            pos: { 
                x: screen.width / 2, 
                y: screen.height / 2 
            },
            move: []
        }
    }

    const render = ({ block, tile } = screen) => {
        ctx.reset()

        ctx.fillStyle = '#000'
        ctx.beginPath()
        ctx.moveTo(player.pos.x - tile, player.pos.y + tile)
        ctx.lineTo(player.pos.x, player.pos.y - block)
        ctx.lineTo(player.pos.x + tile, player.pos.y + tile)
        ctx.closePath()
        ctx.fill()

        ctx.fillStyle = '#fff'
        ctx.strokeStyle = '#000'
        ctx.beginPath()
        ctx.arc(player.pos.x, player.pos.y - block, tile, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()

        if (player.move.length) {
            const { dx, dy } = player.move.shift()
            player.pos.x += dx
            player.pos.y += dy
        }
    }

    const draw = () => {
        console.log('draw', player.pos.x, player.pos.y)
        render()
        if (isRunning)
            requestAnimationFrame(draw)
    }

    const pause = function() { 
        isRunning = false
        cancelAnimationFrame(running) 
    }

    const run = function() { 
        running = requestAnimationFrame(draw)
    }

    const resize = (fn = run) => {
        if(!timeout)
            clearTimeout(timeout)

        timeout = setTimeout(() => fn(), 400)
    }

    return { move, load, pause, run, resize }
}

export default init
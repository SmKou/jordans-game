const drawBackground = ({ ctx, width, height }) => {
    ctx.fillStyle = `rgb(${app.settings.getBg()})`
    ctx.fillRect(0, 0, width, height)
}

const complexLattice = ({ ctx, tile, x, y }) => {
    const quart = Math.floor(tile / 4)

    ctx.strokeStyle = '#000'

    for (let i = 0; i < 16; ++i) {
        const x_i = i % 4 * 4 + x
        const y_i = Math.floor(i / 4) * 4 + y
        ctx.beginPath()
        ctx.moveTo(x_i, y_i)
        ctx.lineTo(x_i + quart, y_i + quart)
        ctx.moveTo(x_i + quart, y_i)
        ctx.lineTo(x_i, y_i + quart)
        ctx.moveTo(x_i, y_i)
        ctx.closePath()
        ctx.stroke()
    }
}

const gesso = view => {

    const draw = () => {
        drawBackground(view)

        const { ctx, tile } = view

        for (let i = 1; i < view.width; i += 16)
            for (let j = 1; j < view.height; j += 16)
                complexLattice({ ctx, tile, x: i, y: j })
    }

    const redraw = () => {
        draw()
        if (!app.state.isTyping && !app.state.isMenu)
            requestAnimationFrame(draw)
    }

    return redraw
}
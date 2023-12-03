const drawBackground = ({ ctx, width, height }) => {
    ctx.fillStyle = `rgb(${app.settings.getBg()})`
    ctx.fillRect(0, 0, width, height)
}

const player = ({ ctx, tile, x, y }) => {
    ctx.fillStyle = '#f00'
    ctx.fillRect(x, y, tile, tile)
}

const getPlayer = () => app.settings.player.win

const gesso = view => {

    const draw = () => {
        drawBackground(view)

        const { ctx, tile } = view
        const { x, y } = getPlayer()
        player({ ctx, tile, x, y })
    }

    const redraw = () => {
        draw()

        if (!app.state.isTyping && !app.state.isMenu)
            requestAnimationFrame(redraw)
    }

    return redraw
}
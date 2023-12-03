const drawBackground = ({ ctx, width, height }) => {
    ctx.fillStyle = `rgb(${app.settings.getBg()})`
    ctx.fillRect(0, 0, width, height)
}

const gesso = view => {

    const draw = () => {
        drawBackground(view)
    }

    const redraw = () => {
        draw()
        if (!app.state.isTyping && !app.state.isMenu)
            requestAnimationFrame(draw)
    }

    return redraw
}
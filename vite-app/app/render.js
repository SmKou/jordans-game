const bg = {
    night: [39,51,89],
    evening: [60,54,88],
    sunset: {
        light: [237,95,75],
        dark: [102,57,86]
    },
    sunrise: [253,191,104],
    morning: [254,216,145],
    day: {
        light: [255,252,237],
        dark: [255,232,192]
    }
}

const env = {
    timeofday: ['day', 'light']
}

const getBg = (tod = env.timeofday.slice(), node = bg) => {
    let shift
    while(shift = tod.shift())
        node = node[shift]
    return node
}

const drawBackground = ({ ctx, width, height }) => {
    ctx.fillStyle = `rgb(${getBg().join(',')})`
    ctx.fillRect(0, 0, width, height)
}

const draw = (view = app.settings) => {
    drawBackground(view)

    if (!app.state.isTyping && !app.state.isMenu)
        requestAnimationFrame(draw)
}

window.onload = () => {
    load()
    draw()
}